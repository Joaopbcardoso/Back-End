const express = require('express')
require('dotenv').config()
const { connectDB } = require('./db')
const rotas = require('./rotas')

const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.json())


connectDB() 

app.use("/usuarios", rotas)

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