class DataBase {

    constructor() {
        const MongoClient = require("mongodb").MongoClient;
        const url = process.env.MONGO_URL || 'mongodb://localhost:27017/';
        this.mongoClient = new MongoClient(url, { useNewUrlParser: true });
    }

    /**
     * Метод для поиска в базе данных пользователя с конкретным логином и паролем
     * @param login искомый логин
     * @param password искомый пароль
     * @returns список подходящих пльзователей
     */
    findUserByLogAndPass(collection, login, password) {
        return new Promise(function(resolve, reject) {
            collection.find({ $and: [{ login: login }, { password: password }] }).toArray(function(err, results) {
                if (err != null)
                    reject(err);
                else
                    resolve(results);
            });
        });
    }

    /**
     * Метод для поиска в базе данных пользователя с конкретным логином
     * @param login искомый логин
     * @returns список подходящих пльзователей
     */
    findUserByLog(collection, login) {
        return new Promise(function(resolve, reject) {
            collection.find({ $and: [{ login: login }] }).toArray(function(err, results) {
                if (err != null)
                    reject(err);
                else
                    resolve(results);
            });
        });
    }

    insertNewUser(collection, users) {
        return new Promise(function(resolve, reject) {
            collection.insertMany(users, function(err, results) {
                if (err != null)
                    reject(err);
                else
                    resolve(results);
            });
        });
    }
}

module.exports = DataBase;