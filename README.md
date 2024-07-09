# Ngram Project

## what is NgramDB...
This is kind of a graph database.
This is kind of a framework.
This is kind of an organizational system.
This is kind of a live-updating report dashboard.
This is kind of a switchboard of data analysis pipelines made of small programs that rerun when dependent data files update

The idea is that you put programs and data files together in something approximating a database on the filesystem.
The data is stored in directories with ID numbers roughly formatted to the current UTC timecode and containing a unique string ("nonce") within the ID.
I will refer to these directories as "datapoints".
Modifications to the data files referenced by executable programs within these directories will trigger these programs to rerun, based on the dependent Ngram ID links.

## Programs
Programs can generate one or more output files, in addition to the default behavior of logging to standard output and stderr log files within their own directory during every run.
The most recent standard output from a run of a program is stored in a file `stdout.log` which is also data that can be reused within the system.

## Datapoint Program Conventions
By convention, a datapoint program should produce consistent standard output results. If the standard output changes, it will trigger frequent downstream reruns.
By convention, once coding for a datapoint is complete, the format of the files generated should remain consistent to avoid breaking downstream things.

# Ngram CLI

## Queries
Queries are possible using a simple query engine that supports traversing graphs.
```bash
# look for things tagged test
./ngram query @test
# pretty print output with titles of README.md files as the names of data points
./ngram query --human @test
# look for things referenced by things tagged logdata and web
./ngram query @logdata @web refs
# repeat that query but look for only references tagged csvfile
./ngram query @logdata @web refs @csvfile
# look for pets owned by my family members that are not tagged as cats?
./ngram query @me refs @person @family refs @pet not @cat
# subqueries are possible using bash redirection - inverse of previous query, but looking for pets not owned by my family members that are not tagged as cats
./ngram query @pet not <( ./ngram query @me refs @person @family refs @pet not @cat )
```

## CLI help

```bash
Usage: /Users/coyote/ngramdb/ngram [subcommand] [--help | options... ]
Subcommands:
checksums
cleanup
clear-logs
create
dependstats
find-executable
findrefsto
forcelink
hastag
id
list
logs
query
refs
replace
run
run-single
set-title
start
tag
tagfiles
tsort
```

# Test Run Output

```
running tests
ALL TESTS PASSED!
SUCCESS test changetitle
SUCCESS test customdate-id
SUCCESS test reftest
SUCCESS test settags
SUCCESS test testclone
SUCCESS test testcreate
SUCCESS test testquery
SUCCESS test topographical-sort-test
SUCCESS test unique-ids
```

## subcommand: create
```bash
ngram create --help
Usage: /Users/coyote/ngramdb/database/20240704164832-ae846f0d186e581bb7aa/subcommands/create [ options ] directory
Options:
    -t|--title) # set title in README of created data point
    -c|--clone) # clone from a template data point ID, bringing over all its files
    -v|--verbose)
    -h|--help)
```
## subcommand: hastag
```bash
ngram hastag --help
usage /Users/coyote/ngramdb/ngram hastag tagquery 20240704164832-ae846f0d186e581bb7aa
```
## subcommand: id
```bash
ngram id --help
Usage: /Users/coyote/ngramdb/database/20240704164832-ae846f0d186e581bb7aa/subcommands/id [ options ] directory
Options:
    -d|--date) # provide a custom date to use as a timestamp within the ID
    -f|--date-format) # date format if providing a custom date
    -v|--verbose)
    -h|--help)
```
## subcommand: set-title
```bash
ngram set-title --help
Usage: /Users/coyote/ngramdb/database/20240704164832-ae846f0d186e581bb7aa/subcommands/set-title [ options ] directory
Options:
    -t|--title) # set or replace title in markdown file
    -v|--verbose)
    -h|--help)
```
## subcommand: tag
```bash
ngram tag --help
Usage: /Users/coyote/ngramdb/database/20240704164832-ae846f0d186e581bb7aa/subcommands/tag [ options ] directory
Options:
    -l|--list) # list tags for ID
    -t|--tag) # add tag
    -d|--delete) # remove a tag (passed as argument after)
    -v|--verbose)
    -h|--help)
```
# Information
ngramdb
Nicholas Long
2024
