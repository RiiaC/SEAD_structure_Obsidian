---
table_name: tbl_measured_value_dimensions
primary_key: "[[measured_value_dimension_id]]"
foreign_keys:
  - "[[dimension_id]]"
  - "[[measured_value_id]]"
columns:
  - "[[date_updated]]"
  - "[[dimension_value]]"
connected_tables:
  - "[[tbl_dimensions]]"
  - "[[tbl_measured_values]]"
---

Stores dimensional measurements of samples, such as weight before and after burning, volume, or other similar metrics.
