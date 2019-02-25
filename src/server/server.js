import Hapi from 'hapi'
import Route from './routes'
import registers from './register'

const server = Hapi.Server({ port: 5555, host:'0.0.0.0'});

const init = async () => {
    Route.route.map(route => {server.route(route)});

    server.route({
        method: 'GET',
        path: '/',
        handler: (req, h) => ({ message: 'Hello Hapi.js' })
    });

    await server.register(registers);


    await server.start();
    console.log('Server is running')
};

init();