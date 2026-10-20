# list of data files for serving as static content

- this might have been an okay idea initially, but i think i have to trash it. for now, just serve static files from the filesystem?
  - the first prototype API web server is currently using these data files
- really good idea for better implementation: use symlinks in the filesystem to store a list of files that should be accessible for an API
