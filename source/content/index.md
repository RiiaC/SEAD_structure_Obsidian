---
title: SEAD Structure
---
# Welcome to an illustration of SEAD's Database Structure
*This illustration was created using the note-taking program, [Obsidian.](https://obsidian.md/), chosen for its graphical representation of the connections between notes.*

>[!info] The Strategic Environmental Archaeology Database (SEAD) 
>is a national research infrastructure for environmental archaeology data developed and managed at the Environmental Archaeology Lab (MAL) in collaboration with Humlab at Umeå University, Sweden. For more information, check out the [SEAD web page](https://www.sead.se/), or check out the [SEAD Browser](https://browser.sead.se/) to explore the data itself.

This web page provides a graphical representation of the structure of the SEAD database, with a note for every table and column in the database itself with links showing which columns are part of what tables.

In addition, there is another set of notes for mapping the [[Radiocarbon Data mapping/]] in preparation for importation into SEAD. These notes are still in progress, but serve as a record of how the mapping is progressing, and thus will be available later for training others in the process of mapping a new dataset to SEAD.

Thus far the notes describing [[D. Site]] and [[O. Source]] are complete and linked to all of relevant SEAD tables and columns. 

<!-- QueryToSerialize: LIST file.name + " — " + primary_key FROM "" WHERE primary_key SORT file.name ASC -->
<!-- SerializedQuery: LIST file.name + " — " + primary_key FROM "" WHERE primary_key SORT file.name ASC -->
- [[tbl_abundance_elements]]: tbl_abundance_elements — [[abundance_element_id]]
- [[tbl_abundance_ident_levels]]: tbl_abundance_ident_levels — [[abundance_ident_level_id]]
- [[tbl_abundance_modifications]]: tbl_abundance_modifications — [[abundance_modification_id]]
- [[tbl_abundances]]: tbl_abundances — [[abundance_id]]
- [[tbl_activity_types]]: tbl_activity_types — [[activity_type_id]]
- [[tbl_age_types]]: tbl_age_types — [[age_type_id]]
- [[tbl_aggregate_datasets]]: tbl_aggregate_datasets — [[aggregate_dataset_id]]
- [[tbl_aggregate_order_types]]: tbl_aggregate_order_types — [[aggregate_order_type_id]]
- [[tbl_aggregate_sample_ages]]: tbl_aggregate_sample_ages — [[aggregate_sample_age_id]]
- [[tbl_aggregate_samples]]: tbl_aggregate_samples — [[aggregate_sample_id]]
- [[tbl_alt_ref_types]]: tbl_alt_ref_types — [[alt_ref_type_id]]
- [[tbl_analysis_boolean_values]]: tbl_analysis_boolean_values — [[analysis_boolean_value_id]]
- [[tbl_analysis_categorical_values]]: tbl_analysis_categorical_values — [[analysis_categorical_value_id]]
- [[tbl_analysis_dating_ranges]]: tbl_analysis_dating_ranges — [[analysis_dating_range_id]]
- [[tbl_analysis_entities]]: tbl_analysis_entities — [[analysis_entity_id]]
- [[tbl_analysis_entity_ages]]: tbl_analysis_entity_ages — [[analysis_entity_age_id]]
- [[tbl_analysis_entity_dimensions]]: tbl_analysis_entity_dimensions — [[analysis_entity_dimension_id]]
- [[tbl_analysis_entity_prep_methods]]: tbl_analysis_entity_prep_methods — [[analysis_entity_prep_method_id]]
- [[tbl_analysis_identifiers]]: tbl_analysis_identifiers — [[analysis_identifier_id]]
- [[tbl_analysis_integer_ranges]]: tbl_analysis_integer_ranges — [[analysis_integer_range_id]]
- [[tbl_analysis_integer_values]]: tbl_analysis_integer_values — [[analysis_integer_value_id]]
- [[tbl_analysis_notes]]: tbl_analysis_notes — [[analysis_note_id]]
- [[tbl_analysis_numerical_ranges]]: tbl_analysis_numerical_ranges — [[analysis_numerical_range_id]]
- [[tbl_analysis_numerical_values]]: tbl_analysis_numerical_values — [[analysis_numerical_value_id]]
- [[tbl_analysis_taxon_counts]]: tbl_analysis_taxon_counts — [[analysis_taxon_count_id]]
- [[tbl_analysis_value_dimensions]]: tbl_analysis_value_dimensions — [[analysis_value_dimension_id]]
- [[tbl_analysis_values]]: tbl_analysis_values — [[analysis_value_id]]
- [[tbl_biblio]]: tbl_biblio — [[biblio_id]]
- [[tbl_ceramics]]: tbl_ceramics — [[ceramics_id]]
- [[tbl_ceramics_lookup]]: tbl_ceramics_lookup — [[ceramics_lookup_id]]
- [[tbl_ceramics_measurements]]: tbl_ceramics_measurements — [[ceramics_measurement_id]]
- [[tbl_chronologies]]: tbl_chronologies — [[chronology_id]]
- [[tbl_colours]]: tbl_colours — [[colour_id]]
- [[tbl_contact_types]]: tbl_contact_types — [[contact_type_id]]
- [[tbl_contacts]]: tbl_contacts — [[contact_id]]
- [[tbl_coordinate_method_dimensions]]: tbl_coordinate_method_dimensions — [[coordinate_method_dimension_id]]
- [[tbl_data_type_groups]]: tbl_data_type_groups — [[data_type_group_id]]
- [[tbl_data_types]]: tbl_data_types — [[data_type_id]]
- [[tbl_dataset_contacts]]: tbl_dataset_contacts — [[dataset_contact_id]]
- [[tbl_dataset_masters]]: tbl_dataset_masters — [[master_set_id]]
- [[tbl_dataset_methods]]: tbl_dataset_methods — [[dataset_method_id]]
- [[tbl_dataset_submission_types]]: tbl_dataset_submission_types — [[submission_type_id]]
- [[tbl_dataset_submisssion]]: tbl_dataset_submisssion — [[dataset_submission_id]]
- [[tbl_datasets]]: tbl_datasets — [[dataset_id]]
- [[tbl_dating_labs]]: tbl_dating_labs — [[dating_lab_id]]
- [[tbl_dating_material]]: tbl_dating_material — [[dating_material_id]]
- [[tbl_dating_uncertainty]]: tbl_dating_uncertainty — [[dating_uncertainty_id]]
- [[tbl_dendro]]: tbl_dendro — [[dendro_id]]
- [[tbl_dendro_date_notes]]: tbl_dendro_date_notes — [[dendro_date_note_id]]
- [[tbl_dendro_dates]]: tbl_dendro_dates — [[dendro_date_id]]
- [[tbl_dendro_lookup]]: tbl_dendro_lookup — [[dendro_lookup_id]]
- [[tbl_dimensions]]: tbl_dimensions — [[dimension_id]]
- [[tbl_ecocode_definitions]]: tbl_ecocode_definitions — [[ecocode_definition_id]]
- [[tbl_ecocode_groups]]: tbl_ecocode_groups — [[ecocode_group_id]]
- [[tbl_ecocode_systems]]: tbl_ecocode_systems — [[ecocode_system_id]]
- [[tbl_ecocodes]]: tbl_ecocodes — [[ecocode_id]]
- [[tbl_feature_types]]: tbl_feature_types — [[feature_type_id]]
- [[tbl_features]]: tbl_features — [[feature_id]]
- [[tbl_geochron_refs]]: tbl_geochron_refs — [[geochron_ref_id]]
- [[tbl_geochronology]]: tbl_geochronology — [[geochron_id]]
- [[tbl_horizons]]: tbl_horizons — [[horizon_id]]
- [[tbl_identification_levels]]: tbl_identification_levels — [[identification_level_id]]
- [[tbl_image_types]]: tbl_image_types — [[image_type_id]]
- [[tbl_imported_taxa_replacements]]: tbl_imported_taxa_replacements — [[imported_taxa_replacement_id]]
- [[tbl_isotope_measurements]]: tbl_isotope_measurements — [[isotope_measurement_id]]
- [[tbl_isotope_standards]]: tbl_isotope_standards — [[isotope_standard_id]]
- [[tbl_isotope_types]]: tbl_isotope_types — [[isotope_type_id]]
- [[tbl_isotope_value_specifiers]]: tbl_isotope_value_specifiers — [[isotope_value_specifier_id]]
- [[tbl_isotopes]]: tbl_isotopes — [[isotope_id]]
- [[tbl_languages]]: tbl_languages — [[language_id]]
- [[tbl_lithology]]: tbl_lithology — [[lithology_id]]
- [[tbl_location_types]]: tbl_location_types — [[location_type_id]]
- [[tbl_locations]]: tbl_locations — [[location_id]]
- [[tbl_mcr_names]]: tbl_mcr_names — [[taxon_id]]
- [[tbl_mcr_summary_data]]: tbl_mcr_summary_data — [[mcr_summary_data_id]]
- [[tbl_mcrdata_birmbeetledat]]: tbl_mcrdata_birmbeetledat — [[mcrdata_birmbeetledat_id]]
- [[tbl_measured_value_dimensions]]: tbl_measured_value_dimensions — [[measured_value_dimension_id]]
- [[tbl_measured_values]]: tbl_measured_values — [[measured_value_id]]
- [[tbl_method_groups]]: tbl_method_groups — [[method_group_id]]
- [[tbl_methods]]: tbl_methods — [[method_id]]
- [[tbl_modification_types]]: tbl_modification_types — [[modification_type_id]]
- [[tbl_physical_sample_features]]: tbl_physical_sample_features — [[physical_sample_feature_id]]
- [[tbl_physical_samples]]: tbl_physical_samples — [[physical_sample_id]]
- [[tbl_project_stages]]: tbl_project_stages — [[project_stage_id]]
- [[tbl_project_types]]: tbl_project_types — [[project_type_id]]
- [[tbl_projects]]: tbl_projects — [[project_id]]
- [[tbl_rdb]]: tbl_rdb — [[rdb_id]]
- [[tbl_rdb_codes]]: tbl_rdb_codes — [[rdb_code_id]]
- [[tbl_rdb_systems]]: tbl_rdb_systems — [[rdb_system_id]]
- [[tbl_record_types]]: tbl_record_types — [[record_type_id]]
- [[tbl_relative_age_refs]]: tbl_relative_age_refs — [[relative_age_ref_id]]
- [[tbl_relative_age_types]]: tbl_relative_age_types — [[relative_age_type_id]]
- [[tbl_relative_ages]]: tbl_relative_ages — [[relative_age_id]]
- [[tbl_relative_dates]]: tbl_relative_dates — [[relative_date_id]]
- [[tbl_sample_alt_refs]]: tbl_sample_alt_refs — [[sample_alt_ref_id]]
- [[tbl_sample_colours]]: tbl_sample_colours — [[sample_colour_id]]
- [[tbl_sample_coordinates]]: tbl_sample_coordinates — [[sample_coordinate_id]]
- [[tbl_sample_description_sample_group_contexts]]: tbl_sample_description_sample_group_contexts — [[sample_description_sample_group_context_id]]
- [[tbl_sample_description_types]]: tbl_sample_description_types — [[sample_description_type_id]]
- [[tbl_sample_descriptions]]: tbl_sample_descriptions — [[sample_description_id]]
- [[tbl_sample_dimensions]]: tbl_sample_dimensions — [[sample_dimension_id]]
- [[tbl_sample_group_coordinates]]: tbl_sample_group_coordinates — [[sample_group_position_id]]
- [[tbl_sample_group_description_type_sampling_contexts]]: tbl_sample_group_description_type_sampling_contexts — [[sample_group_description_type_sampling_context_id]]
- [[tbl_sample_group_description_types]]: tbl_sample_group_description_types — [[sample_group_description_type_id]]
- [[tbl_sample_group_descriptions]]: tbl_sample_group_descriptions — [[sample_group_description_id]]
- [[tbl_sample_group_dimensions]]: tbl_sample_group_dimensions — [[sample_group_dimension_id]]
- [[tbl_sample_group_images]]: tbl_sample_group_images — [[sample_group_image_id]]
- [[tbl_sample_group_notes]]: tbl_sample_group_notes — [[sample_group_note_id]]
- [[tbl_sample_group_references]]: tbl_sample_group_references — [[sample_group_reference_id]]
- [[tbl_sample_group_sampling_contexts]]: tbl_sample_group_sampling_contexts — [[sampling_context_id]]
- [[tbl_sample_groups]]: tbl_sample_groups — [[sample_group_id]]
- [[tbl_sample_horizons]]: tbl_sample_horizons — [[sample_horizon_id]]
- [[tbl_sample_images]]: tbl_sample_images — [[sample_image_id]]
- [[tbl_sample_location_type_sampling_contexts]]: tbl_sample_location_type_sampling_contexts — [[sample_location_type_sampling_context_id]]
- [[tbl_sample_location_types]]: tbl_sample_location_types — [[sample_location_type_id]]
- [[tbl_sample_locations]]: tbl_sample_locations — [[sample_location_id]]
- [[tbl_sample_notes]]: tbl_sample_notes — [[sample_note_id]]
- [[tbl_sample_types]]: tbl_sample_types — [[sample_type_id]]
- [[tbl_season_types]]: tbl_season_types — [[season_type_id]]
- [[tbl_seasons]]: tbl_seasons — [[season_id]]
- [[tbl_site_images]]: tbl_site_images — [[site_image_id]]
- [[tbl_site_locations]]: tbl_site_locations — [[site_location_id]]
- [[tbl_site_natgridrefs]]: tbl_site_natgridrefs — [[site_natgridref_id]]
- [[tbl_site_other_records]]: tbl_site_other_records — [[site_other_records_id]]
- [[tbl_site_preservation_status]]: tbl_site_preservation_status — [[site_preservation_status_id]]
- [[tbl_site_references]]: tbl_site_references — [[site_reference_id]]
- [[tbl_sites]]: tbl_sites — [[site_id]]
- [[tbl_species_association_types]]: tbl_species_association_types — [[association_type_id]]
- [[tbl_species_associations]]: tbl_species_associations — [[species_association_id]]
- [[tbl_taxa_common_names]]: tbl_taxa_common_names — [[taxon_common_name_id]]
- [[tbl_taxa_images]]: tbl_taxa_images — [[taxa_images_id]]
- [[tbl_taxa_measured_attributes]]: tbl_taxa_measured_attributes — [[measured_attribute_id]]
- [[tbl_taxa_reference_specimens]]: tbl_taxa_reference_specimens — [[taxa_reference_specimen_id]]
- [[tbl_taxa_seasonality]]: tbl_taxa_seasonality — [[seasonality_id]]
- [[tbl_taxa_synonyms]]: tbl_taxa_synonyms — [[synonym_id]]
- [[tbl_taxa_tree_authors]]: tbl_taxa_tree_authors — [[author_id]]
- [[tbl_taxa_tree_families]]: tbl_taxa_tree_families — [[family_id]]
- [[tbl_taxa_tree_genera]]: tbl_taxa_tree_genera — [[genus_id]]
- [[tbl_taxa_tree_master]]: tbl_taxa_tree_master — [[taxon_id]]
- [[tbl_taxa_tree_orders]]: tbl_taxa_tree_orders — [[order_id]]
- [[tbl_taxonomic_order]]: tbl_taxonomic_order — [[taxonomic_order_id]]
- [[tbl_taxonomic_order_biblio]]: tbl_taxonomic_order_biblio — [[taxonomic_order_biblio_id]]
- [[tbl_taxonomic_order_systems]]: tbl_taxonomic_order_systems — [[taxonomic_order_system_id]]
- [[tbl_taxonomy_notes]]: tbl_taxonomy_notes — [[taxonomy_notes_id]]
- [[tbl_temperatures]]: tbl_temperatures — [[record_id]]
- [[tbl_tephra_dates]]: tbl_tephra_dates — [[tephra_date_id]]
- [[tbl_tephra_refs]]: tbl_tephra_refs — [[tephra_ref_id]]
- [[tbl_tephras]]: tbl_tephras — [[tephra_id]]
- [[tbl_text_biology]]: tbl_text_biology — [[biology_id]]
- [[tbl_text_distribution]]: tbl_text_distribution — [[distribution_id]]
- [[tbl_text_identification_keys]]: tbl_text_identification_keys — [[key_id]]
- [[tbl_units]]: tbl_units — [[unit_id]]
- [[tbl_updates_log]]: tbl_updates_log — [[updates_log_id]]
- [[tbl_value_classes]]: tbl_value_classes — [[value_class_id]]
- [[tbl_value_qualifier_symbols]]: tbl_value_qualifier_symbols — [[qualifier_symbol_id]]
- [[tbl_value_qualifiers]]: tbl_value_qualifiers — [[qualifier_id]]
- [[tbl_value_type_items]]: tbl_value_type_items — [[value_type_item_id]]
- [[tbl_value_types]]: tbl_value_types — [[value_type_id]]
- [[tbl_years_types]]: tbl_years_types — [[years_type_id]]
<!-- SerializedQuery END -->

| Table                                                                                                                                                                    | Primary Key                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[source/content/catagory-folder/SEAD/Tables/Taxa Counts/tbl_abundance_elements.md\|tbl_abundance_elements]]                                                             | [[source/content/catagory-folder/SEAD/Columns/abundance_element_id.md\|abundance_element_id]]                                                           |
| [[source/content/catagory-folder/SEAD/Tables/Taxa Counts/tbl_abundance_ident_levels.md\|tbl_abundance_ident_levels]]                                                     | [[source/content/catagory-folder/SEAD/Columns/abundance_ident_level_id.md\|abundance_ident_level_id]]                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Taxa Counts/tbl_abundance_modifications.md\|tbl_abundance_modifications]]                                                   | [[source/content/catagory-folder/SEAD/Columns/abundance_modification_id.md\|abundance_modification_id]]                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Taxa Counts/tbl_abundances.md\|tbl_abundances]]                                                                             | [[source/content/catagory-folder/SEAD/Columns/abundance_id.md\|abundance_id]]                                                                           |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_activity_types.md\|tbl_activity_types]]                                                                        | [[source/content/catagory-folder/SEAD/Columns/activity_type_id.md\|activity_type_id]]                                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Geochronology/tbl_age_types.md\|tbl_age_types]]                                                                             | [[source/content/catagory-folder/SEAD/Columns/age_type_id.md\|age_type_id]]                                                                             |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_aggregate_datasets.md\|tbl_aggregate_datasets]]                                                               | [[source/content/catagory-folder/SEAD/Columns/aggregate_dataset_id.md\|aggregate_dataset_id]]                                                           |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_aggregate_order_types.md\|tbl_aggregate_order_types]]                                                         | [[source/content/catagory-folder/SEAD/Columns/aggregate_order_type_id.md\|aggregate_order_type_id]]                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_aggregate_sample_ages.md\|tbl_aggregate_sample_ages]]                                                         | [[source/content/catagory-folder/SEAD/Columns/aggregate_sample_age_id.md\|aggregate_sample_age_id]]                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_aggregate_samples.md\|tbl_aggregate_samples]]                                                                 | [[source/content/catagory-folder/SEAD/Columns/aggregate_sample_id.md\|aggregate_sample_id]]                                                             |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_alt_ref_types.md\|tbl_alt_ref_types]]                                                                           | [[source/content/catagory-folder/SEAD/Columns/alt_ref_type_id.md\|alt_ref_type_id]]                                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_analysis_boolean_values.md\|tbl_analysis_boolean_values]]                                               | [[source/content/catagory-folder/SEAD/Columns/analysis_boolean_value_id.md\|analysis_boolean_value_id]]                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_analysis_categorical_values.md\|tbl_analysis_categorical_values]]                                       | [[source/content/catagory-folder/SEAD/Columns/analysis_categorical_value_id.md\|analysis_categorical_value_id]]                                         |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_analysis_dating_ranges.md\|tbl_analysis_dating_ranges]]                                                 | [[source/content/catagory-folder/SEAD/Columns/analysis_dating_range_id.md\|analysis_dating_range_id]]                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Dataset/tbl_analysis_entities.md\|tbl_analysis_entities]]                                                                   | [[source/content/catagory-folder/SEAD/Columns/analysis_entity_id.md\|analysis_entity_id]]                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Ages/tbl_analysis_entity_ages.md\|tbl_analysis_entity_ages]]                                                                | [[source/content/catagory-folder/SEAD/Columns/analysis_entity_age_id.md\|analysis_entity_age_id]]                                                       |
| [[source/content/catagory-folder/SEAD/Tables/Measured Value/tbl_analysis_entity_dimensions.md\|tbl_analysis_entity_dimensions]]                                          | [[source/content/catagory-folder/SEAD/Columns/analysis_entity_dimension_id.md\|analysis_entity_dimension_id]]                                           |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_analysis_entity_prep_methods.md\|tbl_analysis_entity_prep_methods]]                                           | [[source/content/catagory-folder/SEAD/Columns/analysis_entity_prep_method_id.md\|analysis_entity_prep_method_id]]                                       |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_analysis_identifiers.md\|tbl_analysis_identifiers]]                                                     | [[source/content/catagory-folder/SEAD/Columns/analysis_identifier_id.md\|analysis_identifier_id]]                                                       |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_analysis_integer_ranges.md\|tbl_analysis_integer_ranges]]                                               | [[source/content/catagory-folder/SEAD/Columns/analysis_integer_range_id.md\|analysis_integer_range_id]]                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_analysis_integer_values.md\|tbl_analysis_integer_values]]                                               | [[source/content/catagory-folder/SEAD/Columns/analysis_integer_value_id.md\|analysis_integer_value_id]]                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_analysis_notes.md\|tbl_analysis_notes]]                                                                 | [[source/content/catagory-folder/SEAD/Columns/analysis_note_id.md\|analysis_note_id]]                                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_analysis_numerical_ranges.md\|tbl_analysis_numerical_ranges]]                                           | [[source/content/catagory-folder/SEAD/Columns/analysis_numerical_range_id.md\|analysis_numerical_range_id]]                                             |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_analysis_numerical_values.md\|tbl_analysis_numerical_values]]                                           | [[source/content/catagory-folder/SEAD/Columns/analysis_numerical_value_id.md\|analysis_numerical_value_id]]                                             |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_analysis_taxon_counts.md\|tbl_analysis_taxon_counts]]                                                   | [[source/content/catagory-folder/SEAD/Columns/analysis_taxon_count_id.md\|analysis_taxon_count_id]]                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_analysis_value_dimensions.md\|tbl_analysis_value_dimensions]]                                           | [[source/content/catagory-folder/SEAD/Columns/analysis_value_dimension_id.md\|analysis_value_dimension_id]]                                             |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_analysis_values.md\|tbl_analysis_values]]                                                               | [[source/content/catagory-folder/SEAD/Columns/analysis_value_id.md\|analysis_value_id]]                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Bibliography/tbl_biblio.md\|tbl_biblio]]                                                                                    | [[source/content/catagory-folder/SEAD/Columns/biblio_id.md\|biblio_id]]                                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_ceramics.md\|tbl_ceramics]]                                                                                   | [[source/content/catagory-folder/SEAD/Columns/ceramics_id.md\|ceramics_id]]                                                                             |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_ceramics_lookup.md\|tbl_ceramics_lookup]]                                                                     | [[source/content/catagory-folder/SEAD/Columns/ceramics_lookup_id.md\|ceramics_lookup_id]]                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_ceramics_measurements.md\|tbl_ceramics_measurements]]                                                         | [[source/content/catagory-folder/SEAD/Columns/ceramics_measurement_id.md\|ceramics_measurement_id]]                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Ages/tbl_chronologies.md\|tbl_chronologies]]                                                                                | [[source/content/catagory-folder/SEAD/Columns/chronology_id.md\|chronology_id]]                                                                         |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_colours.md\|tbl_colours]]                                                                                     | [[source/content/catagory-folder/SEAD/Columns/colour_id.md\|colour_id]]                                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_contact_types.md\|tbl_contact_types]]                                                                         | [[source/content/catagory-folder/SEAD/Columns/contact_type_id.md\|contact_type_id]]                                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_contacts.md\|tbl_contacts]]                                                                                   | [[source/content/catagory-folder/SEAD/Columns/contact_id.md\|contact_id]]                                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_coordinate_method_dimensions.md\|tbl_coordinate_method_dimensions]]                                           | [[source/content/catagory-folder/SEAD/Columns/coordinate_method_dimension_id.md\|coordinate_method_dimension_id]]                                       |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_data_type_groups.md\|tbl_data_type_groups]]                                                                   | [[source/content/catagory-folder/SEAD/Columns/data_type_group_id.md\|data_type_group_id]]                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Dataset/tbl_data_types.md\|tbl_data_types]]                                                                                 | [[source/content/catagory-folder/SEAD/Columns/data_type_id.md\|data_type_id]]                                                                           |
| [[source/content/catagory-folder/SEAD/Tables/Dataset/tbl_dataset_contacts.md\|tbl_dataset_contacts]]                                                                     | [[source/content/catagory-folder/SEAD/Columns/dataset_contact_id.md\|dataset_contact_id]]                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Dataset/tbl_dataset_masters.md\|tbl_dataset_masters]]                                                                       | [[source/content/catagory-folder/SEAD/Columns/master_set_id.md\|master_set_id]]                                                                         |
| [[source/content/catagory-folder/SEAD/Tables/Dataset/tbl_dataset_methods.md\|tbl_dataset_methods]]                                                                       | [[source/content/catagory-folder/SEAD/Columns/dataset_method_id.md\|dataset_method_id]]                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Dataset/tbl_dataset_submission_types.md\|tbl_dataset_submission_types]]                                                     | [[source/content/catagory-folder/SEAD/Columns/submission_type_id.md\|submission_type_id]]                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Dataset/tbl_dataset_submisssion.md\|tbl_dataset_submisssion]]                                                               | [[source/content/catagory-folder/SEAD/Columns/dataset_submission_id.md\|dataset_submission_id]]                                                         |
| [[source/content/catagory-folder/SEAD/Tables/Dataset/tbl_datasets.md\|tbl_datasets]]                                                                                     | [[source/content/catagory-folder/SEAD/Columns/dataset_id.md\|dataset_id]]                                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_dating_labs.md\|tbl_dating_labs]]                                                                             | [[source/content/catagory-folder/SEAD/Columns/dating_lab_id.md\|dating_lab_id]]                                                                         |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_dating_material.md\|tbl_dating_material]]                                                                     | [[source/content/catagory-folder/SEAD/Columns/dating_material_id.md\|dating_material_id]]                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_dating_uncertainty.md\|tbl_dating_uncertainty]]                                                               | [[source/content/catagory-folder/SEAD/Columns/dating_uncertainty_id.md\|dating_uncertainty_id]]                                                         |
| [[source/content/catagory-folder/SEAD/Tables/Dendro/tbl_dendro.md\|tbl_dendro]]                                                                                          | [[source/content/catagory-folder/SEAD/Columns/dendro_id.md\|dendro_id]]                                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Dendro/tbl_dendro_date_notes.md\|tbl_dendro_date_notes]]                                                                    | [[source/content/catagory-folder/SEAD/Columns/dendro_date_note_id.md\|dendro_date_note_id]]                                                             |
| [[source/content/catagory-folder/SEAD/Tables/Dendro/tbl_dendro_dates.md\|tbl_dendro_dates]]                                                                              | [[source/content/catagory-folder/SEAD/Columns/dendro_date_id.md\|dendro_date_id]]                                                                       |
| [[source/content/catagory-folder/SEAD/Tables/Dendro/tbl_dendro_lookup.md\|tbl_dendro_lookup]]                                                                            | [[source/content/catagory-folder/SEAD/Columns/dendro_lookup_id.md\|dendro_lookup_id]]                                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_dimensions.md\|tbl_dimensions]]                                                                               | [[source/content/catagory-folder/SEAD/Columns/dimension_id.md\|dimension_id]]                                                                           |
| [[source/content/catagory-folder/SEAD/Tables/Ecocode/tbl_ecocode_definitions.md\|tbl_ecocode_definitions]]                                                               | [[source/content/catagory-folder/SEAD/Columns/ecocode_definition_id.md\|ecocode_definition_id]]                                                         |
| [[source/content/catagory-folder/SEAD/Tables/Ecocode/tbl_ecocode_groups.md\|tbl_ecocode_groups]]                                                                         | [[source/content/catagory-folder/SEAD/Columns/ecocode_group_id.md\|ecocode_group_id]]                                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Ecocode/tbl_ecocode_systems.md\|tbl_ecocode_systems]]                                                                       | [[source/content/catagory-folder/SEAD/Columns/ecocode_system_id.md\|ecocode_system_id]]                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Ecocode/tbl_ecocodes.md\|tbl_ecocodes]]                                                                                     | [[source/content/catagory-folder/SEAD/Columns/ecocode_id.md\|ecocode_id]]                                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Site/tbl_feature_types.md\|tbl_feature_types]]                                                                              | [[source/content/catagory-folder/SEAD/Columns/feature_type_id.md\|feature_type_id]]                                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_features.md\|tbl_features]]                                                                                   | [[source/content/catagory-folder/SEAD/Columns/feature_id.md\|feature_id]]                                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Geochronology/tbl_geochron_refs.md\|tbl_geochron_refs]]                                                                     | [[source/content/catagory-folder/SEAD/Columns/geochron_ref_id.md\|geochron_ref_id]]                                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Geochronology/tbl_geochronology.md\|tbl_geochronology]]                                                                     | [[source/content/catagory-folder/SEAD/Columns/geochron_id.md\|geochron_id]]                                                                             |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_horizons.md\|tbl_horizons]]                                                                                   | [[source/content/catagory-folder/SEAD/Columns/horizon_id.md\|horizon_id]]                                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_identification_levels.md\|tbl_identification_levels]]                                                         | [[source/content/catagory-folder/SEAD/Columns/identification_level_id.md\|identification_level_id]]                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_image_types.md\|tbl_image_types]]                                                                             | [[source/content/catagory-folder/SEAD/Columns/image_type_id.md\|image_type_id]]                                                                         |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_imported_taxa_replacements.md\|tbl_imported_taxa_replacements]]                                               | [[source/content/catagory-folder/SEAD/Columns/imported_taxa_replacement_id.md\|imported_taxa_replacement_id]]                                           |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_isotope_measurements.md\|tbl_isotope_measurements]]                                                           | [[source/content/catagory-folder/SEAD/Columns/isotope_measurement_id.md\|isotope_measurement_id]]                                                       |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_isotope_standards.md\|tbl_isotope_standards]]                                                                 | [[source/content/catagory-folder/SEAD/Columns/isotope_standard_id.md\|isotope_standard_id]]                                                             |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_isotope_types.md\|tbl_isotope_types]]                                                                         | [[source/content/catagory-folder/SEAD/Columns/isotope_type_id.md\|isotope_type_id]]                                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_isotope_value_specifiers.md\|tbl_isotope_value_specifiers]]                                                   | [[source/content/catagory-folder/SEAD/Columns/isotope_value_specifier_id.md\|isotope_value_specifier_id]]                                               |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_isotopes.md\|tbl_isotopes]]                                                                                   | [[source/content/catagory-folder/SEAD/Columns/isotope_id.md\|isotope_id]]                                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_languages.md\|tbl_languages]]                                                                                 | [[source/content/catagory-folder/SEAD/Columns/language_id.md\|language_id]]                                                                             |
| [[source/content/catagory-folder/SEAD/Tables/Sample Groups/tbl_lithology.md\|tbl_lithology]]                                                                             | [[source/content/catagory-folder/SEAD/Columns/lithology_id.md\|lithology_id]]                                                                           |
| [[source/content/catagory-folder/SEAD/Tables/Location/tbl_location_types.md\|tbl_location_types]]                                                                        | [[source/content/catagory-folder/SEAD/Columns/location_type_id.md\|location_type_id]]                                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Location/tbl_locations.md\|tbl_locations]]                                                                                  | [[source/content/catagory-folder/SEAD/Columns/location_id.md\|location_id]]                                                                             |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_mcr_names.md\|tbl_mcr_names]]                                                                                 | [[source/content/catagory-folder/SEAD/Columns/taxon_id.md\|taxon_id]]                                                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_mcr_summary_data.md\|tbl_mcr_summary_data]]                                                                   | [[source/content/catagory-folder/SEAD/Columns/mcr_summary_data_id.md\|mcr_summary_data_id]]                                                             |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_mcrdata_birmbeetledat.md\|tbl_mcrdata_birmbeetledat]]                                                         | [[source/content/catagory-folder/SEAD/Columns/mcrdata_birmbeetledat_id.md\|mcrdata_birmbeetledat_id]]                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Measured Value/tbl_measured_value_dimensions.md\|tbl_measured_value_dimensions]]                                            | [[source/content/catagory-folder/SEAD/Columns/measured_value_dimension_id.md\|measured_value_dimension_id]]                                             |
| [[source/content/catagory-folder/SEAD/Tables/Measured Value/tbl_measured_values.md\|tbl_measured_values]]                                                                | [[source/content/catagory-folder/SEAD/Columns/measured_value_id.md\|measured_value_id]]                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Provenance/tbl_method_groups.md\|tbl_method_groups]]                                                                        | [[source/content/catagory-folder/SEAD/Columns/method_group_id.md\|method_group_id]]                                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Provenance/tbl_methods.md\|tbl_methods]]                                                                                    | [[source/content/catagory-folder/SEAD/Columns/method_id.md\|method_id]]                                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_modification_types.md\|tbl_modification_types]]                                                               | [[source/content/catagory-folder/SEAD/Columns/modification_type_id.md\|modification_type_id]]                                                           |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_physical_sample_features.md\|tbl_physical_sample_features]]                                                     | [[source/content/catagory-folder/SEAD/Columns/physical_sample_feature_id.md\|physical_sample_feature_id]]                                               |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_physical_samples.md\|tbl_physical_samples]]                                                                     | [[source/content/catagory-folder/SEAD/Columns/physical_sample_id.md\|physical_sample_id]]                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Project/tbl_project_stages.md\|tbl_project_stages]]                                                                         | [[source/content/catagory-folder/SEAD/Columns/project_stage_id.md\|project_stage_id]]                                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Project/tbl_project_types.md\|tbl_project_types]]                                                                           | [[source/content/catagory-folder/SEAD/Columns/project_type_id.md\|project_type_id]]                                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Project/tbl_projects.md\|tbl_projects]]                                                                                     | [[source/content/catagory-folder/SEAD/Columns/project_id.md\|project_id]]                                                                               |
| [[source/content/catagory-folder/SEAD/Tables/RDB/tbl_rdb.md\|tbl_rdb]]                                                                                                   | [[source/content/catagory-folder/SEAD/Columns/rdb_id.md\|rdb_id]]                                                                                       |
| [[source/content/catagory-folder/SEAD/Tables/RDB/tbl_rdb_codes.md\|tbl_rdb_codes]]                                                                                       | [[source/content/catagory-folder/SEAD/Columns/rdb_code_id.md\|rdb_code_id]]                                                                             |
| [[source/content/catagory-folder/SEAD/Tables/RDB/tbl_rdb_systems.md\|tbl_rdb_systems]]                                                                                   | [[source/content/catagory-folder/SEAD/Columns/rdb_system_id.md\|rdb_system_id]]                                                                         |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_record_types.md\|tbl_record_types]]                                                                           | [[source/content/catagory-folder/SEAD/Columns/record_type_id.md\|record_type_id]]                                                                       |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_relative_age_refs.md\|tbl_relative_age_refs]]                                                                 | [[source/content/catagory-folder/SEAD/Columns/relative_age_ref_id.md\|relative_age_ref_id]]                                                             |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_relative_age_types.md\|tbl_relative_age_types]]                                                               | [[source/content/catagory-folder/SEAD/Columns/relative_age_type_id.md\|relative_age_type_id]]                                                           |
| [[source/content/catagory-folder/SEAD/Tables/Relative Dating/tbl_relative_ages.md\|tbl_relative_ages]]                                                                   | [[source/content/catagory-folder/SEAD/Columns/relative_age_id.md\|relative_age_id]]                                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Relative Dating/tbl_relative_dates.md\|tbl_relative_dates]]                                                                 | [[source/content/catagory-folder/SEAD/Columns/relative_date_id.md\|relative_date_id]]                                                                   |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_sample_alt_refs.md\|tbl_sample_alt_refs]]                                                                       | [[source/content/catagory-folder/SEAD/Columns/sample_alt_ref_id.md\|sample_alt_ref_id]]                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_sample_colours.md\|tbl_sample_colours]]                                                                         | [[source/content/catagory-folder/SEAD/Columns/sample_colour_id.md\|sample_colour_id]]                                                                   |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_sample_coordinates.md\|tbl_sample_coordinates]]                                                                 | [[source/content/catagory-folder/SEAD/Columns/sample_coordinate_id.md\|sample_coordinate_id]]                                                           |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_sample_description_sample_group_contexts.md\|tbl_sample_description_sample_group_contexts]]                   | [[source/content/catagory-folder/SEAD/Columns/sample_description_sample_group_context_id.md\|sample_description_sample_group_context_id]]               |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_sample_description_types.md\|tbl_sample_description_types]]                                                     | [[source/content/catagory-folder/SEAD/Columns/sample_description_type_id.md\|sample_description_type_id]]                                               |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_sample_descriptions.md\|tbl_sample_descriptions]]                                                               | [[source/content/catagory-folder/SEAD/Columns/sample_description_id.md\|sample_description_id]]                                                         |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_sample_dimensions.md\|tbl_sample_dimensions]]                                                                   | [[source/content/catagory-folder/SEAD/Columns/sample_dimension_id.md\|sample_dimension_id]]                                                             |
| [[source/content/catagory-folder/SEAD/Tables/Sample Groups/tbl_sample_group_coordinates.md\|tbl_sample_group_coordinates]]                                               | [[source/content/catagory-folder/SEAD/Columns/sample_group_position_id.md\|sample_group_position_id]]                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Sample Groups/tbl_sample_group_description_type_sampling_contexts.md\|tbl_sample_group_description_type_sampling_contexts]] | [[source/content/catagory-folder/SEAD/Columns/sample_group_description_type_sampling_context_id.md\|sample_group_description_type_sampling_context_id]] |
| [[source/content/catagory-folder/SEAD/Tables/Sample Groups/tbl_sample_group_description_types.md\|tbl_sample_group_description_types]]                                   | [[source/content/catagory-folder/SEAD/Columns/sample_group_description_type_id.md\|sample_group_description_type_id]]                                   |
| [[source/content/catagory-folder/SEAD/Tables/Sample Groups/tbl_sample_group_descriptions.md\|tbl_sample_group_descriptions]]                                             | [[source/content/catagory-folder/SEAD/Columns/sample_group_description_id.md\|sample_group_description_id]]                                             |
| [[source/content/catagory-folder/SEAD/Tables/Sample Groups/tbl_sample_group_dimensions.md\|tbl_sample_group_dimensions]]                                                 | [[source/content/catagory-folder/SEAD/Columns/sample_group_dimension_id.md\|sample_group_dimension_id]]                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Sample Groups/tbl_sample_group_images.md\|tbl_sample_group_images]]                                                         | [[source/content/catagory-folder/SEAD/Columns/sample_group_image_id.md\|sample_group_image_id]]                                                         |
| [[source/content/catagory-folder/SEAD/Tables/Sample Groups/tbl_sample_group_notes.md\|tbl_sample_group_notes]]                                                           | [[source/content/catagory-folder/SEAD/Columns/sample_group_note_id.md\|sample_group_note_id]]                                                           |
| [[source/content/catagory-folder/SEAD/Tables/Sample Groups/tbl_sample_group_references.md\|tbl_sample_group_references]]                                                 | [[source/content/catagory-folder/SEAD/Columns/sample_group_reference_id.md\|sample_group_reference_id]]                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Sample Groups/tbl_sample_group_sampling_contexts.md\|tbl_sample_group_sampling_contexts]]                                   | [[source/content/catagory-folder/SEAD/Columns/sampling_context_id.md\|sampling_context_id]]                                                             |
| [[source/content/catagory-folder/SEAD/Tables/Sample Groups/tbl_sample_groups.md\|tbl_sample_groups]]                                                                     | [[source/content/catagory-folder/SEAD/Columns/sample_group_id.md\|sample_group_id]]                                                                     |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_sample_horizons.md\|tbl_sample_horizons]]                                                                       | [[source/content/catagory-folder/SEAD/Columns/sample_horizon_id.md\|sample_horizon_id]]                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_sample_images.md\|tbl_sample_images]]                                                                           | [[source/content/catagory-folder/SEAD/Columns/sample_image_id.md\|sample_image_id]]                                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_sample_location_type_sampling_contexts.md\|tbl_sample_location_type_sampling_contexts]]                       | [[source/content/catagory-folder/SEAD/Columns/sample_location_type_sampling_context_id.md\|sample_location_type_sampling_context_id]]                   |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_sample_location_types.md\|tbl_sample_location_types]]                                                           | [[source/content/catagory-folder/SEAD/Columns/sample_location_type_id.md\|sample_location_type_id]]                                                     |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_sample_locations.md\|tbl_sample_locations]]                                                                     | [[source/content/catagory-folder/SEAD/Columns/sample_location_id.md\|sample_location_id]]                                                               |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_sample_notes.md\|tbl_sample_notes]]                                                                             | [[source/content/catagory-folder/SEAD/Columns/sample_note_id.md\|sample_note_id]]                                                                       |
| [[source/content/catagory-folder/SEAD/Tables/sSample/tbl_sample_types.md\|tbl_sample_types]]                                                                             | [[source/content/catagory-folder/SEAD/Columns/sample_type_id.md\|sample_type_id]]                                                                       |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_season_types.md\|tbl_season_types]]                                                                           | [[source/content/catagory-folder/SEAD/Columns/season_type_id.md\|season_type_id]]                                                                       |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_seasons.md\|tbl_seasons]]                                                                                     | [[source/content/catagory-folder/SEAD/Columns/season_id.md\|season_id]]                                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Site/tbl_site_images.md\|tbl_site_images]]                                                                                  | [[source/content/catagory-folder/SEAD/Columns/site_image_id.md\|site_image_id]]                                                                         |
| [[source/content/catagory-folder/SEAD/Tables/Site/tbl_site_locations.md\|tbl_site_locations]]                                                                            | [[source/content/catagory-folder/SEAD/Columns/site_location_id.md\|site_location_id]]                                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Site/tbl_site_natgridrefs.md\|tbl_site_natgridrefs]]                                                                        | [[source/content/catagory-folder/SEAD/Columns/site_natgridref_id.md\|site_natgridref_id]]                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Site/tbl_site_other_records.md\|tbl_site_other_records]]                                                                    | [[source/content/catagory-folder/SEAD/Columns/site_other_records_id.md\|site_other_records_id]]                                                         |
| [[source/content/catagory-folder/SEAD/Tables/Site/tbl_site_preservation_status.md\|tbl_site_preservation_status]]                                                        | [[source/content/catagory-folder/SEAD/Columns/site_preservation_status_id.md\|site_preservation_status_id]]                                             |
| [[source/content/catagory-folder/SEAD/Tables/Site/tbl_site_references.md\|tbl_site_references]]                                                                          | [[source/content/catagory-folder/SEAD/Columns/site_reference_id.md\|site_reference_id]]                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Site/tbl_sites.md\|tbl_sites]]                                                                                              | [[source/content/catagory-folder/SEAD/Columns/site_id.md\|site_id]]                                                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_species_association_types.md\|tbl_species_association_types]]                                                  | [[source/content/catagory-folder/SEAD/Columns/association_type_id.md\|association_type_id]]                                                             |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_species_associations.md\|tbl_species_associations]]                                                            | [[source/content/catagory-folder/SEAD/Columns/species_association_id.md\|species_association_id]]                                                       |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_taxa_common_names.md\|tbl_taxa_common_names]]                                                                  | [[source/content/catagory-folder/SEAD/Columns/taxon_common_name_id.md\|taxon_common_name_id]]                                                           |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_taxa_images.md\|tbl_taxa_images]]                                                                              | [[source/content/catagory-folder/SEAD/Columns/taxa_images_id.md\|taxa_images_id]]                                                                       |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_taxa_measured_attributes.md\|tbl_taxa_measured_attributes]]                                                    | [[source/content/catagory-folder/SEAD/Columns/measured_attribute_id.md\|measured_attribute_id]]                                                         |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_taxa_reference_specimens.md\|tbl_taxa_reference_specimens]]                                                    | [[source/content/catagory-folder/SEAD/Columns/taxa_reference_specimen_id.md\|taxa_reference_specimen_id]]                                               |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_taxa_seasonality.md\|tbl_taxa_seasonality]]                                                                    | [[source/content/catagory-folder/SEAD/Columns/seasonality_id.md\|seasonality_id]]                                                                       |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_taxa_synonyms.md\|tbl_taxa_synonyms]]                                                                          | [[source/content/catagory-folder/SEAD/Columns/synonym_id.md\|synonym_id]]                                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_taxa_tree_authors.md\|tbl_taxa_tree_authors]]                                                                  | [[source/content/catagory-folder/SEAD/Columns/author_id.md\|author_id]]                                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_taxa_tree_families.md\|tbl_taxa_tree_families]]                                                                | [[source/content/catagory-folder/SEAD/Columns/family_id.md\|family_id]]                                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_taxa_tree_genera.md\|tbl_taxa_tree_genera]]                                                                    | [[source/content/catagory-folder/SEAD/Columns/genus_id.md\|genus_id]]                                                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_taxa_tree_master.md\|tbl_taxa_tree_master]]                                                                    | [[source/content/catagory-folder/SEAD/Columns/taxon_id.md\|taxon_id]]                                                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_taxa_tree_orders.md\|tbl_taxa_tree_orders]]                                                                    | [[source/content/catagory-folder/SEAD/Columns/order_id.md\|order_id]]                                                                                   |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_taxonomic_order.md\|tbl_taxonomic_order]]                                                                      | [[source/content/catagory-folder/SEAD/Columns/taxonomic_order_id.md\|taxonomic_order_id]]                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_taxonomic_order_biblio.md\|tbl_taxonomic_order_biblio]]                                                        | [[source/content/catagory-folder/SEAD/Columns/taxonomic_order_biblio_id.md\|taxonomic_order_biblio_id]]                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Taxonomy/tbl_taxonomic_order_systems.md\|tbl_taxonomic_order_systems]]                                                      | [[source/content/catagory-folder/SEAD/Columns/taxonomic_order_system_id.md\|taxonomic_order_system_id]]                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_taxonomy_notes.md\|tbl_taxonomy_notes]]                                                                       | [[source/content/catagory-folder/SEAD/Columns/taxonomy_notes_id.md\|taxonomy_notes_id]]                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_temperatures.md\|tbl_temperatures]]                                                                           | [[source/content/catagory-folder/SEAD/Columns/record_id.md\|record_id]]                                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_tephra_dates.md\|tbl_tephra_dates]]                                                                           | [[source/content/catagory-folder/SEAD/Columns/tephra_date_id.md\|tephra_date_id]]                                                                       |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_tephra_refs.md\|tbl_tephra_refs]]                                                                             | [[source/content/catagory-folder/SEAD/Columns/tephra_ref_id.md\|tephra_ref_id]]                                                                         |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_tephras.md\|tbl_tephras]]                                                                                     | [[source/content/catagory-folder/SEAD/Columns/tephra_id.md\|tephra_id]]                                                                                 |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_text_biology.md\|tbl_text_biology]]                                                                           | [[source/content/catagory-folder/SEAD/Columns/biology_id.md\|biology_id]]                                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_text_distribution.md\|tbl_text_distribution]]                                                                 | [[source/content/catagory-folder/SEAD/Columns/distribution_id.md\|distribution_id]]                                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_text_identification_keys.md\|tbl_text_identification_keys]]                                                   | [[source/content/catagory-folder/SEAD/Columns/key_id.md\|key_id]]                                                                                       |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_units.md\|tbl_units]]                                                                                         | [[source/content/catagory-folder/SEAD/Columns/unit_id.md\|unit_id]]                                                                                     |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_updates_log.md\|tbl_updates_log]]                                                                             | [[source/content/catagory-folder/SEAD/Columns/updates_log_id.md\|updates_log_id]]                                                                       |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_value_classes.md\|tbl_value_classes]]                                                                   | [[source/content/catagory-folder/SEAD/Columns/value_class_id.md\|value_class_id]]                                                                       |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_value_qualifier_symbols.md\|tbl_value_qualifier_symbols]]                                                     | [[source/content/catagory-folder/SEAD/Columns/qualifier_symbol_id.md\|qualifier_symbol_id]]                                                             |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_value_qualifiers.md\|tbl_value_qualifiers]]                                                                   | [[source/content/catagory-folder/SEAD/Columns/qualifier_id.md\|qualifier_id]]                                                                           |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_value_type_items.md\|tbl_value_type_items]]                                                             | [[source/content/catagory-folder/SEAD/Columns/value_type_item_id.md\|value_type_item_id]]                                                               |
| [[source/content/catagory-folder/SEAD/Tables/Analysis Values/tbl_value_types.md\|tbl_value_types]]                                                                       | [[source/content/catagory-folder/SEAD/Columns/value_type_id.md\|value_type_id]]                                                                         |
| [[source/content/catagory-folder/SEAD/Tables/Ungrouped/tbl_years_types.md\|tbl_years_types]]                                                                             | [[source/content/catagory-folder/SEAD/Columns/years_type_id.md\|years_type_id]]                                                                         |
<!-- SerializedQuery END -->

extra text to change something

> [!tip] Explore the database structure and connections either through the above two links, or click on the upper right corner of the graphical interface to expand the graph, and dive in that way

```dataview TABLE WITHOUT ID file.link AS "Table", primary_key AS "Primary Key" FROM "source/content/catagory-folder/SEAD" WHERE primary_key

