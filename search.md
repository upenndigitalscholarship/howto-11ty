---
title: 8 Search
layout: default
tags: pages
---

Pagefind is a relatively new search index builder for static sites.  It's similar to Lunar, but requires less configuration. It will index your it will search and index your site directory after you run a build. Pagefind is especially suited to large sites.  Where Lunr requires that the entire search index be fetched, pagefind uses an index hierarchy to access only those parts of the index that relate to the query. 

[Docs](https://pagefind.app/)

To install pagfind: `npm install pagefind`

When you run pagefind,  For example, `npx pagefind --source "_site"`.

You'll see something like this:
```yaml
[Reading languages]
Discovered 1 language: en

[Building search indexes]
Total: 
  Indexed 1 language
  Indexed 9 pages
  Indexed 402 words
  Indexed 0 filters
  Indexed 0 sorts

Finished in 0.9 seconds

```

All of the  pagefind files are saved in`_site/_pagefind`

## Search interface 

Pagefind comes with a ready to use search interface.
1. Add the js and css to your default or base template
```html
<link href="/_pagefind/pagefind-ui.css" rel="stylesheet">
<script src="/_pagefind/pagefind-ui.js" type="text/javascript"></script>
```
2. add `id="search"` to the element you'd like for search.
3. add this script 
```html
<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        new PagefindUI({ element: "#search" });
    });
</script>
```
4. Call pagefind after build in netlify.toml or or GitHub actions. `npx eleventy && npx pagefind --source "_site"`

> Note that you can also add `--serve` to npx pagefind and it will serve you site folder and you can test search locally. 