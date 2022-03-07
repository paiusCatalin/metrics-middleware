function anchoringMetricsHandler(request, response, next) {
    const{method, url} = request;
    console.log("[ANCHORING]", method, url);
    const urlSegments = url.split("/");
    if (urlSegments.length < 4) {
        return null
    }

    const historyDataObject = {
        historyObject: {
            label: urlSegments[1],
            domain: urlSegments[2],
            operation: urlSegments[3]
        }
    }

    next();
}

module.exports = {
    anchoringMetricsHandler
};