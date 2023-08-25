const express = require('express') // instancia de express
const router = express.Router();
const {Posts} = require('../models') // importa la tabla Posts

//Método get  :
router.get("/", async (req, res ) =>{ // req=request, res=response ambos de Express
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
})

// Método post: para almacenar el texto
router.post("/", async(req, res )=>{ 
const post =req.body // obtiene el cuerpo de la solicitud
await Posts.create(post); // inserta el post en la tabla db Posts
res.json(post)
})

module.exports = router; // lo exportamos para acceder a el en index.js