---
table_name: tbl_abundance_modifications
primary_key: "[[abundance_modification_id]]"
foreign_keys:
  - "[[abundance_id]]"
  - "[[modification_type_id]]"
columns:
  - "[[date_updated]]"
connected_tables:
  - "[[tbl_abundances]]"
  - "[[tbl_modification_types]]"
---

Contains information about modifications applied to individual specimen counts, such as carbonization, corrosion, or calcification. This enables recording multiple instances of the same taxon with varying modifications (e.g., Hordeum sp. carbonized and Hordeum sp. unmodified).
