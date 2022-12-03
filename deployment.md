---
title: 6 Deployment
layout: default
tags: pages
---
## GitHub Pages
https://www.rockyourcode.com/how-to-deploy-eleventy-to-github-pages-with-github-actions/

Note that you'll need to adjust your urls when using Pages. Pages adds the repository name after github.io, creating `upenndigitalscholarship.github.io/howto-11ty/` rather than `localhost:8080/` when developing locally. 
```js
module.exports = function(eleventyConfig) {
  return {
    pathPrefix: "/howto-11ty/"
  }
};
```
## Netlify

