# ElevenLabs Voice Cloning - Internal Process Guide

## Quick Reference

| Item | Detail |
|------|--------|
| Service | ElevenLabs (elevenlabs.io) |
| Current plan | Creator ($22/mo) |
| Methods | Instant Voice Cloning (unlimited) + Professional Voice Cloning (1 slot) |
| Audio needed (IVC) | 1-2 min clean audio - do NOT exceed 3 min (MP3 128kbps+ or WAV) |
| Audio needed (PVC) | 30 min - 3 hours (voice owner must create it themselves) |
| Turnaround | Minutes (IVC) / Longer with verification (PVC) |
| Credits | 100,000 chars/mo (~40-50 hours), rolls over up to 2 months |
| Integration | Retell AI (paste Voice ID) or ElevenAgents (native) |
| Full platform guide | See elevenlabs-platform-guide.md |

---

## Pricing

| Plan | Price | Credits | Voice Cloning |
|------|-------|---------|---------------|
| Free | $0/mo | 10k chars (~20 min) | 3 instant clones (non-commercial) |
| Starter | $5/mo | 30k chars | Instant cloning, commercial license |
| **Creator** | **$22/mo** | **100k chars** | **Instant (unlimited) + Professional (1 slot)** |
| Pro | $99/mo | 500k chars | Instant + Professional cloning |

Annual plans get 2 months free. We are on the **Creator** plan.

---

## Cloning Options

### Instant Voice Cloning (Recommended for demos + production)
- 1-2 min of clean audio (do NOT exceed 3 min - more degrades quality)
- You upload it yourself (with client consent via passphrase)
- Ready in minutes
- Good quality for voice agents
- Unlimited on Creator plan

### Professional Voice Cloning (Maximum realism)
- 30 min minimum, 2-3 hours ideal
- Voice owner MUST create it themselves (log into your account or theirs)
- Near-indistinguishable from original voice
- Recording specs: 44.1/48kHz, 24-bit, RMS -23dB to -18dB, peak below -3dB
- 1 slot on Creator plan
- Only use if client wants maximum realism after hearing the instant clone

### Voice Isolator (Pre-processing)
- Run client audio through ElevenLabs Voice Isolator before cloning
- Removes ambient noise, mic feedback, street sounds
- Costs 1000 characters per minute of audio
- Significantly improves clone quality from phone/WhatsApp recordings

---

## Step-by-Step Process

1. **Send the client** the preparation document (voice-cloning-client-prep.html or the text version)
2. **Receive** their audio recording (MP3/WAV, 1-2 min)
3. **Clean the audio** using ElevenLabs Voice Isolator (especially if recorded on phone)
4. **Upload to ElevenLabs** > VoiceLab > Add Voice > Instant Voice Clone
5. **Complete consent** - client records the ElevenLabs verification passphrase
6. **Test the clone** in ElevenLabs playground (use Flash v2.5 or Turbo v2.5 model)
7. **Copy the Voice ID** from ElevenLabs voice settings
8. **Integrate with Retell AI:**
   - Go to Retell dashboard > voice settings
   - Paste the ElevenLabs Voice ID
   - If private clones don't work via Voice ID, upload the audio directly to Retell's own voice cloning feature
   - Use ElevenLabs Flash v2.5 for low latency phone agents
9. **Build demo agent** in Retell with the cloned voice + industry-specific prompt
10. **Get a Retell phone number** for the demo
11. **Send the client** the number to call and hear their voice as the AI agent
12. **Optionally** record a demo call as MP3 backup to send

### Alternative: ElevenAgents (skip Retell)
1. Create an agent in ElevenLabs Agents
2. Connect Twilio (Account SID + Auth Token) for phone calls
3. Clone stays native - no integration issues
4. Supports inbound + outbound calls, WhatsApp
5. ~$0.08/min vs Retell's ~$0.07/min
6. See elevenlabs-platform-guide.md for full comparison

---

## Retell AI Integration Notes

- Retell supports pasting ElevenLabs Voice IDs directly
- BYOK for private ElevenLabs voices has been reported as limited - if it doesn't work:
  - Upload the same WAV/MP3 (1-5 min) directly to Retell's built-in voice cloning
  - Contact Retell support for help with private clone integration
- Retell supports ElevenLabs Flash v2.5 for low-latency conversational AI

---

## Consent Requirements

ElevenLabs requires proof that the voice owner consents to cloning:
- The photographer must record a randomly-generated passphrase from ElevenLabs
- Options:
  - Send him a link to record it within your ElevenLabs account
  - Have him record it on a call/video and you upload it
- Keep the consent recording on file

---

## Verification & Demo Delivery

1. Test the cloned voice in ElevenLabs playground first
2. Create a Retell agent with a photography-specific prompt
3. Assign the cloned voice to the agent
4. Get a Retell phone number for the demo
5. Send the photographer the number to call
6. Record a demo call as MP3 backup
