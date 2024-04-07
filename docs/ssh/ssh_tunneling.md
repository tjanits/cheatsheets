
# SSH Tunneling
SSH Tunneling describes the act of establishing a connection between a host and a peer using ssh public-private key pairs.
## creating keys
create a keypair:
```shell
    ssh-keygen
    //preferably use a more up-to-date algorithm (also preferred by github)
    ssh-keygen -t ed25519
```
When asked to set the location of the keypair save them to the **.ssh** directory or create a subdirectory within it. The public key is located within the `.pub` file. The private key lies in a endingless file with the same name.
*Note: The public key is encryped using the set password. For ssh-tunneling the password must be left empty.*

## autorizing your public key on server-side
In order to connect to a server using the ssh key-pair the public key must be added to the `.ssh/authorized_keys` which lies on the server. This can be done in a few ways:
### automatically copy the ssh public key to the server
Assuming it is already possible to connect to the server using:
``` shell
    ssh [user_name]@[server_ip]
```
This would ask for a password, which you need to use the automatic copy method.
To now automatically copy the key to the server use:
```shell
    ssh-copy-id -i ~/.ssh/[private_key_file] [user_name]@[server_ip)
```
This will again ask you for the password. After this your key will be copied to the server and no more password authentications are needed for ssh connections.
### manually copy the ssh public key to the server
Get the public key and note it somewhere:
```shell
    cat ~/.ssh/[public_key_file]
```
Now **on the server** create the directory and file:
```shell
    //using nivm is optional, nano works as well
    sudo nvim /home/user_name/.ssh/authorized_keys
```
Now copy the public key to the file. Save and exit the file. Now to give the file the appropriate permissions:
```shell
    sudo chmod 700 /home/user_name/.ssh
    sudo chmod 600 /home/user_name/.ssh/authorized_keys
```
Finally place the public key in the `authorized_keys` file.

## connecting over ssh
Use the created keypair to test for a working connection:
```shell
    ssh [user_name]@[server_ip] -i .ssh/[private_key]
```
*Note: In order to connect to the server, your public key must be added to the `authorized_keys` file on the server*

## ssh tunneling
There are two main ways for tunneling:
### From local to host
Use the `-L` Tag to declare the connection to forward from the local machine to the host:
```shell
    sudo ssh -N -L [local_ip]:[local_port]:[host_address]:[host_port] [user_name]@[host_ip] -i .ssh/[private_key]
    // example
    sudo ssh -N -L 127.0.0.1:3009:0.0.0.0:3009 tobi@34.65.140.53 -i .ssh/
```
*Note: -N makes the tunnel still be established but the terminal is not connected*
### From host to local
Use the `-R` Tag to declare the connection as a reverse tunnel which directs the connection from the host to the local machine:
```shell
    sudo ssh -N -R [local_ip]:[local_port]:[host_ip]:[host_port] [user_name]@[host_ip] -i .ssh/[private_key]
    // example
    sudo ssh -N -R 127.0.0.1:3009:0.0.0.0:3009 tobi@34.65.140.53 -i .ssh/
```
**Important:** The Firewall only allows tunneling to localhost (127.0.0.1) by standard. If the tunnel is supposed to be reachable from any IP (0.0.0.0) it is necessary to change the `GatewayPorts` option to `true`. It is located in the `/etc/ssh/sshd_config` file. More [info](https://superuser.com/questions/588591/how-to-make-an-ssh-tunnel-publicly-accessible/591963#591963).
 ## automated connection
 It is possible to creae an easy service, which executes at system-start, using the following code:
 ```bash
    [Unit]
    Description=SSH-Tunnel
    After=systemd-networkd-wait-online.service
    Requires=systemd-networkd-wait-online.service

    [Service]
    Type=simple
    ExecStart= /bin/bash -c "sudo ssh -N -R [local_port]:[host_ip]:[host_port] [username]@[host_ip] -i .ssh/[private_key]"
    Restart=always
    RestartSec=5

    [Install]
    WantedBy=multi-user.target
```
Save the code to a file to `/etc/systemd/system/[service_name].service`. Then run:
```shell 
    systemctl daemon-reload
    // enable your service
    sudo systemctl enable [service_name]
    // start the service
    sudo systemctl start [service_name]
```
