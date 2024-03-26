
# Docker
## data de-duplication
Aims to be more storage-efficient. For example: if you have two ubuntu-container they do both download the required files. Only the first container downloads them and the second container uses a reference to all the files which would be duplicated on a second download.

## Container CLI
In order to enter the cli of a running container, executed by a compose file use:
```shell
    docker exec -it service_name bash
    // example below
    docker exec -it db bas  docker exec -it service_name bash
    // example below
    docker exec -it db bash
```
