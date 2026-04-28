import type { IndustryData } from "@/components/IndustryLanding";

export const dental: IndustryData = {
  slug: "ai-receptionist-dental-practices",
  industryName: "Dental Practices",
  industryNameLower: "dental practice",
  pluralNoun: "dental practices",
  heroAccent: "dental practices.",
  metaTitle: "AI Receptionist for Dental Practices UK | Voqal AI",
  metaDescription:
    "AI receptionist for UK dental practices. 24/7 booking, no-show reminders, NHS & private enquiries handled instantly. From £197/month.",
  intro:
    "A voice agent built for dentistry. Books and reschedules check-ups, screens private vs NHS enquiries, sends confirmation reminders to cut no-shows, and routes urgent dental pain to the right clinician.",
  problem:
    "Dental front desks are stretched between patients in chair, surgery prep, and a phone that never stops. PATLive (2023) found 80% of voicemail callers will not leave a message — that is a new patient walking to the next practice on Google Maps. With UK dental waiting lists at record highs, every missed enquiry costs a lifetime-value patient.",
  benefits: [
    {
      title: "Zero missed new-patient enquiries",
      body: "Every ring picked up in under two seconds, 24/7. Out-of-hours, lunch cover, and overflow during the morning rush — captured and booked, not lost to voicemail.",
    },
    {
      title: "Cuts no-shows with automatic confirmations",
      body: "Confirms the appointment, offers a reschedule link, and lets patients move slots without tying up your team. No-show rates drop because patients aren’t ignoring a phone call — they’re engaging with a quick conversation.",
    },
    {
      title: "Trained on your treatments and pricing",
      body: "Knows your hygienist slots, Invisalign price, implants enquiry process, NHS vs private split, and whether you’re accepting new patients today. No generic call-centre script.",
    },
    {
      title: "GDPR-safe by design",
      body: "Voqal AI Ltd is UK-registered (Companies House 17080303). Calls are encrypted in transit and at rest, processed under UK GDPR and the Data Protection Act 2018, with no patient data used to train external models.",
    },
  ],
  useCases: [
    { title: "New patient registrations", body: "Captures name, contact details, NHS or private preference, and books a first consultation directly into your calendar." },
    { title: "Routine bookings & reschedules", body: "Check-ups, hygienist appointments, follow-ups — booked, moved, or cancelled in a single call." },
    { title: "Emergency triage", body: "Detects urgent dental pain or trauma and routes the call to your duty clinician or out-of-hours line straight away." },
    { title: "Treatment FAQs", body: "Answers questions on whitening, Invisalign, implants, sedation, and pricing using your practice’s own information." },
  ],
  evidence: [
    { stat: "80%", label: "Of voicemail callers won’t leave a message (PATLive, 2023)" },
    { stat: "67%", label: "Of customers hang up when they can’t reach a real person (Forbes, 2023)" },
    { stat: "21×", label: "More likely to convert when answered within 5 mins (MIT/InsideSales.com)" },
    { stat: "24/7", label: "Coverage — no lunch breaks, no closed bank holidays" },
  ],
  faqs: [
    { q: "Will it integrate with my dental practice management software?", a: "Yes. We integrate with Software of Excellence, Dentally, iSmile, and any system that supports Google Calendar, Outlook, Cal.com, or webhook booking. We confirm the integration during your free demo." },
    { q: "Can it handle NHS and private patient enquiries differently?", a: "Yes. The agent screens by enquiry type, follows your NHS list rules (open, closed, waiting list), and routes private enquiries to the appropriate consultation pathway." },
    { q: "How does it handle dental emergencies?", a: "We build a triage flow with you. If a caller mentions symptoms like severe pain, swelling, trauma, or knocked-out teeth, the agent escalates immediately — either transferring to your duty clinician, the on-call dentist, or directing to NHS 111 out-of-hours per your protocol." },
    { q: "Is patient data handled in line with UK GDPR?", a: "Yes. Voqal AI Ltd is registered in England & Wales (Companies House No. 17080303). All call data is encrypted in transit and at rest. We process data under UK GDPR and the Data Protection Act 2018 and never use patient data to train external models." },
    { q: "How quickly can we go live?", a: "Personalised demo within 24 hours of your enquiry. Full deployment typically a few days, with the technical phone-forwarding step taking under 10 minutes." },
  ],
};

