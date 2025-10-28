---
table_name: tbl_methods
primary_key: "[[method_id]]"
foreign_keys:
  - "[[biblio_id]]"
  - "[[method_group_id]]"
  - "[[record_type_id]]"
  - "[[unit_id]]"
columns:
  - "[[date_updated]]"
  - "[[description]]"
  - "[[method_abbrev_or_alt_name]]"
  - "[[method_name]]"
  - "[[method_uuid]]"
connected_tables:
  - "[[tbl_biblio]]"
  - "[[tbl_method_groups]]"
  - "[[tbl_record_types]]"
  - "[[tbl_units]]"
---

Contains definitions and details of various analysis methods.
