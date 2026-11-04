# Wenxiang Jiao (焦文祥)

Personal academic homepage for Wenxiang Jiao, deployed with GitHub Pages at
https://wxjiao.github.io.

The site is built with Jekyll. Core content lives in `_pages`, reusable sections
live in `_includes`, structured project/publication/news data lives in `_data`,
and the visual system is maintained in `css/main.scss`.

Research themes are defined in `_data/research_areas.yml`. Both the home page
and research page use `_data/projects.yml`; set `featured: true` to feature a
work on the home page and use `area` to place it under a research theme.
Within each research area, `research_highlight: true` works appear first, ordered
by `research_priority`. The current highlights have at least 500 citations or
500 stars in the dated snapshot. Remaining works appear by `year` (venue year,
newest first), then published venues alphabetically, followed by preprints.
`venue_group` keeps the same venue together even when display labels include
Oral, Findings, or D&B distinctions. Titles sort alphabetically within each
venue-year group. The home page retains the editorial order in the data file.
Impact labels use the optional `impact` fields in `_data/projects.yml`. Counts
are dated snapshots from Google Scholar and the linked GitHub repository; update
the values, source links, and checked dates together when refreshing them.
The original CV is a local reference and is excluded from the site build.

Run the lightweight structure checks with:

```bash
ruby test/site_structure_test.rb
```
