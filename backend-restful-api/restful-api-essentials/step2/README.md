# Step2 : création basique d'une RESTful API à partir du générateur Express
## How to ? Redémarrer automatiquement votre application à chaque changement de fichier
- installer nodemon de manière globale : npm i -g nodemon
- lancer nodemon (au lieu du simple node) quand on tape npm run dev : ajout de la ligne "dev": "nodemon /bin/www"
dans package.json :
"scripts": {
    "debug": "nodemon ./bin/www",
    "start": "node ./bin/www"
  },
- NB : Si l'installation globale n'est pas permise car vous n'avez pas les privilèges de le faire :   
    - installation au niveau du répertoire du projet : npm i nodemon
    - utilisation de npx au lieu de npm :
    dans package.json :
    "scripts": {
    "debug": "npx nodemon ./bin/www",
    "start": "node ./bin/www"
    },

## How to ? Ne pas redémarrer quand le fichier 

## How to ? Rendre persistant les pizzas
- On va créer un model qui contiendra la couche d'abstraction permettant de réaliser des opérations sur les données.



