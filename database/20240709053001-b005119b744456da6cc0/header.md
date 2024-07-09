# NgramDB Project

## what is NgramDB...
This is kind of a graph database.
This is kind of a framework.
This is kind of an organizational system.
This is kind of a live-updating report dashboard.
This is kind of a switchboard of data analysis pipelines made of small programs that rerun when dependent data files update.

The idea is that you put programs and data files together in something approximating a database on the filesystem.
The data is stored in directories with ID numbers roughly formatted to the current UTC timecode and containing a unique string ("nonce") within the ID.
I will refer to these directories as "datapoints".
Modifications to the data files referenced by executable programs within these directories will trigger these programs to rerun, based on the dependent Ngram ID links.

![Ngram circuitry icon](/icon.png)

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

Automatically generated help documentation:

