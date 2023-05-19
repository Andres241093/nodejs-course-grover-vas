const express = require('express');
const config = require('config'); // para config de entornos. Nota: usar antes del morgan
const morgan = require('morgan');
const app = express();
const users = require('./routes/user/users');

console.log('App: ',config.get('name')); //Config de entornos
console.log('DB: ',config.get('configDB.host'));

app.use(express.json()); //Middleware para recibir los datos por las peticiones post, es decir, para recibir info del body
app.use('/api/usuarios',users);

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
}

app.get('/',(req,res) => {
    res.send('hola desde express!');
});

app.listen(3000, () => console.log('Listen port 3000...'));