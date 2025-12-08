---
table_name: tbl_site_locations
primary_key: "[[site_location_id]]"
foreign_keys:
  - "[[location_id]]"
  - "[[SEAD/Columns/tbl_locations]]"
  - "[[site_id]]"
columns:
  - "[[date_updated]]"
connected_tables:
  - "[[tbl_locations]]"
  - "[[tbl_sites]]"
---

Associates site identifiers with location names.
