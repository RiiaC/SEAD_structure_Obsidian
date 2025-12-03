---
table_name: tbl_geochron_refs
primary_key: "[[geochron_ref_id]]"
foreign_keys:
  - "[[biblio_id]]"
  - "[[geochron_id]]"
columns:
  - "[[date_updated]]"
connected_tables:
  - "[[tbl_biblio]]"
  - "[[tbl_geochronology]]"
---

Contains references for geochronological (radiometric) dating of samples.
