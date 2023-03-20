---
title: X Data
layout: default
tags: pages
---

To dump an 11ty collection to JSON, you can use the eleventy-navigation plugin. Here are the steps:

1.  Install the eleventy-navigation plugin using npm in your project folder by running the following command:

```
npm install @11ty/eleventy-navigation --save-dev
```

2.  In your .eleventy.js configuration file, add the following code:

```
const pluginNavigation = require("@11ty/eleventy-navigation");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginNavigation);
};
```

3.  In the template where you want to output the JSON data, use the `navigation` variable provided by the plugin to access the collection you want to dump to JSON. For example, if you have a collection of blog posts, you can get an array of their data like this:

```
{% raw %}
---
layout: default
permalink: /blog.json
eleventyExcludeFromCollections: true
---
{{ collections.posts | map(navigation => navigation.data) | safe }}
{% endraw %}
```

In the above example, we're creating a permalink for the JSON file (`/blog.json`) and excluding it from Eleventy's normal collections. Then we're using the `map` filter to extract just the data for each post (stored in the `navigation.data` property). Finally, we're outputting the resulting array as safe markup to avoid HTML escaping.

That's it! When you run Eleventy, it will generate a JSON file at `/blog.json` with an array of each blog post's data.
