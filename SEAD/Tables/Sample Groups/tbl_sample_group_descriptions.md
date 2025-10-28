---
table_name: tbl_sample_group_descriptions
primary_key: "[[sample_group_description_id]]"
foreign_keys:
  - "[[sample_group_description_type_id]]"
  - "[[sample_group_id]]"
columns:
  - "[[date_updated]]"
  - "[[group_description]]"
connected_tables:
  - "[[tbl_sample_group_description_types]]"
  - "[[tbl_sample_groups]]"
---

Contains definitions or descriptions of groups of samples, categorized by a specific description type.
