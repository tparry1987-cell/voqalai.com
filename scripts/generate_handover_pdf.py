#!/usr/bin/env python3
"""Generate the client website go-live / domain handover PDF.

Produces a branded, client-friendly handover document explaining the DNS
records that must be in place for a Vercel-hosted site, and the short list of
things the client needs to send back so the handover is as simple as possible.

Domain values are intentionally placeholders ([yournewdomain.com]) so they can
be find-and-replaced before sending.
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, ListFlowable, ListItem, KeepTogether,
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

# ---------------------------------------------------------------- brand palette
TERRA      = colors.HexColor("#C4785A")   # primary terracotta / copper
TERRA_LT   = colors.HexColor("#D4896B")   # lighter terracotta
NAVY       = colors.HexColor("#1A1A2E")   # near-black navy
CREAM      = colors.HexColor("#FAF8F5")   # page-warm background
CREAM_2    = colors.HexColor("#F3F0EB")   # panel background
INK        = colors.HexColor("#2B2B33")   # body text
MUTE       = colors.HexColor("#6A6A78")   # muted grey
LINE       = colors.HexColor("#E3DCD3")   # hairline
CODE_BG    = colors.HexColor("#1F1F2E")   # code block background
CODE_FG    = colors.HexColor("#F4ECE6")   # code block text

PAGE_W, PAGE_H = A4
MARGIN = 18 * mm

# ---------------------------------------------------------------- styles
styles = getSampleStyleSheet()

def S(name, **kw):
    base = kw.pop("parent", styles["Normal"])
    return ParagraphStyle(name, parent=base, **kw)

st_kicker = S("kicker", fontName="Helvetica-Bold", fontSize=8.5, textColor=TERRA,
              leading=12, spaceAfter=2, tracking=2)
st_h1     = S("h1", fontName="Helvetica-Bold", fontSize=23, textColor=NAVY,
              leading=27, spaceAfter=4)
st_sub    = S("sub", fontName="Helvetica", fontSize=11, textColor=MUTE, leading=16)
st_h2     = S("h2", fontName="Helvetica-Bold", fontSize=13.5, textColor=NAVY,
              leading=18, spaceBefore=4, spaceAfter=6)
st_h3     = S("h3", fontName="Helvetica-Bold", fontSize=10.5, textColor=TERRA,
              leading=14, spaceBefore=6, spaceAfter=3)
st_body   = S("body", fontName="Helvetica", fontSize=10, textColor=INK,
              leading=15.5, spaceAfter=7)
st_li     = S("li", fontName="Helvetica", fontSize=10, textColor=INK, leading=15)
st_li_b   = S("lib", fontName="Helvetica-Bold", fontSize=10, textColor=INK, leading=15)
st_small  = S("small", fontName="Helvetica", fontSize=8.5, textColor=MUTE, leading=12)
st_cell   = S("cell", fontName="Helvetica", fontSize=9, textColor=INK, leading=13)
st_cell_b = S("cellb", fontName="Helvetica-Bold", fontSize=9, textColor=NAVY, leading=13)
st_mono   = S("mono", fontName="Courier-Bold", fontSize=9, textColor=NAVY, leading=13)
st_code   = S("code", fontName="Courier", fontSize=9, textColor=CODE_FG, leading=14)
st_note_h = S("noteh", fontName="Helvetica-Bold", fontSize=9.5, textColor=NAVY, leading=13)
st_note   = S("note", fontName="Helvetica", fontSize=9.5, textColor=INK, leading=14)
st_foot   = S("foot", fontName="Helvetica", fontSize=8, textColor=MUTE, leading=11)


# ---------------------------------------------------------------- helpers
def rule(color=LINE, thickness=0.8, space_before=2, space_after=8):
    return HRFlowable(width="100%", thickness=thickness, color=color,
                      spaceBefore=space_before, spaceAfter=space_after)


def bullets(items, style=st_li, bullet_color=TERRA, leftIndent=14):
    flow = []
    for it in items:
        if isinstance(it, tuple):
            txt = f"<b>{it[0]}</b> {it[1]}"
        else:
            txt = it
        flow.append(ListItem(Paragraph(txt, style), leftIndent=2,
                             value=None, bulletColor=bullet_color))
    return ListFlowable(flow, bulletType="bullet", start="•",
                        bulletColor=bullet_color, leftIndent=leftIndent,
                        bulletFontSize=9, spaceBefore=0, spaceAfter=2)


def numbered(items, style=st_li):
    flow = [ListItem(Paragraph(t, style), leftIndent=4) for t in items]
    return ListFlowable(flow, bulletType="1", leftIndent=16,
                        bulletFontName="Helvetica-Bold", bulletColor=TERRA,
                        spaceBefore=0, spaceAfter=2)


def panel(flowables, bg=CREAM_2, border=LINE, pad=10, accent=None):
    """Wrap flowables in a soft rounded-feel panel via a 1-cell table."""
    inner = Table([[flowables]], colWidths=[PAGE_W - 2 * MARGIN - (4 if accent else 0)])
    cmds = [
        ("BACKGROUND", (0, 0), (-1, -1), bg),
        ("BOX", (0, 0), (-1, -1), 0.8, border),
        ("LEFTPADDING", (0, 0), (-1, -1), pad + (6 if accent else 0)),
        ("RIGHTPADDING", (0, 0), (-1, -1), pad),
        ("TOPPADDING", (0, 0), (-1, -1), pad),
        ("BOTTOMPADDING", (0, 0), (-1, -1), pad),
    ]
    if accent:
        cmds.append(("LINEBEFORE", (0, 0), (0, -1), 4, accent))
    inner.setStyle(TableStyle(cmds))
    return inner


def section_number(num, title):
    """A numbered section header: terracotta chip + navy title."""
    chip = Table([[Paragraph(f'<font color="#FFFFFF"><b>{num}</b></font>', st_note_h)]],
                 colWidths=[9 * mm], rowHeights=[9 * mm])
    chip.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), TERRA),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    row = Table([[chip, Paragraph(title, st_h2)]],
                colWidths=[12 * mm, PAGE_W - 2 * MARGIN - 12 * mm])
    row.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    return row


# ---------------------------------------------------------------- page chrome
def on_page(canvas, doc):
    canvas.saveState()
    # warm page background
    canvas.setFillColor(CREAM)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    # top accent bar
    canvas.setFillColor(TERRA)
    canvas.rect(0, PAGE_H - 6, PAGE_W, 6, fill=1, stroke=0)
    # footer
    canvas.setFillColor(MUTE)
    canvas.setFont("Helvetica", 8)
    canvas.drawString(MARGIN, 12 * mm, "Voqal  ·  Website Go-Live & Domain Handover")
    canvas.drawRightString(PAGE_W - MARGIN, 12 * mm, f"Page {doc.page}")
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.6)
    canvas.line(MARGIN, 15 * mm, PAGE_W - MARGIN, 15 * mm)
    canvas.restoreState()


def build(path):
    doc = BaseDocTemplate(
        path, pagesize=A4,
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=22 * mm, bottomMargin=20 * mm,
        title="Website Go-Live & Domain Handover",
        author="Voqal",
    )
    frame = Frame(MARGIN, 18 * mm, PAGE_W - 2 * MARGIN, PAGE_H - 40 * mm, id="main")
    doc.addPageTemplates([PageTemplate(id="all", frames=[frame], onPage=on_page)])

    e = []  # story

    # ============================================================ COVER HEADER
    e.append(Paragraph("PREPARED BY VOQAL", st_kicker))
    e.append(Paragraph("Website Go-Live &amp; Domain Handover", st_h1))
    e.append(Spacer(1, 3))
    e.append(Paragraph(
        "Everything needed to point your new domain at the live website, and the "
        "short checklist of details to send back so we can confirm it’s all correct.",
        st_sub))
    e.append(Spacer(1, 8))

    def _meta(label, value):
        return Paragraph(
            f'<font color="#C9B6A8" size="7.5">{label}</font><br/>'
            f'<font color="#FFFFFF"><b>{value}</b></font>', st_cell)
    meta = Table([[
        _meta("PREPARED FOR", "Adrian Wilkinson"),
        _meta("HOSTED ON", "Vercel"),
        _meta("NEW DOMAIN", "[yournewdomain.com]"),
        _meta("DATE", "31 May 2026"),
    ]], colWidths=[(PAGE_W - 2 * MARGIN) / 4.0] * 4)
    meta.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, -1), colors.white),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
        ("LINEAFTER", (0, 0), (-2, -1), 0.6, colors.HexColor("#3A3A52")),
    ]))
    # override text colours inside navy box
    e.append(_white_meta(meta))
    e.append(Spacer(1, 14))

    # ============================================================ OVERVIEW
    e.append(Paragraph("What’s happening", st_h2))
    e.append(rule())
    e.append(Paragraph(
        "Your website is built and hosted on <b>Vercel</b>. We’re moving it onto your "
        "new domain, <b>[yournewdomain.com]</b>. For the site to appear on that address, "
        "your domain needs two small <b>DNS records</b> pointing at Vercel. You add these "
        "once at the company where you bought the domain (your “registrar”), and Vercel "
        "handles the rest — including the secure padlock (SSL certificate) automatically.",
        st_body))
    e.append(Paragraph(
        "After the records are saved, the change can take <b>anywhere up to 24–48 hours</b> "
        "to fully roll out across the internet (this is called <i>DNS propagation</i>). "
        "It’s often much quicker, but please don’t worry if it isn’t instant everywhere.",
        st_body))

    tl = panel([
        Paragraph("The three-step picture", st_note_h),
        Spacer(1, 4),
        Paragraph("①&nbsp; You add 2 DNS records at your registrar &nbsp;→&nbsp; "
                  "②&nbsp; We verify the domain inside Vercel &nbsp;→&nbsp; "
                  "③&nbsp; Site goes live with secure HTTPS, automatically.", st_note),
    ], bg=CREAM_2, accent=TERRA)
    e.append(tl)
    e.append(Spacer(1, 14))

    # ============================================================ SECTION 1: DNS
    e.append(section_number("1", "The DNS records to add"))
    e.append(rule())
    e.append(Paragraph(
        "Add the following two records in your domain’s DNS settings. These are the "
        "standard values Vercel uses for every site it hosts.", st_body))

    st_cell_w = S("cellw", fontName="Helvetica-Bold", fontSize=9,
                  textColor=colors.white, leading=13)
    head = [Paragraph(t, st_cell_w) for t in
            ["Type", "Name / Host", "Value / Points to", "TTL"]]
    rows = [
        head,
        [Paragraph("A", st_mono),
         Paragraph("@&nbsp;&nbsp;<font size='7' color='#6A6A78'>(the root domain)</font>", st_cell),
         Paragraph("76.76.21.21", st_mono),
         Paragraph("Auto / 3600", st_cell)],
        [Paragraph("CNAME", st_mono),
         Paragraph("www", st_cell),
         Paragraph("cname.vercel-dns.com", st_mono),
         Paragraph("Auto / 3600", st_cell)],
    ]
    tbl = Table(rows, colWidths=[20 * mm, 48 * mm, 70 * mm, 36 * mm])
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("BACKGROUND", (0, 1), (-1, 1), colors.white),
        ("BACKGROUND", (0, 2), (-1, 2), CREAM_2),
        ("GRID", (0, 0), (-1, -1), 0.6, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    e.append(_white_header(tbl))
    e.append(Spacer(1, 8))

    e.append(Paragraph("A couple of notes on the table", st_h3))
    e.append(bullets([
        ("“@” / root:", "many registrars show the root domain as <b>@</b>, "
         "or as a blank box, or as your full domain name — they all mean the same thing."),
        ("Don’t add http:// or a trailing slash", "to the values — just the plain "
         "text shown above (e.g. <font face='Courier'>76.76.21.21</font>)."),
        ("TTL", "(time to live) can be left on the default/automatic setting — "
         "a lower value just means changes refresh a little faster."),
    ]))
    e.append(Spacer(1, 6))

    warn = panel([
        Paragraph('<font color="#C4785A">!&nbsp;&nbsp;</font>IMPORTANT — remove conflicting records', st_note_h),
        Spacer(1, 3),
        Paragraph(
            "If there are <b>existing A records on “@”</b> or an <b>existing CNAME / record "
            "on “www”</b> pointing at an old host (your previous site, a “parked” page, a "
            "site-builder, etc.), please <b>delete those old ones</b> so they don’t fight "
            "with the new records. Two A records on the root pointing to different places "
            "will make the site load inconsistently.", st_note),
    ], bg=colors.HexColor("#FBF0EA"), border=TERRA_LT, accent=TERRA)
    e.append(warn)
    e.append(Spacer(1, 8))

    keepmail = panel([
        Paragraph("Don’t touch your email records", st_note_h),
        Spacer(1, 3),
        Paragraph(
            "If you use email on this domain (e.g. <i>you@[yournewdomain.com]</i>), leave any "
            "<b>MX records</b> and related entries (SPF / TXT / DKIM) exactly as they are. "
            "We’re only adding/adjusting the website records (A and www). If you’re not sure, "
            "send us a screenshot of the full DNS list <i>before</i> changing anything and "
            "we’ll point out precisely what to keep.", st_note),
    ], bg=CREAM_2, accent=TERRA_LT)
    e.append(keepmail)
    e.append(Spacer(1, 12))

    # ============================================================ SECTION 2: HOW
    e.append(section_number("2", "How to add them (any registrar)"))
    e.append(rule())
    e.append(Paragraph(
        "The wording differs slightly between providers (GoDaddy, Namecheap, 123-Reg, "
        "Cloudflare, etc.), but the path is essentially the same:", st_body))
    e.append(numbered([
        "Log in to the company where you <b>bought / registered the domain</b>.",
        "Find <b>My Domains</b> (or “Domain List”), and open <b>[yournewdomain.com]</b>.",
        "Open <b>DNS</b> / <b>DNS Management</b> / <b>Advanced DNS</b> / <b>Manage DNS</b>.",
        "Add the <b>A record</b> from the table above (Name <font face='Courier'>@</font>, "
        "Value <font face='Courier'>76.76.21.21</font>).",
        "Add the <b>CNAME record</b> (Name <font face='Courier'>www</font>, "
        "Value <font face='Courier'>cname.vercel-dns.com</font>).",
        "<b>Save</b>. Remove any old conflicting A/www records (see the warning above).",
    ]))
    e.append(Spacer(1, 4))
    e.append(panel([
        Paragraph("Using Cloudflare?", st_note_h),
        Spacer(1, 2),
        Paragraph("Set both records’ proxy status to <b>“DNS only” (grey cloud, not orange)</b> "
                  "so Vercel can issue the SSL certificate. You can re-enable the proxy later "
                  "if needed.", st_note),
    ], bg=CREAM_2, accent=TERRA_LT))
    e.append(Spacer(1, 12))

    # ============================================================ SECTION 3: SEND BACK
    e.append(section_number("3", "What to send back to me"))
    e.append(rule())
    e.append(Paragraph(
        "To make this as simple as possible, once you’ve saved the records just send me the "
        "following. With these I can verify the domain inside Vercel and confirm the site is "
        "pointing correctly — you won’t need to do anything technical beyond this.", st_body))

    checklist = [
        ("The exact domain name",
         "confirmed spelling, e.g. <i>[yournewdomain.com]</i> — and whether you want the "
         "<b>www</b> or the <b>non-www</b> version to be the main address."),
        ("A screenshot of your DNS records",
         "the page showing the A and www/CNAME records after saving. This lets me confirm "
         "the values are exactly right."),
        ("Your domain registrar name",
         "who you bought the domain from (GoDaddy, Namecheap, 123-Reg, etc.) — handy if "
         "anything needs adjusting."),
        ("Confirmation about email",
         "let me know if you use email on this domain, so we protect those records."),
    ]
    items = []
    for h, b in checklist:
        items.append(Paragraph(
            f'<font color="#C4785A"><b>&#187;&nbsp;&nbsp;</b></font><b>{h}</b><br/>'
            f'<font color="#6A6A78">&nbsp;&nbsp;&nbsp;&nbsp;</font>{b}', st_li))
        items.append(Spacer(1, 5))
    e.append(panel(items, bg=colors.white, accent=TERRA))
    e.append(Spacer(1, 8))

    e.append(Paragraph("If you’d rather I just do it all for you", st_h3))
    e.append(Paragraph(
        "Two easy options instead of adding records yourself:", st_body))
    e.append(bullets([
        ("Add me to your DNS:", "most registrars let you invite a “delegate” or extra user "
         "to the domain’s DNS only (not billing). Send an invite and I’ll add the records."),
        ("Or share a temporary login:", "if your registrar doesn’t support delegate access, "
         "you can share a login securely and I’ll set everything up, then you change the "
         "password afterwards."),
    ]))
    e.append(Spacer(1, 10))

    # ============================================================ SECTION 4: AFTER
    e.append(section_number("4", "After it’s pointed — what to expect"))
    e.append(rule())
    e.append(bullets([
        ("Propagation up to 24–48 hours:", "the site may appear for you before it appears "
         "for someone else — that’s normal while the change rolls out."),
        ("Secure padlock (HTTPS):", "Vercel issues the SSL certificate automatically once the "
         "domain is verified. A brief “not secure” warning during setup is expected and clears "
         "on its own."),
        ("Both www and non-www will work:", "visitors typing either version will land on the "
         "site, redirecting to your chosen main address."),
        ("How to check:", "open the site in a <b>private/incognito window</b>, or test on "
         "mobile data (not wifi), to avoid your browser showing an old cached version."),
    ]))
    e.append(Spacer(1, 8))

    e.append(Paragraph("Quick troubleshooting", st_h3))
    qt = Table([
        [Paragraph("Site not showing yet", st_cell_b),
         Paragraph("Most likely still propagating — give it a few hours. Test in incognito "
                   "or on mobile data.", st_cell)],
        [Paragraph("“Invalid configuration” in Vercel", st_cell_b),
         Paragraph("Usually an old A/www record still in place. Remove conflicting records.", st_cell)],
        [Paragraph("No padlock / “not secure”", st_cell_b),
         Paragraph("Certificate is still being issued — clears automatically once DNS resolves.", st_cell)],
        [Paragraph("Email stopped working", st_cell_b),
         Paragraph("An MX/TXT record was likely changed. Send a screenshot and we’ll restore it.", st_cell)],
    ], colWidths=[52 * mm, PAGE_W - 2 * MARGIN - 52 * mm])
    qt.setStyle(TableStyle([
        ("GRID", (0, 0), (-1, -1), 0.6, LINE),
        ("BACKGROUND", (0, 0), (0, -1), CREAM_2),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    e.append(qt)
    e.append(Spacer(1, 14))

    # ============================================================ CONTACT
    contact = Table([[Paragraph(
        '<font color="#FFFFFF"><b>Any questions, just send them over.</b></font><br/>'
        '<font color="#E9D9CF" size="9">Send your checklist items (Section 3) to me directly '
        'and I’ll confirm the moment the site is verified and live.</font>', st_note)]],
        colWidths=[PAGE_W - 2 * MARGIN])
    contact.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("LEFTPADDING", (0, 0), (-1, -1), 14),
        ("RIGHTPADDING", (0, 0), (-1, -1), 14),
        ("TOPPADDING", (0, 0), (-1, -1), 12),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
        ("LINEBEFORE", (0, 0), (0, -1), 4, TERRA),
    ]))
    e.append(contact)

    doc.build(e)


# --- tiny wrappers so header/meta text renders white on navy backgrounds ------
def _white_meta(tbl):
    return tbl

def _white_header(tbl):
    return tbl


if __name__ == "__main__":
    import sys
    out = sys.argv[1] if len(sys.argv) > 1 else "Website-Handover-Adrian-Wilkinson.pdf"
    build(out)
    print("Wrote", out)
