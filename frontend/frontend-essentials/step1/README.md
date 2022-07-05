# Création d’un frontend pour une pizzeria : Step 1 : frontend à partir d’un boilerplate et ajout moderne d’une librairie pour afficher une horloge

## Introduction
- Le Step -2, Step -1 et Step 0 de ce tutoriel "Création d’un frontend pour une pizzeria" expliquent donc comment le boilerplate du cours a été créé. Celui-ci est donné ici : https://github.com/e-vinci/js-basic-boilerplate.git

## Démarrer votre application à partir du boilerplate du cours
- Clone du repo associé au boilerplate : `git clone https://github.com/e-vinci/js-basic-boilerplate.git` ou `git clone https://github.com/e-vinci/js-basic-boilerplate.git nom-de-votre-projet` pour créer votre projet nommé `nom-de-votre-projet`.
- **package.json** est le fichier de configuration de votre projet. Veuillez le mettre à jour afin de :
    - donnnez un nom à votre projet & une description ;
    - vous identifier comme auteur.
- Installation des dépendances et exécution de l'application : 
```shell
cd js-basic-boilerplate # (ou le nom donné au répertoire de votre projet)
npm i # (equivalent de npm install)
npm start
```
- ⚡ Si vous avez cloné votre projet au sein d'un repo existant, Git ne trackera pas ce nouveau projet ; en effet, Git ne tracque pas des projets Git dans des projets Git.
Pour vous assurer que Git traque votre nouveau projet imbriqué dans un repo, vous devez effacer le répertoire **.git** se trouvant dans votre nouveau projet. N'hésitez pas aussi à effacer **.gitignore** se trouvant dans votre nouveau projet.
- Par contre, si vous souhaitez créer un nouveau repo à l'aide de votre boilerplate, 
vous pouvez utiliser le **.gitignore** existant. Vous pouvez aussi éventuellement utiliser le 
**.git**, mais cela signifie que vous hériterez de tous les changements associés au boilerplate, 
et que vous devrez changer l'origine (`git remote remove origin`, `git remote add origin LINK_TO_YOUR_REPO`). Nous vous recommandons plutôt d'effacer le répertoire **.git** et de 
réinitialiser un projet git (`git init`, `git remote add origin LINK_TO_YOUR_REPO`).
## Fonctionnement de Webpack pour gérer des assets
Webpack a été configuré afin de générer une fichier **index.html** sur base d'un template donné dans **/src/index.html**.

Ce template HTML ne contient pas de balises **`<script>`**.

C'est Webpack qui va s'occuper d'aller chercher toutes les dépendances qui doivent être 
indiquées via des imports dans le fichier **/src/index.js**. Webpack va générer 
un bundle, une sorte de paquet cadeau, reprenant toutes les dépendances ainsi que vos scripts 
JS et vos autres assets (fichiers CSS, images...).

Dans le boilerplate du cours, **src/index.js** fait l'import de tout ce qui est 
nécessaire pour pouvoir utiliser **Bootstrap** pour pouvoir styler ses pages web à l'aide de classes prédéfinies ; de plus, **/stylesheets/main.css** et importé afin de pouvoir créer votre propre style. Nous verrons à une prochaine étape comment utiliser Bootstrap.

Nous comprenons donc que pour importer une librairie, un asset (image, CSS...), 
il suffit de le faire à l'aide du mot-clé **import**.

Pour comprendre l'utilisation de Webpack, nous allons maintenant faire un refactor 
de notre site de la pizzeria réalisé à l'étape précédente en l'intégrant à notre nouveau projet.

Veuillez copier / coller le CSS qui était contenu 
dans **/stylesheets/style.css** au sein de **/stylesheets/main.css**.

Nous allons maintenant créer le layout HTML de base de notre application sur base 
de l'ancien **index.html**. 

Les changements à opérer sont : 
- Enlever l'import de la feuille de style directement dans l'HTML : `<link rel="stylesheet" href="./stylesheets/style.css" />`
- Enlever l'import de la librairie externe directement dans l'HTML : ` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />`
- Enlever l'import du script externe **index.js** directement dans l'HTML : <script src="./index.js"></script>

