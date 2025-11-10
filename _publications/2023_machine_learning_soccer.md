---
layout: publication
pub_id: stival2023ml
collection: publications
permalink: /publication/2023-01-01-using-ml-pipeline-football
---

{% assign pub = site.data.publications.publications | where: "id", page.pub_id | first %}

{% if pub %}
  <!-- Publication data is loaded from _data/publications.yml -->
  {{ pub.abstract }}
{% else %}
  <!-- Fallback content if data not found -->
  This publication's details are managed in the centralized publications data file.
{% endif %}