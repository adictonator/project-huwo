export function doFetch(url, method = 'GET', data = {}) {
	if (method === 'GET') {
		return fetch(url).then(response => response.json())
	} else {
		return fetch(url, {
			method: method,
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response => response.json())
	}
}