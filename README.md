# Syndicate Union

Website for **Syndicate Union**, a Discord community for players of the mobile game *Foundation: Galactic Frontier*. Static site (no build step) intended for GitHub Pages hosting.

All content is placeholder/dummy content for planning purposes and will be replaced once a full content brief is available.

## Structure

```
index.html          Home
about.html           About / leadership
guides.html          Guide hub
guides/               Guide detail pages
  getting-started.html
  combat-basics.html
news.html            Community news / posts
events.html           Upcoming events
roster.html           Rank structure + member showcase
join.html             How to join + rules summary
faq.html              FAQ accordion
assets/
  css/styles.css      Shared stylesheet
  js/main.js          Nav toggle, FAQ accordion, starfield background
  img/favicon.svg      Site icon
```

## Local preview

No build tooling required — serve the folder with any static file server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this repo to GitHub (branch `main` or your default branch).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch".
4. Choose the branch (e.g. `main`) and root folder `/`.
5. Save — the site will publish at `https://<username>.github.io/<repo>/`.

The included `.nojekyll` file disables Jekyll processing so the static files are served as-is.
