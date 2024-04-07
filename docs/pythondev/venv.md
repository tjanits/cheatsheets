
# pyhton-stuff cheatsheet
## virtual environment
`https://wiki.archlinux.org/title/Python/Virtual_environment`

creates a virtual python environment which
- if packages or modules are installed, only installs them in the virtual environment 
- doesn't update said packages and modules as well as python within the environment when python or packages/modules are updated on your OS
- makes the project easier to transfer from a to b

open existing venv:
go into the directory which contains the venv
```shell
    source .venv/bin/activate
```

create new venv:
go into the directory which you want the venv in
```shell
    python -m venv <env_name>
```
