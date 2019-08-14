'use strict';

function getServiceUrl(req) {

    const host = req.headers.host;

    const {
        workspaceId,
        pluginNamespace,
        pluginRoute
    } = req.params;

    return `https://${host}/workspaces/${workspaceId}/${pluginNamespace}/${pluginRoute}`;

}

module.exports = getServiceUrl;
