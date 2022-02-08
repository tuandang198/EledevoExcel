export default function postApi(data){
    return new Promise((resolve, reject) => {
		console.log(data,"import dataaaaaaaaaaaaa");
        const url = 'http://localhost:3004/studentExcel';
		const form = new FormData();
		form.append("file", data.file);
        fetch(url, { 
            method: 'POST',
            body: form
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