Projet pour le cours INFO901 - Introduction au DevOps


Partie Docker :

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
