
# Kubernetes
basics here:
`https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-intro/`

## basic setup
install
```shell
    paru -S minikube
```

minikube is the local kubernets-implementation for (local) development

start minikube
```shell
    minikube start
```

## deployment
deploying in kubernetes means running it as a clustered service administrated by kubernetes

communicate with your cluster
```shelle
    minikube kubectl
```

for easier usage create an alias
```shell
    alias kubectl='minikube kubectl --'
```

deploy something
```shell
    kubectl create deployment

    // for an existing image
    kubectl create deployment <image_name> --image=<image_link>
```

list deployments
```shell
    kubectl get deployments
```

## troubleshooting
list resources
```shell
    kubectl get
```

show detailed information about a resource
```shell
    kubectl describe
```

print the logs from a container in a pod
```shell
    kubectl logs
```

execute a command on a container in a pod
```shell
    kubectl exec
```

**Pods are running in an isolated, private network which makes a proxy necessary to access them!**


run a proxy for a pod
```shell
    kubectl proxy
```

## executing in a pods container
setting **environment variables**
```shell
    kubectl exec "<pod_name>" -- env
```

starting **bash session/terminal**
```shell
    kubectl exec <pod_name> -- bash
```

## publifying/exposing 
for more info:
`https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/`

### creating a service
exposing your service
```shell
    kubectl expose deployment/<service_name> --type"NodePort" --port <port>

    //example
    kubectl expose deployment/kubernetes-bootcamp --type="NodePort" --port 8080
```

**getting the port** of a service
```shell
    kubectl get services/kubernetes-bootcamp -o go-template='{{(index .spec.ports 0).nodePort}}'
```

### labels
labels are used to query specific pods using the `-l` label-parameter

getting the label of a deployment
```shell
    kubectl describe deployment
```

getting a **pods name**
```shell
    kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}'
```


