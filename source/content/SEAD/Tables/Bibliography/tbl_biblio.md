---
table_name: tbl_biblio
primary_key: "[[biblio_id]]"
columns:
  - "[[authors]]"
  - "[[biblio_uuid]]"
  - "[[bugs_reference]]"
  - "[[date_updated]]"
  - "[[doi]]"
  - "[[full_reference]]"
  - "[[isbn]]"
  - "[[notes]]"
  - "[[title]]"
  - "[[url]]"
  - "[[year]]"
---

Central repository for storing bibliographic references in the SEAD database. It stores detailed citations, including author, title, year, publisher, and DOI/URL for various sources such as books and articles. This table connects to domain-specific tables via foreign keys, ensuring data integrity and supporting research by centralizing bibliographic information.
