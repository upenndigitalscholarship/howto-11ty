---
title: 6 Deployment
layout: default
tags: pages
templateEngineOverride: md
---

## GitHub Pages
https://www.rockyourcode.com/how-to-deploy-eleventy-to-github-pages-with-github-actions/

Note that you'll need to adjust your urls when using Pages. GH Pages adds the repository name after github.io, creating `upenndigitalscholarship.github.io/howto-11ty/` rather than `localhost:8080/` when developing locally.

You can add a prefix in the build command of your GitHub action: 
`npx @11ty/eleventy --pathprefix=howto-11ty`

You will also need to use this syntax for urls
`href="{{ '/assets/css/style.css' | url }}"` rather than `href="/assets/css/style.css"`

## Netlify

