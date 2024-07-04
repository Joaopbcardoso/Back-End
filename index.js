const express = require('express')
const {Client} = require('pg')
require("dotenv").config()

const client = new Client({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

const app = express()

const connectDB = async () => {
    client
    .connect()
    .then(()=>{
        console.log('A conexão Funcionou');
    }).catch((err) =>{
        console.log('Erroao conectar na DB');
    });
};
connectDB()

app.get('/teste-api', function (req, res){
    res.send('localhost:8000/teste-api')
})
app.listen(8000)










/*array = [1,2,3,4,5]

function filtraPares(array){
    new_array = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            new_array.push(array[i])
        }
    }
    return new_array
}

resultado = filtraPares(array)
console.log(resultado); */