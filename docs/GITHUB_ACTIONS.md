# GitHub Actions Setup Guide

To enable automatic CI/CD and GitHub Pages deployment, create the file `.github/workflows/deploy.yml` with the following content:

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
    - uses: actions/checkout@v3

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy to GitHub Pages
      if: github.event_name == 'push' && github.ref == 'refs/heads/main'
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Steps to Enable:

1. Create the `.github/workflows/` directory if it doesn't exist
2. Add the `deploy.yml` file with the content above
3. Go to repository Settings → Pages → Set source to "Deploy from a branch"
4. Select the `gh-pages` branch as the deployment source
5. Push changes to trigger the workflow

This will automatically:
- Build the project on every push to main
- Deploy to GitHub Pages
- Make the site available at: `https://tk-tools-development.github.io/tk.tools_mlo.maker/`
