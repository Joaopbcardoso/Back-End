const { client } = require("./db")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const listUsers = async (req, res) =>{
    res.send('Deu tudo certo')
}



const createUser = async (req, res) =>{
    try{
        const senhacripto = await bcryptjs.hashSync(senha, 10)
        const { nome, email, senha } = req.body;
        const dados = await client.query(sql, [nome, email, senhacripto])
        res.status(201).json({msg: 'O usuário foi criado com sucesso'})
        const sql = `INSERT INTO usuários (nome, email, senha) values($1, $2, $3) RETURNING *`
    } catch(err){
        console.log(err)
        res.status(500).json({msg: 'Impossível criar o usuário'})       
    }
}

const updateUser = async (req, res) =>{
    try{
        const id = req.params.id;
        const { nome, email, senha } = req.body;
        const dados = await client.query(sql, [nome, email, id])
        const sql = `UPDATE usuarios SET nome = $1, email = $2, WHERE id = $3 RETURNING *`
        console.log(dados)
        res.status(201).json({msg: 'O usuário foi atualizado com sucesso'})
        
    } catch(err){
        console.log(err)
        res.status(500).json({msg: 'Erro ao atualizar o usuário'})       
    }
}

const deleteUser = async (req, res) =>{
    try{
        const id = req.params.id;
        const sql = `DELETE FROM usuarios WHERE id = $1`
        const dados = await client.query(sql, [nome, email, id])
        res.status(200).json({msg: 'O usuário foi deletado'}) 
    } catch(err){
        console.log(err);
        res.status(500).json({msg: 'erro ao deletar usuário'}) 

    }

}
const login = async (req, res) =>{
    try{
        const { email, senha } = req.body;
        const sql = await client.query('SELECT * FROM usuarios WHERE email = $1')
        const usuario = await client.query(sql, [email])
        console.log(usuario.rows[0])
        const validPassword = bcryptjs.compareSync(senha, usuariomrows[0])
        console.log(validPassword);
        const token = jwt.sign(
            {
            }
        )
    } catch(err){
            console.log(err);
            res.send(500).json({msg: 'Erro ao fazer login'})
        }
    }
    


const getUser = async (req, res) =>{
    res.send('Pegou o Usuário')
}

module.exports = { listUsers, createUser, updateUser, deleteUser, getUser, login };