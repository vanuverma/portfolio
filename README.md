# Portfolio (GitHub Pages)

This repository contains a static, client-rendered portfolio site suitable for GitHub Pages.

How to update content
- Projects are defined in `content/projects.json`. Edit that file to add, remove, or update projects.
- Each project may include an `image` field. The value can be:
  - a local path like `assets/images/myproject.jpg` (recommended), or
  - a full URL `https://...` to an externally hosted image.

Adding images
1. Create the directory `assets/images` in the repo if it doesn't exist.
2. Upload images via the GitHub web UI (Add file → Upload files) into `assets/images/`.
3. Refer to the uploaded filename in `content/projects.json` (example: `"image": "assets/images/myproject.jpg"`).

Publishing with GitHub Pages
1. In your repository on GitHub, go to Settings → Pages.
2. Set Source to "main" branch and folder "/" (root). Save.
3. The site will be available at `https://vanuverma.github.io/portfolio` (or the domain you configure).

Notes
- No build step required; the site is static.
- To disable Jekyll processing (recommended when using folders like `_something`), a `.nojekyll` file is included.