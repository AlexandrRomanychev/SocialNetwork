export default {

    register: (username, password) => {
        const requestUrl = '/register';

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    'login': username,
                    'password': password
                }
            })
        };

        return new Promise((resolve, reject) => {
            fetch(requestUrl, requestOptions)
                .then((res) => {
                    if (res.ok) {
                        console.log('Registered successfully');
                        resolve();
                    } else {
                        reject();
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        });
    },

    login: (username, password) => {
        const requestUrl = '/login';
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    'login': username,
                    'password': password
                }
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
                        console.log('Ура, попали');
                        reject();
                    }
                })
                .catch(err => {
                    console.log('Тоже попали');
                    console.log(err);
                });
        });
    }
}