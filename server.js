import express from 'express'
import RouteLinker from './Userrouter/userrouter.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import color from 'colors';
export class server
{
    constructor()
    {
        this.app=express();
        this.setRoute();
        this.connectMongoDb();
    }
    setRoute()
    {
        this.saticFile();
        this.bodyParser();
        this.app.set('view engine','ejs');
        this.app.use(RouteLinker);
    }
    saticFile()
    {
        this.app.use(express.static('public'));
        this.app.use(express.static('views'));
    }
    bodyParser()
    {
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(bodyParser.urlencoded({extended:true}));
    }
    connectMongoDb()
    {
         mongoose.connect('mongodb+srv://mongodbuser:myuser@mongodb.14xky.mongodb.net/<dbname>?retryWrites=true&w=majority',
         {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            console.log('MongoDb is connected'.toUpperCase().red);
         })
    }
}