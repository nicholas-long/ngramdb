# testing virtual environments

## Tue Jul  9 22:05:01 CDT 2024
I created a subcommand for testing virtual environments so i can launch right into the new directory in a shell with environment variables defined.
```bash
ngram create -t "testing virtual environments" --venv
```

## checking if commands work in here
```bash
# list nodes
ngram ls
20240704164832-ae846f0d186e581bb7aa
20240705000124-9769d8256b20e049b259
20240709053001-b005119b744456da6cc0
20240709100932-2e4a4e28d39fd497a43b
20240710030405-6e67d04f1dd286a4efce
# look for tests
ngram query @test
20240705000124-9769d8256b20e049b259
git status --porcelain
 M database/20240704164832-ae846f0d186e581bb7aa/subcommands/create
?? database/20240704164832-ae846f0d186e581bb7aa/subcommands/venv
?? database/20240710030405-6e67d04f1dd286a4efce/
```
