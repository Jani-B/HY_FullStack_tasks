# Tehtävät

## Tehtävä 0.4: Uusi muistiinpano:

    - Kohde https://studies.cs.helsinki.fi/exampleapp/notes
        - Luodaan uusi teksti lomakekenttään ja tallennetaan.

    - Tapahtumat:
        Participant browser
        Participant server

        browser -> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
            Payload / Form Data: note: "testasyeas"
            Time: Queued at 0, started at 0.64ms
            Status Code: 302 Found
        server -> browser: Response redirect /exampleapp/notes
        browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/notes
            Time: Queued at 2.10s, started at 2.10s
            Status Code: 304 Not Modified
        server -> browser: HTML document

        browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
            Time: Queued at: 4.14s, Started at 4.15s
            Status Code: 304 Not modified
        server -> browser: CSS document.

        browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
            Time: Queued at 4.14s, started at 4,15s
            Status Code: 304 Not Modified
        server -> browser: js document

        browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
            Time: Queued at 6.21s, started at 6.21s
            Status Code: 200 OK
        server -> browser: Response: Json file: [...notes, {"content": "testaasyeas", "date": "2024-08-22T10:58:13.324Z"}]

    - Requests call stack in complete chain:
        https://studies.cs.helsinki.fi/exampleapp/new_note
            https://studies.cs.helsinki.fi/exampleapp/notes
                https://studies.cs.helsinki.fi/exampleapp/main.js
                    https://studies.cs.helsinki.fi/exampleapp/data.json

## Tehtävä 0.5: Single Page App:

    - Kohde: https://studies.cs.helsinki.fi/exampleapp/spa
        - Mennään sivustolle ja katsotaan mitä tapahtuu network osiossa.

    - Tapahtumat:
