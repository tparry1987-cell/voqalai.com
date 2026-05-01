"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./calculator.css";

// ===== Calculator scenario coefficients =====
const SCENARIOS = [
  { label: "Really cold",   responseRate: 0.35, qualifiedRate: 0.10, defaultClose: 0.35 },
  { label: "Standard cold", responseRate: 0.50, qualifiedRate: 0.15, defaultClose: 0.40 },
  { label: "Lukewarm",      responseRate: 0.65, qualifiedRate: 0.20, defaultClose: 0.50 },
];
const VOQAL_FEE_PER_BOOKING = 50;

// ===== SMS preview drawer threads =====
type SmsMsg = { dir?: "sent" | "received"; text?: string; time?: string; pill?: string };
const SMS_THREADS: Record<string, { name: string; messages: SmsMsg[] }> = {
  trades: { name: "Northwest Electrical", messages: [
    { dir: "sent", text: "Hi Mark, it's Sophie from Northwest Electrical. You enquired about a fuse box upgrade back in July. Still on your list?", time: "14:35" },
    { pill: "Lead engaged" },
    { dir: "sent", text: "Just bumping this — life gets busy, no rush.", time: "14:55" },
    { pill: "Followed up" },
    { dir: "received", text: "Hi Sophie, yeah we got busy with summer. Still need it doing.", time: "15:02" },
    { pill: "Lead replied" },
    { dir: "sent", text: "No worries — we've a couple of slots next week. Want me to send the calendar?", time: "15:03" },
    { dir: "received", text: "Yes please", time: "15:11" },
    { dir: "sent", text: "Here you go: cal.com/northwest-electrical — pick whatever works.", time: "15:11" },
    { dir: "received", text: "Booked Tues 10am.", time: "15:18" },
    { pill: "Booking confirmed 📅" },
    { dir: "sent", text: "Brilliant, see you Tuesday Mark. Lee will give you a quick ring the day before to confirm.", time: "15:19" },
  ]},
  dental: { name: "BrightSmile Dental", messages: [
    { dir: "sent", text: "Hi Laura, Sophie from BrightSmile here. Is this the same Laura who had a cosmetic consult with us about 8 months ago?", time: "14:00" },
    { pill: "Lead engaged" },
    { dir: "received", text: "Yes that was me", time: "14:08" },
    { pill: "Lead replied" },
    { dir: "sent", text: "Thanks Laura. We've a few hygiene slots this month for existing patients. Are you overdue for a checkup, or still thinking about the whitening plan we discussed?", time: "14:09" },
    { dir: "received", text: "Both honestly", time: "14:18" },
    { dir: "received", text: "I know it's time for a checkup but the whitening quote scared me a bit", time: "14:19" },
    { pill: "Handling objection" },
    { dir: "sent", text: "Totally fair — most people feel the same on the first quote. Good news: your insurance plan covers the checkup fully. For the whitening, we offer interest-free payment over 24 months.", time: "14:20" },
    { dir: "received", text: "Oh I didn't know about the plan", time: "14:31" },
    { dir: "sent", text: "Quite common. Want me to book the hygiene visit, and Dr Patel can talk you through the whitening for 10 mins at the same appointment? No extra cost.", time: "14:32" },
    { dir: "received", text: "Yes that would work", time: "14:40" },
    { pill: "Lead qualified" },
    { dir: "sent", text: "Perfect. cal.com/brightsmile — see you soon!", time: "14:41" },
    { pill: "Booking confirmed 📅" },
  ]},
  gym: { name: "IronPulse Fitness", messages: [
    { dir: "sent", text: "Hi Mark, Sara from IronPulse here. Is this the same Mark who used to be a member with us a while back?", time: "10:00" },
    { pill: "Lead engaged" },
    { dir: "received", text: "Yes that's me", time: "10:12" },
    { pill: "Lead replied" },
    { dir: "sent", text: "Nice. My calendar pinged me to call but I didn't want to bug you. Are you still looking to get back into training?", time: "10:13" },
    { dir: "received", text: "I'd love to but I just had a baby and time is tight", time: "10:18" },
    { pill: "Handling objection" },
    { dir: "sent", text: "Congrats! Honestly, new parents who train smart tend to stick with it better — the energy boost is worth it. What was your main goal last time?", time: "10:19" },
    { dir: "received", text: "Strength and consistency", time: "10:26" },
    { dir: "sent", text: "Solid. What made you stop — progress, motivation, or just life?", time: "10:27" },
    { dir: "received", text: "Progress. I couldn't tell if I was improving.", time: "10:34" },
    { dir: "sent", text: "Hate that feeling. We do monthly check-ins now so progress is measurable. Want to book a 30-min PT plan call?", time: "10:35" },
    { dir: "received", text: "Yes, sounds like a plan", time: "10:42" },
    { pill: "Booking confirmed 📅" },
  ]},
  coaching: { name: "Threshold Coaching", messages: [
    { dir: "sent", text: "Hi Ellen, Maya from Threshold here. Is this the same Ellen who booked a clarity call with us in February?", time: "11:00" },
    { pill: "Lead engaged" },
    { dir: "received", text: "Yes that was me — sorry I never showed up, work was insane", time: "11:08" },
    { pill: "Lead replied" },
    { dir: "sent", text: "No need to apologise — most people who ghost a clarity call need it the most. Still feeling stuck where you were, or did something shift?", time: "11:09" },
    { dir: "received", text: "Honestly it's worse. Still in HR, burned out. Keep dreaming of doing something with more meaning.", time: "11:20" },
    { dir: "sent", text: "When you picture \"something with more meaning,\" what comes to mind?", time: "11:22" },
    { dir: "received", text: "Coaching actually. Working with people hands-on.", time: "11:35" },
    { pill: "Surfacing real goal" },
    { dir: "sent", text: "That's a really specific niche, and a needed one. What's been stopping you from starting?", time: "11:37" },
    { dir: "received", text: "Fear, mainly. And money — I don't want to quit HR until I know it can work.", time: "11:48" },
    { dir: "sent", text: "Exactly the right instinct. We work with people in transition — you stay employed while we build the practice. Want to book 30 mins with our head coach?", time: "11:49" },
    { dir: "received", text: "Yes I think I'm ready for that", time: "12:05" },
    { pill: "Booking confirmed 📅" },
  ]},
  agency: { name: "Studio Atlas", messages: [
    { dir: "sent", text: "Hi Tom, James from Studio Atlas here. You enquired about a website rebuild back in spring — still on the cards?", time: "09:30" },
    { pill: "Lead engaged" },
    { dir: "received", text: "Hi James, yeah it is. We just kept getting busy and never closed it out", time: "09:42" },
    { pill: "Lead replied" },
    { dir: "sent", text: "Totally understand. Has your scope changed since spring, or are you still looking at the same brief?", time: "09:43" },
    { dir: "received", text: "Pretty much the same brief, but we'd want to add a blog this time", time: "09:55" },
    { dir: "sent", text: "Easy add. Want me to put 30 mins in the diary so we can run through the new scope and get you a fresh quote? No charge.", time: "09:56" },
    { dir: "received", text: "Yeah that works. Tomorrow afternoon any good?", time: "10:02" },
    { dir: "sent", text: "Yep — 15:00 or 16:30 free. cal.com/studio-atlas/discovery", time: "10:03" },
    { dir: "received", text: "Booked 16:30", time: "10:08" },
    { pill: "Booking confirmed 📅" },
  ]},
};

