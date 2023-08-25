const express = require('express'); // instance of the framework express 
const app = express (); // variable equal to the instance

app.use(express.json()) // especificamos que el body de la solicitud es formato json
const db = require('./models') // importa la carpeta models para importar las tablas de sql
// importamos las rutas:
const postRouter = require("./routes/Posts")
app.use("/posts", postRouter) // le pasamos la primera ruta

db.sequelize.sync().then(()=> {  // revisa si existe una tabla y sino la crea autom.
app.listen(3001, ()=>{
    console.log("Server running on port 3001")
});
});