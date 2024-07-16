# list of conventions to power Ngram functionality

- [list of speical tags](/database/20240716200233-aaf897bf7023c94f4858)
- objects and data structures can be created on the filesystem instead of in memory
- directory is a data point or object
  - conains data
  - contains programs - analogous to functions in programming
- classes are implemented as templates in which to copy directories from
  - tagged `ngram-template` ?
- data pipelines are implemented with dependencies between ngrams.
- a directed dependency to another Ngram is implemented as that Ngram's unique directory IDs occuring within the text of files in the directory.
  - convention: a dependency related to batch running must occur in an _executable_ file.
  - a "loose" reference could be implemented as the ID occuring in any file that is not marked as executable
- example:
  - an executable script reads a file `../20240705000124-9769d8256b20e049b259/text`.
  - the ID occurs in the text content of the executable file, so the Ngram batch runner considers these linked.
