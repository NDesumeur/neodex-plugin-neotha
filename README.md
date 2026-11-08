# NeoTha

Un jeu de rythme à la souris : les notes arrivent depuis le fond d'un tunnel vers une grille de 3 × 3, et il faut que ton curseur soit sur chaque note au moment où elle se pose. Joue les 200 morceaux du plugin Rythme, ou crée des niveaux à partir de n'importe quelle musique.

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

L'onglet **Chansons** reprend les 200 morceaux du plugin Rythme, chacun avec ses 4 difficultés. Les notes y sont placées sur les temps de la musique.

## Mes musiques

Dans **Mes musiques**, crée un niveau :

- **Importer un fichier audio** (MP3, M4A, OGG, Opus, WAV, FLAC ou WebM), ou choisis une musique de ta bibliothèque NeoMusic ;
- **Créer le niveau** : NeoTha détecte le tempo et les temps forts et en tire 4 niveaux de difficulté.

## Réglages

- **Volume** de la musique.
- **Décalage audio** : Auto, +40, +80 ou +120 ms, si le son arrive en retard (casque Bluetooth par exemple).
- **Curseur** : point, cercle ou carré.

## Données et synchronisation

Tes scores, précisions et notes par niveau, ainsi que tes réglages et ton curseur, sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée. Les records sont propres à NeoTha. Le plugin NeoMusic est nécessaire.

## Installer

Dans NeoDex : **NeoStore → À découvrir → NeoTha → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).
