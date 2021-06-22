# Step 5 : création du formulaire d’ajout de pizza consommant l’opération d’ajout d’une pizza protégée par JWT auths
## How to ? ajout d'une page pour l'ajout de pizzas
- Les steps 1 à 6 de la démo restful-api-essentials doivent avoir été faits (/demo/backend-restful-api/restful-api-essentials) et le backend du step 6 doit avoir été démarré.
- ...

## How to ? mise à jour de la barre de navigation et du router
- ...

## How to ? ajout d'un composant pour afficher des erreurs


# Conclusion
- Nous avons une SPA qui commence à ressembler à un site que l'on pourrait déployer pour un client.
- Quelles sont les faiblesses actuelles ? 
    - La gestion des droits. Ici, seul un admin a le droit d'ajouter une pizza. Comme on utilise le username côté API pour déterminer si c'est l'utilisateur "admin" qui a fait la requête, ça n'est pas souple. On ne pourrait pas avoir plusieurs utilisateurs ayant les privilèges d'admin. 
    => L'API pourrait être améliorée en permettant la gesion des privilèges des utilisateurs. Par exemple, Luigi pourrait avoir le privilège d'admin, alors que Mario aurait le privilège de simple utilisateur.
    - On affiche pas de message d'erreur à l'utilisateur lorsque la réponse d'une API renvoie une erreur.
    - On ne peut pas encore mettre à jour les pizza, les supprimer...
    - Au niveau de la structure du code, on pourrait améliorer les composants fonctionnels qui nécessitent une authentification avant de pouvoir être affiché (AddPizzaPage ici, mais plus tard...)

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza