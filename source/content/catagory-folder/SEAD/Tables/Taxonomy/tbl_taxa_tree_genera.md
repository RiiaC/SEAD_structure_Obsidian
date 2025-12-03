---
table_name: tbl_taxa_tree_genera
primary_key: "[[genus_id]]"
foreign_keys:
  - "[[family_id]]"
columns:
  - "[[date_updated]]"
  - "[[genus_name]]"
connected_tables:
  - "[[tbl_taxa_tree_families]]"
---

Contains taxonomic genera information.
