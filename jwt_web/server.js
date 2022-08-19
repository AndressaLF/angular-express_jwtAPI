const http = require('http'); 
const express = require('express'); 
const jwt = require('jsonwebtoken');
const app = express();

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const minha_senha = 'ifrn2022';
 
app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})


function verifyJWT(req, res, next){
  if (!req.headers.authorization) return res.status(401).json({message: "Nenhum token foi enviado"})
  
  const token = req.headers.authorization.replace("Bearer ", "");

  jwt.verify(token, minha_senha, function(err){
    if(err) return res.status(401).json({message: "Falha na autenticação."})

      //res.send("Usuário autorizado. Token Correto!")
      next()
    })
    
    return res.status(500).json({message: "Alguma coisa deu errado!"})
}

//metodo de autenticação
app.post('/login', (req, res, next) => {
    //esse teste abaixo deve ser feito no seu banco de dados
    //console.log(req.body)
    if(req.body.username === 'Luiz' && req.body.password === '123'){
      //auth ok
      const token = jwt.sign({ u_name: "Luiz" }, minha_senha, {
        expiresIn: 300 // expirando em 5min (300 segundos => 5x60) linha responsável pelo parametro exp
      });
      return res.json({status: true, token: token});
    } else {
      
      res.json({status: false, message: "Login inválido!"})
    }
})

// app.use(verifyJWT)

app.get('/clientes', (req, res, next) => { 
  // console.log("Retornou todos clientes!");
   res.json([
       {id:1, nome:'Luiz'},
       {id:2, nome:'Andressa'}
   ]);
app.use(verifyJWT)

});




const server = http.createServer(app); 
server.listen(3000);
console.log("Servidor executando na porta 3000...")