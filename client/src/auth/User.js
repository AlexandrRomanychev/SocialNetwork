export default {
    login: (username, password) => {
        const requestUrl = '/enter';
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'login': username,
                'password': password
            })
        };

        return new Promise((resolve, reject) => {
            fetch(requestUrl, requestOptions)
                .then((res) => {
                    if (res.ok) {
                        console.log('Logged in successfully');
                        console.log(res);
                        resolve();
                    } else {
                        reject();
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        });
    }
}