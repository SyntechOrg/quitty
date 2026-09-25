// QTY-DSE-2026-01 — English translation of the German text (legal-en-draft/).
// Not supplied in the legal package: needs Leutrim's approval. The German
// version is binding; keep structure and numbers in sync with it.
const html = String.raw`<h1>Privacy Policy</h1>
<p class="lead">Website quitty.ch and mobile application “Quitty” — as of 21 September 2026</p>
<aside class="legal-notice"><strong>Note:</strong> This version applies from 21 September 2026. Some details are currently being reviewed as part of ongoing technical development and will be supplemented or clarified in the coming weeks. The current version published on quitty.ch always prevails; material changes will be shown in the app.</aside>
<h2>1. Purpose and structure</h2>
<p>This policy describes how Quitty AG processes personal data when you visit the website quitty.ch or use the mobile application “Quitty”. Section 6 provides an overview; sections 7 to 14 explain the individual processing activities. In the event of any conflict between the overview and a detailed section, the detailed section prevails.</p>
<h2>2. Controller</h2>
<p>Quitty AG, c/o Treforma AG, Grabenstrasse 25, 6340 Baar, Switzerland. For data protection matters, you can reach us at info@quitty.ch, subject “Datenschutz”.</p>
<h2>3. Applicable law</h2>
<p>The Swiss Federal Act on Data Protection applies. Our service is aimed at users in Switzerland; we do not actively target markets in the European Economic Area. To the extent that the General Data Protection Regulation nevertheless applies to individual users, we also grant the rights provided for therein.</p>
<h2>4. Definitions</h2>
<p>Personal data means any information relating to an identified or identifiable natural person. Processing means any handling of personal data, in particular collecting, storing, using, disclosing and deleting it. Profiling means the automated evaluation of personal data in order to analyse essential personal characteristics, such as spending behaviour.</p>
<h2>5. Where the data comes from</h2>
<p>We process data that you provide to us yourself (account, uploaded receipts, enquiries), data that arises technically during operation (device and log data), and receipt data that a merchant transmits to us after scanning your personal code so that we can deliver the receipt to you.</p>
<h2>6. Overview of processing activities</h2>
<table>
  <thead><tr><th>Processing</th><th>Purpose</th><th>Basis</th><th>Retention</th></tr></thead>
  <tbody>
    <tr><td>Account and sign-in</td><td>Provision of the service</td><td>Contract</td><td>Duration of account + 12 months</td></tr>
    <tr><td>Digital receipts</td><td>Receipt, capture, storage, display</td><td>Contract</td><td>Duration of account, maximum 10 years</td></tr>
    <tr><td>Receipt recognition and categories</td><td>Reading and categorising receipts</td><td>Contract; consent for sensitive categories</td><td>as for receipt data</td></tr>
    <tr><td>Spending analysis</td><td>Analyses and overviews</td><td>Consent (profiling)</td><td>until withdrawn</td></tr>
    <tr><td>AI assistant</td><td>Answering your questions, analyses</td><td>Contract; consent for access to receipts</td><td>History maximum 24 months</td></tr>
    <tr><td>Loyalty programme</td><td>Points and vouchers</td><td>Contract</td><td>Participation + 24 months</td></tr>
    <tr><td>Warranty overview</td><td>Display of recorded time limits</td><td>Contract</td><td>Duration of account</td></tr>
    <tr><td>Notifications</td><td>Notices about receipts and time limits</td><td>Contract; consent for advertising</td><td>until withdrawn</td></tr>
    <tr><td>Advertising and advertising measurement</td><td>Financing the service</td><td>Consent</td><td>until withdrawn</td></tr>
    <tr><td>Merchant logos</td><td>Display of your receipts</td><td>Legitimate interest</td><td>not stored by Quitty</td></tr>
    <tr><td>Operation, security, logs</td><td>Stability, abuse prevention</td><td>Legitimate interest</td><td>6 to 12 months</td></tr>
    <tr><td>Support and contact form</td><td>Answering enquiries</td><td>Contract / legitimate interest</td><td>24 months</td></tr>
    <tr><td>Website visit and website chat</td><td>Provision, instant help</td><td>Legitimate interest; consent per category</td><td>see cookie policy</td></tr>
  </tbody>
</table>
<h2>7. Processing activities in detail</h2>
<h3>7.1 Account and master data</h3>
<p>When you register, we collect your name, email address and password; optionally a profile picture and a telephone number. You can also sign in via Google or Apple; in this case we receive the information necessary to open the account from these providers. We use this data to provide your account, assign your receipts and communicate with you.</p>
<h3>7.2 Receipt data</h3>
<p>Receipts that you receive by scanning your code at the checkout, photograph or upload as a file contain the merchant and branch, receipt number, date, currency, payment method, the individual items with description, quantity and price, VAT details, discounts and totals. We store this data in order to display it to you, make it searchable and sort it into categories. Receipt items may allow conclusions to be drawn about your lifestyle; section 8 describes how we deal with this.</p>
<h3>7.3 Receipt recognition</h3>
<p>If you photograph a receipt, text recognition takes place directly on your device (Google ML Kit on Android, Apple Vision on iOS); the photo does not leave your device. The recognised lines of text are then transmitted to OpenAI in order to read out the fields and assign a category. If you upload a file as an attachment instead, it is processed on the server with Google Cloud Vision to make it searchable.</p>
<h3>7.4 Personal code</h3>
<p>Your account contains a personal code. If you show it at a checkout, the receipt is assigned to your account and delivered in the app. The merchant does not learn who you are; it receives no information from us about you.</p>
<h3>7.5 Loyalty programme</h3>
<p>One point is credited for each receipt scanned at the checkout; manually recorded receipts do not earn points. We store your points balance and the underlying receipts. Points are redeemed via Quitty in the form of vouchers; payment in cash is not possible.</p>
<h3>7.6 Warranty overview</h3>
<p>For the warranty overview, we store the product, the date of purchase and the time limit you have recorded. Reminders are a non-binding notification service; observing time limits remains your responsibility.</p>
<h3>7.7 AI assistant</h3>
<p>The assistant answers questions about your spending and receipts. Your inputs, the conversation history and, where necessary for the answer, your receipt and spending data are processed. Details are set out in section 10. The app does not offer voice input; no audio recordings are made or transmitted.</p>
<h3>7.8 Camera, photo library and file attachments</h3>
<p>The camera and photo library are only used after you have granted access via the operating system and only for capturing receipts.</p>
<h3>7.9 Device, log and diagnostic data</h3>
<p>Technical data arises during operation: device type, operating system version, app version, IP address, timestamps and error reports. We use it for stability, troubleshooting and abuse prevention.</p>
<h3>7.10 Notifications</h3>
<p>For push notifications, we store your device's delivery token. Notifications can be deactivated at any time in the system settings; we only send promotional notifications with your consent.</p>
<h3>7.11 Merchant logos</h3>
<p>To display your receipts, we retrieve the logos of the respective merchants via the Logo.dev service. In doing so, your IP address is transmitted to this service.</p>
<h3>7.12 Support and contact form</h3>
<p>If you contact us, we process your details in order to answer your enquiry. The website contact form is processed via the Formspree service (USA); we collect your name, email address, telephone number if you wish, and your message. Receiving promotional emails requires separate consent and can be unsubscribed from at any time.</p>
<h3>7.13 Website chat</h3>
<p>A chat assistant is available on the website; it is operated via the Chatbase service and generates answers using language models from OpenAI. The chat is only loaded when you click on it. Your inputs and a random session identifier are processed; processing takes place in the United States. Please do not enter any sensitive personal data in the chat.</p>
<h2>8. Sensitive personal data</h2>
<p>Receipt items may reveal sensitive personal data, such as indications of your health from a pharmacy receipt. Our list of categories contains entries such as pharmacy, drugstore, medicines, fitness and insurance. If we assign your receipt to such a category or evaluate these categories in analyses, we are processing sensitive personal data. We only do this with your express consent, which you can withdraw at any time in the settings. Without this consent, the receipts concerned are kept without a content category. We do not use categories relating to religious, ideological or political views.</p>
<h2>9. Profiling</h2>
<p>The spending analysis evaluates your receipts automatically in order to create overviews, categories and notices. This is profiling. Because of how revealing receipt data can be, we treat it as high-risk profiling and only carry it out with your express consent, which you can withdraw at any time in the settings. Without consent, receiving, capturing and storing receipts as well as the warranty overview remain fully usable.</p>
<h2>10. Artificial intelligence</h2>
<p>For the assistant in the app and for reading and categorising receipts, we use language models from OpenAI (OpenAI, L.L.C., United States) via their application programming interface. Text content is transmitted, namely your inputs, recognised receipt texts and the extracts of your data required for the answer. Photos are not transmitted to OpenAI.</p>
<p>Under OpenAI's terms for the application programming interface, transmitted content is not used to train the models and is stored for a maximum of 30 days for abuse monitoring. The same applies to the website chat via the Chatbase service.</p>
<p>The assistant's output may be incorrect; it does not constitute financial, tax, legal or health advice. You can delete your conversation history in the app.</p>
<h2>11. Automated individual decisions</h2>
<p>We do not make any decisions based solely on automated processing that have legal consequences for you or significantly disadvantage you. You can correct the automatic categorisation of your receipts at any time.</p>
<h2>12. Advertising</h2>
<p>The app may contain advertising spaces; these are labelled as advertisements. To measure advertising effectiveness, we use components from Google and Meta. These are only activated after you have given your consent in the app; on Apple devices, additionally only after consent in the App Tracking Transparency system dialog. You can withdraw your consent at any time. Advertisers do not receive any personal data from us.</p>
<h2>13. Disclosure to merchants</h2>
<p>Your personal data is not disclosed to merchants. Merchants transmit receipt data to us via an interface; no data about you is returned. The data record linked to a receipt does not contain any information about you on the merchant's side. Should we introduce a function in the future that allows you to share data with a merchant, this will only be done with your express, field-specific and revocable consent; we would amend this policy in advance.</p>
<h2>14. Processors and recipients</h2>
<p>We engage service providers for development and operation who may only process personal data in accordance with our instructions. The list is set out in Annex A.</p>
<p>In addition, we disclose personal data if we are legally obliged to do so, if this is necessary to protect our rights before authorities and courts, or in the context of a business succession, in which case the obligations of this policy are passed on.</p>
<h2>15. Disclosure abroad</h2>
<p>Part of the processing takes place in Switzerland, part in the European Union and part in the United States. For disclosures to countries without adequate data protection within the meaning of Annex 1 of the Data Protection Ordinance, we rely on the European Commission's standard contractual clauses with the Swiss addendum or on the recipient's certification under the Swiss-U.S. Data Privacy Framework, and take additional measures where necessary. You can request copies of the safeguards from us.</p>
<h2>16. Retention and deletion</h2>
<p>We retain personal data for as long as the purpose requires, as statutory obligations demand, or as long as claims need to be safeguarded. The retention periods for each category are set out in Annex B. If you delete your account, your data will be deleted within 30 days; backup copies are overwritten within 90 days. This does not apply to data that we must retain for longer for legal reasons.</p>
<h2>17. Data security</h2>
<p>We protect personal data through technical and organisational measures, in particular encrypted transmission, encrypted storage with our cloud providers, access restrictions on a need-to-know basis, separation of development and production environments, and measures to prevent abuse. No provider can guarantee absolute security.</p>
<h2>18. Your rights</h2>
<p>You can request information about the data processed about you, its correction or deletion, the restriction of processing and the release of the data you have provided to us in a common electronic format. You can object to any processing that we base on an overriding interest. Send requests to info@quitty.ch, subject “Datenschutz”; to prevent misuse, we may request proof of identity. We respond within 30 days; if an extension is necessary, we will inform you within this period.</p>
<h2>19. Withdrawal of consent</h2>
<p>You can withdraw consent at any time with effect for the future, in the app under Settings in the Privacy section or at the address above. The lawfulness of processing carried out before the withdrawal remains unaffected.</p>
<h2>20. Minors</h2>
<p>The use of Quitty requires a minimum age of 16. If we learn that an account is held by a younger person, we will delete it.</p>
<h2>21. Cookies and similar technologies</h2>
<p>Details are set out in the Cookie and Tracking Policy, available at quitty.ch. You can also adjust your settings there.</p>
<h2>22. Data security breaches</h2>
<p>If a data security breach is likely to result in a high risk to you, we will inform you and report the incident to the Federal Data Protection and Information Commissioner as soon as possible.</p>
<h2>23. Changes</h2>
<p>We will amend this policy if our processing changes. The published version applies. We will inform you in the app about material changes; if new processing requires consent, we will obtain it in advance.</p>
<h2>24. Complaints</h2>
<p>You can contact us at any time. The competent supervisory authority in Switzerland is the Federal Data Protection and Information Commissioner, Feldeggweg 1, 3003 Bern.</p>
<h2>25. Version</h2>
<p>Version 1.0, valid from 21 September 2026. This version replaces all previous versions.</p>
<hr />
<h2>Annex A — Service providers and recipients</h2>
<table>
  <thead><tr><th>Service provider</th><th>Registered office</th><th>Service</th><th>Place of processing</th></tr></thead>
  <tbody>
    <tr><td>Syntech Solutions AG</td><td>Switzerland</td><td>Development, maintenance and operation</td><td>Switzerland</td></tr>
    <tr><td>Google Ireland Ltd. / Google LLC (Firebase, Google Cloud)</td><td>Ireland / USA</td><td>Database, storage, sign-in, notifications, analytics, text recognition</td><td>mainly Zurich; individual functions in the USA</td></tr>
    <tr><td>Exoscale (Akenes SA)</td><td>Switzerland</td><td>Servers for the assistant</td><td>Switzerland or EU</td></tr>
    <tr><td>OpenAI, L.L.C.</td><td>USA</td><td>Language models for the assistant and receipt reading</td><td>USA</td></tr>
    <tr><td>Apple Inc.</td><td>USA</td><td>Sign in with Apple, push delivery on iOS</td><td>USA</td></tr>
    <tr><td>Vercel Inc.</td><td>USA</td><td>Delivery of the website</td><td>Frankfurt (Germany) and CDN</td></tr>
    <tr><td>Chatbase</td><td>USA</td><td>Chat assistant on the website</td><td>USA</td></tr>
    <tr><td>Vimeo Inc.</td><td>USA</td><td>Video embedding on the website</td><td>USA</td></tr>
    <tr><td>Formspree Inc.</td><td>USA</td><td>Website contact form</td><td>USA</td></tr>
    <tr><td>Meta Platforms Inc.</td><td>USA</td><td>Measuring advertising effectiveness</td><td>USA</td></tr>
    <tr><td>Logo.dev</td><td>USA</td><td>Retrieval of merchant logos</td><td>USA</td></tr>
  </tbody>
</table>
<h2>Annex B — Retention periods</h2>
<table>
  <thead><tr><th>Category</th><th>Period</th><th>Reason</th></tr></thead>
  <tbody>
    <tr><td>Account and master data</td><td>Duration of account + 12 months</td><td>Evidence, abuse prevention</td></tr>
    <tr><td>Receipt data</td><td>Duration of account, maximum 10 years</td><td>Purpose of the service</td></tr>
    <tr><td>Assistant conversation history</td><td>until deleted by you, maximum 24 months</td><td>Purpose of the service</td></tr>
    <tr><td>Loyalty points</td><td>Participation + 24 months</td><td>Programme administration</td></tr>
    <tr><td>Records of consent</td><td>5 years after withdrawal</td><td>Accountability</td></tr>
    <tr><td>Log data</td><td>6 to 12 months</td><td>Security</td></tr>
    <tr><td>Accounting-relevant data</td><td>10 years</td><td>Art. 958f CO</td></tr>
    <tr><td>Support correspondence</td><td>24 months</td><td>Quality, evidence</td></tr>
    <tr><td>Backup copies</td><td>Overwritten within 90 days</td><td>Operation</td></tr>
  </tbody>
</table>`;

export default html;
