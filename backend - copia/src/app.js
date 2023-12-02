import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

import libroRoutes from './routes/libro.js'
import reservaRoutes from './routes/reserva.js'
import usuarioRoutes from './routes/usuario.js'
import categoriaRoutes from './routes/categoria.js'
import autorRoutes from './routes/autor.js';
import editorialRoutes from './routes/editorial.js';
import tipodocumentoRoutes from './routes/Tipo_documento.js'
import tipousuarioRoutes from './routes/Tipo_Usuario.js'

var app = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.json({ result: 'OK'})
})

app.use("/usuario", usuarioRoutes)
app.use("/reserva", reservaRoutes)
app.use("/libro", libroRoutes)
app.use("/categoria", categoriaRoutes)
app.use("/autor", autorRoutes)
app.use("/editorial", editorialRoutes)
app.use("/tipodocumento", tipodocumentoRoutes)
app.use("/tipousuario", tipousuarioRoutes)

export default app;