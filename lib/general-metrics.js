function handleRequestsForMetrics(request, response, next) {
    const getRequestDuration = (start) => {
        const diff = process.hrtime(start);
        return (diff[0] * 1e9 + diff[1]) / 1e6;
    };

    const {method, url} = request;
    const start = process.hrtime();
    let durationInMilliseconds;
    response.on("finish", () => {
        const {statusCode} = response;
        durationInMilliseconds = getRequestDuration(start);
        let log = `[General-Metrics-middleware] ${method}:${url} ${statusCode} ${durationInMilliseconds.toLocaleString()}ms`;
        console.log(log);
    });

    next();
}

module.exports = {
    handleRequestsForMetrics
};