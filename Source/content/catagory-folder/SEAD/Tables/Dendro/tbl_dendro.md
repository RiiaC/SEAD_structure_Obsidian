---
table_name: tbl_dendro
primary_key: "[[dendro_id]]"
foreign_keys:
  - "[[analysis_entity_id]]"
  - "[[dendro_lookup_id]]"
columns:
  - "[[date_updated]]"
  - "[[measurement_value]]"
connected_tables:
  - "[[tbl_analysis_entities]]"
  - "[[tbl_dendro_lookup]]"
---

nan
