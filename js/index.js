const express = require('express')
const connectDB = require('./db')
require('dotenv').config()

const app = express()

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