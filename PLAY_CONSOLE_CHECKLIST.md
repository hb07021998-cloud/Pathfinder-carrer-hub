# Google Play Console checklist – Pathfinder

Use this as a preparation list. Do not guess at policy declarations; answer based on the actual final app and audience.

## App identity
- [ ] App name: Pathfinder – Career Hub (maximum 30 characters; shorten if Console requires)
- [ ] Default language: English (India)
- [ ] App type: App
- [ ] Category: Education
- [ ] Free/paid: choose the intended business model
- [ ] Package/application ID: `in.pathfinder.careerhub` only if available and confirmed before first upload
- [ ] Version: `1.0.0`; initial version code `1`
- [ ] Support email: `hb07021998@gmail.com`
- [ ] Website: published GitHub Pages homepage
- [ ] Privacy policy: published `privacy-policy.html` URL

## Store assets
- [ ] App icon: use a compliant 512 × 512 PNG for Play Console listing
- [ ] Feature graphic: included `feature-graphic-1024x500.png`
- [ ] Phone screenshots: capture at least two real screenshots from the final app
- [ ] Short description and full description: see `PLAY_STORE_LISTING.md`
- [ ] All claims and screenshots accurately represent the released app

## App content and policy forms
- [ ] Target audience and age groups: declare truthfully, especially whether children under 13 are intended users
- [ ] Families policy requirements: complete if the app is directed to children / included in Families
- [ ] Data safety: audit actual data flows, local storage, hosting, SDKs, analytics and packaging components before answering
- [ ] Ads: declare accurately
- [ ] Content rating questionnaire
- [ ] App access: explain whether any content requires login (the current web app does not require an account)
- [ ] Sensitive permissions: review and justify any requested permissions
- [ ] Government affiliation: do not imply government endorsement or affiliation
- [ ] Financial/medical claims: do not add unless applicable and compliant
- [ ] Privacy policy is public, accessible, and matches actual app behaviour

## Release
- [ ] Build a valid signed Android App Bundle (.aab) using a packaging route appropriate for the target audience
- [ ] Confirm target API level meets the current new-app requirement (Google currently states API 36 for new apps)
- [ ] Keep signing/upload credentials backed up securely
- [ ] Upload to Internal testing first
- [ ] Test on physical Android devices
- [ ] Closed test if required by account type
- [ ] Production access application if required
- [ ] Submit for Google review

## Important
The supplied ZIP contains web/PWA source and listing assets. It does not contain a signed `.aab`, developer account, app signing key, Play Console approval, or store screenshots captured from a real device. These must be completed separately.
