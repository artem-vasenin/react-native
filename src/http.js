export class Http {
    static async get(url) {
        try {
            return await Request(url);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    static async post(url, data = {}) {
        try {
            return await Request(url, 'POST', data);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    static async patch(url, data = {}) {
        try {
            return await Request(url, 'PATCH', data);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
    
    static async delete(url) {
        try {
            return await Request(url, 'DELETE');
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
};

async function Request(url, method = 'GET', body = null) {
    const config = {
        method,
        headers: { 'Content-Type': 'application/json' }
    };

    if (body) config.body = JSON.stringify(body);

    const response = await fetch(url, config);

    return await response.json();
}