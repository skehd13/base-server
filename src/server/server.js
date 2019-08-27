import Hapi from "hapi";
import Route from "./routes";
import Path from "path";
import Pug from "pug";
import registers from "./register";

const server = new Hapi.Server({ port: 5555, host: "0.0.0.0" });

const init = async () => {
  server.path(Path.join(__dirname, "../../public"));
  Route.route.map(route => {
    server.route(route);
  });

  await server.register(registers);

  server.route({
    method: "GET",
    path: "/{param*}",
    config: {
      auth: false
    },
    handler: {
      directory: {
        path: ".",
        redirectToSlash: true,
        index: true
      }
    }
  });

  server.views({
    engines: {
      pug: Pug
    },
    relativeTo: __dirname,
    path: Path.join(__dirname, "../../templates"),
    layout: false
  });

  await server.start();
  console.log("Server is running");
};

init();
