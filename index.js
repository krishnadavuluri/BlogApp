import express from 'express';
import colors from 'colors';
import paths from 'path';
import figlet from 'figlet';
import {server} from './server.js';

const app=new server().app;
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running at port ${port}`.rainbow);
})