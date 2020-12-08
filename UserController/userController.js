import User from "../UserModel/userModel.js";
import cloudinary from 'cloudinary';
export class UserController
{
    static async show(req,res)
    {
        try
        {
        const topic=await User.findOne({_id:req.params.id});
        res.render('show',{post:topic});
        }
        catch(e){
           console.log("err");
        }   
     }
     static async updatePost(req,res)
     {
         const id=req.params.id;
         try
         {
           if(req.file)
           {
              const filePath=req.file.path;
              var post=await User.findById({_id:id});
              var Cloudinary=cloudinary.v2;
              await Cloudinary.uploader.destroy(post.fileName);
              await User.findOneAndUpdate({_id:id},{topic:req.body.topic,filePath:req.file.filename,pic:filePath,name:req.body.name,content:req.body.content},{new:true});
              const allPost=await User.find();
              res.render('home',{post:allPost});
           }
           else
           {
            
             await User.findOneAndUpdate({_id:id},{topic:req.body.topic,name:req.body.name,content:req.body.content},{new:true});
             const allPost=await User.find();
             res.render('home',{post:allPost});
           }
        }
        catch(e)
        {
                 res.redirect('edit');
        }
     }
     static async editPost(req,res)
     {
         const id=req.params.id;
         try{

         const topic= await User.findOne({_id:id});
         res.render('edit',{post:topic});
         }
         catch(e)
         {
             console.log("Error occured!");
         }
     }
     static async deletePost(req,res)
     {
         try
         {
             var post=await User.findById({_id:req.params.id});
             var Cloudinary=cloudinary.v2;
             await Cloudinary.uploader.destroy(post.fileName);
             await User.deleteOne({_id:req.params.id});
             const allPost= await User.find();
             res.render('home',{post:allPost});
          }
         catch(e)
          {
              console.log('Err');
          }
     }
    static async addNewPost(req,res)
    {
    
       const userName=req.body.name;
       const content=req.body.content;
       const topic=req.body.topic;
       const imageUrl=req.file.path;
      // console.log(req.file);
       const data={
           name:userName,
           pic:imageUrl,
           content:content,
           topic:topic,
           fileName:req.file.filename
       }
       try
       {
          const newUSer=new User(data);
          const user= await newUSer.save();
          const allPost=await User.find();
          res.render('home',{post:allPost});
       }
       catch(e)
       {
           console.log('Error');
       }

    }
    static async showAllPost(req,res)
    {
        try
        {
          const allPost=await User.find();
          res.render('home',{post:allPost});
        }
        catch(e)
        {
            
        }
    }
}