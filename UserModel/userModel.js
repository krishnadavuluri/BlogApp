import mongoose from 'mongoose';
const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    topic:{type:String,required:true},
    pic:{type:String,required:true},
    content:{type:String,required:true},
    fileName:{type:String,required:true},
    created_at:{type:Date,default:Date.now()}
    });
const User =new mongoose.model('Blog-User',userSchema);

export default User;