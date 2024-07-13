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

