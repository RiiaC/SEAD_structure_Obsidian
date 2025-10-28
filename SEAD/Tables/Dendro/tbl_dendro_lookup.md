---
table_name: tbl_dendro_lookup
primary_key: "[[dendro_lookup_id]]"
foreign_keys:
  - "[[method_id]]"
columns:
  - "[[date_updated]]"
  - "[[description]]"
  - "[[name]]"
connected_tables:
  - "[[tbl_methods]]"
---

type=lookup
