import mysql from 'mysql2/promise.js';

const con = await mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

export { con };