export const law: IndustryData = {
  slug: "ai-receptionist-law-firms",
  industryName: "Law Firms",
  industryNameLower: "law firm",
  pluralNoun: "law firms",
  heroAccent: "law firms.",
  metaTitle: "AI Receptionist for Law Firms UK | Voqal AI",
  metaDescription:
    "AI receptionist for UK solicitors and law firms. Qualifies enquiries by case type, books consultations, and protects fee-earner time. From £197/month.",
  intro:
    "A voice agent that talks like your front-of-house, not a chatbot. Triages enquiries by case type, captures conflict-check details, books consultations into the right fee-earner’s diary, and never lets a billable lead bounce to voicemail.",
  problem:
    "Fee earners can’t answer the phone — they’re in court, drafting, or with a client. Yet the next big instruction is on the line right now. Forbes (2023) found 67% of callers hang up when they can’t reach a real person, and MIT research shows leads are 21× more likely to convert when contacted within five minutes. For law firms, every dropped call is a panel referral going to a competitor.",
  benefits: [
    {
      title: "Qualifies by case type before reaching a fee earner",
      body: "Captures matter type — family, conveyancing, employment, personal injury, wills, commercial — then gathers the right intake details so paralegals or fee earners pick up a triaged enquiry, not a cold call.",
    },
    {
      title: "Conflict-check ready",
      body: "Collects names of all parties at intake so your conflict checks can run before the consultation is booked. Faster onboarding, fewer last-minute reschedules.",
    },
    {
      title: "Protects billable time",
      body: "Out-of-hours calls, lunch cover, overflow on a busy Monday — handled. Fee earners only get warm transfers for live emergencies you’ve defined.",
    },
    {
      title: "UK-compliant intake",
      body: "Calls are encrypted, processed under UK GDPR and the Data Protection Act 2018, and never used to train external AI models. Voqal AI Ltd is UK-registered (Companies House 17080303).",
    },
  ],
  useCases: [
    { title: "New enquiry intake", body: "Captures name, contact, matter type, opposing party, and a brief summary — ready for conflict check and fee-earner review." },
    { title: "Booking initial consultations", body: "Books straight into your case management or calendar system, with case-type-specific durations and fee-earner routing." },
    { title: "Existing-client routing", body: "Recognises returning clients, transfers to the right fee earner, or takes a detailed message with case reference." },
    { title: "Out-of-hours emergencies", body: "For criminal, family, or duty solicitors — escalates urgent calls per your on-call rota." },
  ],
  evidence: [
    { stat: "67%", label: "Of customers hang up when they can’t reach a real person (Forbes, 2023)" },
    { stat: "21×", label: "More likely to convert when answered within 5 mins (MIT/InsideSales.com)" },
    { stat: "80%", label: "Of voicemail callers won’t leave a message (PATLive, 2023)" },
    { stat: "£25K", label: "Avg UK receptionist salary. AI from £197/mo (ONS ASHE, 2024)" },
  ],
  faqs: [
    { q: "Can it handle different practice areas with different intake questions?", a: "Yes. We build separate intake flows per case type — conveyancing requires property addresses and lender, family law needs party names and children’s details, personal injury needs incident date and circumstances. Each route gathers what your fee earners actually need." },
    { q: "Will it integrate with our case management system?", a: "Yes. We integrate with Clio, Leap, ProclaimX, ActionStep, OsprEy, Outlook, and Google Calendar. Custom integrations via webhook or Zapier are also supported." },
    { q: "How are conflict-of-interest checks handled?", a: "The agent gathers all relevant party names at intake before any consultation is confirmed. We can either pause the booking pending your manual conflict check or route the enquiry to a fee earner who confirms before booking." },
    { q: "Is it suitable for SRA-regulated firms?", a: "Yes. We handle data under UK GDPR and the Data Protection Act 2018, and Voqal AI Ltd is a UK-registered company. We can sign NDAs and a Data Processing Agreement on request." },
    { q: "Can it cover out-of-hours for criminal or family duty work?", a: "Yes. We build a separate after-hours flow with your on-call rota — urgent calls escalate immediately to the duty solicitor, all others take a detailed message for next-day follow-up." },
  ],
};

