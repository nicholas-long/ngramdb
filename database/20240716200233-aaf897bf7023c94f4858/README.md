# list of special tags

- `template` - things tagged as template are available in the interface to use to create other Ngrams. they do not get run themselves - things tagged template are skipped from runs.
- `live` - things tagged live will run at least once every time `ngram run` is called. other things might not be run because no dependency files changes, but these files should be considered like a source in a pipeline.
- `ngram-internal` - part of the database implementation. the implementations for Ngram subcommands are "contained within the database".
- `service` - Ngrams with this tag which also have a `run-service` executable will run as a background job when Ngram is running cycles with `ngram start`
- `test` - unit tests

## tag analysis program output
- [standard output log](/database/20240716200233-aaf897bf7023c94f4858/stdout.log)
- [this list should be included in readme](/database/20240709053001-b005119b744456da6cc0)
