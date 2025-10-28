---
table_name: tbl_data_types
primary_key: "[[data_type_id]]"
foreign_keys:
  - "[[data_type_group_id]]"
columns:
  - "[[data_type_name]]"
  - "[[date_updated]]"
  - "[[definition]]"
connected_tables:
  - "[[tbl_data_type_groups]]"
---

Specifies the types of quantification methods used in datasets, including definitions of each classification system.
