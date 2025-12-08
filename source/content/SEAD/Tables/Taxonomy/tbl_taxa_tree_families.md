---
table_name: tbl_taxa_tree_families
primary_key: "[[family_id]]"
foreign_keys:
  - "[[order_id]]"
columns:
  - "[[date_updated]]"
  - "[[family_name]]"
connected_tables:
  - "[[tbl_taxa_tree_orders]]"
---

Specifies information about taxonomic families.
