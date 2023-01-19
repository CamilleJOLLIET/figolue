
# figolue
*Design System POC*

### Architecture et lancement
Le point de départ pour lancer les applications sera le *package.json* à la racine du projet.
Il est monté avec Lerna qui permettra aux package.json de chaque "packages" (react, scss, foundation, etc...) de communiquer avec le package.json "racine".

A la racine, lancer `nvm use lts/gallium` pour obtenir la version de node nécessaire, si pas installée, `nvm install lts/gallium` d'abord.
Puis lancer `yarn dev`. Cela lancera tous les scripts nommés "dev" dans les packages enfants.
Par exemple un watch sur le dossier scss, un watch sur le dossier react, un build sur le dossier foundation, etc...
Ici il est question d'optimisation de processus de livraison ou de dev.
Il faut s'y intéresser pour comprendre comment cela marche, mais les décisions et les changements devront être opérés par un responsable.

Le dossier scss accueillera tous les Design Tokens et tous les blocs BEM qui seront associés plus tard aux components React (ou autre).
Il comprendre aussi tous les helpers, générés par des fonctions SCSS, puis compilées en css dans le dossier "lib".
Aujourd'hui le CSS n'est pas minifié pour pouvoir POC est bien construire les scripts de builds.
Le dossier react accueillera les components, ainsi que le Storybook, donc toutes les stories des components.

Pour accéder au Storybook pour développer un component en isolation. Aller dans /packages/react puis lancer yarn start-storybook.
Le Storybook se lancera (normalement sur localhost:6006)

A partir de là il ya des components déjà existants pour vous aider à comprendre la structure des imports entre les différent packages.

### CI/CD
Lors de l'ouverture d'une Merge Request, Une pipeline Chromatics est installée (qui complètera les futurs linter, etc...)
Elle devra être validée par des chefs de projets ou des designers (aujourd'hui pour les besoin du POC on peut le faire nous même)

Une fois les features merged (Dans DEV idéalement, mais aujourd'hui on a que MAIN) et la livraison prévue,
il faut organiser la montée en version de tous les packages impactés. Et les publier sur NPM ou autre, pour qu'ils soient disponible depuis n'importe quel applicatif
(laprovence.com, l'app, espace-user et j'en passe.
Aujourd'hui on a un paquet avec le CSS et tout ses Design Tokens. Et un paquet du Design System en lui même donc les components React.

### TODO
Etudier les Design Tokens pour tout variabiliser.
Configurer des compils à l'aide de Style Dictionary.

### Good Practices

#### Design Tokens
Le Design Token doit être écrit à la main par le dev car on considère que ce n'est pas le travail du Designer de nommer toutes les variables et de tout architecturer.
C'est un travail d'équipe, au moment de la rédaction du Token, le dev devra beaucoup communiquer avec le Designer pour comprendre les besoins et lever les lièvres car il y en aura.
Une fois le token dispo en prod, le Designer pourra l'importer dans Figma est la connexion sera enfin établie.
Toutes les parties prenantes pourront mettre à jour un token depuis leurs outils (Figma ou code) et sera soumis à un process de livraison.
C'est à dire une pipeline Chromatics, une montée de version et une publication de paquet.

#### Components
Aucune logique métier. Que du design. Le fonctionnel apparaîtra dans les applicatifs.
