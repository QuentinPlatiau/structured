# Step2 : Structuration du code en modules, création d'une version statique de l'application via l'ajout de formulaires et la gestion de la navigation
## How to ? Création d'une bar de navigation et de deux formulaires
- Les steps 1 à 6 de la démo restful-api-essentials doivent avoir été faits (/demo/backend-restful-api/restful-api-essentials) et le backend du step 6 doit avoir été démarré.
- Ajout statique de la barre de navigation.
- Création de deux fonctions LoginPage, RegisterPage qui permettent de faire un render de la div #page. 
- Pour structurer le code :
    - chaque fonction sera reprise dans un module. pizzaView est donc refactorée : création d'un module HomePage et changement du nom de la fonction pizzaView en HomePage.
    - comme nous souhaitons que l'horloge reste quelque soit la page, nous allons l'intégrer dans une fonction Header.
    - nous allons aussi créer un composant Footer.
    - pas besoin d'ajouter dynamique #page div, ça n'a pas de valeur ajoutée.
- Gestion des événements sur la barre de navigation.  
# Conclusion
- Nous avons une SPA fonctionnelle...

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza