import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta Home
app.get('/', (req: Request, res: Response) => {
	res.render('home', {
		titulo: 'Mi primer noticia',
		subtitulo: 'Comenzando con mvc',
		contenido: 'Configurando mi primer vista con express y mvc',
		titulodepagina: 'MVC - TEST',
		numero: 0,
	});
});

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto: ${port}`);
});
