# converting JSON to SQLite

- example data: `templates.json` generated from a list of templates within this database
- this is an example where a TSV file is produced, `content.tsv`
- this file is converted to a SQLite database `database.db`
- this is also an example where there should be _some sort of hook_ that reacts to new nodes being created

```bash
#!/bin/bash

cd $(dirname $0)
# produce example json : list of templates
ngram query @template json | tee templates.json

# TODO: change this line or make it configurable to select columns
cat templates.json | jq '.[]' | jq -r '._ngram_id,.title' | paste - - > content.tsv

rm database.db
sqlite3 database.db 'create table nodetitles(id text, title text)'
cat << EOF | sqlite3 database.db
.mode tabs
.import content.tsv nodetitles
EOF
echo "testing query:"
sqlite3 database.db 'select * from nodetitles'
```
