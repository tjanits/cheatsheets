# CAN(open)

## Set up [SocketCAN](https://doc.kusakata.com/networking/can.html?highlight=can)
If the kernel modules have already been setup (e.g. if you used SocketCAN before) jump to [kernel modules already existing](#kernel-modules-already-existing). Otherwise continue with the part below.
Load the kernel modules required for CAN:
```shell
    sudo modprobe can
    sudo modprobe can-raw
    sudo modprobe slcan
```
Continue in "kernel modules already existing".
### kernel modules already existing
Check for already existing CAN interfaces:
```shell
    ifconfig
```
If not, configure an SocketCAN interface:
```shell
    ip link set your_can_socket type can bitrate your_bitrate
    // example
    ip link set can0 type can bitrate 1000000
```
Clone and make the CAN utils git repo:
```shell
    // clone into your working directory
    git clone https://github.com/linux-can/can-utils.github
    // enter the cloned directory
    cd can-utils
    // make 
    make
```
Attach the interface to your USB connection device:
```shell
    sudo ./slcan_attach -f -b your_baudrate -o /dev/your_usb_device
    // example
    sudo ./slcan_attach -f -b 1000000 -o /dev/ttyACM0
    // should return 
    attached tty /dev/ttyACM0 to netdevice slcan0
    // continue as followed
    sudo ./slcan ttyACM0 slcan0
    sudo ifconfig slcan up
```
Check if the interface is up and running/available:
```shell
    ifconfig
```
