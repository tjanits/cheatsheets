# Installations
Just some useful things about installing new programs...

## Linking
Can be used for linking to bin-directory (example) so an application may be executable from anywhere without the complete directory-path. The bin-directory stores all the 'binaries' - aka executables systemwide/user-specific.
### Symbolic link
Basically creates an alias which can be called instead of the full path to directory. In my case I used it to make pycharm executable from anwhere, makes it easier to edit files using the program.
```bash
ln -s /path/to/executable path/to/bin/program-name
//in my case it was
ln -s /home/tobi/snap/pycharm-commun8ty-2024.3.1.1/bin /bin/pycharm
```
