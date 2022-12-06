---
layout: default
eleventyExcludeFromCollections: true
---
# howto-11ty
This is an informal space to share ideas, experience and links related to 11ty 


[11ty Docs](https://www.11ty.dev/)

<ul>
{% for page in collections.pagesAscending %}
<li><a href="{{ page.url | url }}">{{ page.data.title}}</a></li>
{% endfor %}
</ul>