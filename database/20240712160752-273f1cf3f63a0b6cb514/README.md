# batch runner implementation

- directory is an ngram data point or object
  - conains data
  - contains programs - analogous to functions in programming
- the code to be run is implemented as an executable file named `run` in the directory.
  - this is not the only file which can contain references
  - this is the file that 
- the batch runner reruns the script when any "tracked file"
- tracked files are every file that is not excessively large, or files that do not have deterministic content, such as gzip streams or videos encoded where metadata might change the resulting file.
  - [ ] link to code to determine tracked files
- a directed dependency to another Ngram is implemented as that Ngram's unique directory IDs occuring within the text of files in the directory.
  - convention: a dependency related to batch running must occur in an _executable_ file.
  - a "loose" reference could be implemented as the ID occuring in any file that is not marked as executable
- objects and data structures can be created on the filesystem instead of in memory
- classes are implemented as templates in which to copy directories from
  - tagged `ngram-template` ?
- data pipelines are implemented with dependencies between ngrams.
- example:
  - an executable script reads a file `../20240705000124-9769d8256b20e049b259/text`.
  - the ID occurs in the text content of the executable file, so the Ngram batch runner considers these linked.

# log
```
ls ../20240712155448-c6051910fe8a0deddcc6
README.md
data.json
cat ../20240712155448-c6051910fe8a0deddcc6/README.md
```

# links

- [Ngram Linked ID 20240704164832-ae846f0d186e581bb7aa](/database/20240704164832-ae846f0d186e581bb7aa)

- [Ngram Linked ID 20240712155448-c6051910fe8a0deddcc6](/database/20240712155448-c6051910fe8a0deddcc6)