export const trades: IndustryData = {
  slug: "ai-receptionist-tradesmen",
  industryName: "Tradesmen & Home Services",
  industryNameLower: "trades business",
  pluralNoun: "trades businesses",
  heroAccent: "tradesmen.",
  metaTitle: "AI Receptionist for Tradesmen UK | Voqal AI",
  metaDescription:
    "AI receptionist for UK plumbers, electricians, builders, gas engineers and home-service trades. Capture every job lead while you’re on the tools. From £197/month.",
  intro:
    "Built for the van, the loft, and the boiler-down emergency. Answers every call when you’re on the tools, qualifies the job, captures address and access details, and books site visits straight into your diary. No more lost jobs because you couldn’t reach the phone.",
  problem:
    "If you don’t pick up, the homeowner calls the next plumber on Google. PATLive (2023) found 80% of callers sent to voicemail won’t leave a message. For trades, each missed call is a £200 boiler service, a £500 emergency call-out, or a £5,000 bathroom job going to a competitor. You can’t answer the phone with your hands inside a fuse board.",
  benefits: [
    {
      title: "Capture every job while you’re on the tools",
      body: "Picks up in under two seconds, 24/7. Out-of-hours calls, weekend emergencies, the call that came in while you were under a sink — all answered, all qualified, all in your diary tomorrow morning.",
    },
    {
      title: "Qualifies the job before you drive there",
      body: "Captures job type, urgency, address, access (front door / side gate / key code), and rough scope. You arrive prepared instead of finding out on the doorstep that you needed a different van.",
    },
    {
      title: "Books straight into your diary",
      body: "Integrates with Google Calendar, JobLogic, ServiceM8, Tradify and most field-service tools. The booking is in your phone before the caller hangs up.",
    },
    {
      title: "Emergency triage built in",
      body: "Gas leaks, water leaks, no heat in winter, electrical hazards — escalates immediately by SMS or transfer per your rules. Routine enquiries take a slot for next available.",
    },
  ],
  useCases: [
    { title: "Emergency call-outs", body: "Boiler down, leak, no power — captures address, severity, and notifies you instantly so you can call back in seconds." },
    { title: "Quote enquiries", body: "Bathroom refurb, rewire, new boiler install — books a survey visit and sends the homeowner a confirmation." },
    { title: "Servicing and certificates", body: "Annual gas safety, EICR, boiler service — books recurring slots and sends reminders." },
    { title: "Aftercare", body: "Existing customers calling about a recent job get triaged and a callback scheduled, never lost in the noise." },
  ],
  evidence: [
    { stat: "80%", label: "Of voicemail callers won’t leave a message (PATLive, 2023)" },
    { stat: "67%", label: "Hang up when they can’t reach a real person (Forbes, 2023)" },
    { stat: "21×", label: "More likely to convert when answered within 5 mins (MIT/InsideSales.com)" },
    { stat: "24/7", label: "Cover — weekends, evenings, bank holidays" },
  ],
  faqs: [
    { q: "Will it work if I’m a one-man-band sole trader?", a: "Yes — this is exactly who it’s built for. You can’t be on the tools and answer the phone. The agent handles every call, books jobs into your diary, and texts you instantly for emergencies. No receptionist hire needed." },
    { q: "Does it integrate with my job-management software?", a: "Yes. We work with JobLogic, ServiceM8, Tradify, Powered Now, simPRO, Google Calendar, and Outlook. Custom integrations via webhook or Zapier for anything else." },
    { q: "Can it handle out-of-hours emergencies?", a: "Yes. We define your emergency rules — e.g. gas leak, no heat, water flood, electrical hazard — and the agent transfers or texts you immediately for those. Routine calls take a message and book the next available slot." },
    { q: "What about Gas Safe / NICEIC compliance?", a: "The agent collects job details and books the visit. The actual regulated work is still done by you. We can include compliance disclaimers in the booking confirmation if needed." },
    { q: "How quickly can I go live?", a: "Personalised demo within 24 hours. Full setup typically a few days, with phone-forwarding taking under 10 minutes." },
  ],
};

