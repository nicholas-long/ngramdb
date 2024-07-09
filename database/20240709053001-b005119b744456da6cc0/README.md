# interactively generated README for this project

grep -R '.--help' database/20240704164832-ae846f0d186e581bb7aa/subcommands | cut -d : -f 1 | awk -F / '{print $NF}'
for subcommand in $(grep -R '.--help' database/20240704164832-ae846f0d186e581bb7aa/subcommands | cut -d : -f 1 | awk -F / '{print $NF}'); do
  ngram subcommand --help
done
