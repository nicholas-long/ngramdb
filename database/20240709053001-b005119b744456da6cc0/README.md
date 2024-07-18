# interactively generated README for this project

- this is an example ngram program to generate a README file for this project by combining together various files.
- it happens to copy it back to the README in the root directory.
  - [should ngrams be able to modify each other or modify external files for security](/database/20240712162129-bec61b6ccd3655ec29c4)

- how to loop over the subcommands
```bash
grep -R '.--help' database/20240704164832-ae846f0d186e581bb7aa/subcommands | cut -d : -f 1 | awk -F / '{print $NF}'
for subcommand in $(grep -R '.--help' database/20240704164832-ae846f0d186e581bb7aa/subcommands | cut -d : -f 1 | awk -F / '{print $NF}'); do
  ngram subcommand --help
done
```

```bash
ls "../20240704164832-ae846f0d186e581bb7aa/subcommands" > subcommands_in_order
```
