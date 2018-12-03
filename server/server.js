import express from 'express';
import {APP_PORT} from './config';
import compression from "compression";
import path from "path";


const app = express();

app.use(compression());

// serve static assets normally
app.use(express.static(path.resolve(__dirname, '../public')));

app.all('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});


app.use(function(error, req, res, next) {
    console.log(error.stack);
    res.status(500).send({success: false, message: 'Internal server error'});
});


app.listen(APP_PORT, () => console.log(`server started on port ${APP_PORT}`));
