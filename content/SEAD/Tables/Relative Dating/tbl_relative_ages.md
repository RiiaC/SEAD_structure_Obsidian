---
table_name: tbl_relative_ages
primary_key: "[[relative_age_id]]"
foreign_keys:
  - "[[location_id]]"
  - "[[relative_age_type_id]]"
columns:
  - "[[abbreviation]]"
  - "[[c14_age_older]]"
  - "[[c14_age_younger]]"
  - "[[cal_age_older]]"
  - "[[cal_age_younger]]"
  - "[[date_updated]]"
  - "[[source/docs/plugins/Description]]"
  - "[[notes]]"
  - "[[relative_age_name]]"
  - "[[relative_age_uuid]]"
connected_tables:
  - "[[tbl_locations]]"
  - "[[tbl_relative_age_types]]"
---

Contains definitions of ages based on historical periods or calendar events, including age ranges and geographical relevance (e.g., Mesolithic in Sweden).
