# Trezeal email and launch guide

This guide is written for `trezeal.com`. DNS examples are examples, not proof
that a record has propagated or that mail is configured. Use the values shown
in the selected provider's admin console for the domain's actual data center.
Do not publish private DKIM keys or passwords.

## Set up domain email

### 1. Choose Google Workspace or Zoho Mail

1. Create an organization account with Google Workspace or Zoho Mail.
2. Add and verify `trezeal.com` in the provider's admin console. Verification
   normally uses a TXT record supplied for this domain.
3. Use `info@trezeal.com` as the primary contact mailbox.
4. Create `support@trezeal.com` as a mailbox, alias or group, depending on the
   plan and who should receive each message.
5. Test sending and receiving before changing MX records. Plan the MX change
   because it directs incoming mail for the whole domain.

### 2. Add MX records

At the DNS host for `trezeal.com`, remove old mail-provider MX records only
after confirming that the new provider is ready to receive mail.

**Google Workspace example**

| Type | Host | Priority | Destination | TTL |
| --- | --- | ---: | --- | --- |
| MX | `@` | `1` | `smtp.google.com` | Provider default |

Google's setup instructions currently use this single MX record for new
configurations. Follow Google's console if it displays a different setup for
the account.

**Zoho Mail example**

Zoho's global data-center example uses:

| Type | Host | Priority | Destination | TTL |
| --- | --- | ---: | --- | --- |
| MX | `@` | `10` | `mx.zoho.com` | Provider default |
| MX | `@` | `20` | `mx2.zoho.com` | Provider default |
| MX | `@` | `50` | `mx3.zoho.com` | Provider default |

Zoho MX hostnames vary by data center. Use the **Tools & Configurations** or
domain email configuration values shown in the Zoho Admin Console. Do not mix
MX records from different Zoho data centers.

### 3. Add SPF

SPF is a TXT record at the root (`@`). Publish **one SPF record only**. If
another system sends mail for the domain, merge its authorized sender into the
existing SPF record using that system's documented include. Do not copy a
second SPF record unchanged.

**Google Workspace only**

```text
Type: TXT
Host: @
Value: v=spf1 include:_spf.google.com ~all
```

**Zoho Mail example**

```text
Type: TXT
Host: @
Value: v=spf1 include:zohomail.com ~all
```

Confirm the appropriate SPF value in Zoho's domain setup for the account's
data center. Stay within SPF's DNS lookup limit when combining senders.

### 4. Add DKIM

DKIM contains a public key generated for this specific mail account. It cannot
be safely prefilled in this guide.

1. In Google Admin, go to **Apps → Google Workspace → Gmail → Authenticate
   email**, select `trezeal.com`, and generate a 2048-bit key if supported.
   Google may require Gmail to be active for 24–72 hours before key generation.
2. In Zoho Admin, open **Domains → trezeal.com → Email Configuration → DKIM**,
   add a selector and copy its generated TXT value.
3. Add the generated TXT record at the DNS provider. A typical host format is
   `google._domainkey` or `zoho._domainkey`, but use the selector shown in the
   provider console.
4. Paste the generated public value, verify the record in the provider, then
   enable DKIM signing.

Example shape only — do not enter the placeholder key:

```text
Type: TXT
Host: <selector>._domainkey
Value: v=DKIM1; k=rsa; p=<public-key-generated-by-your-mail-provider>
```

Never put the private DKIM key in DNS, source control, or this repository.

### 5. Add DMARC and monitor

First create or confirm that `dmarc@trezeal.com` receives reports. Then publish
a monitoring policy:

```text
Type: TXT
Host: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@trezeal.com; adkim=r; aspf=r; pct=100
```

`p=none` monitors rather than quarantining or rejecting messages. Review
reports, make sure legitimate senders pass SPF or DKIM and align with the
domain, then consider a gradual move to `quarantine` and later `reject`.
Coordinate any stricter policy with all systems sending mail as
`@trezeal.com`. DMARC reporting can contain sensitive metadata; choose a
reporting provider and access policy deliberately.

### 6. Connect the website contact form

