import User from "../UserModel/userModel.js";
export class UserController
{
    static async show(req,res)
    {
        try{
            console.log('hoga');
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
         console.log(req.body);
         try
         {
           if(req.file)
           {
              const filePath=req.file.path.replace(/\\/g,'/');
              console.log(filePath);
              await User.findOneAndUpdate({_id:id},{topic:req.body.topic,pic:filePath,name:req.body.name,content:req.body.content},{new:true});
              const allPost=await User.find();
              res.render('home',{post:allPost});
           }
           else
           {
             console.log(req.body);
             await User.findOneAndUpdate({_id:id},{topic:req.body.topic,name:req.body.name,content:req.body.content},{new:true});
             console.log("File is not uploaded");
             const allPost=await User.find();
             console.log('this one update called!');
             res.render('home',{post:allPost});
           }
        }
        catch(e)
        {
                 res.redirect('edit');
        }
        //  try
        //  {
             
        //      if(!req.file)
        //      {
        //       await User.findOneAndUpdate({_id:id},{topic:req.body.topic,name:req.body.name,content:req.body.content},{new:true});
        //      }
        //      else
        //      {
        //       await User.findOneAndUpdate({_id:id},{topic:req.body.topic,pic:filePath,name:req.body.name,content:req.body.content},{new:true});
        //      }
        //      const allPost=await User.find();
        //      console.log('this one update called!');
        //      res.render('home',{post:allPost});
        //  }
        //  catch(e)
        //  {
        //      res.redirect('edit');
        //  }
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
         await User.deleteOne({_id:req.params.id});
         const allPost= await User.find();
         res.render('home',{post:allPost});
         }
         catch(e)
         {
             console('Err');
         }
     }
    static async addNewPost(req,res)
    {
       const userName=req.body.name;
       const content=req.body.content;
       const topic=req.body.topic;
       const imageUrl=+req.file.path.replace(/\\/g,'/');
       const data={
           name:userName,
           pic:imageUrl,
           content:content,
           topic:topic
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