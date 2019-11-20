const http = require('http');
const port = process.env.PORT || 3001;
const express = require('express');
const app = express();
const morgon = require('morgan')
const bodyParser = require('body-parser')
const CenimaRoute = require('./Routes/CenimaRoute');
const MovieRoute = require('./Routes/MovieRoute');
const LoginRoute = require('./Routes/LoginRoute');
const RegistrationRoute = require('./Routes/RegistrationRoute');
const UserLocationRoute = require('./Routes/UserLocationRoute')
app.use(morgon('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/cenima', CenimaRoute);
app.use('/movie', MovieRoute);
app.use('/login', LoginRoute);
app.use('/registration', RegistrationRoute);
app.use('/userlocation', UserLocationRoute);

app.use('/', (req,res)=>{
    res.send({msg:"done"})
});

app.use((req, res, next) => {
    const error = new Error('page not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    // console.log(error)
    res.json({
        error: {
            message: error.message
        }
    })
})



app.listen(port, () => {

console.log(`server start on posrt ${port}`);
});

