---
table_name: tbl_sample_locations
primary_key: "[[sample_location_id]]"
foreign_keys:
  - "[[physical_sample_id]]"
  - "[[sample_location_type_id]]"
columns:
  - "[[date_updated]]"
  - "[[location]]"
connected_tables:
  - "[[tbl_physical_samples]]"
  - "[[tbl_sample_location_types]]"
---

Contains information about the locations of samples based on predefined types.
