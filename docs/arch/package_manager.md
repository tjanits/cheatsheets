# Pacman
I use packman as my package-manager, mostly for installing and updating stuff.
## Problems
### Pacman is currently in use, please wait
Tried to update as always:
```shell
    paru -Syu
```
Got presented with an Error-Message: `Pacman is currently in use, please wait...`\
Found the solution:
```
    // probably needs sudo to work
    rm /var/lib/pacman/db.lck
```
Information Obtained on [ArchForums](https://bbs.archlinux.org/viewtopic.php?id=67729) on July 4th, 2024
