# Express Hello World

Progetto Hello World base con Node.js ed Express.

## Installazione

```bash
npm install
```

## Utilizzo

Avvia il server:

```bash
npm start
```

Modalità sviluppo con auto-reload:

```bash
npm run dev
```

Il server sarà disponibile su **http://localhost:3000**

## Configurazione

Porta predefinita: 3000

Per cambiare porta, crea un file `.env`:
```
PORT=8080
```

## Associazione con Heroku
Per associare questo repository a un app Heroku
```
heroku git:remote -a NOME_APP_HEROKU
```
Per pushare successivamente l'app
```
git push heroku main
```

Se invece si vuole clonare il repository
```
heroku git:clone -a NOME_APP_HEROKU
```