// ===== Mock SMS demo templates (token replacement) =====
type MockMsg = { dir?: "sent" | "received"; text?: string; time?: string; pill?: string; delay?: number };
const MOCK_TEMPLATES: Record<string, { leadName: string; repName: string; defaultServices: string; messages: MockMsg[] }> = {
  trades: { leadName: "Mark", repName: "Sophie", defaultServices: "fuse box upgrades and EV chargers", messages: [
    { dir: "sent", delay: 700, time: "14:35", text: "Hi Mark, it's {{repName}} from {{businessName}}. You enquired about a quote back in July — still on your list?" },
    { pill: "Lead engaged", delay: 1100 },
    { dir: "sent", delay: 1500, time: "14:55", text: "Just bumping this — life gets busy, no rush." },
    { pill: "Followed up", delay: 1300 },
    { dir: "received", delay: 2200, time: "15:02", text: "Hi {{repName}}, yeah we got busy with summer. Still need it doing." },
    { pill: "Lead replied", delay: 900 },
    { dir: "sent", delay: 1300, time: "15:03", text: "No worries — {{servicesLine}}we've a couple of slots next week. Want me to send the calendar?" },
    { dir: "received", delay: 2400, time: "15:11", text: "Yes please" },
    { dir: "sent", delay: 1100, time: "15:12", text: "Here you go: cal.com/{{businessSlug}} — pick whatever works." },
    { dir: "received", delay: 2800, time: "15:18", text: "Booked Tues 10am 👍" },
    { pill: "Booking confirmed 📅", delay: 900 },
    { dir: "sent", delay: 1200, time: "15:19", text: "Brilliant, see you Tuesday {{leadName}}. We'll ring the day before to confirm." },
  ]},
  plumbing: { leadName: "James", repName: "Sara", defaultServices: "boiler servicing, replacements and emergency callouts", messages: [
    { dir: "sent", delay: 700, time: "08:45", text: "Hi James, {{repName}} from {{businessName}} here. We quoted you for a boiler replacement back in July — still considering it?" },
    { pill: "Lead engaged", delay: 1000 },
    { dir: "received", delay: 2400, time: "08:58", text: "Hi {{repName}}, yeah we decided to limp through another winter sadly. Cost was the issue" },
    { pill: "Lead replied", delay: 800 },
    { dir: "sent", delay: 1400, time: "08:59", text: "Heard that a lot last year. {{servicesLine}}Quick check though — has the existing one given you any trouble since? Failure rate jumps a lot above 12 years." },
    { dir: "received", delay: 2400, time: "09:12", text: "Honestly yeah, it cut out twice in November. We had to bleed the rads loads" },
    { dir: "sent", delay: 1500, time: "09:13", text: "That's the warning sign. Two things: (1) we now do interest-free over 24 months (£75/mo on the model we quoted), and (2) October install slots are £200 cheaper than December emergency replacements. Worth a quick survey?" },
    { dir: "received", delay: 2400, time: "09:28", text: "How much is the survey?" },
    { pill: "Handling objection", delay: 800 },
    { dir: "sent", delay: 1300, time: "09:29", text: "Free, no commitment. Engineer comes round, takes 25 mins, you get a fixed quote on the spot. We've Tues + Wed afternoons next week." },
    { dir: "received", delay: 2200, time: "09:42", text: "Wed afternoon if you've got it" },
    { pill: "Lead qualified", delay: 800 },
    { dir: "sent", delay: 1200, time: "09:43", text: "Booked. cal.com/{{businessSlug}} — confirmation on its way." },
    { pill: "Booking confirmed 📅", delay: 900 },
  ]},
  dental: { leadName: "Laura", repName: "Sophie", defaultServices: "whitening and Invisalign", messages: [
    { dir: "sent", delay: 700, time: "14:00", text: "Hi Laura, {{repName}} from {{businessName}} here. Is this the same Laura who had a cosmetic consult with us about 8 months ago?" },
    { pill: "Lead engaged", delay: 1000 },
    { dir: "received", delay: 2300, time: "14:08", text: "Yes that was me" },
    { pill: "Lead replied", delay: 800 },
    { dir: "sent", delay: 1400, time: "14:09", text: "Thanks Laura. We've a few hygiene slots this month for existing patients. {{servicesLine}}Are you overdue for a checkup, or still thinking about the plan we discussed?" },
    { dir: "received", delay: 2200, time: "14:18", text: "Both honestly" },
    { dir: "received", delay: 800, time: "14:19", text: "I know it's time for a checkup but the whitening quote scared me a bit" },
    { pill: "Handling objection", delay: 900 },
    { dir: "sent", delay: 1500, time: "14:20", text: "Totally fair — most people feel the same on the first quote. Good news: your insurance plan covers the checkup fully. For the whitening, we've an interest-free plan over 24 months." },
    { dir: "received", delay: 2200, time: "14:31", text: "Oh I didn't know about the plan" },
    { dir: "sent", delay: 1200, time: "14:32", text: "Quite common. Want me to book the hygiene visit, and the dentist can talk you through the plan for 10 mins at the same appointment? No extra cost." },
    { dir: "received", delay: 2200, time: "14:40", text: "Yes that would work" },
    { pill: "Lead qualified", delay: 800 },
    { dir: "sent", delay: 1100, time: "14:41", text: "Perfect. cal.com/{{businessSlug}} — see you soon!" },
    { pill: "Booking confirmed 📅", delay: 900 },
  ]},
  gym: { leadName: "Mark", repName: "Sara", defaultServices: "PT plans and small-group strength", messages: [
    { dir: "sent", delay: 700, time: "10:00", text: "Hi Mark, {{repName}} from {{businessName}} here. Is this the same Mark who used to be a member with us a while back?" },
    { pill: "Lead engaged", delay: 1000 },
    { dir: "received", delay: 2200, time: "10:12", text: "Yes that's me" },
    { pill: "Lead replied", delay: 800 },
    { dir: "sent", delay: 1400, time: "10:13", text: "Nice. My calendar pinged me to call but I didn't want to bug you. Are you still looking to get back into training?" },
    { dir: "received", delay: 2400, time: "10:18", text: "I'd love to but I just had a baby and time is tight" },
    { pill: "Handling objection", delay: 900 },
    { dir: "sent", delay: 1500, time: "10:19", text: "Congrats! 🎉 Honestly, new parents who train smart tend to stick with it better — the energy boost is worth it. {{servicesLine}}What was your main goal last time?" },
    { dir: "received", delay: 2200, time: "10:26", text: "Strength and consistency" },
    { dir: "sent", delay: 1300, time: "10:27", text: "Solid. What made you stop — progress, motivation, or just life?" },
    { dir: "received", delay: 2200, time: "10:34", text: "Progress. I couldn't tell if I was improving." },
    { dir: "sent", delay: 1500, time: "10:35", text: "Hate that feeling. We do monthly check-ins now so progress is measurable. Want to book a 30-min PT plan call?" },
    { dir: "received", delay: 2200, time: "10:42", text: "Yes, sounds like a plan" },
    { pill: "Booking confirmed 📅", delay: 900 },
  ]},
  coaching: { leadName: "Ellen", repName: "Maya", defaultServices: "transition coaching for HR and ops leaders", messages: [
    { dir: "sent", delay: 700, time: "11:00", text: "Hi Ellen, {{repName}} from {{businessName}} here. Is this the same Ellen who booked a clarity call with us back in February?" },
    { pill: "Lead engaged", delay: 1000 },
    { dir: "received", delay: 2200, time: "11:08", text: "Yes that was me — sorry I never showed up, work was insane" },
    { pill: "Lead replied", delay: 800 },
    { dir: "sent", delay: 1400, time: "11:09", text: "No need to apologise — most people who ghost a clarity call need it the most. Still feeling stuck where you were, or did something shift?" },
    { dir: "received", delay: 2400, time: "11:20", text: "Honestly it's worse. Still in HR, burned out. Keep dreaming of doing something with more meaning." },
    { dir: "sent", delay: 1400, time: "11:22", text: "When you picture \"something with more meaning,\" what comes to mind?" },
    { dir: "received", delay: 2200, time: "11:35", text: "Coaching actually. Working with people hands-on." },
    { pill: "Surfacing real goal", delay: 900 },
    { dir: "sent", delay: 1500, time: "11:37", text: "{{servicesLine}}That's a really specific niche, and a needed one. What's been stopping you from starting?" },
    { dir: "received", delay: 2200, time: "11:48", text: "Fear, mainly. And money — I don't want to quit HR until I know it can work." },
    { dir: "sent", delay: 1500, time: "11:49", text: "Exactly the right instinct. Want to book 30 mins with our head coach to map a transition plan?" },
    { dir: "received", delay: 2200, time: "12:05", text: "Yes I think I'm ready for that" },
    { pill: "Booking confirmed 📅", delay: 900 },
  ]},
  agency: { leadName: "Tom", repName: "James", defaultServices: "website rebuilds and brand systems", messages: [
    { dir: "sent", delay: 700, time: "09:30", text: "Hi {{leadName}}, {{repName}} from {{businessName}} here. You enquired about a project back in spring — still on the cards?" },
    { pill: "Lead engaged", delay: 1000 },
    { dir: "received", delay: 2200, time: "09:42", text: "Hi {{repName}}, yeah it is. We just kept getting busy and never closed it out" },
    { pill: "Lead replied", delay: 800 },
    { dir: "sent", delay: 1400, time: "09:43", text: "Totally understand. {{servicesLine}}Has your scope changed since spring, or are you still looking at the same brief?" },
    { dir: "received", delay: 2300, time: "09:55", text: "Pretty much the same brief, but we'd want to add a blog this time" },
    { dir: "sent", delay: 1300, time: "09:56", text: "Easy add. Want me to put 30 mins in the diary so we can run through the new scope and get you a fresh quote? No charge." },
    { dir: "received", delay: 2200, time: "10:02", text: "Yeah that works. Tomorrow afternoon any good?" },
    { dir: "sent", delay: 1300, time: "10:03", text: "Yep — 15:00 or 16:30 free. cal.com/{{businessSlug}}" },
    { dir: "received", delay: 2300, time: "10:08", text: "Booked 16:30" },
    { pill: "Booking confirmed 📅", delay: 900 },
  ]},
  realestate: { leadName: "Olivia", repName: "Charlotte", defaultServices: "3-bed homes and modern apartments in your area", messages: [
    { dir: "sent", delay: 700, time: "11:00", text: "Hi Olivia, {{repName}} from {{businessName}} here. You viewed our listing on Park Road back in March — still house-hunting?" },
    { pill: "Lead engaged", delay: 1000 },
    { dir: "received", delay: 2300, time: "11:14", text: "Hi {{repName}}, yes still looking. Park Road went under offer before we could view sadly" },
    { pill: "Lead replied", delay: 800 },
    { dir: "sent", delay: 1400, time: "11:15", text: "I remember 😔 — went the same week we listed it. {{servicesLine}}Has your brief changed at all since spring, or still 3-bed under £450k?" },
    { dir: "received", delay: 2400, time: "11:25", text: "Same brief but we've stretched to £475k now. Garden is non-negotiable" },
    { dir: "sent", delay: 1300, time: "11:26", text: "Good to know. Quick heads-up: we've a 3-bed coming to market next Tuesday, south-facing garden, £465k. Want me to book you in for a sneak preview before it goes online?" },
    { dir: "received", delay: 2400, time: "11:38", text: "How sure are you on the price? Last time we saw something similar it went £20k over guide" },
    { pill: "Handling objection", delay: 800 },
    { dir: "sent", delay: 1500, time: "11:39", text: "Fair concern. Vendor wants a quick chain-free sale, so they've priced realistically — number 14 on the same road sold £455k in February. Worth a look either way?" },
    { dir: "received", delay: 2200, time: "11:50", text: "Yes please book us in" },
    { pill: "Lead qualified", delay: 800 },
    { dir: "sent", delay: 1200, time: "11:51", text: "Brilliant. cal.com/{{businessSlug}} — Tuesday's slots are 10am, 2pm or 5pm." },
    { dir: "received", delay: 2400, time: "12:02", text: "5pm" },
    { pill: "Booking confirmed 📅", delay: 900 },
  ]},
  legal: { leadName: "Daniel", repName: "Emma", defaultServices: "wills, conveyancing and powers of attorney", messages: [
    { dir: "sent", delay: 700, time: "13:00", text: "Hi Daniel, {{repName}} from {{businessName}} here. You started a will-writing enquiry with us back in October — never finished. Still on the to-do list?" },
    { pill: "Lead engaged", delay: 1000 },
    { dir: "received", delay: 2400, time: "13:18", text: "Yeah it is, just kept getting bumped down the list. Honestly wasn't sure I needed one urgently" },
    { pill: "Lead replied", delay: 800 },
    { dir: "sent", delay: 1500, time: "13:19", text: "Most people feel that until something happens. {{servicesLine}}Quick question: are you a homeowner, or have any dependants?" },
    { dir: "received", delay: 2400, time: "13:32", text: "Both. Two kids and a mortgage" },
    { dir: "sent", delay: 1500, time: "13:33", text: "Then it's actually pretty important — without a will, the kids' inheritance can get tied up in probate for 6-12 months. We do a free 15-min review, no pressure to proceed. Worth booking?" },
    { dir: "received", delay: 2400, time: "13:48", text: "What does the full thing usually cost?" },
    { pill: "Handling objection", delay: 800 },
    { dir: "sent", delay: 1500, time: "13:49", text: "Standard mirror wills (you + partner) are a fixed fee, no hidden costs. We're a fully regulated practice. The free 15-min just confirms whether a basic will is right or you need a trust structure." },
    { dir: "received", delay: 2200, time: "14:01", text: "Ok let's book the 15-min" },
    { pill: "Lead qualified", delay: 800 },
    { dir: "sent", delay: 1200, time: "14:02", text: "Perfect. cal.com/{{businessSlug}} — same-week slots available." },
    { dir: "received", delay: 2400, time: "14:14", text: "Booked Thursday at 4" },
    { pill: "Booking confirmed 📅", delay: 900 },
  ]},
  salon: { leadName: "Sophie", repName: "Hannah", defaultServices: "balayage, foiling and keratin smoothing", messages: [
    { dir: "sent", delay: 700, time: "15:30", text: "Hi Sophie, {{repName}} from {{businessName}} here. It's been about 4 months since your last colour — fancy a refresh? 💁🏼‍♀️" },
    { pill: "Lead engaged", delay: 1000 },
    { dir: "received", delay: 2400, time: "15:45", text: "Hey {{repName}}! I do, my regrowth is awful 😩 just been putting it off" },
    { pill: "Lead replied", delay: 800 },
    { dir: "sent", delay: 1400, time: "15:46", text: "Totally get it. {{servicesLine}}Have you got something coming up, or just want a tidy-up?" },
    { dir: "received", delay: 2300, time: "15:55", text: "Wedding in 3 weeks 😅 I need a proper job done" },
    { dir: "sent", delay: 1300, time: "15:56", text: "Plenty of time. Last time you had a balayage with Beth — want her again? She's got Tues + Sat slots in the next 2 weeks." },
    { dir: "received", delay: 2400, time: "16:08", text: "How much is the full balayage now? Last time was £140 I think" },
    { pill: "Handling objection", delay: 800 },
    { dir: "sent", delay: 1500, time: "16:09", text: "Still £140 for returning clients (it's £165 new). And because you're a returning client you get 10% off if you book the next one before you leave the chair." },
    { dir: "received", delay: 2300, time: "16:18", text: "Sold. Saturday morning if poss?" },
    { pill: "Lead qualified", delay: 800 },
    { dir: "sent", delay: 1200, time: "16:19", text: "10am Sat with Beth booked. cal.com/{{businessSlug}} for confirmation x" },
    { pill: "Booking confirmed 📅", delay: 900 },
  ]},
  accountancy: { leadName: "Priya", repName: "Adam", defaultServices: "year-end accounts, tax returns and bookkeeping", messages: [
    { dir: "sent", delay: 700, time: "10:30", text: "Hi Priya, {{repName}} from {{businessName}} here. You enquired about year-end accounts back in autumn — did you get everything sorted?" },
    { pill: "Lead engaged", delay: 1000 },
    { dir: "received", delay: 2400, time: "10:42", text: "Hi {{repName}}, kind of — we stuck with our current accountant for one more year. Was meant to switch but never got round to it" },
    { pill: "Lead replied", delay: 800 },
    { dir: "sent", delay: 1400, time: "10:43", text: "Common reason. {{servicesLine}}Quick check: are you happy with how proactive they are, or is it more of a once-a-year thing?" },
    { dir: "received", delay: 2400, time: "10:56", text: "Once a year. Honestly I never feel like I'm getting strategic advice, just compliance" },
    { dir: "sent", delay: 1500, time: "10:57", text: "That's the gap most clients tell us about. We do a free 30-min review of your last set of accounts — no obligation, just spot the obvious tax savings. Most reviews surface £1-3k annual savings on micro businesses." },
    { dir: "received", delay: 2400, time: "11:10", text: "Honestly I'm cautious about switching mid-year, what's the actual handover like?" },
    { pill: "Handling objection", delay: 800 },
    { dir: "sent", delay: 1500, time: "11:11", text: "Painless. We collect your auth, file directly with the tax authority, and request your records from the previous accountant — they're legally required to release them. Takes ~10 days, no input from you beyond signing one form." },
    { dir: "received", delay: 2200, time: "11:23", text: "Ok let's do the free review" },
    { pill: "Lead qualified", delay: 800 },
    { dir: "sent", delay: 1200, time: "11:24", text: "Brilliant. cal.com/{{businessSlug}} — pick a 30-min slot that suits." },
    { dir: "received", delay: 2400, time: "11:35", text: "Booked Friday morning" },
    { pill: "Booking confirmed 📅", delay: 900 },
  ]},
};

