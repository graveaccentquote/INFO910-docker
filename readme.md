Projet pour le cours INFO901 - Introduction au DevOps


# Partie Docker :

* L'image docker se compose :
  * D'une application node.js pour la partie front, faite à la main.
  * D'une base de données PostgreSQL tirée d'une image venant de Dockerhub.
 
 
 Pour construire l'image de l'application node.js : 
 
    make build
  
ou

    docker build ./node-app -t nodeapp
    
    
Pour construire l'image de l'application avec docker-compose (une fois l'image de l'application node.js construite) :

    make compose
    
ou

    docker-compose up --build 


L'application permet de persister des objets contenant un nom, un prénom et un âge et de récupérer la liste depuis la BDD. Pour accéder à l'application, il faut se rendre sur http://localhost:5000 :

![screenshot](https://puu.sh/IB5VY/44a4ad8782.png)

![screenshot2](https://puu.sh/IB5Wf/27542afccb.png)


# Partie Kubernetes :

Pour lancer le cluster avec Minikube en local :

    minikube start
    
Pour lancer les pods avec notre app :

    kubectl apply -f db-deployment.yaml,db-service.yaml,default-networkpolicy.yaml,nodeapp-deployment.yaml,nodeapp-service.yaml
