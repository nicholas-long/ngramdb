# work queue example - getting metadata from objects in s3

- implemented by reading the output and searching for specific lines
- execute a target program `process-item`
- maintain a list of all items to process in worklist
- this example scans the metadata of all URLs mentioned in exploitdb as of 2024-07-14
  - building this list
```bash
grep -R https /usr/share/exploitdb/exploits/ | url-scrape > worklist
# find all of them that look like file extensions to download
mv worklist fulllist
awk '/^http.....*\/.*\.[a-z][a-z]*$/' fulllist > worklist
```
