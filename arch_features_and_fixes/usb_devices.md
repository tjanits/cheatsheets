# USB devices

## Problems with usb-mouse/keyboard/etc.
If the keyboard/mouse/etc. are plugged in via USB, visibly provided with energy (e.g. lights work) but do not react to interactions such as typing/moving the mouse or else, this package fixed the problem:
```shell
    paru -S xf86-input-evdev
```
*The solution was found [here](https://bbs.archlinux.org/viewtopic.php?id=76989) on March 26th, 2024*