export const estate: IndustryData = {
  slug: "ai-receptionist-estate-agents",
  industryName: "Estate Agents",
  industryNameLower: "estate agency",
  pluralNoun: "estate agencies",
  heroAccent: "estate agents.",
  metaTitle: "AI Receptionist for Estate Agents UK | Voqal AI",
  metaDescription:
    "AI receptionist for UK estate agents and lettings. Books viewings 24/7, qualifies buyers and tenants, and captures vendor enquiries. From £197/month.",
  intro:
    "Your office is on viewings, your phones are unattended, and a buyer is browsing Rightmove at 9pm. Voqal answers every call, books viewings instantly, qualifies buyers and tenants, and routes vendor valuations to the right negotiator. 24/7 — because property doesn’t sleep.",
  problem:
    "Most property enquiries happen evenings and weekends — exactly when no one’s in the office. Forbes (2023) found 67% of callers hang up when they can’t reach a real person, and PATLive (2023) found 80% of voicemail callers don’t leave a message. For agents, that’s a viewing booked with the next agency on the high street.",
  benefits: [
    {
      title: "Books viewings 24/7",
      body: "Direct integration with your diary and viewing software. Buyers booking at 9pm Sunday, tenants at lunchtime, vendors after work — every viewing slotted before the caller hangs up.",
    },
    {
      title: "Qualifies buyers and tenants",
      body: "Captures budget, deposit, mortgage status, position (first-time buyer, chain, cash), preferred areas, and bedroom requirements — so negotiators only follow up genuine interest.",
    },
    {
      title: "Vendor enquiries to the right ear",
      body: "Free valuations and instructions routed instantly to your senior negotiator or branch manager. Speed wins instructions — leads contacted within five minutes are 21× more likely to convert (MIT/InsideSales.com).",
    },
    {
      title: "Lettings-ready",
      body: "Handles tenant enquiries with right-to-rent prompts, referencing requirements, and pet/smoker filters per landlord instructions. Books viewings for properties that match.",
    },
  ],
  useCases: [
    { title: "Viewing bookings", body: "Sales and lettings viewings booked into your calendar with property reference, viewer details, and confirmation SMS sent automatically." },
    { title: "Vendor / landlord valuations", body: "Captures property details, address, reason for sale or letting, and books a market appraisal with your senior agent." },
    { title: "Tenant enquiries", body: "Pre-screens against landlord criteria — budget, employment, pets, smoker, household size — before booking viewings." },
    { title: "Existing chain & sale chasing", body: "Existing applicants and vendors get routed to their negotiator, or a detailed message taken with property reference." },
  ],
  evidence: [
    { stat: "21×", label: "More likely to convert when answered within 5 mins (MIT/InsideSales.com)" },
    { stat: "67%", label: "Hang up when they can’t reach a real person (Forbes, 2023)" },
    { stat: "80%", label: "Of voicemail callers won’t leave a message (PATLive, 2023)" },
    { stat: "24/7", label: "Cover — evenings and weekends, when buyers actually call" },
  ],
  faqs: [
    { q: "Will it integrate with our agency software (Reapit, Alto, Jupix, etc.)?", a: "Yes. We integrate with Reapit, Alto, Jupix, OpenView, Vebra, Street.co.uk, and any system that supports calendar sync, webhook, or Zapier. We confirm the integration during your free demo." },
    { q: "Can it qualify buyers and tenants differently?", a: "Yes. We build separate flows for sales and lettings. Sales flow captures budget, position, and chain status. Lettings captures right-to-rent indicators, referencing readiness, and landlord-specific criteria." },
    { q: "How does it handle valuation enquiries?", a: "Vendor or landlord valuation enquiries are flagged as high priority and routed straight to your senior negotiator or branch manager via call transfer or SMS — because speed wins instructions." },
    { q: "Can it handle multiple branches?", a: "Yes. Calls can be routed by postcode, property reference, or extension. Each branch can have its own diary, FAQs, and on-call rules." },
    { q: "How quickly can we be live?", a: "Personalised demo within 24 hours. Full deployment typically a few days." },
  ],
};

