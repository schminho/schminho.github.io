---
layout: default
title: Projects
permalink: /projects/
---

# Projects Overview

Below is a list of all our projects:

<ul>
    {% for page in site.pages %}
        {% if page.url contains '/projects/' and page.url != '/projects/' %}
            <li><a href="{{ page.url }}">{{ page.title }}</a></li>
        {% endif %}
    {% endfor %}
</ul>
