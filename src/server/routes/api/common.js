import {routeConnector,getModel} from "../util/index"

const apiRoutes = []

const basic = (request, h) => {
    return h.response("basic api").code(200)
}

const getCustomer = async (request, h) => {
    const customerCommons = getModel(request, 'customerCommon')

    const customers = await customerCommons.findAll()
    .then((customerCommon) => {
        return customerCommon
    }).catch(error => {
        console.log(error)
        return h.response(error).code(500)
    });

    return h.response(customers).code(200)
}

routeConnector(apiRoutes, 'GET', '/api', basic);
routeConnector(apiRoutes, 'GET', '/api/customerCommon', getCustomer);

export default apiRoutes