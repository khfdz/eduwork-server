const dotenv = require('dotenv')
const path = require('path');

dotenv.config();

module.export = {
    rootPath: path.resolve(__dirname, '..'),
    secretKey: process.env.SECRET_KEY,
    serviceName: process.env.SERVICE_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
    // dbDialect: process.env.DB_DIALECT,
    // dbPoolMax: process.env.DB_POOL_MAX,
    // dbPoolIdle: process.env.DB_POOL_IDLE,
    // dbPoolAcquire: process.env.DB_POOL_ACQUIRE,
    // dbPoolTimeout: process.env.DB_POOL_TIMEOUT,
    
}