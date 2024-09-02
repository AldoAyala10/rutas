function intMiddleware(req, res, next){
    const now = new Date();
    console.log("Fecha y hora de accesso: ", now);
    console.log("Has accedido a la ruta", req.path);
    next();
}
module.exports = intMiddleware;