// ===== Hero animated chat sequence =====
type HeroMsg = { delay: number; type: "sent" | "received" | "pill"; time?: string; text: string };
const HERO_MESSAGES: HeroMsg[] = [
  { delay: 600,  type: "sent",     time: "14:35", text: "Hey Jack, it's Sophie from Peak Creative. You made a website upgrade enquiry last July. Ready to move forward?" },
  { delay: 2400, type: "pill",     text: "Lead engaged" },
  { delay: 1100, type: "sent",     time: "14:55", text: "Still on your radar?" },
  { delay: 2200, type: "pill",     text: "Followed up" },
  { delay: 1300, type: "received", time: "15:02", text: "Hi Sophie! Yes sorry, summer was crazy with client launches. Still definitely something we need." },
  { delay: 1400, type: "pill",     text: "Lead replied" },
  { delay: 1100, type: "sent",     time: "15:03", text: "No worries, life happens! What was the main blocker — budget, timeline, or other fires?" },
  { delay: 1800, type: "received", time: "15:08", text: "Honestly the price last time was a bit steep" },
  { delay: 1400, type: "sent",     time: "15:09", text: "Totally fair. We've got a smaller-scope option that gets you live in two weeks — fancy a 15-min look?" },
  { delay: 2000, type: "received", time: "15:14", text: "Yeah let's do it" },
  { delay: 1200, type: "pill",     text: "Lead qualified · Booking confirmed 📅" },
];

