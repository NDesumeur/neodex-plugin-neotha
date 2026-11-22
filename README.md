# NeoTha

Un jeu de rythme à la souris : les notes arrivent depuis le fond d'un tunnel vers une grille de 3 × 3, et il faut que ton curseur soit sur chaque note au moment où elle se pose. Joue les 1200 morceaux du plugin Rythme, ou crée des niveaux à partir de n'importe quelle musique.

*English version: [README.en.md](README.en.md)*

## Comment jouer

- Choisis un morceau et une difficulté (Facile, Normal, Difficile, Expert), puis **Espace** pour jouer.
- Les notes grossissent en approchant du fond du tunnel. Place le curseur sur la case de la note à l'instant où elle arrive : elle est réussie. Si elle arrive sans que le curseur soit dessus, elle est ratée.
- Les notes tombent partout dans le champ, parfois en longues séries qu'il faut suivre d'un seul geste.
- La souris est capturée pendant la partie ; **Échap** la libère. **P** met en pause, **Espace** reprend.
- **Plein écran** pour jouer sur tout l'écran.

## Points et notes

Chaque note réussie rapporte 300 points, plus 1 % par note de combo, jusqu'au double à partir de 100 notes de suite. Une note ratée remet le combo à zéro.

À la fin, la note finale dépend de la part de notes réussies : **S** à partir de 95 %, **A** à 90 %, **B** à 80 %, **C** à 70 %, **D** en dessous. Le score, la précision, le combo maximal et la note sont gardés pour chaque niveau.

## Chansons

L'onglet **Chansons** reprend les 1200 morceaux du plugin Rythme, chacun avec ses 4 difficultés. Les notes y sont placées sur les temps de la musique.

## Mes musiques

Dans **Mes musiques**, crée un niveau :

- **Importer un fichier audio** (MP3, M4A, OGG, Opus, WAV, FLAC ou WebM), ou choisis une musique de ta bibliothèque NeoMusic ;
- **Créer le niveau** : NeoTha détecte le tempo et les temps forts et en tire 4 niveaux de difficulté.

## Maps de la communauté

Dans **Mes musiques**, **IMPORTER UNE MAP (.SSPM)** : une map de Sound Space Plus ou de Rhythia (fichier **.sspm**, versions 1 et 2, avec sa musique), ou une map Sound Space en texte (**.txt**, à choisir en même temps que sa musique). Les notes restent à leur place, même entre deux cases. La map et sa musique sont gardées sur ce PC (20 Mo au plus pour la musique) ; **×** la retire.

## Réglages du genre

- **Vitesse d'approche** (Auto, Lente à Extrême) : le temps entre l'apparition d'une note et son arrivée, séparé de la **Distance** (près, normale, loin) à laquelle elle apparaît dans le tunnel.
- **Mods** : **FONDU** (les notes n'apparaissent qu'à mi-chemin), **FANTÔME** (elles s'effacent juste avant d'arriver), **MIROIR** (la grille retournée de gauche à droite). Chaque mod rapporte 10 % d'expérience en plus.
- **Taille des notes**, **Couleur des notes** (alternée, selon la figure : une couleur par motif — série, spirale, zigzag, triangle, carré, saut — ou arc-en-ciel), **Relief** (la grille et le tunnel suivent un peu le curseur), **Curseur bloqué** (il ne sort pas du champ de jeu).

## Défis et progression

- **Défi** : les notes ne tombent que sur certaines cases — **coins seulement**, **la croix**, **le tour** ou **la ligne du milieu**. Chaque défi a son propre classement.
- **Niveau du joueur** : chaque note réussie rapporte de l'expérience (plus sur un niveau à beaucoup d'étoiles, avec un défi ou des mods). Ton niveau s'affiche en haut.
- L'écran de fin montre aussi la **carte des ratés** : la part de notes ratées sur chacune des 9 cases, et la case où tu rates le plus.

## Réglages

- **Volume** de la musique.
- **Son des clics** : le son joué à chaque note touchée, au choix parmi 10 (Doux, Clap, Bois, Grosse caisse, Cristal, Pop, Charleston, Caisse claire, Pluck, Tok) ou aucun. Perdre un combo de 10 ou plus joue un son « combo cassé ».
- **Décalage audio** : Auto, +40, +80 ou +120 ms, si le son arrive en retard (casque Bluetooth par exemple).
- **Curseur** : point, cercle ou carré.

## Données et synchronisation

Tes scores, précisions et notes par niveau, ainsi que tes réglages et ton curseur, sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée. Les records sont propres à NeoTha. Le plugin NeoMusic est nécessaire.

## Installer

Dans NeoDex : **NeoStore → À découvrir → NeoTha → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).

## Version 1.5.0

- Chaque morceau a son tunnel : rectangle, hexagone, cercle, losange, octogone ou triangle, et ses deux couleurs, toujours les mêmes pour un morceau.
- Écran de fin : la courbe de précision le long du morceau, avec les notes ratées marquées en rouge.

## Vitesse et revoir sa partie

L'option « Vitesse » joue le morceau à 0,75×, 1×, 1,25× ou 1,5× : les notes arrivent au même rythme que la musique. Plus vite donne plus d'XP, et chaque vitesse a ses propres records. À la fin d'une partie, la touche R la rejoue avec sa musique : ton curseur refait exactement ton chemin (sans record ni XP).
