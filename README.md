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
running script database/20240705000124-9769d8256b20e049b259/testscripts/changetitle
# title2
test content
## fake h2 file

- line of content here
## title3
SUCCESS test changetitle
running script database/20240705000124-9769d8256b20e049b259/testscripts/customdate-id
20240101000000-c697576ae3116565aa68
SUCCESS test customdate-id
running script database/20240705000124-9769d8256b20e049b259/testscripts/reftest
20240704164832-ae846f0d186e581bb7aa
SUCCESS test reftest
running script database/20240705000124-9769d8256b20e049b259/testscripts/settags
newtag
tag2
yes
no
SUCCESS test settags
running script database/20240705000124-9769d8256b20e049b259/testscripts/testclone
# testing cloning feature
test content
SUCCESS test testclone
running script database/20240705000124-9769d8256b20e049b259/testscripts/testcreate
# test title
SUCCESS test testcreate
running script database/20240705000124-9769d8256b20e049b259/testscripts/testquery
20240704164832-ae846f0d186e581bb7aa
20240704164832-ae846f0d186e581bb7aa
20240704164832-ae846f0d186e581bb7aa
SUCCESS test testquery
running script database/20240705000124-9769d8256b20e049b259/testscripts/topographical-sort-test
running TSORT:
20240709063620-45cfbfb3336c29f2f1aa
20240709063620-ff3928b1b83d22f8fbac
20240709063620-9f199065b6dd9a0e08ed
20240709063620-7e5732985e5452c0c409
SUCCESS test topographical-sort-test
running script database/20240705000124-9769d8256b20e049b259/testscripts/unique-ids
     100
SUCCESS test unique-ids
ALL TESTS PASSED!
```

# Information
ngramdb
Nicholas Long
2024
