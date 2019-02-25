export const routeConnector = (routes, method, path, handler) => {
    const route = {
        method,
        path,
        handler,
    };
    routes.push(route);
};

export const getModel = (request, model) => request.getDb('sewang2018').models[model];