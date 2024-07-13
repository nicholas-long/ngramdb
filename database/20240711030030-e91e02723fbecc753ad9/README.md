# creating TUI for this with FZF

- make new subcommands: separate one for preview, options, and the main interface
  - tui
  - tui-video
  - tui-options - maybe don't need this? can do a function within bash and pipe to fzf?
- question: can bash functions export environment variables? - yes
  - bourne shell can as well
```bash
function test {
  export TESTVAL="$1"
}
test 123
echo $TESTVAL
```
- main program passes input to fzf
- fzf returns full line
- preview parses current line
- line format: `COMMAND [param] [params ...]`
  - selecting a different item in the menu might make the preview show something else

- [Ngram Linked ID 20240704164832-ae846f0d186e581bb7aa](/database/20240704164832-ae846f0d186e581bb7aa)
