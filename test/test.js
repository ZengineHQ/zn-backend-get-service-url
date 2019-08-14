'use strict';

const getServiceUrl = require('../index');

describe('module', function() {

	it('should return service url', function() {

        const request = {
            headers: {
                host: 'plugins.zenginehq.com'
            },
            params: {
                workspaceId: 123,
                pluginNamespace: 'abc',
                pluginRoute: 'xyz'
            }
        };

        const url = getServiceUrl(request);

        expect(url).to.equal('https://plugins.zenginehq.com/workspaces/123/abc/xyz');

    });

});