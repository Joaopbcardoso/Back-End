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

const setup = async (req, res) =>{
    try{
        const data = await client.query('CREATE TABLE usuarios (nome VARCHAR(100), email VARCHAR(50), id SERIAL primary key, senha VARCHAR(20))')
        res.status(200).json({msg: 'A tabela foi criada'})
    } catch(err) {
        console.log('Deu erro ao criar a tabela')
        res.status(500)
    }''
}

module.exports = {connectDB, setup}