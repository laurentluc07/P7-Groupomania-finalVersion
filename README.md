# P7-Groupomania-finalVersion

Backend / FrontEnd => npm install

Réseau social interne d'entreprise.

Les logiciels ci-dessous sont nécessaire au bon fonctionnement de l’application

Express Js
Node
Sequelize
React
Jotai
MySQLWorkbench

Mise en place et installation de l'application
1. Cloner l’application
 git clone https://github.com/laurentluc07/P7-Groupomania-finalVersion.git
2. Mise en place du backend
2.1 Ce placer à la racine du dossier backend
cd backend
2.2 Lancer l’installation des modules Node.js
npm install
2.3 Renommer le fichier env-exemple en .env
Insérer vos variables d’environnements comme décris à l’intérieur du fichier

2.4 Démarrer le serveur backend
npm start

3. Mise en place du frontend
3.1 Ce placer à la racine du dossier frontend
cd frontend
3.2 Lancer l’installation des modules Node.js
npm install
3.3 Démarrer le serveur frontend
npm run dev

Informations complémentaires
L’application utilise l’ORM (Object-Relational Mapping) Sequelize, par conséquent il n’est pas donc nécessaire de créer l’ensemble des tables pour la base de données. Il suffit de créer une nouvelle base de données sur votre serveur et de remplir correctement les variables d’environnement dans le backend comme décris dans l’étape 2.3 ci-dessus. Séquelize se chargera lui-même de créer l’intégralité des tables et celle-ci seront systématiquement synchronisé à chaque redémarrage du serveur backend. Toutefois ci besoin vous trouverez l’export de la base de données dans le répertoire /backend/db_Sql

L'application dispose de 3 types de comptes

Administrateur
Modérateur
Utilisateur
Tout les nouveaux comptes crées, sont par défaut des comptes utilisateurs. Il appartient à l'administrateur de l'application de modifier le type de compte directement dans la base de données afin de définir l'administrateur et le ou les modérateurs.

Auteur
Luc Laurent

Projet n° 7
Formation Développeur Web d’OpenClassrooms
