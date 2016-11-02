## Install: ##

```
npm install
```

## Run: ##

### 1) Static page ###

Development version:
```
npm run dev-static
```
Production version:
```
npm run production
```
Open index.html in browser.

### 2) Dev server with hot update ###

```
npm run dev
```

Open http://localhost:8080 in browser.
Every change *should* reload webpage.

If port *8080* is used by another service, you can change it in *package.json* file.
Add " --port YOUR_PORT " to scripts.dev command.