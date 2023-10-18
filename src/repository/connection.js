import mysql2 from 'mysql2/promise'

const connection = await mysql2.createConnection({
    host: process.env.HOST,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASSWORD
})

console.log("Conexão com o BD realizada")

export {connection}
