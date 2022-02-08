import * as types from '../constant'
export default function callApi(data) {
console.log(data,'dataaaaaaaaaaaaaaaa');
	return new Promise((resolve, reject) => {
		// const url = `http://localhost:3004/student/?activePage=${data.activePage}&limit=${types.LIMIT}`;
		const url = `http://localhost:3004/student?activePage=${data.activePage}&limit=${types.LIMIT}`;
		fetch(url, {
			method: 'GET'
		})
			.then((response) => response.json())
			.then((res) => {
				resolve(res);
				// console.log(res,"rewtatdsttatdtt");
			})
			.catch((error) => {
				reject(error);
			});
	});
  }