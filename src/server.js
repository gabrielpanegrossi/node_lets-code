const express = require('express');
const {
	customerRoutes,
	movRoutes,
	customerRegisterRoutes,
} = require('./routes');
const { engine } = require('express-handlebars');
const { PORT } = require('./config');

const server = express();

// Server middlewares
const middJson = express.json();
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const sucessHandler = require('./middlewares/sucessMiddleware');
server.use(middJson);
server.use(logger);
server.use(errorHandler);
server.use(sucessHandler);

// Router routes
server.use('/user', customerRoutes);
server.use('/movimentacoes', movRoutes);
server.use('/register', customerRegisterRoutes);

server.use(express.static('public'));

server.engine('handlebars', engine());
server.set('view engine', 'handlebars');
server.set('views', './src/views');

server.get('/', (req, res) => {
	res.render('index', { imgSrc: './youre-so-cool.png' });
});

server.listen(PORT || 3000, () => {
	console.log(`Listening on ${PORT}`);
});
