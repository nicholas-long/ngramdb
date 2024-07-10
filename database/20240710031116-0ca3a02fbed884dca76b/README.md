# updating tag file names
```bash
find .. -name tags
../20240704164832-ae846f0d186e581bb7aa/tags
../20240705000124-9769d8256b20e049b259/tags
cat ../20240704164832-ae846f0d186e581bb7aa/tags ../20240705000124-9769d8256b20e049b259/tags
../20240704164832-ae846f0d186e581bb7aa/tags:ngram-internal
../20240704164832-ae846f0d186e581bb7aa/tags:subcommand
../20240705000124-9769d8256b20e049b259/tags:test
../20240705000124-9769d8256b20e049b259/tags:ngram-internal

grep -R tags ../20240704164832-ae846f0d186e581bb7aa/subcommands
../20240704164832-ae846f0d186e581bb7aa/subcommands/query:# perform graph queries with graph links, tags, and JSON data within Ngram.
../20240704164832-ae846f0d186e581bb7aa/subcommands/create:runtags=0
../20240704164832-ae846f0d186e581bb7aa/subcommands/create:    --tag) # add tags inline
../20240704164832-ae846f0d186e581bb7aa/subcommands/create:      runtags=1
../20240704164832-ae846f0d186e581bb7aa/subcommands/tag:# get or alter the tags of a data set
../20240704164832-ae846f0d186e581bb7aa/subcommands/tag:    -l|--list) # list tags for ID

```

# steps
- [x] create a new environment variable for tag files
```bash
export NGRAM_TAG_FILE="tags.ngram"
```
- [x] move tag files
```bash
mv ../20240704164832-ae846f0d186e581bb7aa/tags ../20240704164832-ae846f0d186e581bb7aa/tags.ngram
mv ../20240705000124-9769d8256b20e049b259/tags ../20240705000124-9769d8256b20e049b259/tags.ngram
```
- [x] change code to fix tag files
```
../20240704164832-ae846f0d186e581bb7aa/subcommands/hastag:tagfile="database/$id/tags"
../20240704164832-ae846f0d186e581bb7aa/subcommands/tag:      tagfile="database/$1/tags"
../20240704164832-ae846f0d186e581bb7aa/subcommands/tag:      tagfile="database/$id/tags"
../20240704164832-ae846f0d186e581bb7aa/subcommands/tagfiles:find database -name tags | awk -F / 'NF == 3' | sort
```
- wow it worked!