The contact form sends submissions through a Netlify Function, which connects
to the SMTP server for `info@trezeal.com`. The SMTP credentials must only be
configured as Netlify function environment variables. Never put SMTP passwords
or private API keys in a `VITE_` variable or the browser bundle.

```text
SITE_ORIGIN=https://trezeal.com
SMTP_HOST=<host-shown-in-your-Zoho-account>
SMTP_PORT=465
SMTP_USER=info@trezeal.com
SMTP_PASS=<Zoho-app-specific-password>
CONTACT_TO_EMAIL=info@trezeal.com
```

Use the SMTP hostname displayed in Zoho Mail for the account's data center;
Zoho hostnames vary by region. Use the SMTP port and TLS mode specified there.
The function sends from the authenticated mailbox and sets the visitor's
validated address as `Reply-To`. It reports success only after SMTP accepts the
message. Set `SITE_ORIGIN` to the exact production origin, including `https://`.
The contact form's fallback email link is `info@trezeal.com`.

Career applications use the same server-side SMTP settings. Configure
`CAREERS_EMAIL=hello@trezeal.com` in Netlify to receive the candidate details
and validated resume attachment. The applicant receives an acknowledgement
with a generated application ID. Applications are email-only: no database,
candidate portal, status tracking or admin dashboard stores them. Configure a
mailbox retention policy appropriate for candidate information.

The footer newsletter uses a separate `VITE_NEWSLETTER_ENDPOINT`. Configure it
with a newsletter-capable form or mailing-list endpoint that supports browser
submissions, double-check its consent and unsubscribe behavior, and test it
before launch. Without this endpoint, the footer clearly reports that the
address was not subscribed. Do not treat the contact endpoint as a mailing
list unless the provider is configured to handle subscriptions and opt-outs.

## Email templates

### Signature

```text
Trezeal
Technology • Creativity • Growth
Pune, Maharashtra, India | Remote project enquiries welcome
info@trezeal.com | https://trezeal.com
```

Add a phone number, job title, postal address or social links only after they
are confirmed and approved.

### Auto-reply

**Subject:** We received your message — Trezeal

```text
Hello,

Thanks for contacting Trezeal. Your message has reached our enquiry inbox.
We will review the details and reply when we can. If your request is urgent,
reply to this email with any additional context.

Regards,
Trezeal
info@trezeal.com
https://trezeal.com
```

Enable this only after the form delivery and inbox routing have been tested.
Do not promise a response time unless the business can meet it consistently.

### Welcome email

**Subject:** Welcome to Trezeal

```text
Hello,

Thanks for getting in touch with Trezeal. We work on digital solutions for
businesses and practical learning and career preparation for students and
freshers.

You can learn about our services at https://trezeal.com/services or reply to
this message with the goal you would like to discuss.

Regards,
Trezeal
info@trezeal.com
```

### Contact-form confirmation

**Subject:** Trezeal enquiry received

```text
Hello {{name}},

Your message about {{enquiry_type}} was submitted to Trezeal. We have a copy
of the information you provided and will review it before replying.

If you need to correct a detail, reply to this email and include the context.

Regards,
Trezeal
info@trezeal.com
```

Only send this confirmation after the form provider confirms successful
delivery. Do not echo the full message or optional budget into an email unless
necessary.

## Test email delivery

1. Send a message to and from each mailbox and verify replies, aliases and
   groups route to the intended people.
2. Send test messages to a personal Gmail and Outlook account. Inspect
   message headers for SPF, DKIM and DMARC pass/alignment.
