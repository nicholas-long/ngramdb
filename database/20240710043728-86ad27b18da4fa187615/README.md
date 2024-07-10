# connections within the system

- [graph](graph.md)
- install graphviz
```bash
brew install graphviz
```

- found reference to interesting note
  - 20221030041924 generate mermaid graph from set of zet cards
```mermaid
graph TD;
  exploit_path --> potential_exploits;
  exploit_path --> steps;
  exploit_path --> proof__flags__and_screenshots;
  steps --> proof__flags__and_screenshots;
  steps --> potential_exploits;
  steps --> services;
  steps --> machine_high_level_overview_notes;
  steps --> working_notes___foothold;
  steps --> creds;
  creds --> privesc_steps;
  privesc_steps --> proof__flags__and_screenshots;
  privesc_steps --> working_notes___privesc;
  privesc_steps --> machine_high_level_overview_notes;
  working_notes___foothold --> proof__flags__and_screenshots;
  working_notes___foothold --> potential_exploits;
  working_notes___foothold --> services;
  working_notes___foothold --> machine_high_level_overview_notes;
  working_notes___privesc --> proof__flags__and_screenshots;
  working_notes___privesc --> machine_high_level_overview_notes;
  machine_high_level_overview_notes --> services;
  machine_high_level_overview_notes --> ports___enum;
  ports___enum --> enumeration___the_process_of_enumerating_a_target;
  ports___enum --> services;
  services --> machine_web_services;
  potential_exploits --> headline_exploits;
```

- working on developing script
```bash
ngram refs --all
ngram --help

ngram stubname
20240704164832-ae846f0d186e581bb7aa subcommand_implementations
20240705000124-9769d8256b20e049b259 test_scripts
20240709053001-b005119b744456da6cc0 interactively_generated_README_for_this_project
20240709100932-2e4a4e28d39fd497a43b subcommand_help_implementation_status
20240710030405-6e67d04f1dd286a4efce testing_virtual_environments
20240710031116-0ca3a02fbed884dca76b updating_tag_file_names
20240710034914-b60f3d16bfedb0bad97f getting_rid_of_checksums_in_git
20240710043728-86ad27b18da4fa187615 connections_within_the_system

ngram refdata
20240705000124-9769d8256b20e049b259 20240704164832-ae846f0d186e581bb7aa
20240709053001-b005119b744456da6cc0 20240704164832-ae846f0d186e581bb7aa
20240709053001-b005119b744456da6cc0 20240705000124-9769d8256b20e049b259
20240709100932-2e4a4e28d39fd497a43b 20240704164832-ae846f0d186e581bb7aa

gawk '
BEGIN { print "graph TD;" }
ARGIND == 1 { name[$1] = $2 }
ARGIND > 1 { print "  " name[$1] " --> " name[$2] ";" }
' <( ngram stubname ) <( ngram refdata )
```
