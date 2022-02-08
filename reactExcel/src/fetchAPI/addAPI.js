export default function postApi(data){
    return new Promise((resolve, reject) => {
		console.log(data,"api dataaaaaaaaaaaaa");
        const url = 'http://localhost:3004/student';
        fetch(url, { 
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
				"country": data.addCountry,
				"gender": data.addGender
			})
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res)
        })
        .catch((error) =>{
            reject(error);
        })
    })
    }