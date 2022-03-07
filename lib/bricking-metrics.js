function brickingMetricsHandler(request, response, next) {
    const {method, url} = request;
    console.log("[BRICKING]", method, url);

    next();
}

module.exports = {
    brickingMetricsHandler
};