# NgramDB Project

![Ngram circuitry icon](/icon.png)

## Datapoint Program Conventions
By convention, a datapoint program should produce consistent standard output results. If the standard output changes, it will trigger frequent downstream reruns.
By convention, once coding for a datapoint is complete, the format of the files generated should remain consistent to avoid breaking downstream things.

- [list of conventions that make it work](/database/20240712155448-c6051910fe8a0deddcc6)

## Programs
Programs can generate one or more output files, in addition to the default behavior of logging to standard output and stderr log files within their own directory during every run.
The most recent standard output from a run of a program is stored in a file `stdout.log` which is also data that can be reused within the system.
- [Interactively generating this readme for the project](/database/20240709053001-b005119b744456da6cc0)
- [information about batch runner implementation](/database/20240712160752-273f1cf3f63a0b6cb514)

## Queries
Queries are possible using a simple query engine that supports traversing graphs.
```bash
# look for things tagged test
ngram query @test
# pretty print output with titles of README.md files as the names of data points
ngram query --human @test
# look for things referenced by things tagged logdata and web
ngram query @logdata @web refs
# repeat that query but look for only references tagged csvfile
ngram query @logdata @web refs @csvfile
# look for pets owned by my family members that are not tagged as cats?
ngram query @me refs @person @family refs @pet not @cat
# subqueries are possible using bash redirection - inverse of previous query, but looking for pets not owned by my family members that are not tagged as cats
ngram query @pet not <( ./ngram query @me refs @person @family refs @pet not @cat )
```

# Ngram CLI help

## how to run
```bash
# run once and continue until the system is in a stable state with no file changes propogating
ngram run
# run continuously in a loop and start services + web API
ngram start
# start interactive text user interface for development
ngram tui
```

- [Improvements on the horizon](/database/20240712005430-5afb3d6fbd05ebc95616)

## CLI help

- [Subcommand Implementations](/database/20240704164832-ae846f0d186e581bb7aa/README.md)
Automatically generated help documentation:

