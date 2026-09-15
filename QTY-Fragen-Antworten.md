# Questions for the web developer — response sheet

**Scope note (read first):** This sheet was compiled against the `quitty` repository
(`github.com/SyntechOrg/quitty`), which is the **marketing website only** — a Next.js app with no
API routes of its own. It contains **no app code, no backend, no database and no AI assistant**.
Questions C1, C2, C5, F1 and F2 are about the Quitty product, not the website, and cannot be answered
from here.

**Some findings in this sheet have already been remediated** — those sections say so, and give the
before/after, since the reviewer will want the remediation recorded rather than hidden.

Legend: **[VERIFIED]** = confirmed in the codebase · **[YOU]** = you can get this, steps given ·
**[NOT YOURS]** = belongs to another owner, route it

---

## B1 — Hosting locations: AWS region(s)? Vercel configuration? One.com still in use?

**Partial answer + [YOU]**

[VERIFIED] The repository contains **no hosting configuration whatsoever** — no `vercel.json`, no
`Dockerfile`, no `amplify.yml`, no Terraform/CDK/SST, no CI workflows (`.github/` does not exist).
The build is plain `next build` with no `output` mode set. Hosting is configured entirely in
dashboards, not in code, so nobody can derive it from the repo.

[VERIFIED] **The website is hosted on Vercel.** Every response from `www.quitty.ch` carries
`Server: Vercel` and an `X-Vercel-Id` header (checked 2026-09-15). The site has no API routes of its
own (the one unused mail route was deleted, see B6), and form submissions go straight from the
visitor's browser to Formspree without passing through Vercel.

### Vercel — [VERIFIED] from the live site

Response headers on four pages (`/de`, `/en`, `/de/data`, `/de/contact`), all identical in substance:

```
X-Vercel-Id:    fra1::iad1::…
X-Vercel-Cache: MISS
Cache-Control:  private, no-cache, no-store, max-age=0, must-revalidate
```

Vercel documents `X-Vercel-Id` as the regions a request hit, followed by the region the function
executed in. So `fra1::iad1` means the request entered Vercel in Frankfurt and the page was
**rendered in Washington, D.C., USA (`iad1`)**. That is Vercel's default for new projects, so the
region has never been changed.

**HTML pages are not cached by the CDN.** `X-Vercel-Cache: MISS` together with
`Cache-Control: private, no-store` means every page view is rendered fresh in Washington. The build
output agrees: every `/[locale]/…` page is `ƒ (Dynamic)`. Only static files (JavaScript, CSS, images
under `/_next/static`) are cached near the visitor.

| What | Where it happens |
|---|---|
| Connection entry, DDoS protection | Nearest of Vercel's 126 points of presence |
| TLS termination, locale-redirect middleware, static-file cache | Nearest Vercel region — Frankfurt (`fra1`) for Swiss visitors |
| **Rendering every HTML page** | **Washington, D.C., USA (`iad1`)** |
| Contact / deletion form data | Not Vercel — sent directly to Formspree (USA), see B6 |

So on every page view, the visitor's IP address, user agent and requested URL are processed in the
USA. **Vercel has no region in Switzerland**; the nearest are Frankfurt (`fra1`), Paris (`cdg1`),
Dublin (`dub1`) and Stockholm (`arn1`). Vercel's region list maps its codes to AWS region names
(`iad1` = `us-east-1`, `fra1` = `eu-central-1`), which is useful context for the AWS half of B1.

**[YOU] Recommended before answering (~5 minutes): move rendering to Frankfurt.** Hobby plans are
limited to one function region, but that region can be `fra1`.

1. Vercel → project → *Settings → Functions → Function Regions* → select `fra1` only
   (or commit `{ "regions": ["fra1"] }` in `vercel.json`).
2. Redeploy.
3. Verify: `curl -sI https://www.quitty.ch/de | grep -i x-vercel-id` — the **second** code must now
   read `fra1`.

State two limits honestly: Vercel Inc. is a US company, so the DPA/SCC question (B5) applies
whichever region is chosen; and during a regional outage Vercel automatically reroutes traffic to
other regions — choosing the failover regions is Enterprise-only.

**Draft answer — after switching to `fra1`:**

> The Quitty website is hosted on Vercel. Static files are delivered through Vercel's CDN from the
> region nearest the visitor (Frankfurt for visitors in Switzerland). Server-side rendering of pages
> runs in Vercel's Frankfurt region (`fra1`, Germany); Vercel offers no Swiss region. Form
> submissions are not processed by Vercel but sent directly to Formspree (see B6). One.com:
> [fill in]. AWS: not used directly by the website; regions for the Quitty app to be confirmed by the
> app team.

**Draft answer — if you do not switch:** same text, but "Server-side rendering of pages currently
runs in Vercel's default region, Washington, D.C., USA (`iad1`); a move to Frankfurt (`fra1`) is
planned for [date]."

### Other hosting parties

- **AWS:** the region for the app/backend is **[NOT YOURS]** — ask whoever owns the AWS account, and
  ask for the region **code**, not the marketing name. "AWS Cloud Switzerland" in your privacy policy
  corresponds to **eu-central-2 (Zurich)**, which does exist, so the claim is plausible — but it
  needs confirming per service, since S3, RDS and Lambda can each sit in different regions.
- **One.com:** check whether the `quitty.ch` DNS zone and mailboxes are still there. Even if One.com
  no longer serves the site, it is very likely still the **registrar and/or DNS host**, which is
  exactly what the reviewer needs. You can answer most of this without logging in:
  `nslookup -type=NS quitty.ch` and `nslookup -type=MX quitty.ch` show who runs DNS and mail today.

> ⚠️ **Flag for the reviewer — confirmed.** Your published privacy policy (`messages/en.json` →
> `Privacy.Paragraph1-2`, and the German equivalent) states the website is hosted "through One.com
> and AWS Cloud Switzerland". The live headers show the site is served by **Vercel**, with pages
> rendered in **Washington, D.C.** So the policy is **inaccurate as published**, and Vercel is an
> undisclosed processor. This needs fixing regardless of how the other answers land.

---

## B5 — Are the AWS / Vercel / AI provider / delivery contracts held by Syntech or by Quitty AG?

**[NOT YOURS]** — a contractual question, not a technical one. No codebase can answer it.

**What you can contribute, and should:** for each service, open the dashboard and report the
**account owner / billing e-mail and the organisation name on the account**. That is the practical
proxy for who holds the contract, and it is the fastest way to discover that something sits on a
personal account rather than a company one.

Services to check: Vercel, AWS, Chatbase, Google Workspace (see B6), Apple Developer, Google Play,
the domain registrar. Then hand the list to whoever handles contracts at Syntech / Quitty AG.

---

## B6 — Delivery service for transactional e-mail and push (provider, region)?

**[VERIFIED] — the answer is Formspree** (`formspree.io/f/xppznkrv`), as of commit `f31591c`
"contact forms fields ffixed".

All three forms now post correctly — `action="https://formspree.io/f/xppznkrv"` with
`method="POST"`, distinct `name` attributes and correct input types:

| Form | File | Fields submitted |
|---|---|---|
| Data deletion request | `src/app/[locale]/data/page.tsx:77` | email, phone, reason |
| Contact form | `.../contact-us-section/ContactUsSection.tsx:27` | name, email, phone, reason, message |
| "Request POS connection" | `.../contactPopup/ContactModal.tsx:32` | name, company, email, phone, reason |

**So the answer to give the reviewer:** transactional form delivery is handled by **Formspree
(Formspree Inc., USA)**, endpoint `xppznkrv`. There is no self-hosted mail path in use.

**[YOU] — four things the reviewer will need, none of which are in the code:**

