# Steve N — website (fan page + press kit)

Plain HTML + CSS (plus a few lines of JavaScript at the bottom of each page).
No build step. Two pages share the same styles, translations and images:

| Address | File | For |
|---|---|---|
| `your-domain.com` | `index.html` | Fans: link in bio (music, studio clips, sets, shows, socials) |
| `your-domain.com/presskit` | `presskit/index.html` | Promoters and bookers (send this link) |

The fan page links to the press kit ("Press kit" button in the top bar + the band above the footer),
and the press kit has a "Home" button in its top bar that goes back to the fan page.

## What to upload (GitHub Pages)
The whole website is these items. Keep the same folder structure:

```
index.html
favicon.ico
.nojekyll      ← empty file: tells GitHub Pages to serve the files as they are (faster)
presskit/      ← the press kit page
css/           ← style.css (shared) + fan.css (fan page)
js/            ← i18n.js (EN / ES / FR for both pages)
assets/        ← images, logos, icons (assets/img/fan/ = fan page images)
```

`README.md` and the hidden `.claude/` folder are only for editing (it does no harm to upload them).

**Updating an existing GitHub Pages site:** upload everything above to the repository (replace when asked).
GitHub Pages serves folders automatically: `presskit/index.html` becomes `/presskit/`. Nothing to configure.

> Heads-up: the address you used before now opens the **fan page**. From now on, send promoters
> the `/presskit/` link.

**Own domain (optional):** buy it at any registrar, then in the repo go to *Settings → Pages → Custom domain*,
type it, and follow GitHub's DNS instructions. Tick *Enforce HTTPS* once it's available.

### After it's online (one small edit per page)
Social apps (WhatsApp, Instagram, Facebook) need the full address of the preview image.
In `index.html` **and** `presskit/index.html`, change `og:image` and `twitter:image`
from `assets/img/…` / `../assets/img/…` to the full address, e.g.
`https://your-domain.com/assets/img/og-steve-n.jpg`.

## Fan page (`index.html`) — how to update it
- **New release**: in the *Music* section, copy one `<a class="disc">` block, then change the Spotify link,
  the cover image (put a square image in `assets/img/fan/`), the date and the title.
  To feature it as "Latest release", change the `latest` block (artwork, title, and the track ID in the
  Spotify player link).
- **"Coming soon" card**: it's the first `disc disc--next` block; delete it if you don't want it.
- **Shows**: nothing to edit here. Add dates in *Bandsintown for Artists*; they appear automatically
  and the heading switches from "coming soon" to "Upcoming dates".
- **Videos**: copy an `<a class="clip">` block and change the YouTube ID in `data-yt`, `href` and the
  cover image (`assets/img/fan/yt-<videoID>.webp`).
- **Instagram phone**: shows the profile with 15 saved copies of real posts (not a live feed) that scroll by
  on their own; everything opens the profile. To refresh it, replace files in `assets/img/fan/ig/`
  (`post-01.webp` = newest … `post-15.webp`, portrait 3:4, 300×400) and `avatar.webp` for the profile picture.
  A live feed needs a free account at a feed service (e.g. Behold.so) that gives you a small code to paste here.

## Files
| File | Used for |
|---|---|
| `assets/img/fan/art-*.webp` | Release covers (Falling, Mirame, Technomami, With You) |
| `assets/img/fan/studio-1500.webp` / `-760.webp` | "In the studio" photo panel |
| `assets/img/fan/sets-2000.webp` / `-760.webp` | "Live sets" photo panel |
| `assets/img/fan/shows-1980.webp` / `-1000.webp` | Shows background |
| `assets/img/fan/ig/post-*.webp`, `ig/avatar.webp` | Instagram phone preview (posts + profile picture) |
| `assets/img/fan/yt-<videoID>.webp` | Video covers |
| `assets/img/hero-cutout.webp` / `-1400.webp` / `-1000.webp` | Hero portrait on both pages (transparent cut-out; phones and most screens load a smaller size) |
| `assets/img/low-effort-artwork.webp` | "Low Effort" cover (both pages) |
| `assets/img/live-booth-1800.webp` / `-900.webp` | Press kit Highlights photo (Gallo Negro) |
| `assets/img/support-<videoID>.webp` | Press kit support clip covers |
| `assets/img/perf-3200.webp` / `-1200.webp` | Press kit Performances background |
| `assets/img/contact.webp` | Press kit Booking ("Let's play.") photo |
| `assets/img/og-steve-n.jpg` | Preview image when a link is shared (1200×630) |
| `assets/logo/steve-n-logo-navy.webp` / `-white.webp` | Logos |
| `favicon.ico`, `assets/icons/` | Tab icon and iPhone home-screen icon |

## Languages (EN / ES / FR)
The switcher in the top-right corner translates the whole page without reloading.
- English is written in the HTML; Spanish and French are in `js/i18n.js` (one file for both pages).
- Every translated text has a `data-i18n="key"`; the same key in `js/i18n.js` holds the ES / FR version.
  Keys starting with `f.` are fan-page only. When you change an English text, update both translations.
- The press kit's pre-filled email and WhatsApp messages are also translated (`MSG` in `js/i18n.js`).
- First visit: the page opens in the visitor's browser language (ES / FR), otherwise English,
  and remembers the choice.

## Editing tips
- **Colours**: at the top of `css/style.css` under `:root` (`--red`, `--navy`, `--cream`…).
- **Press kit hero overlap**: `--photo-overlap` under `.hero__photo` in `style.css`.
- **DJ set**: replace the SoundCloud track URL inside the SoundCloud `<iframe>`; the artwork updates itself.
- **Booking messages** (press kit): the Email and WhatsApp links contain the pre-filled text (URL-encoded).
- **Cache**: after editing a CSS or JS file, raise its `?v=` number where it's linked
  (`style.css?v=33`, `fan.css?v=8`, `i18n.js?v=11`, in both pages for shared files) so returning visitors get the new version.