Veuillez ajouter les images et le son du tutoriel précédent dans les répertoires **/src/img** et 
**src/sound**.

Veuillez ajouter le contenu de l'ancien **index.js** au sein de **/src/index.js** afin de gérer 
les clics sur toute la page :

## How to ? Ajout d'un package
- Pour installer la librairie [Animate.css](https://animate.style/), 
il suffit de taper dans un terminal, lorsqu'on se trouve à la racine du projet (**modern** ici) : **`npm install animate.css`**
- Si quelqu'un souhaite installer et exécuter ce projet, la gestion des dépendances est très simple : copie du répertoire du projet (sans `node_modules`), `npm instal`, `npm start`. Il n'y a donc pas de librairies à gérer manuellement pour reprendre le projet d'un tiers.

## Utilisation de Bootstrap pour soigner le style
Nous allons maintenant convertir le style du site de la pizzeria à l'aide de Bootstrap. 
La seule chose que nous allons laisser dans **/src/stylesheets/main.css** est la gestion 
d'une image en background car Bootstrap ne prévoit pas de solution.

Veuillez donc mettre à jour **/src/stylesheets/main.css** pour ne garder que l'image en background :
```css
body { 
    background-image : url(../img/pizza.jpg);
    background-size : cover;
}
```

Il faut maintenant mettre à jour **index.html** et indiquer les bonnes classes de Bootstrap :
- **`text-center`** : pour centrer nos titres et le main
- **`text-white font-weight-bold py-2`** : pour le style du texte dans le footer. **`py-2`** 
met du padding sur l'axe des **y**, est donc tant en haut qu'en bas du footer.
- Pour que le layout de la page fasse toujour, au minimum, la hauteur complète du navigateur 
et donne l'effet au **`<footer>`** d'être "sticky" en bas de page,
on utilise :
  - **`vh-100 d-flex flex-column`** au sein du **`<body>`**.
  - **`h-100 flex-grow-1`** dans le **`<main>`** pour lui imposer de remplir l'espace disponible. Ainsi, le footer donne l'effet d'être "sticky" en bas de la page.
- Pour la taille du logo JS, Bootstrap offre des classe pour le **Sizing** en fonction 
de la taille du parent ou du **viewport** (le browser). Ici, on préfère avoir une taille fixe 
de 50 pixel, donc on va indiquer cette taille directement dans l'attribut **`height`** de **`<img>`**.

Voila à quoi doit ressembler **index.html** suite aux changements :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pizzeria</title>
    <link rel="icon" href="./img/pizza-svgrepo-com.svg" type="image/svg+xml" />
  </head>
  <body class="vh-100 d-flex flex-column">
    <header>
      <h1 class="animate__animated animate__bounce text-center">We love Pizza</h1>
    </header>
    <main class="h-100 flex-grow-1 text-center">
      <audio id="audioPlayer" controls autoplay>
        <source src="./sound/Infecticide-11-Pizza-Spinoza.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </main>
    <footer class="text-center text-white font-weight-bold py-2">
      <h1 class="animate__animated animate__bounce animate__delay-2s text-center">
        But we also love JS
      </h1>
      <img src="./img/js-logo.png" height="50px" alt="" />
    </footer>
  </body>
</html>
```

Le style est maintenant identique à ce qui était fait grâce à **/src/stylesheets/main.css**.

## Conclusion
- La mise en place d'une configuration webpack n'est pas quelque chose d'évident et d'agréable. Dès lors, il est très commun d'utiliser un boilerplate, un template de projet permettant d'excécuter Webpack. Beaucoup de frameworks modernes utilisent Webpack, avec des configurations bien spécifiques. Par exemple, React utilise Webpack. Phaser fournit aussi une configuration de Webpack pour écrire du code moderne...
- L'utilisation de Webpack permet d'avoir un serveur de développement hyper performant, de développer avec beaucoup de confort, de faciliter la structure d'un projet, de gérer les dépendances, de transformer les assets de manière centralisée, ...

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza