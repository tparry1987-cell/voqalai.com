# ElevenLabs Platform Guide - Voqal AI (Creator Plan)

Last updated: 2026-03-07

## Plan Overview - Creator ($22/mo)

| Feature | Detail |
|---------|--------|
| Monthly credits | 100,000 characters (~40-50 hours of generated audio) |
| Instant Voice Cloning | Unlimited |
| Professional Voice Cloning | 1 slot |
| Audio quality | 192 kbps (highest before Pro) |
| Commercial license | Yes - you own generated content |
| Projects in Studio | 20 |
| Music generation | Yes (commercial use) |
| Sound effects | Yes (royalty-free, commercial) |
| Dubbing | 29 languages |
| Voice agents (ElevenAgents) | Yes - full conversational AI platform |
| Credit rollover | Up to 2 months of unused credits |
| Overflow billing | Available at reduced per-character rates |

---

## Voice Cloning

### Instant Voice Cloning (IVC)

- **Audio needed:** 1-2 min of clean audio (do NOT exceed 3 min - more degrades quality)
- **Format:** MP3 at 128kbps+ or WAV
- **Turnaround:** Minutes
- **Who creates it:** You (with client consent via passphrase)
- **Quality:** Good for demos, testing, and production voice agents
- **Sharing:** Cannot be shared publicly via Voice Library
- **Plan limit:** Unlimited on Creator

### Professional Voice Cloning (PVC)

- **Audio needed:** 30 min minimum, 2-3 hours ideal
- **Recording specs:** 44.1kHz or 48kHz, 24-bit, RMS between -23dB and -18dB, true peak below -3dB
- **Turnaround:** Longer (verification + training process)
- **Who creates it:** Voice owner MUST create it themselves (log into your account or theirs)
- **Quality:** Near-indistinguishable from original voice
- **Sharing:** Can be shared publicly via Voice Library
- **Plan limit:** 1 slot on Creator

**Critical PVC limitation:** You CANNOT create a Professional Voice Clone of someone else's voice, even with written consent. The voice owner must do it on their own account or log into yours.

---

## TTS Models - Which to Use

| Model | Latency | Quality | Best For |
|-------|---------|---------|----------|
| Flash v2.5 | ~75ms | Good | Real-time phone agents (recommended for calls) |
| Turbo v2.5 | ~250ms | High | Balanced quality/speed, conversational AI |
| Multilingual v2 | Standard | Highest (emotional) | Long-form, expressive content |
| Eleven v3 | Higher | State-of-the-art | Pre-recorded content (NOT for real-time) |

**For phone voice agents: Use Flash v2.5 or Turbo v2.5.**

---

## ElevenAgents - Conversational AI Platform

ElevenLabs has a full voice agent platform that competes directly with Retell AI.

### Architecture
1. Speech-to-Text (fine-tuned ASR)
2. Your choice of LLM
3. Text-to-Speech (sub-100ms latency, 5000+ voices, 70+ languages)
4. Proprietary turn-taking model (natural conversation flow)

### Deployment Channels
- Web (browser widget)
- Mobile (iOS/Android)
- Phone calls via Twilio or SIP trunking (inbound + outbound)
- WhatsApp (voice + text, added Dec 2025)
- Custom integrations via API

### Key Features
- Knowledge base integration (RAG - connect FAQs, docs)
- Tool integration (Salesforce, Zendesk, Stripe, webhooks)
- 400+ pre-configured integrations
- Unified monitoring across all channels
- Sub-100ms latency

