# Learning Roadmap: Kubernetes

Curso: https://www.udemy.com/course/learn-devops-the-complete-kubernetes-course
Y https://kube.academy/courses/kubernetes-core-concepts-part-2/lessons/deployment-management

## Modulo 2

Objetivos: 

**Deployments**
- Generar deployment para tener varias replicas de la app
- Generar una nueva version de la app y una nueva imagen de docker, usar kubectl para hacer un rollout de la nueva imgen
- Hacer un rollback a la version anterior

**Deployments + Services**
- Realizar un Canary Deploy (O rollback)
- Realizar un Blue/Green Deploy (O rollback)

**Health Checks**
- Implementar liveness y readiness probes


## GKE

- Primero crear una cuenta en GKE usando el free tier
- Luego instale y configure [Gcloud CLI](https://cloud.google.com/sdk/docs/install)
- Cree un cluster mediante Gcloud CLI: `gcloud container clusters create cluster-1 --zone us-central1-c --project learn-k8s-123`

Con todo instalado, se puede mirar los clusters a los que estamos conectados usando:

`kubectl config get-contexts`

Y cambiar el cluster usando:
`kubectl config use-context <NOMBRE DEL CONTEXT>`


## Debug utils
Para deployar un busybox:
`kubectl run -i --tty busybox --image=busybox --restart=Never -- sh`

Para deployar un cliente mysql:
`kubectl run -it --rm mysql-client --image=mysql:8.0 --restart=Never --command -- mysql -h mysql -uwordpress-user -pwordpress-password`