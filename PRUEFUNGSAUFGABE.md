## Prüfungsaufgabe Frameworks & Workflows '24

### Erstellt eine App, die:

- In einem Frontend Framework eurer Wahl geschrieben ist
- State abhandelt (Beispiele: React: useState, Vue: ref, andere State Manager sind aber auch ok, z.B. localStorage, sessionStorage, Datenbanken, query Parameter, andere State Manager von den Frameworks, z.B. Redux etc.)
- Beim Laden der App sollen die letzten Änderungen persistent sein
- Die App bitte auf Github veröffentlichen und über Github Pages, falls möglich, bereitstellen. (Achtet bitte darauf, keine sensiblen Daten in Github mit zu veröffentlichen wie Passwörter für genutzte Datenbanken, API Schlüssel, etc.)
  Falls es da Unklarheiten gibt, fragt mich gerne, Stichwort .env Dateien und .gitignore.
  Zum build guckt euch bitte hier die .github/workflows an. Stichwort base Pfad in der vite.config.js und dist Folder im Workflow. npm i + build beachten.

- Die App soll auch Events abhandeln können (z.B. auf Klick wird etwas gespeichert, geladen o. Ä.)
- TailwindCSS nutzt
- Umfang der App ist mir nicht so wichtig wie die Reichweite der Funktionen die ihr nutzt. Also Beispielsweise ist eine kleine ToDo App, die die Funktionen des Frameworks zeigt, wichtiger, als dass es [x] Seiten gibt. (Die ToDo App aber bitte nicht in einem anderen Framework einreichen. Überlegt euch etwas eigenes).

---

### Was mir wichtig ist

Im Prinzip alles, was ihr bei mir gelernt habt:

- Einsatz von packages
- Einsatz von Framework spezifischen Methodika
- Abstraktion in Komponenten
- Passen von Props
- Keine Fehler in der Entwickler-Konsole

### Was mir nicht (so) wichtig ist

- Modernes JavaScript
- Styling bis in's letzte (es geht hier weniger um CSS, mehr um den Einsatz von Tailwind). Heißt natürlich dürft ihr die App gern hübsch machen und das werde ich auch positiv Berücksichtigen, ist aber kein Ausschlußkriterium für die Bewertung.
- Semantisches HTML - natürlich schön, wenn ihr drauf achtet, aber auch hier: das ist kein HTML Kurs.

### Nice to have

- [Eine API einsetzen](https://github.com/public-apis/public-apis) (z.B. die Amiibo API)
- TypeScript
