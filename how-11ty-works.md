---
title: 2 How 11ty Works
layout: default
tags: pages
templateEngineOverride: md
---

11ty uses the directory structure of your project folder to build a site. Any markdown or HTML files will be converted into a page. Anything nested in a folder will be nested in the site.  So `/pages/2022/about.md` will become `/pages/2022/about` on the site. 

As an example, you can create an index.md file in your project's root directory. When you run `npx eleventy`, 11ty will create a `_site` directory and add an index.html file in that folder with content from your index.md file. 

**index.md**
```markdown
# I am markdown
```
becomes 

**index.html**
```html
<h1>I am markdown</h1>
```
If there are files that you don't want 11ty to process, you can add them to an `.eleventyignore` file. 


## Templates
One of the main advantages of site generators is their ability to separate content from layout. With templates, we have reusable and consistent formatting and layout for a site's content. 11ty will look for your templates in an `_includes` directory.   

Here's an example of a very simple template using the [Nunjucks](https://mozilla.github.io/nunjucks/) templating language.  11ty also supports [liquid](https://liquidjs.com/tutorials/intro-to-liquid.html) and [Handlebars](https://handlebarsjs.com/)

**default.njk**
```markdown
<!DOCTYPE html>
<html>
    <head>
        <title>{{ title }}</title>
    </head>

    <body>
        {{ content | safe }}
    </body>
</html>
```

## Frontmatter

Frontmatter is a section in a markdown file in yaml format for data and metadata. We can use it to save the author of a text or tags for keywords. To tell 11ty that we want our file index.md to use the default.njk template, we'll need to add frontmatter. The `title` key gives us a value to insert in the template's placeholder `{{ title }}`. The `layout` key tells 11ty to look for a template in `_includes` named default and to use it when rendering the page. Note that the text beneath the frontmatter is placed where we have `{{ content | safe }}`  

**index.md**
```markdown
---
title: my page
layout: default
---

# I am markdown
```

Now becomes

```html
<!DOCTYPE html>
<html>
    <head>
        <title>my page</title>
    </head>

    <body>
        <h1>I am markdown</h1>
    </body>
</html>
```
> 11ty will also process frontmatter in json or javascript is that's your preference: https://www.11ty.dev/docs/data-frontmatter/#alternative-front-matter-formats

## Collections and tags
We often have many pages of the same type. For example, our site might have a recipes section with many recipe pages.  Eleventy would call this a `collection`.  The simplest way to identify everything as a recipe is to add a json file in the recipes folder. This will automatically add the `recipe` tag to every file in the folder and subfolders. If you prefer, tags can also be added in frontmatter `tag: ['recipe','yummy']`. 

**mysite/recipes/recipes.json**
```json
{
    "tags": [
      "recipes"
    ]
}
```

```
-- recipes 
    recipes.json
    - cakes
        - chocolate.md
        - black-forest.md
    - pasta
        - tortellini.md
```

Now that our recipe files have the `recipes` tag, we can access them as a collection. 

```html
<ul>
{% for recipe in collections.recipes %}
  <li><a href="{{ recipe.url }}">{{ recipe.data.title }}</a>
{% endfor %}
</ul>
```

Pagination of collections 
`{% if pagination.href.previous %} Previous Page {% endif %} {% if pagination.href.next %} Next Page {% endif %}`

https://www.11ty.dev/docs/collections/#collection-item-data-structure

## Data 

`_data`


https://github.com/jlengstorf/11ty-examples/tree/master/09-third-party-data