1. **Transfer mechanism: SCCs, not the Data Privacy Framework.** [VERIFIED] Formspree, Inc. is based
   in San Antonio, Texas, and its security page states *"Our services are hosted with Amazon Web
   Services in the United States."* Every submission is therefore a **third-country transfer to the
   USA**. (Requests pass through Cloudflare's network first, but storage is AWS in the US.)
   Formspree's EU-US and Swiss-US Data Privacy Framework record reads **"Inactive – Withdrawal" since
   26 April 2022**, so it is **not** DPF-certified; its security page says it relies on **Standard
   Contractual Clauses** as a processor instead. It also states SOC 2 Type 2, AES-256 encryption at
   rest and TLS 1.2+ in transit.
   **[YOU]** Formspree does not publish a DPA on its website. Request the DPA (including the SCCs and
   their Swiss FADP adaptation) and the SOC 2 report from `security@formspree.io`.
2. **Formspree's retention period.** The privacy policy gives no fixed period, only that data is kept
   *"for as long as your account is active"*. **[YOU]** Check in the Formspree dashboard whether
   submissions are stored there and whether they can be deleted automatically, and state the setting.
3. **Add Formspree to the privacy policy.** It is currently an **undisclosed processor** — the policy
   names One.com, AWS, Google Analytics and Cookiebot, but not Formspree. See B1's flag; this is the
   same problem.
4. **Since when?** The wiring was committed today (`f31591c`). If the live site previously had no
   working forms, say so plainly — see item 0 in the fix list.

**✅ [FIXED] — a second, unused mail path existed and has been removed.**
`src/app/api/email/route.ts` implemented Gmail SMTP (`smtp.gmail.com:465`, Nodemailer 6.9, Gmail App
Password), but `git log --all -S"api/email"` showed it referenced only in the initial `fb5b579`
"Project Setup" and the `8bb7d5f` nodemailer commit — **nothing ever called it.** It was
`create-next-app` scaffolding whose field list (firstName, lastName, budget, projectDescription) never
matched the real forms.

It mattered for two reasons: it was an **unauthenticated, publicly reachable POST endpoint that sent
mail** — a live abuse vector on a route nobody was watching — and it was the only consumer of the
leaked `GMAIL_APP_PASWORD`. The route and the `nodemailer` dependency are now deleted, which also
cleared a high-severity CVE from H3.

> ⚠️ **This closes the code path, not the exposure.** `GMAIL_APP_PASWORD` and `GMAIL_APP_EMAIL` are
> still in Git history and should now be **removed from the environment and rotated** — see K2.
> Deleting the route does not invalidate a credential that is already published.

**Push notifications: [NOT YOURS].** The website sends none — no service worker, no web-push, no
FCM/APNs anywhere in the repo. Push belongs to the mobile apps (`com.syntech.quitty` on Play, app ID
`6740874619` on the App Store). The answer will be **FCM (Google) and APNs (Apple)**; let the app team
confirm the regions.

---

## B7 — Chatbase: DPA in place? Which model provider? Can it load only on click?

**[VERIFIED] — how it currently works:**

- Script `https://www.chatbase.co/embed.min.js`, chatbot ID `FjO4H7VgTyYHCXBH2wgHj`
  (`src/components/chatbot/useChatbase.ts:5-10`).
- Injected in a `useEffect` that runs **on mount, unconditionally**, on **all 10 public pages** —
  home, about, product, blog, contact, data, impressum, privacy-policy, terms-of-service, cookies.
- **Confirmed: the site has no consent mechanism at all.** No Cookiebot, no Complianz, no CMP, no
  banner, no consent state anywhere in the codebase.

> ⚠️ **The reviewer's premise is correct, and the situation is worse than they phrased it.** They
> asked whether the chat "currently loads before any consent". It does — and there is no consent
> layer for it to load before. Meanwhile your privacy policy claims "Integration of Google Maps and
> **Cookiebot by Complianz**" and "Analysis of website usage via **Google Analytics**". **None of
> those three exist in the codebase.** The policy describes a consent tool and an analytics stack the
> site does not have. Disclose this proactively — it will be found.

**DPA with Chatbase: [YOU]** — Chatbase dashboard → *Settings → Billing/Legal*, or their support.
Chatbase publishes a DPA; you need to confirm one is **executed for your account** and retrieve the
PDF, since the reviewer wants it as an attachment.

**Which model provider is configured: [YOU]** — a per-chatbot dashboard setting, not in code.
Chatbase → your chatbot → *Settings → AI → Model*. Report the exact model name. Note for the
reviewer: Chatbase brokers to OpenAI / Anthropic / Google, so there is a **sub-processor behind
Chatbase** and the DPA chain needs to cover it.

**Load only on click: ✅ [FIXED] — implemented and verified.** `src/components/chatbot/useChatbase.ts`
now renders only a small self-hosted chat button on page load. The Chatbase script is injected when
the visitor clicks it, using Chatbase's own command queue so the chat opens straight away. No page
files changed.

Verified in a real browser (desktop and mobile, `/de` and `/en`):

| Check | Result |
|---|---|
| Requests to `chatbase.co` before click | **0** |
| Chatbase cookies before click | **0** |
| After click | script loads, chat window opens, button removed |
| Client-side navigation after opening | chat stays loaded, script tag not duplicated |
| Uncaught JavaScript errors | none |

This matters beyond tidiness: Chatbase's loader sets a `chatbase_anon_id` cookie and calls a
`/api/geo` lookup. Before this change both happened on every page view for every visitor; now they
happen only after a deliberate click on the chat.

**Draft answer for B7 (fill the two [YOU] items):**

> The website chatbot is provided by Chatbase. It is not loaded on page view: the Chatbase script is
> only fetched when the visitor clicks the chat button, so no data is sent to Chatbase and no Chatbase
> cookie is set before that interaction. DPA with Chatbase: [YOU]. Configured model/provider: [YOU].

---

## C1 — Which provider and model power the Quitty assistant? Processing region?

**[NOT YOURS — wrong repo.]** There is no AI assistant in the website codebase. The only AI on the
website is the Chatbase widget (B7).

**⚠️ Ask the reviewer to disambiguate before answering.** B7 and C1 may be the same thing or two
different things:

- If "the Quitty assistant" **is** the website chatbot → the answer is B7's, say so and merge them.
- If it is an **in-app assistant** in the mobile app → route to the app/backend team.

Getting this wrong in either direction produces a self-contradictory response sheet, which is
precisely what F1's "identical in three places" instruction shows they are watching for.

---

## C2 — Contractual assurance that inputs are not used for training? Retention at the provider?

**[NOT YOURS]** — same as C1, and contractual on top.

For the **website chatbot** portion this is answered by the Chatbase DPA you retrieve in B7, plus the
terms of whichever model provider Chatbase is configured to use. "Not used for training" has to hold
at **both** levels — Chatbase and its upstream provider.

---

## C5 — Is chat history stored server-side? How long? Is there a delete function?

**[NOT YOURS]** for the app assistant.

For the **website chatbot: [YOU], and the answer is very likely "yes, at Chatbase"** — Chatbase
retains conversation logs and exposes them in the dashboard under *Chat Logs*, so server-side storage
exists by default. What you need: the **retention setting** (if your plan exposes one) and whether a
deletion path exists. Combined with the fact that the widget loads with no consent, this is likely
the sharpest finding in the review — handle it early.

---

## F1 — Exact list of data fields a merchant receives after release

**[NOT YOURS]** — product/backend. The website does not implement merchant data release, and the repo
contains no such field list. [VERIFIED] I searched every locale string: the policy text describes
data *categories* generally but never enumerates what a merchant receives.

**⚠️ But part of this lands on you.** "This list must be identical in three places" almost certainly
means (1) the privacy policy, (2) the in-app consent screen, (3) the merchant/processor contract.
**The published privacy policy is one of those three places, and it lives in your repo.**

Once product supplies the authoritative list, you update it in:

- `messages/en.json` → `Privacy.Paragraph1-1` (data types) and `Privacy.Paragraph1-2` (purposes)
- `messages/de.json` → same keys, German text
- `public/PDFs/privacyEn.pdf` and `privacyDe.pdf` — **these are separate downloadable PDFs and will
  not update themselves.** Same for `cookiesEn/De.pdf`, `termsEn/De.pdf`, `ImprintEn/imprintDe.pdf`.
  If the JSON and the PDFs disagree, you have created a fourth inconsistent copy.

---

## F2 — Do merchants receive line-item data, or only the receipt assignment?

**[NOT YOURS]** — product/backend. Nothing in the website determines or documents this.

Context for whoever you route it to: the privacy policy already tells users that Quitty processes
"purchase amounts, purchase date, merchant information, and **product details**"
(`messages/en.json` → `Privacy.Paragraph1-2`). So *processing* of line items is disclosed; the open
question is purely what is **released onward to the merchant**. Point them at that sentence so their
answer stays consistent with it.

---

## F8 — Are advertising placements booked self-service or via direct sales?

**Partial answer, [VERIFIED] for the website:**

There is **no self-service booking anywhere on the website**. Confirmed absent: any payment provider
(no Stripe, PayPal, Datatrans, TWINT, Payrexx), any checkout flow, any booking or scheduling
integration (no Calendly), any ad-management UI. The site has a `PackagesSection` that *displays*
packages, but it is presentation only — the sole conversion path on the entire site is the contact
form, which e-mails a mailbox (B6).

**So for the website, the answer is: direct sales.** [YOU/product] should confirm no separate
self-service portal exists outside this repo before that goes out as final.

---

## H3 — Inventory of open-source components (SBOM)

**[VERIFIED] — done. Attach these three files:**

| File | What it is | For whom |
|---|---|---|
| **`sbom.cyclonedx.json`** | The formal SBOM — CycloneDX 1.5, 595 KB, machine-readable | their security scanner / their file |
| **`sbom-summary.md`** | 2-page readable overview — the 29 packages actually chosen, licence table, the two notable licences | the person who asked |
| **`sbom-components.csv`** | All 663 components as a spreadsheet — name, version, licence, runtime vs dev | anyone reviewing licences by hand |

The JSON is the answer to the question as asked — "SBOM" means a machine-readable inventory in a
standard format, and CycloneDX is that standard. It is 22,000 lines because it carries a SHA-512
integrity hash, a download URL and a dependency edge for every component; **it is not meant to be
read**, it is meant to be imported into Dependency-Track, Snyk, GitHub or similar. Send the summary
alongside it so the reviewer is not handed 22,000 lines with no way in.

| | |
|---|---|
| Components total | **663** |
| Runtime (production, `scope: required`) | **397** |
| Dev-only (build/test, not shipped — `scope: excluded`) | 266 |
| Format | CycloneDX 1.5 JSON — purls, SHA-512 hashes, full dependency graph (664 edges) |
| Runtime | Node 20, **Next.js 16.3.5** |
| License coverage | **663 / 663 — no gaps** |
| **Known vulnerabilities** | **0** — production and dev (`npm audit`) |

**Full license distribution:**

| Licence | Count |
|---|---|
| MIT | 521 |
| ISC | 51 |
| Apache-2.0 | 35 |
| BSD-2-Clause | 13 |
| Apache-2.0 AND MIT | 11 |
| **LGPL-3.0-or-later** | **10** |
| BSD-3-Clause | 5 |
| BlueOak-1.0.0 | 4 |
| **Apache-2.0 AND LGPL-3.0-or-later** | **3** |
| Unlicense | 2 |
| **Apache-2.0 AND LGPL-3.0-or-later AND MIT** | **1** |
| Python-2.0 · MPL-2.0 · CC-BY-4.0 · CC0-1.0 · 0BSD · (MIT OR CC0-1.0) | 1 each |
| **NOASSERTION — no licence declared** | **1** |

**Two licence points the reviewer will raise — address them in the answer rather than waiting:**

1. **There is copyleft in the tree: 14 components under LGPL-3.0-or-later.** These are
   `@img/sharp-libvips-*` and `@img/sharp-win32/wasm32-*` — the prebuilt **libvips** image-processing
   binaries that `sharp` ships, and `sharp` is a direct dependency used by Next.js for image
   optimisation. The practical position to state: **LGPL obligations attach to *distribution*, and a
   server-side web application does not distribute these binaries to visitors** — they execute on the
   server and no copy reaches the user. They are also **dynamically linked, unmodified, upstream
   binaries**, which is the case LGPL §4 is written to permit. So there is no source-disclosure
   obligation here, but "no copyleft present" would be the wrong thing to claim, because the SBOM
   plainly shows LGPL and a scanner will flag it.
2. **One component declares no licence at all: `three-fatline@0.7.0`** — no `license` field and no
   LICENSE file, which by default means all rights reserved rather than an open-source grant. It is
   **not a direct dependency**: it arrives via `react-globe.gl` → `three-globe` → `three-fatline`
   (the globe animation on the site). [YOU] — worth a decision: accept the risk with a note, or drop
   the globe component. It is authored by the same maintainer as `three-globe`, so this is very
   likely an oversight rather than a deliberate restriction, and an upstream issue would probably
   resolve it.

> ✅ **Patched — the attachment is clean and safe to send.** `npm audit` now reports **0
> vulnerabilities**, production and dev. This matters because handing over an SBOM means handing over
> a list the reviewer will run through a scanner.
>
> **Before patching**, `npm audit --omit=dev` reported **17 vulnerabilities in shipped dependencies**,
> and the severity was materially worse than a first look suggested: `next@14.2.35` carried **23
> separate advisories**, including **unauthenticated remote code execution** (one Windows-hosted, one
> in the Image Optimization API), stored XSS in App Router, SSRF, cache poisoning and middleware
> bypass. `14.2.35` was already the last release on the 14.x line, so no patch existed within it — the
> whole set only clears at `15.5.24`.
>
> **What was changed:**
>
> | Change | Effect |
> |---|---|
> | `next` 14.2.35 → **16.3.5** | clears all 23 advisories incl. both RCEs, and the bundled `postcss` |
> | `next-intl` 3.14 → **4.14.5** | clears the open redirect; required for Next 15+ |
> | `sharp` 0.33.4 → **0.35.4** | clears the libvips/libheif CVEs |
> | `nodemailer` **removed** | deleted with the dead `/api/email` route — see B6 |
> | `npm audit fix` | cleared 13 transitive advisories (lodash, minimatch, nanoid, js-yaml, …) |
>
> **React was deliberately left at 18.** Next 16 accepts `^18.2.0`, so the React 19 migration was not
> required to reach zero, and skipping it kept `react-globe.gl`, `three`, `framer-motion` and the
> carousel on versions already proven against this codebase.
>
> **ESLint tooling was deliberately left behind**, at `eslint-config-next@15` / `eslint@8`.
> `eslint-config-next@16` requires ESLint 9, which is a flat-config migration (`.eslintrc.json` →
> `eslint.config.js`) affecting the airbnb/prettier/tailwind plugin stack. That is **dev-only tooling
> that ships nothing**, so it has no effect on the SBOM or on the 0-vulnerability result, and it was
> not worth the breakage risk inside this change.

**How this was produced, in case they ask (they sometimes do):** generated from `package-lock.json`
(lockfileVersion 3), enriched with each installed package's own `package.json` licence field. The 21
components that are optional platform binaries — `@img/sharp-*` for macOS/Linux, `fsevents` for macOS —
are not installed on a Windows dev machine, so their licences were resolved directly from the npm
registry rather than left blank. That is why coverage is 631/631 rather than the ~610 a naive local
scan reports.

**To regenerate:** `npx @cyclonedx/cyclonedx-npm --output-file sbom.cyclonedx.json` (needs network).
Note that it will re-introduce the blank licences for uninstalled platform binaries unless run on
each target platform.

---

## K2 — Confirm the technical and organisational measures (MFA, encryption, tenant separation, backups, restore tests)

**Mostly [NOT YOURS]** — tenant separation, backup intervals and restore tests are properties of the
app's data platform and do not exist as concepts in a marketing website. Route those to
infrastructure/backend, with annex B of the processor agreement in front of them so they answer
against the actual clauses.

**What is [VERIFIED] for the website, and you can answer now:**

- **Encryption in transit:** TLS, terminated by the host. Outbound SMTP is TLS on port 465.
- **Encryption at rest / backups / tenant separation: not applicable.** The website has **no
  database, no session store and no persistent user data.** Contact form submissions are never
  stored — they are relayed straight to e-mail.
- **MFA:** applies to the *dashboards* (Vercel, AWS, Chatbase, Google Workspace, GitHub, registrar),
  not to the site. **[YOU] — verify MFA is enforced on each and report per service.** Org-level
  enforcement is stronger than per-user and worth stating if you have it.

> 🔴 **Disclose this one — do not let them find it.**
> `src/app/[locale]/login/page.tsx` implements an admin gate that fails on three counts:
>
> 1. Credentials come from **`NEXT_PUBLIC_ADMIN_EMAIL` / `NEXT_PUBLIC_ADMIN_PASSWORD`** (lines 11-12).
>    The `NEXT_PUBLIC_` prefix is Next.js's instruction to inline the value into the client bundle at
>    build time. **I confirmed this against a real production build:** the admin password appears as a
>    literal string in `.next/static/chunks/app/[locale]/login/page-*.js` — a file served to every
>    visitor and readable in browser devtools.
> 2. The comparison happens **in the browser** (line 24). There is no server-side check.
> 3. The session is `localStorage.setItem("isLoggedIn", "true")` (line 25), so the gate is bypassed by
>    typing that one line into any browser console — no password needed.
>
> This directly contradicts the annex B measures the question asks you to confirm, and the route is
> live. **That password must be treated as compromised and rotated**, not merely moved. The fix is to
> drop the `NEXT_PUBLIC_` prefix, move the check to a server route or middleware, and issue a signed
> httpOnly cookie. **Ask me and I will implement it.**
>
> 🔴 **Second, separate finding — credentials are in the Git history.** I checked, and the answer is
> bad: **`.env` is currently a tracked file** and has been committed **three times**. It is listed in
> `.gitignore`, but the ignore rule has no effect because the file was already tracked when the rule
> was added — this is the classic failure mode, and it means the file has been silently re-committed
> since.
>
> | Commit | Date | Secrets present |
> |---|---|---|
> | `8bb7d5f` | 2024-05-31 | `GMAIL_APP_EMAIL`, `GMAIL_APP_PASWORD` |
> | `4859c46` | 2025-01-12 | + `NEXT_PUBLIC_ADMIN_EMAIL`, `NEXT_PUBLIC_ADMIN_PASSWORD` |
> | `31df09e` | 2026-09-04 | all four (current values) |
>
> All four live credentials are therefore readable in `github.com/SyntechOrg/quitty` history. The
> Gmail App Password has been exposed since **May 2024** — roughly two and a half years — and that
> password grants full SMTP send rights on the mailbox, i.e. the ability to send mail as Quitty.
>
> Required actions, in order: **(1) rotate all four credentials now** — history rewriting does not
> un-expose anything already pushed; **(2)** `git rm --cached .env` and commit, so the ignore rule
> finally takes effect; **(3)** decide with Syntech whether to purge history
> (`git filter-repo`, then a force-push and a re-clone by every collaborator); **(4)** check the
> Google account's *Recent security activity* for unrecognised SMTP sign-ins over that window, since
> the reviewer may reasonably ask whether exposure was exploited.

---

## K3 — Further domains and social media accounts besides quitty.ch

**[VERIFIED] — everything referenced anywhere in the codebase:**

| Asset | Identifier | Source | Account holder |
|---|---|---|---|
| Primary domain | `quitty.ch` / `www.quitty.ch` | `sitemap.ts`, metadata | **[YOU]** |
| Instagram | `instagram.com/quitty.ch` | footer | **[YOU]** |
| LinkedIn | `linkedin.com/company/quittyag` | footer | **[YOU]** |
| TikTok | `tiktok.com/@quitty.ch` | footer | **[YOU]** |
| iOS app | App Store ID `6740874619` | footer | **[YOU]** |
| Android app | `com.syntech.quitty` | footer | **[YOU]** |
| Parent / agency site | `syn-tech.ch` | footer | Syntech |
| Google Search Console | verified via `public/googlebaff9567d779bfc3.html` | repo | **[YOU]** |
| Chatbase | chatbot `FjO4H7VgTyYHCXBH2wgHj` | chatbot hook | **[YOU]** |
| Vimeo | video `1170629815` | video section | **[YOU]** |
| Code repository | `github.com/SyntechOrg/quitty` | git remote | SyntechOrg |
| Google Fonts | `fonts.googleapis.com` | font loading | n/a — see note |

**Two things to resolve before sending:**

1. **[YOU] Fill in the account-holder column.** Only you / Quitty AG know which are held by Quitty AG
   and which by Syntech. That is the actual substance of K3 and the one part I cannot supply.
2. ⚠️ **Your privacy policy claims social accounts the website does not link:** it lists "LinkedIn,
   Instagram, **Twitter, Medium**". The site links Instagram, LinkedIn and **TikTok** — so TikTok is
   live but undisclosed, while Twitter and Medium are disclosed but unlinked. Confirm which of those
   four actually exist and reconcile the policy.

**Note on Google Fonts:** the site loads `Instrument Sans` from `fonts.googleapis.com` at runtime,
transmitting every visitor's IP address to Google **before any consent** — the same class of issue as
B7, and a well-litigated one under GDPR. Next.js self-hosts this automatically via
`next/font/google`, eliminating the third-party request entirely. Small change, removes a disclosure
obligation. **Ask me and I will do it.**

---

# Summary: what I need from you

| # | What | Where |
|---|---|---|
| 0 | **Formspree DPA + SCCs + retention setting**, and how long the forms were broken | Formspree dashboard → account / legal |
| 1 | Switch Vercel function region `iad1` → **`fra1`**, redeploy, re-check `x-vercel-id` (region already verified as `iad1`) | Vercel → Settings → Functions → Function Regions |
| 2 | Is One.com still registrar / DNS / mail? | One.com login, or `nslookup -type=NS quitty.ch` |
| 3 | Is the contact mailbox **Workspace or free Gmail**? | the Google account |
| 4 | **Chatbase DPA** (PDF) + configured **model** | Chatbase dashboard |
| 5 | Chatbase **chat-log retention** + delete path | Chatbase → Chat Logs / Settings |
| 6 | **Account owner** for each service (B5 proxy) | each dashboard's billing page |
| 7 | **MFA status** per service | each dashboard's security page |
| 8 | **Account holder** per row in K3 | you / Quitty AG |
| 9 | Confirm no self-service ad portal outside this repo (F8) | product |

**Route to the app/backend team:** C1, C2, C5 (assistant provider / model / region / retention),
F1, F2 (merchant data fields), K2 (tenant separation, backups, restore tests), B6 push (FCM/APNs),
B1 AWS regions.

**Ask the reviewer to clarify:** whether "the Quitty assistant" (C1) is the website chatbot (B7) or a
separate in-app assistant.

# Where the seven findings stand

Four are fixed. The reviewer would reach the rest on their own — disclosing them with a remediation date reads very
differently from being caught.

0. ✅ **Forms now submit — fixed in `f31591c`, but the historical gap still needs a decision.**
   Until today all three forms carried `action=""` with no handler, so submissions went nowhere. That
   included the `/data` deletion form, which sits under the heading "Submit a Data Deletion Request"
   and tells users *"all your data will be permanently deleted from Quitty's systems within 30 days"*.
   Commit `f31591c` wired all three to Formspree with `method="POST"` and correct field names — **the
   defect is resolved going forward.**

   **What still needs deciding:** anyone who used the deletion form before today had a **GDPR Art. 17
   / Swiss DSG erasure request silently discarded**, against an explicit 30-day promise. Establish
   with Syntech / Quitty AG (a) how long the `/data` page was live in the broken state, and (b)
   whether any such request can be identified from another channel — the support mailbox, or the
   query strings in the host's access logs, since the broken form put submissions into the URL.
   If anyone is identifiable, their request is now overdue and should be actioned.

   Three follow-ups on the new Formspree wiring, none blocking:
   - **All three forms post to the same endpoint** (`xppznkrv`), so erasure requests land in the same
     inbox as sales enquiries with nothing to distinguish them. Give the deletion form its own
     Formspree endpoint, or at minimum a hidden `_subject` field — a legal deadline should not depend
     on someone spotting it in a general inbox.
   - **No `_next` redirect**, so submitting navigates the user away to Formspree's own thank-you page
     on `formspree.io`. Add `<input type="hidden" name="_next" value="https://www.quitty.ch/..." />`
     to keep users on the site.
   - **The consent checkbox is not functional.** In `ContactUsSection.tsx:104-109` it renders but has
     no `name` and no `required`, so it submits nothing and blocks nothing; in the other two forms it
     is commented out entirely (`ContactModal.tsx:107-111`, `data/page.tsx:122-128`). As it stands it
     is a checkbox that records no consent — worse than having none, since it implies consent was
     captured. Its text is a marketing/tracking opt-in, so if you want it, give it a `name` and
     submit it; if not, remove it.

1. 🔴 **Credentials committed to Git** — `.env` is a tracked file; the Gmail App Password has been in
   `github.com/SyntechOrg/quitty` history since May 2024, the admin password since January 2025.
   **Rotate all four today**, then untrack the file. This one is time-sensitive and independent of the
   questionnaire. (K2)
2. 🔴 **Admin login** — password inlined into the client bundle (confirmed against a production
   build), browser-side comparison, localStorage-bypassable session. (K2)
3. 🔴 **Privacy policy does not match the site** — it claims Google Analytics, Google Maps and
   Cookiebot/Complianz (none present), and One.com + AWS hosting (likely Vercel now). It lists
   Twitter/Medium but not TikTok, and **does not mention Formspree**, which now receives every form
   submission from a US processor. (B1, B6, B7, K3)
4. 🟠 **No consent layer — partly fixed.** ✅ Chatbase now loads only when the visitor clicks the chat
   button (0 requests, 0 cookies before click; verified in-browser). Still open: Google Fonts loads
   from Google's servers on every page view; self-hosting via `next/font` would remove that. (B7)
5. ✅ **Dependency vulnerabilities — fixed.** Was 17 in shipped deps (including two unauthenticated
   RCEs in `next`); now **0**, production and dev. Next 14 → 16, next-intl 3 → 4, sharp 0.33 → 0.35,
   plus `npm audit fix`. Build verified green. (H3)
6. ✅ **Dead `/api/email` route — deleted.** It was an unauthenticated public POST endpoint that sent
   mail, called by nothing and watched by no one, and it was the only consumer of the leaked Gmail
   credential. Removed along with `nodemailer`. (B6)

⚠️ **Item 6 removes the code path, not the exposure.** The Gmail App Password is still live in Git
history and must still be **rotated** — deleting the route means nothing until it is. Same for the
admin password in items 1 and 2: one rotation covers both.

**Still to do:** 1 and 2 (rotate credentials, fix the admin gate), 3 (privacy policy text), 4 (consent
layer). I can implement 1, 2 and 4, and prepare the text for 3 — say which. Item 0's remaining work
is a decision for Syntech / Quitty AG, not a code change.
**Note:** do not commit this file or `sbom.cyclonedx.json` to the public repo as-is — this sheet
describes live weaknesses, and the SBOM should be regenerated after patching.
