---
table_name: tbl_abundance_elements
primary_key: "[[abundance_element_id]]"
foreign_keys:
  - "[[record_type_id]]"
columns:
  - "[[date_updated]]"
  - "[[element_description]]"
  - "[[element_name]]"
connected_tables:
  - "[[tbl_record_types]]"
---

Contains reference data that defines the type of element, part, or unit being counted, as indicated by the values in tbl_abundances. For insects, this is often the Minimum Number of Individuals (MNI), but it can also include individual body parts such as wings, shells, or leg segments. For plant remains (macrofossils), it generally represents specific plant parts like seeds, leaves, or bud scales.