3. Use [Mail-Tester](https://www.mail-tester.com/) to review a test message.
   Treat its score as diagnostic, not a deliverability guarantee.
4. If using Google Workspace, configure
   [Google Postmaster Tools](https://postmaster.google.com/) for the domain
   and monitor authentication, spam rate and reputation as data becomes
   available.
5. Recheck DNS after changes. Propagation and provider verification can take
   time; follow the DNS host and mail provider status pages.

## 15 SEO keyword targets and starter content plan

Validate search volume and competition for the locations and services Trezeal
actually wants before investing in a campaign. Avoid claiming service areas
or outcomes that are not confirmed.

| Target query | Content direction |
| --- | --- |
| software development company Pune | Explain project discovery, delivery scope and handover |
| web application development Pune | Outline when a custom application fits better than a static site |
| AI automation services for businesses India | Discuss evaluation, privacy, review and practical workflow fit |
| business process automation Pune | Show how to map a process before automating it |
| custom CRM development India | Explain requirements, integrations and ownership questions |
| website development for small business Pune | Provide a content and launch checklist |
| student web development mentorship India | Describe practice-led learning and realistic expectations |
| React interview preparation for freshers | Publish question practice with explanations and follow-up prompts |
| full-stack portfolio project ideas for students | Teach project scoping, testing and documentation |
| freelance UI UX and website design Pune | Explain brief, review, accessibility and handover |
| software development services for startups India | Compare a custom build with existing software and integrations |
| business automation consultant India | Explain discovery, exception handling and workflow ownership |
| AI integration company Pune | Publish a responsible AI evaluation and human-review checklist |
| student coding mentorship Pune | Describe practice-led learning, project feedback and honest expectations |
| website accessibility audit India | Share a WCAG-oriented review process and practical remediation plan |

Publish one useful guide per month. Each guide should answer one specific
search intent, link to a relevant service or learning page, include original
examples, and be reviewed for accuracy. Do not publish fake authors,
testimonials, rankings, client stories or performance statistics.

## Launch checklist

- [ ] Confirm legal business name, registered address and policy text with a
      qualified reviewer; replace clearly marked legal draft notices.
- [ ] Confirm `info@trezeal.com`, inbox routing, SPF, DKIM and DMARC.
- [ ] Configure SMTP credentials as Netlify function environment variables and
      test successful, invalid and failed contact form submissions.
- [ ] Configure `CAREERS_EMAIL=hello@trezeal.com` and test a general-interest
      application with a safe sample resume; confirm both email notifications,
      attachment handling and mailbox retention.
- [ ] Keep sample job roles labeled as demos; publish actual openings only
      after confirming role details and deadlines in the source data.
- [ ] Configure `VITE_NEWSLETTER_ENDPOINT`; verify consent, success, failure and
      unsubscribe behavior with the selected mailing-list provider.
- [ ] Configure GA4 only if required; set `VITE_GA_MEASUREMENT_ID` and verify
      that analytics loads only after opt-in consent.
- [ ] Configure SSL/TLS and force HTTPS on the production domain.
- [ ] Add the production property to Google Search Console and submit
      `https://trezeal.com/sitemap.xml`.
- [ ] Verify `robots.txt`, canonical URLs, page titles, descriptions, Open
      Graph cards and JSON-LD with current testing tools.
- [ ] Replace testimonial placeholders with written, approved quotes—or
      remove the section before launch.
- [ ] Run Lighthouse or PageSpeed Insights on representative desktop and
      mobile pages; review accessibility, performance and best practices.
- [ ] Test routes, deep-link refresh, forms, keyboard navigation, reduced
      motion and the mobile menu on real browsers and devices.
- [ ] Run an automated and manual broken-link check across all public routes,
      legal links, blog links and footer destinations.
- [ ] Test responsive layouts at common phone, tablet and desktop widths,
      including dark-mode contrast and the consent banner.
- [ ] Set up scheduled backups for source, DNS, mail configuration and any
      connected form-provider data.
- [ ] Configure uptime monitoring and decide who receives incident alerts.
- [ ] Confirm cookie and privacy wording matches the analytics, form and
      hosting tools actually enabled in production.

## Provider references

- [Google Workspace MX records](https://knowledge.workspace.google.com/admin/domains/set-up-mx-records-for-google-workspace)
- [Google Workspace SPF](https://knowledge.workspace.google.com/admin/security/set-up-spf)
- [Google Workspace DKIM](https://knowledge.workspace.google.com/admin/security/set-up-dkim)
- [Zoho Mail email delivery and MX](https://www.zoho.com/mail/help/adminconsole/configure-email-delivery.html)
- [Zoho Mail SPF](https://www.zoho.com/mail/help/adminconsole/spf-configuration.html)
- [Zoho Mail DKIM](https://www.zoho.com/mail/help/adminconsole/dkim-configuration.html)