const PITCH_MESSAGES: { delay: number; type: "sent" | "received"; text: string }[] = [
  { delay: 700, type: "received", text: "honestly the price last time was too steep for us" },
  { delay: 1500, type: "sent", text: "Totally fair, a decision like this deserves to feel right. What made it feel too steep — the monthly or the total?" },
  { delay: 2200, type: "received", text: "the total, I wasn't expecting that number" },
  { delay: 1500, type: "sent", text: "That's fair feedback. We've got a phased plan that spreads it across 6 months and unlocks the same outcome — want me to drop the breakdown into your inbox?" },
  { delay: 2400, type: "received", text: "yes please send it over" },
];

const fmt = new Intl.NumberFormat("en-GB");
const fmtMoney = (n: number) => "£" + fmt.format(Math.round(n));
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 30) || "demo";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function CalculatorPage() {
  // ===== Calculator state =====
  const [leads, setLeads] = useState(5000);
  const [deal, setDeal] = useState(3000);
  const [cost, setCost] = useState(5);
  const [scenario, setScenario] = useState(1);
  const [closeRate, setCloseRate] = useState(40);
  const [resultBump, setResultBump] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  // ===== Carousel state =====
  const [howStep, setHowStep] = useState(0);

  // ===== SMS preview drawer =====
  const [smsIndustry, setSmsIndustry] = useState("dental");

  // ===== Try the AI mock state =====
  const [tryName, setTryName] = useState("");
  const [tryBusiness, setTryBusiness] = useState("");
  const [tryIndustry, setTryIndustry] = useState("trades");
  const [tryServices, setTryServices] = useState("");
  const [tryStarted, setTryStarted] = useState(false);
  const tryRunningRef = useRef(false);
  const tryThreadRef = useRef<HTMLDivElement>(null);
  const [trySmsLetter, setTrySmsLetter] = useState("V");
  const [trySmsName, setTrySmsName] = useState("Voqal AI");
  const [trySmsStatus, setTrySmsStatus] = useState("Ready when you are");
  const [tryErrors, setTryErrors] = useState<{ name?: string; business?: string }>({});

  // ===== Hero + pitch chat refs =====
  const heroThreadRef = useRef<HTMLDivElement>(null);
  const pitchThreadRef = useRef<HTMLDivElement>(null);
  const heroAliveRef = useRef(true);
  const pitchAliveRef = useRef(true);

  // ===== Hydrate from URL =====
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const num = (k: string) => { const v = p.get(k); if (v === null) return null; const n = Number(v); return Number.isFinite(n) ? n : null; };
    const ls = num("leads"); if (ls !== null) setLeads(ls);
    const dl = num("deal"); if (dl !== null) setDeal(dl);
    const cs = num("cost"); if (cs !== null) setCost(cs);
    const sc = num("s"); if (sc !== null && sc >= 0 && sc <= 2) setScenario(sc);
    const cr = num("cr"); if (cr !== null && cr >= 5 && cr <= 90) setCloseRate(cr);
  }, []);

  // ===== Update URL on calc change =====
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("leads", String(leads));
    url.searchParams.set("deal", String(deal));
    url.searchParams.set("cost", String(cost));
    url.searchParams.set("s", String(scenario));
    url.searchParams.set("cr", String(closeRate));
    window.history.replaceState({}, "", url);
  }, [leads, deal, cost, scenario, closeRate]);

  // ===== Bump animation when revenue changes =====
  useEffect(() => {
    setResultBump(true);
    const t = setTimeout(() => setResultBump(false), 300);
    return () => clearTimeout(t);
  }, [leads, deal, scenario, closeRate]);

  // ===== Calculator math =====
  const sc = SCENARIOS[scenario];
  const responded = Math.round(leads * sc.responseRate);
  const qualified = Math.round(responded * sc.qualifiedRate);
  const closed = Math.round(qualified * (closeRate / 100));
  const revenue = closed * deal;
  const fee = qualified * VOQAL_FEE_PER_BOOKING;
  const net = revenue - fee;

  // ===== Scroll-triggered reveals =====
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".calc-root .reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ===== Hero chat loop =====
  useEffect(() => {
    heroAliveRef.current = true;
    const run = async () => {
      while (heroAliveRef.current) {
        const root = heroThreadRef.current;
        if (!root) return;
        root.innerHTML = "";
        for (const m of HERO_MESSAGES) {
          await sleep(m.delay);
          if (!heroAliveRef.current || !heroThreadRef.current) return;
          if (m.type === "pill") {
            const pill = document.createElement("div");
            pill.className = "calc-hero-chat-pill";
            pill.textContent = m.text;
            root.appendChild(pill);
          } else {
            if (m.type === "received") {
              const t = document.createElement("div");
              t.className = "calc-hero-chat-typing";
              t.innerHTML = "<span></span><span></span><span></span>";
              root.appendChild(t);
              await sleep(900);
              if (!heroAliveRef.current) return;
              t.remove();
            }
            const msg = document.createElement("div");
            msg.className = "calc-hero-chat-msg " + m.type;
            msg.textContent = m.text;
            root.appendChild(msg);
            if (m.time) {
              const time = document.createElement("div");
              time.className = "calc-hero-chat-time" + (m.type === "sent" ? " sent-time" : "");
              time.textContent = m.time;
              root.appendChild(time);
            }
          }
          root.scrollTop = root.scrollHeight;
        }
        await sleep(5000);
      }
    };
    run();
    return () => { heroAliveRef.current = false; };
  }, []);

  // ===== Pitch chat loop =====
  useEffect(() => {
    pitchAliveRef.current = true;
    const run = async () => {
      while (pitchAliveRef.current) {
        const root = pitchThreadRef.current;
        if (!root) return;
        root.innerHTML = "";
        for (const m of PITCH_MESSAGES) {
          await sleep(m.delay);
          if (!pitchAliveRef.current || !pitchThreadRef.current) return;
          if (m.type === "received") {
            const t = document.createElement("div");
            t.className = "calc-pitch-typing";
            t.innerHTML = "<span></span><span></span><span></span>";
            root.appendChild(t);
            await sleep(800);
            if (!pitchAliveRef.current) return;
            t.remove();
          }
          const msg = document.createElement("div");
          msg.className = "calc-pitch-msg " + m.type;
          msg.textContent = m.text;
          root.appendChild(msg);
        }
        await sleep(4000);
      }
    };
    run();
    return () => { pitchAliveRef.current = false; };
  }, []);

  // ===== Carousel auto-advance =====
  useEffect(() => {
    const id = setInterval(() => setHowStep((s) => (s + 1) % 3), 8000);
    return () => clearInterval(id);
  }, []);

  // ===== Copy share link =====
  const copyShare = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    });
  }, []);

  // ===== Render SMS preview thread =====
  const smsThread = SMS_THREADS[smsIndustry];

  // ===== Try-the-AI mock playback =====
  const playMockDemo = useCallback(async (overrides?: { name?: string; business?: string; industry?: string; services?: string }) => {
    const userName = overrides?.name ?? tryName ?? "You";
    const businessName = overrides?.business ?? tryBusiness ?? "Your Business";
    const industry = overrides?.industry ?? tryIndustry;
    const services = overrides?.services ?? tryServices;
    const tpl = MOCK_TEMPLATES[industry];
    if (!tpl) return;

    const ctx = {
      userName,
      businessName,
      businessSlug: slugify(businessName),
      leadName: tpl.leadName,
      repName: tpl.repName,
      servicesLine: services ? `(we do ${services}) ` : "",
    };

    const fillTokens = (s: string) => s
      .replace(/\{\{businessName\}\}/g, ctx.businessName)
      .replace(/\{\{businessSlug\}\}/g, ctx.businessSlug)
      .replace(/\{\{userName\}\}/g, ctx.userName)
      .replace(/\{\{leadName\}\}/g, ctx.leadName)
      .replace(/\{\{repName\}\}/g, ctx.repName)
      .replace(/\{\{servicesLine\}\}/g, ctx.servicesLine);

    setTrySmsLetter((businessName.charAt(0) || "V").toUpperCase());
    setTrySmsName(businessName);
    setTrySmsStatus(`messaging ${tpl.leadName}…`);
    setTryStarted(true);
    tryRunningRef.current = true;

    const root = tryThreadRef.current;
    if (!root) return;
    root.innerHTML = "";

    for (const m of tpl.messages) {
      await sleep(m.delay || 1000);
      if (!tryRunningRef.current) return;
      if (m.pill) {
        const pill = document.createElement("div");
        pill.className = "calc-try-sms-pill";
        pill.textContent = m.pill;
        root.appendChild(pill);
      } else {
        if (m.dir === "received") {
          const t = document.createElement("div");
          t.className = "calc-try-sms-typing";
          t.innerHTML = "<span></span><span></span><span></span>";
          root.appendChild(t);
          root.scrollTop = root.scrollHeight;
          await sleep(800);
          if (!tryRunningRef.current) return;
          t.remove();
        }
        const bubble = document.createElement("div");
        bubble.className = "calc-try-sms-msg " + (m.dir || "sent");
        bubble.textContent = fillTokens(m.text || "");
        root.appendChild(bubble);
        if (m.time) {
          const time = document.createElement("div");
          time.className = "calc-try-sms-msg-time" + (m.dir === "sent" ? " sent-time" : "");
          time.textContent = m.time;
          root.appendChild(time);
        }
      }
      root.scrollTop = root.scrollHeight;
    }
    setTrySmsStatus("demo complete — ready for a real one?");
    tryRunningRef.current = false;
  }, [tryName, tryBusiness, tryIndustry, tryServices]);

  const onTrySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; business?: string } = {};
    if (!tryName.trim()) errors.name = "Please enter your first name.";
    if (!tryBusiness.trim()) errors.business = "Please enter your business name.";
    setTryErrors(errors);
    if (Object.keys(errors).length > 0) {
      const firstInvalid = errors.name ? "try-name" : "try-business";
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    playMockDemo();
  };

  const replayMockDemo = () => {
    tryRunningRef.current = false;
    setTimeout(() => playMockDemo(), 200);
  };

  const resetMockDemo = () => {
    tryRunningRef.current = false;
    setTryStarted(false);
    setTrySmsLetter("V");
    setTrySmsName("Voqal AI");
    setTrySmsStatus("Ready when you are");
    if (tryThreadRef.current) tryThreadRef.current.innerHTML = "";
  };

  return (
    <div className="calc-root">
      <Navbar variant="light" />

      {/* ===== HERO ===== */}
      <section className="calc-hero">
        <div className="calc-container">
          <div className="calc-hero-grid">
            <div>
              <span className="calc-hero-tag reveal"><span className="calc-dot"></span>For service businesses worldwide</span>
              <h1 className="calc-hero-headline reveal reveal-delay-1">Stop chasing fresh leads. <em>Wake up</em> the ones you have.</h1>
              <p className="calc-hero-sub reveal reveal-delay-2"><strong>Real conversations from leads you already paid for.</strong> We only get paid when you do.</p>
              <div className="calc-hero-ctas reveal reveal-delay-3">
                <Link href="/book" className="cbtn cbtn-accent">Book a demo <span className="arrow">→</span></Link>
                <a href="#try" className="cbtn cbtn-outline">Try the AI</a>
              </div>
            </div>
            <div className="calc-hero-chat reveal reveal-delay-2">
              <div className="calc-hero-chat-header">
                <div className="calc-hero-chat-avatar">J</div>
                <div className="calc-hero-chat-meta">
                  <h3>Jack Johnson</h3>
                  <p>Online</p>
                </div>
              </div>
              <div className="calc-hero-chat-thread" ref={heroThreadRef}></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAIN ===== */}
      <section className="calc-pain">
        <div className="calc-container">
          <h2 className="calc-pain-headline reveal">Manual reactivation is <span className="calc-pain-broken-stack"><span className="calc-broken">broken</span><span className="calc-broken calc-fade-1">broken</span><span className="calc-broken calc-fade-2">broken</span><span className="calc-broken calc-fade-3">broken</span></span>.</h2>
          <div className="calc-pain-cards">
            <div className="calc-pain-card reveal"><div className="calc-pain-card-icon">⚠️</div><p>Thousands of leads collecting dust in your CRM.</p></div>
            <div className="calc-pain-card reveal reveal-delay-1"><div className="calc-pain-card-icon">⏱️</div><p>Your team spends hours chasing people who don&apos;t reply.</p></div>
            <div className="calc-pain-card reveal reveal-delay-2"><div className="calc-pain-card-icon">📉</div><p>5–10% reply rates from manual chase. You do the math.</p></div>
            <div className="calc-pain-card reveal reveal-delay-3"><div className="calc-pain-card-icon">📧</div><p>Bulk emails that land in spam, not inboxes.</p></div>
          </div>
          <p className="calc-pain-emphasis reveal">You paid to get these leads. They&apos;re sitting in a spreadsheet doing nothing. <em>That changes today.</em></p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="calc-how" id="how">
        <div className="calc-container">
          <div className="calc-how-header">
            <span className="calc-eyebrow reveal">How it works</span>
            <h2 className="calc-heading-lg reveal reveal-delay-1">Three steps. <span className="calc-italic">You barely lift a finger.</span></h2>
          </div>
          <div className="calc-how-stage reveal reveal-delay-2">
            <div className={`calc-how-step ${howStep === 0 ? "active" : ""}`}>
              <div>
                <div className="calc-how-step-num">01</div>
                <h3>Drop your leads in. We handle the rest.</h3>
                <p>CSV, CRM export, or direct API integration. Live in 24 hours.</p>
                <ul className="calc-how-step-list">
                  <li>Dormant leads, ghosted contacts, even the ones your team gave up on</li>
                  <li>Auto-segmented by intent, value, and last interaction</li>
                  <li>Phone numbers verified against carrier opt-out lists</li>
                </ul>
              </div>
              <div className="calc-how-step-visual">
                <div className="calc-integration-grid">
                  <div className="calc-integration-pill"><span className="glyph">⚡</span>Salesforce</div>
                  <div className="calc-integration-pill"><span className="glyph">◇</span>HubSpot</div>
                  <div className="calc-integration-pill"><span className="glyph">▲</span>Pipedrive</div>
                  <div className="calc-integration-pill"><span className="glyph">●</span>GoHighLevel</div>
                  <div className="calc-integration-pill"><span className="glyph">◆</span>Sheets</div>
                  <div className="calc-integration-pill"><span className="glyph">■</span>Excel</div>
                  <div className="calc-integration-pill"><span className="glyph">▼</span>Airtable</div>
                  <div className="calc-integration-pill"><span className="glyph">○</span>CSV</div>
                  <div className="calc-integration-pill"><span className="glyph">{`{ }`}</span>API</div>
                </div>
              </div>
            </div>
            <div className={`calc-how-step ${howStep === 1 ? "active" : ""}`}>
              <div>
                <div className="calc-how-step-num">02</div>
                <h3>Real conversations, not spam.</h3>
                <p>AI that reads intent, handles objections, and knows when to hand off to your team.</p>
                <ul className="calc-how-step-list">
                  <li>Replies in seconds, any time of day</li>
                  <li>Speaks their language, matches your tone</li>
                  <li>Knows when to push and when to pass to a human</li>
                  <li>Built on proven sales frameworks for objection handling</li>
                </ul>
              </div>
              <div className="calc-how-step-visual">
                <div className="calc-conv-mock">
                  <div className="calc-conv-line calc-conv-s">Hi Mark, Sophie here from Northwest Electrical. You enquired about a fuse box upgrade in July. Still on your list?</div>
                  <div className="calc-conv-pill-wrap"><div className="calc-conv-pill">Lead engaged</div></div>
                  <div className="calc-conv-line calc-conv-r">Yeah we got busy with summer. Still need it doing.</div>
                  <div className="calc-conv-pill-wrap"><div className="calc-conv-pill">Handling objection</div></div>
                  <div className="calc-conv-line calc-conv-s">No worries — we&apos;ve a couple of slots next week. Want me to send the calendar?</div>
                  <div className="calc-conv-line calc-conv-r">Yes please</div>
                </div>
              </div>
            </div>
            <div className={`calc-how-step ${howStep === 2 ? "active" : ""}`}>
              <div>
                <div className="calc-how-step-num">03</div>
                <h3>Calls booked. Revenue tracked.</h3>
                <p>Qualified leads land on your calendar. You see everything in real time.</p>
                <ul className="calc-how-step-list">
                  <li>Qualified leads land directly on your calendar</li>
                  <li>Supports bookings, reservations, direct sales</li>
                  <li>Weekly optimisation so results improve over time</li>
                  <li>Live dashboard with every conversation and metric</li>
                </ul>
              </div>
              <div className="calc-how-step-visual">
                <div className="calc-calendar-mock">
                  <div className="calc-calendar-mock-header"><span>Mon, 5 May</span><span style={{ color: "var(--calc-accent)" }}>3 booked</span></div>
                  <div className="calc-calendar-slot booked"><div><div className="calc-slot-time">10:00</div><div className="calc-slot-name">Mark Pearson — Trades</div></div><span className="calc-slot-tag">New</span></div>
                  <div className="calc-calendar-slot booked"><div><div className="calc-slot-time">14:30</div><div className="calc-slot-name">Laura Quinn — Dental</div></div><span className="calc-slot-tag">New</span></div>
                  <div className="calc-calendar-slot booked"><div><div className="calc-slot-time">16:15</div><div className="calc-slot-name">Ellen Carter — Coaching</div></div><span className="calc-slot-tag">New</span></div>
                  <div className="calc-calendar-slot"><div><div className="calc-slot-time">17:00</div><div className="calc-slot-name">Open</div></div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="calc-how-controls">
            <button className="calc-how-arrow" onClick={() => setHowStep((s) => (s + 2) % 3)} aria-label="Previous">←</button>
            <div className="calc-how-dots">
              {[0,1,2].map((i) => (
                <button key={i} className={`calc-how-dot ${howStep === i ? "active" : ""}`} onClick={() => setHowStep(i)} aria-label={`Step ${i+1}`}></button>
              ))}
            </div>
            <button className="calc-how-arrow" onClick={() => setHowStep((s) => (s + 1) % 3)} aria-label="Next">→</button>
          </div>
        </div>
      </section>

      {/* ===== KANBAN ===== */}
      <section className="calc-kanban">
        <div className="calc-container">
          <div className="calc-kanban-header">
            <span className="calc-eyebrow reveal">What you see</span>
            <h2 className="calc-heading-lg reveal reveal-delay-1">Watch dead leads <span className="calc-italic">move through your pipeline</span>. Live.</h2>
          </div>
          <div className="calc-kanban-board reveal reveal-delay-2">
            <div className="calc-kanban-col" data-stage="engaged">
              <div className="calc-kanban-col-header"><div className="calc-kanban-col-title">Engaged</div><div className="calc-kanban-count">3</div></div>
              <div className="calc-kanban-card"><div className="calc-kanban-card-name">Alice Chen <span className="arrow">→</span></div><div className="calc-kanban-card-meta"><span>3h ago</span><span>+44 7700 900123</span></div></div>
              <div className="calc-kanban-card"><div className="calc-kanban-card-name">Bob Smith <span className="arrow">→</span></div><div className="calc-kanban-card-meta"><span>3h ago</span><span>+1 (415) 555 0234</span></div></div>
              <div className="calc-kanban-card"><div className="calc-kanban-card-name">Carol Wu <span className="arrow">→</span></div><div className="calc-kanban-card-meta"><span>3h ago</span><span>+971 4 555 0345</span></div></div>
            </div>
            <div className="calc-kanban-col" data-stage="replied">
              <div className="calc-kanban-col-header"><div className="calc-kanban-col-title">Replied</div><div className="calc-kanban-count">1</div></div>
              <div className="calc-kanban-card"><div className="calc-kanban-card-name">David Miller <span className="arrow">→</span></div><div className="calc-kanban-card-meta"><span>2h ago</span><span>+1 (332) 555 0456</span></div></div>
            </div>
            <div className="calc-kanban-col" data-stage="qualified">
              <div className="calc-kanban-col-header"><div className="calc-kanban-col-title">Qualified</div><div className="calc-kanban-count">1</div></div>
              <div className="calc-kanban-card"><div className="calc-kanban-card-name">Eva Green <span className="arrow">→</span></div><div className="calc-kanban-card-meta"><span>1h ago</span><span>+44 7700 900567</span></div></div>
            </div>
            <div className="calc-kanban-col" data-stage="booked">
              <div className="calc-kanban-col-header"><div className="calc-kanban-col-title">Booked</div><div className="calc-kanban-count">1</div></div>
              <div className="calc-kanban-card"><div className="calc-kanban-card-name">Frank Wright <span className="arrow">→</span></div><div className="calc-kanban-card-meta"><span>20m ago</span><span>+971 4 555 0678</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="calc-stats">
        <div className="calc-container">
          <div className="calc-stats-header">
            <span className="calc-eyebrow reveal">And what you get</span>
            <h2 className="calc-heading-lg reveal reveal-delay-1">Numbers that <span className="calc-italic">pay for themselves</span>.</h2>
          </div>
          <div className="calc-stats-grid">
            <div className="calc-stat-card reveal"><div className="calc-stat-num">79%</div><p className="calc-stat-label">Of marketing leads never convert — for lack of follow-up.</p><p className="calc-stat-source">Salesforce / MarketingSherpa</p></div>
            <div className="calc-stat-card reveal reveal-delay-1"><div className="calc-stat-num">44%</div><p className="calc-stat-label">Of leads, sales reps don&apos;t ring even once.</p><p className="calc-stat-source">Salesforce</p></div>
            <div className="calc-stat-card reveal reveal-delay-2"><div className="calc-stat-num">6–7×</div><p className="calc-stat-label">Cheaper to reactivate an old lead than to acquire a new one.</p><p className="calc-stat-source">Industry consensus</p></div>
            <div className="calc-stat-card reveal reveal-delay-3"><div className="calc-stat-num">+25–95%</div><p className="calc-stat-label">Revenue lift from a 5% increase in reactivation.</p><p className="calc-stat-source">Bain &amp; Company</p></div>
          </div>
          <p className="calc-stats-quote reveal">&ldquo;You don&apos;t need more leads. You need to stop losing the ones you have.&rdquo;</p>
        </div>
      </section>

      {/* ===== PITCH ===== */}
      <section className="calc-pitch">
        <div className="calc-container">
          <div className="calc-pitch-grid">
            <div className="calc-pitch-copy">
              <span className="calc-eyebrow reveal">Live demo</span>
              <h2 className="calc-heading-lg reveal reveal-delay-1">Let the AI <span className="calc-italic">pitch you</span>.</h2>
              <p className="reveal reveal-delay-2">Watch how Voqal handles a real price objection. Same language patterns we&apos;d run on your dormant pipeline — minus the hard sell.</p>
              <a href="#try" className="cbtn cbtn-accent reveal reveal-delay-3">Try it on your phone <span className="arrow">→</span></a>
            </div>
            <div className="calc-pitch-window reveal reveal-delay-2">
              <div className="calc-pitch-window-header">
                <div className="calc-pitch-window-avatar">V</div>
                <div>
                  <div className="calc-pitch-window-name">Voqal AI</div>
                  <div className="calc-pitch-window-status">live</div>
                </div>
              </div>
              <div className="calc-pitch-thread" ref={pitchThreadRef}></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALCULATOR ===== */}
      <section className="calc-section" id="calculator">
        <div className="calc-container">
          <div className="calc-header">
            <span className="calc-title-tag reveal"><span style={{ fontSize: "0.9rem" }}>▰</span>Revenue Recovery Calculator</span>
            <h2 className="calc-heading-lg reveal reveal-delay-1">You bought these leads. <span className="calc-italic">Let&apos;s make them pay.</span></h2>
            <p className="reveal reveal-delay-2" style={{ color: "var(--calc-text-body)", fontSize: "1.0625rem", marginTop: "1rem" }}>A 60-second diagnosis of how much revenue is asleep in your CRM. Adjust to your business — figures update live.</p>
          </div>

          <div className="calc-card reveal reveal-delay-2">
            <div className="calc-inputs">
              <div>
                <div className="calc-label-row"><label className="calc-label" htmlFor="leads">Leads you&apos;ve already paid for</label><span className="calc-value">{fmt.format(leads)}</span></div>
                <input type="range" id="leads" min={500} max={50000} step={100} value={leads} onChange={(e) => setLeads(Number(e.target.value))} />
                <div className="calc-slider-bounds"><span>500</span><span>50,000</span></div>
              </div>
              <div>
                <div className="calc-label-row"><label className="calc-label" htmlFor="deal">What each deal is worth</label><span className="calc-value">{fmtMoney(deal)}</span></div>
                <input type="range" id="deal" min={50} max={25000} step={50} value={deal} onChange={(e) => setDeal(Number(e.target.value))} />
                <div className="calc-slider-bounds"><span>£50</span><span>£25,000</span></div>
              </div>
              <div>
                <div className="calc-label-row"><label className="calc-label" htmlFor="cost">What you paid per lead</label><span className="calc-value">{fmtMoney(cost)}</span></div>
                <input type="range" id="cost" min={0.25} max={80} step={0.25} value={cost} onChange={(e) => setCost(Number(e.target.value))} />
                <div className="calc-slider-bounds"><span>£0.25</span><span>£80</span></div>
              </div>
              <div>
                <div className="calc-scenario-tabs" role="tablist">
                  {SCENARIOS.map((s, i) => (
                    <button key={s.label} className={`calc-scenario-tab ${scenario === i ? "active" : ""}`} onClick={() => { setScenario(i); setCloseRate(Math.round(SCENARIOS[i].defaultClose * 100)); }}>{s.label}</button>
                  ))}
                </div>
              </div>
              <div>
                <div className="calc-label-row"><label className="calc-label" htmlFor="closerate">Close rate (your team&apos;s number)</label><span className="calc-value">{closeRate}%</span></div>
                <input type="range" id="closerate" min={5} max={90} step={1} value={closeRate} onChange={(e) => setCloseRate(Number(e.target.value))} />
                <div className="calc-slider-bounds"><span>5%</span><span>90%</span></div>
              </div>
            </div>

            <div className="calc-output">
              <div>
                <div className="calc-funnel-row"><span className="calc-funnel-row-label">Your lead amount</span><span className="calc-funnel-row-value">{fmt.format(leads)}</span></div>
                <div className="calc-funnel-row"><span className="calc-funnel-row-label">How many re-engage</span><span className="calc-funnel-row-value">{fmt.format(responded)}<span className="calc-funnel-row-pct">({Math.round(sc.responseRate * 100)}%)</span></span></div>
                <div className="calc-funnel-row"><span className="calc-funnel-row-label">How many book a call</span><span className="calc-funnel-row-value">{fmt.format(qualified)}<span className="calc-funnel-row-pct">({Math.round(sc.responseRate * sc.qualifiedRate * 100)}%)</span></span></div>
                <div className="calc-funnel-row"><span className="calc-funnel-row-label">How many deals you close</span><span className="calc-funnel-row-value">{fmt.format(closed)}<span className="calc-funnel-row-pct">({(sc.responseRate * sc.qualifiedRate * (closeRate/100) * 100).toFixed(1)}%)</span></span></div>
              </div>

              <div className="calc-result-panel">
                <div className="calc-result-label">New revenue you&apos;d unlock</div>
                <div className={`calc-result-number ${resultBump ? "bump" : ""}`}>{fmtMoney(revenue)}</div>
                <div className="calc-result-detail">Voqal fee at £50/booking: <strong>{fmtMoney(fee)}</strong> &nbsp;·&nbsp; Your net: <strong>{fmtMoney(net)}</strong></div>
              </div>

              <div className="calc-share">
                <span>Want to share these numbers?</span>
                <button className={shareCopied ? "copied" : ""} onClick={copyShare}>{shareCopied ? "✓ Copied!" : "↗ Copy link"}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SMS PREVIEW ===== */}
      <section className="calc-sms">
        <div className="calc-container">
          <div className="calc-sms-header">
            <span className="calc-eyebrow reveal">SMS templates</span>
            <h2 className="calc-heading-lg reveal reveal-delay-1">This is what we&apos;d <span className="calc-italic">actually send</span>.</h2>
            <p className="reveal reveal-delay-2" style={{ color: "var(--calc-text-body)", fontSize: "1.0625rem", maxWidth: "540px", margin: "1rem auto 0" }}>Real conversations, not bulk blasts. Each message references where that lead actually left off — never a generic template.</p>
          </div>
          <div className="calc-industry-pills reveal reveal-delay-2">
            {[
              { id: "trades", label: "Trades" },
              { id: "dental", label: "Dental clinic" },
              { id: "gym", label: "Gym" },
              { id: "coaching", label: "Coaching" },
              { id: "agency", label: "Agency" },
            ].map((p) => (
              <button key={p.id} className={`calc-industry-pill ${smsIndustry === p.id ? "active" : ""}`} onClick={() => setSmsIndustry(p.id)}>{p.label}</button>
            ))}
          </div>
          <div className="calc-sms-phone reveal reveal-delay-3">
            <div className="calc-sms-phone-header">
              <div className="calc-sms-phone-name">{smsThread.name}</div>
              <div className="calc-sms-phone-number">+44 7700 900 123</div>
            </div>
            <div className="calc-sms-thread">
              {smsThread.messages.map((m, i) => {
                if (m.pill) return <div key={i} className="calc-sms-pill">{m.pill}</div>;
                return (
                  <span key={i} style={{ display: "contents" }}>
                    <div className={`calc-sms-bubble ${m.dir === "sent" ? "calc-sms-sent" : "calc-sms-received"}`}>{m.text}</div>
                    {m.time && <div className="calc-sms-bubble-meta">{m.time}</div>}
                  </span>
                );
              })}
            </div>
          </div>
          <p className="calc-sms-caption reveal">Pick an industry above to switch the script.</p>
        </div>
      </section>

      {/* ===== PRIVACY ===== */}
      <section className="calc-privacy">
        <div className="calc-container">
          <div className="calc-privacy-header">
            <span className="calc-eyebrow reveal">Compliance, baked in</span>
            <h2 className="calc-heading-lg reveal reveal-delay-1">We move fast. <span className="calc-italic">Your reputation stays intact.</span></h2>
            <p className="reveal reveal-delay-2" style={{ color: "var(--calc-text-body)", fontSize: "1.0625rem", maxWidth: "540px", margin: "1rem auto 0" }}>Every conversation follows your brand guidelines, respects opt-outs, and meets GDPR, TCPA, and regional privacy standards. No shortcuts.</p>
          </div>
          <div className="calc-privacy-grid">
            <div className="calc-privacy-card reveal"><div className="calc-privacy-icon">⊕</div><h3>Privacy by design</h3><p>Opt-outs are removed instantly. Data stays on the right regional infrastructure for your market — EU, US, or Middle East. Every message includes an easy exit. Your legal team will have nothing to flag.</p></div>
            <div className="calc-privacy-card reveal reveal-delay-1"><div className="calc-privacy-icon">◈</div><h3>Your voice, not ours</h3><p>The AI learns your tone, your product language, and your boundaries. Off-topic conversations are flagged before they reach your contact. You stay in control.</p></div>
            <div className="calc-privacy-card reveal reveal-delay-2"><div className="calc-privacy-icon">⊟</div><h3>Audit-trail every message</h3><p>Full conversation logs, with consent timestamps and channel records. Export to your CRM, your DPO, or your compliance officer. Nothing hidden.</p></div>
          </div>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="calc-founder">
        <div className="calc-container calc-founder-inner">
          <span className="calc-eyebrow reveal">Why we built this</span>
          <p className="calc-founder-quote reveal reveal-delay-1"><span className="calc-quote-mark">&ldquo;</span>Most service businesses are spending thousands filling a bucket that&apos;s leaking from the bottom. They don&apos;t need more leads — they need to stop losing the ones they already have.<span className="calc-quote-mark">&rdquo;</span></p>
          <div className="calc-founder-attr reveal reveal-delay-2">
            <div className="calc-founder-avatar">T</div>
            <div className="calc-founder-info">
              <h4>Tom Parry</h4>
              <p>Founder, Voqal AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRY ===== */}
      <section className="calc-try" id="try">
        <div className="calc-container">
          <div className="calc-try-grid">
            <div className="calc-try-copy">
              <span className="calc-eyebrow reveal">Try Voqal live</span>
              <h2 className="calc-heading-lg reveal reveal-delay-1">Watch your dormant leads <span className="calc-italic">come back to life</span>.</h2>
              <p className="reveal reveal-delay-2">Tell us about your business. We&apos;ll show you exactly how Voqal would text one of your sleeping leads — using your business name, your services, your tone.</p>
              <form className="calc-try-form reveal reveal-delay-3" onSubmit={onTrySubmit} noValidate>
                <div className="calc-try-field">
                  <label htmlFor="try-name">Your first name</label>
                  <input
                    type="text"
                    id="try-name"
                    placeholder="Tom"
                    value={tryName}
                    onChange={(e) => { setTryName(e.target.value); if (tryErrors.name) setTryErrors({ ...tryErrors, name: undefined }); }}
                    aria-invalid={!!tryErrors.name}
                    aria-describedby={tryErrors.name ? "try-name-error" : undefined}
                    className={tryErrors.name ? "calc-try-input-error" : undefined}
                  />
                  {tryErrors.name && <p id="try-name-error" className="calc-try-error">{tryErrors.name}</p>}
                </div>
                <div className="calc-try-field">
                  <label htmlFor="try-business">Business name</label>
                  <input
                    type="text"
                    id="try-business"
                    placeholder="Northwest Electrical"
                    value={tryBusiness}
                    onChange={(e) => { setTryBusiness(e.target.value); if (tryErrors.business) setTryErrors({ ...tryErrors, business: undefined }); }}
                    aria-invalid={!!tryErrors.business}
                    aria-describedby={tryErrors.business ? "try-business-error" : undefined}
                    className={tryErrors.business ? "calc-try-input-error" : undefined}
                  />
                  {tryErrors.business && <p id="try-business-error" className="calc-try-error">{tryErrors.business}</p>}
                </div>
                <div className="calc-try-field">
                  <label htmlFor="try-industry">What does your business do?</label>
                  <select id="try-industry" value={tryIndustry} onChange={(e) => setTryIndustry(e.target.value)}>
                    <option value="trades">Trades / electrical</option>
                    <option value="plumbing">Plumbing / heating</option>
                    <option value="dental">Dental practice</option>
                    <option value="gym">Gym / personal training</option>
                    <option value="coaching">Coaching / consulting</option>
                    <option value="agency">Agency / professional services</option>
                    <option value="realestate">Estate agency</option>
                    <option value="legal">Law firm / conveyancing</option>
                    <option value="salon">Hair salon / beauty</option>
                    <option value="accountancy">Accountancy / bookkeeping</option>
                  </select>
                </div>
                <div className="calc-try-field">
                  <label htmlFor="try-services">What do you sell? <span style={{ color: "var(--calc-text-soft)", fontWeight: 400 }}>(optional — makes the demo more specific)</span></label>
                  <textarea id="try-services" placeholder="e.g. fuse box upgrades, EV charger installs, smart-home wiring" value={tryServices} onChange={(e) => setTryServices(e.target.value)}></textarea>
                </div>
                <button type="submit" className="calc-try-submit">Show me how it&apos;d work <span className="arrow">→</span></button>
                <p className="calc-try-fineprint">No card, no signup. Just a 30-second simulation using your details. <Link href="/book">Want a real walkthrough? Book 15 min →</Link></p>
              </form>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="calc-try-sms-phone">
                <div className="calc-try-sms-screen">
                  <div className="calc-try-sms-notch"></div>
                  <div className="calc-try-sms-header">
                    <div className="calc-try-sms-avatar-wrap">
                      <div className="calc-try-sms-avatar">{trySmsLetter}</div>
                      <div className="calc-try-sms-name">{trySmsName} <span className="chev">▾</span></div>
                      <div className="calc-try-sms-status">{trySmsStatus}</div>
                    </div>
                  </div>
                  <div className="calc-try-sms-thread" ref={tryThreadRef}>
                    {!tryStarted && (
                      <div className="calc-try-sms-empty">
                        <div className="calc-try-sms-empty-icon">✦</div>
                        <h4>Fill the form</h4>
                        <p>We&apos;ll personalise a real-feeling SMS conversation using your business details.</p>
                      </div>
                    )}
                  </div>
                  {tryStarted && (
                    <div className="calc-try-sms-controls">
                      <button className="calc-try-sms-btn" onClick={resetMockDemo}>↺ Reset</button>
                      <button className="calc-try-sms-btn primary" onClick={replayMockDemo}>↻ Replay</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="calc-pricing">
        <div className="calc-container">
          <div className="calc-pricing-card reveal">
            <span className="calc-eyebrow">The clincher</span>
            <h2 className="calc-heading-lg">We only get paid <span className="calc-italic">when you do</span>.</h2>
            <div className="calc-pricing-grid">
              <div><div className="calc-pricing-num">£0</div><p className="calc-pricing-lbl">Setup<br/>No retainer</p></div>
              <div><div className="calc-pricing-num">£50</div><p className="calc-pricing-lbl">Per confirmed booking<br/>Only when they pick a time</p></div>
              <div><div className="calc-pricing-num">14d</div><p className="calc-pricing-lbl">Pilot window<br/>Cancel anytime</p></div>
            </div>
            <p className="calc-pricing-foot">If we don&apos;t book you any calls, you owe us nothing.</p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="calc-cta">
        <div className="calc-container calc-cta-inner">
          <span className="calc-eyebrow reveal">Ready?</span>
          <h2 className="calc-heading-lg reveal reveal-delay-1">Bring your CRM. We&apos;ll show you the <span className="calc-italic">live numbers</span>.</h2>
          <p className="reveal reveal-delay-2">15-minute walkthrough. We&apos;ll plug your real lead count into this calculator on the call and show you exactly what to expect.</p>
          <Link href="/book" className="cbtn cbtn-accent cbtn-large reveal reveal-delay-3">Book a 15-min walkthrough <span className="arrow">→</span></Link>
          <p className="calc-cta-foot reveal">Voqal AI Ltd · UK +44 20 3996 0962 · US +1 (332) 264 1587 · info@voqalai.com</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
