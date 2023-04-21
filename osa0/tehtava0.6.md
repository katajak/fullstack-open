sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server->>server: Create new note and save to db
    server->>browser: HTTP response 201
    deactivate server

    Note right of browser: No redirect, no other HTTP requests
