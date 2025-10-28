---
example data:
  - Neustadt LA 156
  - Hemmor
  - Trørød
best matched column: "[[site_name]]"
---
> [!info] The Site column 
> contains the names of the archaeological sites which contributed samples to the project. 
> 
 
 **Therefore, it is a good match for [[site_name]]**, which is a part of tbl_sites. The following additional columns from tbl_sites will need to be added to the dataset to supplement the site name already provided:…

In addition we need to add info for columns in [[SEAD/Tables/Location/tbl_locations]]:

  - "[[default_lat_dd]]" 
  - "[[default_long_dd]]"
  - [ ] find out if the default lat/long info in tbl_locations can be blank or if we need to provide it
  - "[[location_name]]"
connected_tables:
  - "[[tbl_location_types]]"




