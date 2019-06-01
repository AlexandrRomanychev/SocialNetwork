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
        console.log('Поиск по логину и паролю');
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

    /**
     * Метод для поиска в базе данных пользователя с конкретным паролем
     * @param password исходный пароль
     * @returns список подходящих пльзователей
     */
    findUserByPass(collection, password) {
        return new Promise(function(resolve, reject) {
            collection.find({ $and: [{ password: password }] }).toArray(function(err, results) {
                if (err != null)
                    reject(err);
                else
                    resolve(results);
            });
        });
    }

    /**
     * Метод для добавления в базу данных нового пользователя
     * @param users пользователи
     * @returns успех/неуспех
     */
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

    deleteUserById(collection, id) {
        return new Promise(function(resolve, reject) {
            var mongodb = require("mongodb");
            collection.deleteOne({ _id: new mongodb.ObjectID(id) }, function(err, results) {
                if (err) throw err;
                resolve(results);
            });
        });
    }
}

module.exports = DataBase;