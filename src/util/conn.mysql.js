import dotenv from 'dotenv';

const log = require('../config/log4js.config');

class MySqlConfig {

    constructor() {
            this.dotenv = dotenv;
            this.dotenv.config({ path: '.env.dev' });
        }
        /*
            getting the sequelize connection
        */
    getConnection() {
        const Sequelize = require('sequelize');
        const sequelize = new Sequelize('test', 'arun', '', {
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: false,
            logging: false
        })

        /*
            connection test
        */

        .authenticate()
            .then(() => {
                log.info('Connection has been established successfully for MySql.');
            })

        .catch((err) => {
            log.error('Unable to connect to MySql database ', err);
        });
        return sequelize;
    }
}

export default MySqlConfig;