PATHFINDER v21.3 – GITHUB PAGES UPDATE PACK

CONTENTS
- index.html: v21.3 source with an always-available official government/exam source directory and strengthened independence disclaimer.
- manifest.webmanifest: PWA manifest with relative paths for a GitHub Pages project site.
- sw.js: service worker for same-origin app shell caching.
- privacy-policy.html: privacy page matching the app's current on-device storage disclosure.
- icons/: 192px, 512px and maskable app icons.
- play-store-assets/: optional 1024x500 feature graphic.

DEPLOY TO GITHUB PAGES
1. Open your existing Pathfinder-carrer-hub GitHub repository.
2. Back up or download the current repository contents first.
3. Upload the CONTENTS of this folder to the repository root (not the enclosing ZIP and not a nested folder).
4. Commit the changes to the main branch.
5. In Settings > Pages, keep Deploy from a branch, branch main, folder /(root).
6. Open the GitHub Pages URL shown in Settings > Pages. It should end with /Pathfinder-carrer-hub/ for a project site.
7. Test the home page, navigation, source directory links, privacy-policy.html, manifest.webmanifest and icons.
8. If an old cached version appears, close the installed PWA/browser tab and clear that site's cached data, then reopen the live URL.

BEFORE PWABUILDER / GOOGLE PLAY
- Confirm the live URL works over HTTPS.
- Check all source links and every government/exam claim against the relevant current official notice.
- Verify the privacy policy matches the app's actual behaviour and is publicly accessible.
- Run PWABuilder again using the live URL.
- Use the ORIGINAL signing keystore, alias and passwords for future updates. Never share these secrets.
- Set a versionCode greater than the version already uploaded to Play Console.
- Upload the newly generated signed AAB, not an APK.

IMPORTANT
This ZIP is a website/PWA deployment pack. It is NOT an Android App Bundle (.aab), and it does not itself clear a Google Play policy rejection. Google Play review is not guaranteed. The official source directory is a corrective step; manually verify each displayed factual claim and link before resubmitting.
