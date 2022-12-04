---
title: 4 Multilingual Sites
layout: default
tags: pages
---

Very often, you'll want your site to support more than one language.  The simplest way to do this is to create a root folder for each langague.  For example:

```
my-project
  - en
    en.json
    index.md
  - es
    es.json
    index.md
```
The en.json and es.json files only need to contain the two-letter iso langauge code
`{"lang": "en"}` or `{"lang": "es"}`  

You will also need to set a default language in your `.eleventy.js` file.  For example, this file sets the `en` folder as default to load when no language is given.:

```js
eleventyConfig.addPlugin(EleventyI18nPlugin, {
      // any valid BCP 47-compatible language tag is supported
      defaultLanguage: "en", // Required, this site uses "en"
      errorMode: "never"
    });
```

There's much more on internationalization in the 11ty docs.  It's important to note that the I18N plugin is only available in 11ty version 2.0+, which requires Node 14+.  