---
best matched column:
  - "[[element_name]]"
aliases:
  - B.
date created: Monday, September 22nd 2025, 2:26:42 pm
example_data:
  - Phalanx
  - Femur
  - Mandibula
---
> [!info] Element 
> Lists the type of bone upon which analysis was performed (e.g. Femur, Mandibula, Humerus, etc.). 

![[Radiocarbon data column B.png]]

> [!tips]+ This is similar to [[element_name]],
> which gives an abbreviated name for the element, such as 'mni', 'seed', or 'leaf', and is part of the table [[tbl_abundance_elements]]

- [ ] create and fill in a sheet called **abundance_elements**  in the  [radiocarbon_Glykou_etal_2021_input.xlsx spreadsheet]([radiocarbon_Glykou_etal_2021_input.xlsx](https://umeauniversity.sharepoint.com/:x:/r/sites/SEAD72/Shared%20Documents/Task%20force%20-%20System%20analysis%20of%20radiocarbon%20data/Datasets/AFL/input-data/radiocarbon_Glykou_etal_2021_input.xlsx?d=w34fa6e11a37c4afe9398f92ea68bd11c&csf=1&web=1&e=LaDqOd))  spreadsheet with the following columns
- **system_id** This column is filled incrementally, starting with 1 and is used during the import process to keep track of the data in this sheet, and to cross-reference its connections to the other sheets.
- **[[abundance_element_id]]** This will be the unique ide associated with each **element_name**, as these are all new element_names in SEAD, they need to be assigned a number in the system
- **[[record_type_id]]** as these analyses were all performed on animal bones, use record_type_id =14, which is the value already in SEAD for animal bones.
- **[[element_name]]** This is where each unique value from this column will be entered. As this will be the first SEAD dataset to report analyses of bones, all of these are new element names:
1. Cranium 
2. Femur 
3. Fibula 
4. Humerus 
5. Mandibula 
6. nd 
7. Occipitale 
8. Phalanx 
9. Radius 
10. Scapula 
11. Temporal 
12. Vertebra 
- **[[element_description]]** As these are all new element types for SEAD, ask the researcher to provide a description to go with each of these element names which will help non-specialists understand what each term means

> [!tips]+ related tables
> Because we need the table **abundance_elements** for this data, we must also have the related table **tbl_abundances**. These tables are linked with the key **abundance_element_id** therefore we continue:

- [ ] create and fill in a sheet called **abundances**  in the  [radiocarbon_Glykou_etal_2021_input.xlsx spreadsheet]([radiocarbon_Glykou_etal_2021_input.xlsx](https://umeauniversity.sharepoint.com/:x:/r/sites/SEAD72/Shared%20Documents/Task%20force%20-%20System%20analysis%20of%20radiocarbon%20data/Datasets/AFL/input-data/radiocarbon_Glykou_etal_2021_input.xlsx?d=w34fa6e11a37c4afe9398f92ea68bd11c&csf=1&web=1&e=LaDqOd))  spreadsheet with the following columns
- **system_id** This column is filled incrementally, starting with 1 and is used during the import process to keep track of the data in this sheet, and to cross-reference its connections to the other sheets.
- **[[taxon_id]]** This specifies the taxonomic unit related to this record, where **taxon_id = 1 = sp.**, and is the value assumed for this data set when the initial mapping was done.
- **[[analysis_entity_id]]**
- **[[abundance_element_id]]** copy this information from the **system_id** numbers of the **abundance_elements** sheet. (If it helps to keep track of which ones have been done, you can also add a column to show the corresponding element_name on this sheet, but it is not needed for the import process, this column is enough to connect the information for the relational part of the database.)

>[!warning] finish filling in this page from here

- **[[abundance	date_updated]]**
- **[[abundance_id]]**




