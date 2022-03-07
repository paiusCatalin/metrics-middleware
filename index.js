function MetricsMiddleware(server) {
    console.log("\n\n\n[MetricsMiddleware] Initiated!\n\n\n");

    const {responseModifierMiddleware, requestBodyJSONMiddleware} = require('./utils/middlewares');
    const {anchoringMetrics, brickingMetrics, generalMetrics, metricsHistory} = require("./lib");

    server.use(generalMetrics.handleRequestsForMetrics);
    server.use(`/prometheus/*`, responseModifierMiddleware);
    server.use(`/prometheus/*`, requestBodyJSONMiddleware);

    server.get("/anchor/*", anchoringMetrics.anchoringMetricsHandler);
    server.put("/anchor/*", anchoringMetrics.anchoringMetricsHandler);

    server.get("/bricking/*", brickingMetrics.brickingMetricsHandler);
    server.put("/bricking/*", brickingMetrics.brickingMetricsHandler);

    server.get("/prometheus/metrics", metricsHistory.metricsHistory);
}

module.exports = MetricsMiddleware;