export const medical: IndustryData = {
  slug: "ai-receptionist-medical-practices",
  industryName: "Medical Practices",
  industryNameLower: "medical clinic",
  pluralNoun: "medical practices",
  heroAccent: "medical clinics.",
  metaTitle: "AI Receptionist for Medical Practices UK | Voqal AI",
  metaDescription:
    "AI receptionist for UK private clinics, GPs and consultants. 24/7 patient enquiry triage, appointment booking and after-hours coverage. From £197/month.",
  intro:
    "Built for private GPs, consultants, and specialist clinics. Triages routine patient enquiries, books and reschedules appointments, handles after-hours overflow, and escalates urgent symptoms to your duty clinician — all under UK GDPR.",
  problem:
    "Reception staff are stretched between front desk, phones, and chasing referrals. Patients calling at lunchtime or after 6pm get voicemail or an engaged tone — and PATLive (2023) found 80% of voicemail callers won’t leave a message. For private practice, every dropped enquiry is a self-pay patient choosing a different clinic.",
  benefits: [
    {
      title: "Reduces phone load on reception",
      body: "Routine bookings, reschedules, and FAQ enquiries handled end-to-end so your reception team can focus on patients in front of them, referrals, and clinical admin.",
    },
    {
      title: "After-hours and overflow coverage",
      body: "Picks up evenings, weekends, lunch breaks, and morning rush overflow. Patients get an immediate, personalised response — not a voicemail.",
    },
    {
      title: "Urgent symptom triage",
      body: "Detects red-flag symptoms per your protocol (chest pain, severe bleeding, mental health crisis) and escalates immediately to your duty clinician or NHS 111 / 999 routing.",
    },
    {
      title: "UK GDPR & DPA 2018 compliant",
      body: "Voqal AI Ltd is a UK-registered company (Companies House 17080303). Calls are encrypted in transit and at rest. We process data under UK GDPR and the Data Protection Act 2018 and never use patient data to train external models.",
    },
  ],
  useCases: [
    { title: "Routine bookings & reschedules", body: "Consultations, follow-ups, scans, blood draws — booked, moved, or cancelled in a single call." },
    { title: "New patient registration", body: "Captures details, insurance or self-pay status, referral information, and books a first consultation." },
    { title: "Prescription & results enquiries", body: "Triages routine queries to the right pathway — collection, pharmacy, or callback from a clinician." },
    { title: "Out-of-hours triage", body: "Red-flag symptoms escalated per your protocol; routine enquiries booked for next available." },
  ],
  evidence: [
    { stat: "80%", label: "Of voicemail callers won’t leave a message (PATLive, 2023)" },
    { stat: "67%", label: "Hang up when they can’t reach a real person (Forbes, 2023)" },
    { stat: "21×", label: "More likely to convert when answered within 5 mins (MIT/InsideSales.com)" },
    { stat: "24/7", label: "Coverage — evenings, weekends, public holidays" },
  ],
  faqs: [
    { q: "Is it compliant with UK GDPR and DPA 2018?", a: "Yes. Voqal AI Ltd (Companies House 17080303) processes all data under UK GDPR and the Data Protection Act 2018. Calls are encrypted in transit and at rest. Patient data is never used to train external AI models. We can sign a Data Processing Agreement on request." },
    { q: "How does it handle urgent or red-flag symptoms?", a: "We build a triage flow with you. The agent listens for clinical red flags you define (chest pain, severe bleeding, mental health crisis, paediatric emergencies) and immediately escalates per your protocol — transferring to your duty clinician, the on-call doctor, or directing to NHS 111 / 999 as appropriate." },
    { q: "Will it integrate with our clinic system?", a: "Yes. We integrate with Cliniko, Semble, Pabau, MediGate, Heydoc, Cal.com, Google Calendar, and Outlook. Custom integrations via webhook or Zapier for any other system." },
    { q: "Is it suitable for NHS or only private practice?", a: "It’s primarily aimed at private clinics, consultants, and specialist practices. NHS GP practices have specific NHS Digital procurement requirements; we can discuss whether Voqal fits your specific commissioning route." },
    { q: "How quickly can we go live?", a: "Personalised demo within 24 hours. Full deployment typically a few days, with phone-forwarding taking under 10 minutes." },
  ],
};

export const allIndustries: IndustryData[] = [dental, law, trades, estate, medical];
