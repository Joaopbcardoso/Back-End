const { Client } = require('pg')

const client = new Client({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

const connectDB = async () => {
    client
    .connect()
    .then(()=>{
        console.log('A conexão Funcionou');
    }).catch((err) =>{
        console.log('Erro ao conectar na DB');
    });
};

module.exports = connectDB