### Cost
- ~$0.08/minute (vs Retell's ~$0.07/minute)

---

## ElevenAgents vs Retell AI

### Retell Strengths (why we still use it)
- Native telephony (simpler setup)
- Warm transfer
- DTMF/IVR support
- Auto knowledge base sync
- Post-call analytics
- SMS/email capabilities
- Hallucination monitoring

### ElevenAgents Strengths
- Superior voice quality (clone stays native, no integration issues)
- WhatsApp channel
- 400+ integrations
- Potentially simpler stack (no third-party TTS integration needed)

### Recommendation
- **Current production:** Retell AI + ElevenLabs voices (proven setup)
- **Worth testing:** ElevenAgents + Twilio as alternative - simpler stack, better voice quality since clone stays native
- **Decision point:** When ElevenAgents adds warm transfer and post-call analytics, it may become the better option

---

## Other Platform Capabilities

### Voice Design
Generate unique voices from text prompts (no cloning needed):
- Write a description (accent, age, gender, personality)
- System generates 3 options to choose from
- Save to your library
- Only costs credits for preview text generation

### Voice Isolator
AI tool that removes background noise from recordings:
- Removes ambient noise, mic feedback, street sounds
- Costs 1000 characters per minute of audio
- Supports files up to 500MB / 1 hour
- **Use this to clean client audio before uploading for cloning**

### Pronunciation Dictionaries
Force specific pronunciations using IPA or CMU phonemes. Useful for:
- Brand names
- Technical terms
- Client-specific terminology

### Studio/Projects
Professional editing for audiobooks, podcasts. 20 projects on Creator plan.

### Sound Effects
Generate royalty-free SFX from text prompts. Commercial use included.

### Dubbing
Translate & dub content across 29 languages. Preserves emotion and timing.

### Speech-to-Text (Scribe)
Real-time and batch transcription.

### Music Generation
Studio-grade music from natural language prompts. Commercial use included.

---

## Recording Best Practices for Voice Cloning

### For Instant Clone (1-2 min)

**DO:**
1. Record in acoustically-treated or carpeted room
2. Use pop filter to eliminate plosives
3. Position mic ~20cm (two fists) from mouth, speak at slight angle
4. Maintain ONE consistent performance style throughout
5. Use natural, conversational pace (130-150 words/min)
6. Include phonetically-balanced content (varied vowels, consonants, clusters)
7. Use client's own written material when possible (natural rhythm comes through)
8. Pre-treat room temperature before recording (avoid AC noise during session)
9. Clean audio with ElevenLabs Voice Isolator before uploading

**DON'T:**
1. Mix animated and subdued performances (AI becomes unstable)
2. Change microphones mid-recording
3. Include "ums," "ahs," long pauses, breaths - they all get cloned
4. Use background music or have other speakers present
5. Whisper or shout - keep it consistent
6. Upload more than 3 min for instant clone (counterintuitively reduces quality)

### For Professional Clone (30 min - 3 hours)

Same rules as above, plus:
- High-quality recording equipment essential (XLR mic + interface recommended)
- Target audio levels: RMS between -23dB and -18dB, true peak below -3dB
- 44.1kHz or 48kHz, 24-bit
- Voice owner must do the verification step themselves using same/similar equipment

### Equipment Recommendations

| Level | Setup | Cost |
|-------|-------|------|
| Budget | Modern smartphone in quiet room | Free |
| Better | USB mic (Blue Yeti, AT ATR2100x) | $100-150 |
| Professional | XLR mic (AT2020, Rode NT1) + Focusrite interface + pop filter | $300-500 |

Quality of input directly correlates with quality of output. A $200-300 mic setup dramatically improves results.

---

## Consent & Verification

### Instant Clone
- Client records a randomly-generated passphrase from ElevenLabs
- You can send them a link or have them record on call

### Professional Clone
- Voice owner must verify using same/similar equipment as training samples
- Same tone and delivery as training material
- If verification fails, can retry after 24 hours
- Only the voice owner can create PVC

---

## Retell Integration Steps

1. Clone in ElevenLabs > copy Voice ID
2. In Retell: type ElevenLabs voice name/ID in voice selector
3. Or: "Add custom voice" > upload same audio directly to Retell's cloning
4. **Known issue:** BYOK for private ElevenLabs voices can be finicky - some clones not selectable in Retell
5. Fallback: upload the same audio directly to Retell's built-in voice cloning

---

## Competitive Landscape

| Platform | Latency | Clone Time | Cost vs ElevenLabs | Strength |
|----------|---------|------------|-------------------|----------|
| ElevenLabs Flash v2.5 | ~75ms | 1-2 min (IVC) | Baseline | 5k+ voices, quality, established |
| Cartesia Sonic-3 | ~40ms | 15 seconds | ~73% cheaper | Fastest latency, cheapest |
| Deepgram Aura-2 | ~90ms | Limited | Mid-range | Good for phone agents |
| PlayHT | Higher | Instant available | Similar | 600+ voices, 142 languages |

Cartesia is worth watching (4x faster, 73% cheaper) but ElevenLabs has the most mature voice cloning and largest voice library.
