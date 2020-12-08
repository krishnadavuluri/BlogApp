import express from 'express';
import colors from 'colors';
import paths from 'path';
import figlet from 'figlet';
import dotenv from 'dotenv';
import {server} from './server.js';
const app=new server().app;
if(process.env.NODE_ENV!="production")
{
    dotenv.config();
}
console.log(process.env.CLOUD_SECRET_API);
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running at port ${port}`.rainbow);
})