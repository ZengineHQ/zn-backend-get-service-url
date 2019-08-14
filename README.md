# zn-backend-get-service-url

Helper module for getting the absolute base URL to the backend service endpoint. Includes the workspace id context where the plugin is currently running. Does not include query params or any additional path that the service may add.

Example: `https://plugins.zenginehq.com/workspaces/123/myPluginNamespace/myServiceName`

## Installation

```bash
npm i @zenginehq/backend-get-service-url --save
```

## Usage

```js
const $getServiceUrl = require('@zenginehq/backend-get-service-url');

exports.run = function(eventData) {

    const baseUrl = $getServiceUrl(eventData.request);
    
    // ...

};
```