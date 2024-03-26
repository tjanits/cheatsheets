# Bluetooth
Two packages must be installed to use bluetooth on arch:
```shell
    paru -S bluez
    paru -S bluez-utils
```
Check if the kernel-module `btusb` is loaded:
```shell
    // shows all loaded kernel modules
    lsmod
```
**If** it is **not loaded**, load it using:
```shell
    modprobe your_modulename
    // example
    modprobe btusb
```
For the last step, startr/enable `bluetooth.service`:
```shell
    systemctl start example.service
    // example
    systemctl start bluetooth.service
```

Informatin obtained on [ArchWiki](https://wiki.archlinux.org/title/bluetooth) on March 26th, 2024
