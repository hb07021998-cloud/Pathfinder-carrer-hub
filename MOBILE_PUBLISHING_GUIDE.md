# Pathfinder – publish from a phone (fresh start)

Prepared: 21 November 2026  
Support contact: hb07021998@gmail.com

This folder is the **web/PWA source and Play Store preparation kit**. It is NOT an Android APK or signed Android App Bundle (`.aab`). You must generate the Android package after hosting and validating the website, then test and upload it through Google Play Console.

## A. Before you begin

1. Download this ZIP to your Android phone.
2. Open Files > Downloads and extract it.
3. Open the extracted folder. You should immediately see `index.html`, `manifest.webmanifest`, `sw.js`, and the other files. There must not be an extra project folder inside the ZIP.
4. Keep the `icons` folder intact. It contains `icon-192.png`, `icon-512.png`, and `icon-512-maskable.png`.
5. Do not delete your old GitHub repository until the new one is published and verified.

## B. Create a brand-new GitHub repository

1. In Chrome, sign in at https://github.com.
2. Create a new repository named `pathfinder-career-hub` (spelling exactly as shown).
3. Choose **Public**. Do not initialize it with a README, license, or .gitignore.
4. Open the new repository > Add file > Upload files.
5. Upload the **contents** of the extracted package to the repository root. Do not upload the ZIP itself and do not upload an enclosing folder.
6. Include the `icons` folder and all three PNGs. If GitHub's mobile upload flow does not preserve folders, create `icons` using Add file > Create new file and the path `icons/.gitkeep`, then upload the three PNGs into that folder.
7. Commit the upload to the `main` branch.

Expected repository root:

```
index.html
manifest.webmanifest
sw.js
privacy-policy.html
icons/
  icon-192.png
  icon-512.png
  icon-512-maskable.png
feature-graphic-1024x500.png
PLAY_STORE_LISTING.md
PLAY_CONSOLE_CHECKLIST.md
MOBILE_PUBLISHING_GUIDE.md
README_FIRST.txt
.nojekyll
```

## C. Publish with GitHub Pages

1. In the repository, open Settings > Pages.
2. Under Build and deployment, select **Deploy from a branch**.
3. Select branch `main` and folder `/(root)`, then Save.
4. Wait for GitHub Pages to publish. The expected address (if your GitHub username is `hb07021998-cloud`) is:
   `https://hb07021998-cloud.github.io/pathfinder-career-hub/`
5. Open the homepage in Chrome. Check it loads and navigate through the app.

## D. Verify every important URL before using PWABuilder

Replace the example base URL if your actual GitHub username or repository differs. Open each URL in Chrome; icon URLs must display an image, not a 404 page.

- `https://hb07021998-cloud.github.io/pathfinder-career-hub/`
- `https://hb07021998-cloud.github.io/pathfinder-career-hub/manifest.webmanifest`
- `https://hb07021998-cloud.github.io/pathfinder-career-hub/icons/icon-192.png`
- `https://hb07021998-cloud.github.io/pathfinder-career-hub/icons/icon-512.png`
- `https://hb07021998-cloud.github.io/pathfinder-career-hub/icons/icon-512-maskable.png`
- `https://hb07021998-cloud.github.io/pathfinder-career-hub/privacy-policy.html`

If any URL returns 404, stop and fix the GitHub file path/capitalization before proceeding. GitHub paths are case-sensitive.

## E. Run the PWA assessment

1. Open https://www.pwabuilder.com in Chrome.
2. Enter the public HTTPS homepage URL (not the manifest URL).
3. Run the assessment.
4. Confirm the manifest and all icons are fetched successfully.
5. Optional manifest warnings (for example, screenshots, shortcuts, widgets, or platform-specific fields) are not automatically fatal. Do not invent screenshots or metadata to silence warnings. Capture real app screenshots later.
6. Resolve red errors before packaging. If PWABuilder still reports an error, save the full report/screenshot and stop; do not guess at manifest edits.

## F. Choose the correct Android packaging path

The correct route depends on the app's truthful intended age group and current Google Play policy. Pathfinder is student-focused and its original file is labelled kid-friendly. Decide the actual intended audience before selecting a packaging method or completing Play Console's target-audience declaration. Do not declare 13+ solely to bypass a technical restriction.

If the PWA/TWA route is suitable for the declared audience and PWABuilder offers a Google Play Android package:

1. Choose Package for Stores > Android (wording may change).
2. Follow the current PWABuilder Android packaging prompts.
3. Choose an application ID only after checking it is available and final. Suggested ID: `in.pathfinder.careerhub`. Package IDs are difficult to change after publishing.
4. Use version name `1.0.0` and initial version code `1` if the packaging tool asks.
5. Generate the Google Play App Bundle (`.aab`) if offered. Google Play's standard new-app upload is an Android App Bundle, not this source ZIP.
6. Keep the signing key/keystore and passwords in a secure backup. Never send them by email or chat. Losing the upload/signing credentials can complicate future updates.
7. If the packaging tool does not support your audience or does not produce a valid `.aab`, stop and use an appropriate native Android packaging route that complies with the declared audience and Play policy. Do not upload an APK/source ZIP in place of the requested AAB.

## G. Create the Play Console app

1. Open https://play.google.com/console and sign in with the Google account you intend to use as publisher.
2. Register for a developer account if needed; complete identity and payment/verification steps shown by Google.
3. Select Create app.
4. Suggested listing values are in `PLAY_STORE_LISTING.md`.
5. Set support email to `hb07021998@gmail.com`.
6. Set the public privacy policy URL to:
   `https://hb07021998-cloud.github.io/pathfinder-career-hub/privacy-policy.html`
   (only after confirming it opens publicly).
7. Complete App content, Data safety, Ads, Target audience, Content rating, App access, and other declarations accurately based on the final app and actual data practices. The privacy policy is a draft and must be checked against the final built app and any SDKs/services added by the packaging process.
8. Upload the feature graphic included in this package and capture at least two genuine phone screenshots of the working app. Do not use fabricated screenshots or claim features that are not present.
9. Complete the store listing using `PLAY_STORE_LISTING.md`.

## H. Testing and release

1. Start with Internal testing and upload the generated `.aab`.
2. Add testers, roll out the internal test, and install it from the Google Play testing link.
3. Test navigation, all buttons, saved progress, clear-data behavior, links, display on small screens, offline behaviour, and privacy/contact links.
4. If your personal developer account was created after 13 November 2023, Google currently requires a closed test with at least 12 testers opted in continuously for at least 14 days before applying for production access. Check the current Console dashboard because account-specific rules can differ.
5. Complete Play Console's production access process if required, then submit the production release for review.

## I. Before public launch

- Test the app on a real Android device and more than one screen size.
- Verify salary, eligibility, exam, admission and recruitment information against official sources; the app is educational guidance, not a guarantee.
- Confirm privacy policy, Data safety answers, ads declaration, target audience and permissions match the actual final package.
- Keep the source ZIP, generated AAB, version details and signing credentials backed up securely.

## Support details

- Support email: `hb07021998@gmail.com`
- Policy effective date in this starter: 21 November 2026
- Suggested app name: Pathfinder – Career Hub
- Suggested category: Education
- Suggested package ID (check availability): `in.pathfinder.careerhub`

Google's policies and packaging-tool screens can change. Follow the current prompts in Play Console and its Help Center if they differ from this guide.
