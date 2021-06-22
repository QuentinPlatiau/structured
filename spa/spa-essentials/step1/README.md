# Step1 : Consommer une RESTFul API
## How to ? Tentative de consommation d'une opération d'une RESTFul API ne demandant pas d'autorisation
- Les steps 1 à 6 de la démo restful-api-essentials doivent avoir été faits (/demo/backend-restful-api/restful-api-essentials) et le backend du step 6 doit avoir été démarré.
- Maintenant que nous avons une API qui permet d'authentifier des utilisateurs et d'autoriser des opérations sur des ressources via JWT, nous allons les utiliser pour afficher la liste des pizzas (opération non protégée) sur la page d'acceuil.
- Pour le frontend, nous repartons de l'étape 3 de la démo frontend-essentials.
- Nous allong maintenant gérer l'intégration de notre frontend et du backend, via l'affichage de la liste des pizzas, le menu.
- Création d'un tableau reprenant le menu de pizza au sein de la homepage : voir le code dans /src/index.js => appel de la méthode fetch (GET /api/pizzas qui sera transformé en GET http://localhost:3000/pizzas par le proxy) pour recevoir un Array d'Object. Puis génération dynamique d'HTML sur base des données reçues par l'API. 
# Conclusion
- Nous avons une SPA fonctionnelle...

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza