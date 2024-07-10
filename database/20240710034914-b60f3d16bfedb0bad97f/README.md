# getting rid of checksums in git

- it is really annoying to have checksum files updated in git all the time after every run
- https://stackoverflow.com/questions/1274057/how-do-i-make-git-forget-about-a-file-that-was-tracked-but-is-now-in-gitignore
```bash
git status
git status | awk '/modified/ { print $NF }'

git rm --cached ../20240705000124-9769d8256b20e049b259/.ngram.dependencies.hashes
git rm --cached ../20240709053001-b005119b744456da6cc0/.ngram.dependencies.hashes
git rm --cached ../20240709100932-2e4a4e28d39fd497a43b/.ngram.dependencies.hashes

git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	deleted:    ../20240705000124-9769d8256b20e049b259/.ngram.dependencies.hashes
	deleted:    ../20240709053001-b005119b744456da6cc0/.ngram.dependencies.hashes
	deleted:    ../20240709100932-2e4a4e28d39fd497a43b/.ngram.dependencies.hashes

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   ../../.gitignore

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	../20240705000124-9769d8256b20e049b259/stderr.log
	../20240709053001-b005119b744456da6cc0/stderr.log
	../20240709100932-2e4a4e28d39fd497a43b/stderr.log
	./

git add ../../.gitignore ../20240705000124-9769d8256b20e049b259/stderr.log ../20240709053001-b005119b744456da6cc0/stderr.log ../20240709100932-2e4a4e28d39fd497a43b/stderr.log

```

- remove the files
- add to gitignore
