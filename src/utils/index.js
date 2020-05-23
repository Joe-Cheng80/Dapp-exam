import superagent from "superagent";

export const get = params =>
	new Promise((resolve, reject) => {
		superagent
			.get(params.url)
			.query(params.payload)
			.then(res => {
				resolve(res.body);
			})
			.catch(e => {
				reject(e);
			});
	});
