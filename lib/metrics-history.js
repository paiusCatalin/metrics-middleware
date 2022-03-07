const client = require("prom-client");
const register = new client.Registry();

register.setDefaultLabels({
    app: "wg-metrics"
});

client.collectDefaultMetrics({register});

async function metricsHistory(request, response) {
    response.setHeader("Content-Type", register.contentType);
    response.send(200, await register.metrics());
}

module.exports = {
    metricsHistory
};