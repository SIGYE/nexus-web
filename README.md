# NEXUS · E-Lab final challenge website

The website of **NEXUS**, a student-led think tank in Rwanda working on youth unemployment.
It is a frontend-only site built with React (Vite), Tailwind CSS v4, react-router (HashRouter), framer-motion and lucide-react.

## Run it

```bash
npm install      # first time only
npm run dev      # start the dev server, then open the URL it prints (usually http://localhost:5173)
npm run lint     # check the code
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

Requires Node 20 or newer.

## Where things live

```
public/
  images/
    brand/     logo, social share image (og-image.jpg)
    hero/      home page hero photo
    team/      member portraits (portrait, ~4:5)
    journey/   photos for each challenge
    gallery/   photos for the Media & Stories gallery
  videos/      video files, if you are not using YouTube
  docs/        the grant proposal PDF
src/
  data/        ALL editable content (see below)
  components/  reusable building blocks
  pages/       Home, About, Journey, Impact, Media, 404
```

You should only need to edit **`src/data/`** and drop files into **`public/`**.

## Editing content

Placeholder text always starts with **"Add …"** or reads **"Source: to be added"**. Search the `src/data` folder for `Add ` to find everything that still needs filling in.

| File | What it controls |
| --- | --- |
| `site.js` | Name, logo, contact details, social links, proposal + pitch video links, hero, mission, vision, values, group statement |
| `members.js` | Team member cards (About page), home team preview, reflections (Media page) |
| `challenges.js` | The 6 challenges: Home timeline cards and the Journey chapters, including status (`completed`, `in-progress`, `coming-next`) |
| `impact.js` | Problem layers, research evidence, pillars, 4-step model, grant details, proposed indicators, achieved/in-progress/targets |
| `videos.js` | Journey film and the filterable video library |
| `gallery.js` | Photo gallery with lightbox |
| `placeholders.js` | Temporary placeholder video and poster. Delete it once nothing imports it any more |

**Honesty rule:** never put proposed numbers in `progress.achieved` or present targets as results. Keep research claims marked "Source: to be added" until you have a real source, then add `source` and `url`.

### Adding images

1. Put the file in the matching `public/images/...` folder, e.g. `public/images/team/aline.jpg`.
2. Reference it in the data file **without** a leading slash or `public`: `photo: 'images/team/aline.jpg'`.
3. Always write a meaningful `alt` text describing the photo.

The current `placeholder-*.svg` images are generated illustrations. Delete them once the real photos are in. An empty path (`''`) shows a labelled "Add photo" tile.

### Adding videos

Every `video` field accepts either:

- **A YouTube link or ID**: `https://youtu.be/abc123XYZ00`, `https://www.youtube.com/watch?v=abc123XYZ00`, or just `abc123XYZ00`. Videos are embedded privately via youtube-nocookie.com and only load after the visitor clicks play.
- **A video file**: put it in `public/videos/` and use `video: 'videos/pitch.mp4'`. You can add `poster: 'images/hero/pitch-cover.jpg'` as a cover image. Keep files small (YouTube is better for anything over ~50 MB).

`''` shows a "Video coming soon" frame. The pitch video and proposal link are set **once** in `site.js → links` and reused on the Journey, Impact and Media pages.

### Proposal PDF

Put it in `public/docs/` and set `links.proposal: 'docs/nexus-proposal.pdf'` in `site.js` (or paste a Google Drive link). Until it is set, the download button shows "coming soon".

### Social links and contact

Fill in `site.socials` and `site.contact` in `site.js`. Empty values are hidden automatically.

## Deploying

The build uses relative paths and HashRouter (URLs look like `/#/about`), so `dist/` works on any static host with no extra config.

- **Netlify:** "Add new site" → import the repo → build command `npm run build`, publish directory `dist`. Or drag the `dist/` folder onto app.netlify.com/drop.
- **Vercel:** import the repo. It detects Vite automatically (build `npm run build`, output `dist`).
- **GitHub Pages:** run `npm run build` and publish the `dist/` folder, e.g. with the `gh-pages` package (`npx gh-pages -d dist`), or a GitHub Actions workflow that uploads `dist/` as a Pages artifact. Then in Settings → Pages, choose the `gh-pages` branch.

## Accessibility and motion

- Animations respect the visitor's "reduce motion" setting.
- All interactive elements have visible focus rings. The lightbox supports Esc, arrow keys and swipe.
- Text colours are chosen for WCAG AA contrast. Green buttons use dark navy text for that reason.
