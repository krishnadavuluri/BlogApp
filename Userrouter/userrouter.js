import Router from 'express';
import { UserController } from '../UserController/userController.js';
import { Utils } from '../utils/utils.js';
import validator from'express-validator'
import User from '../UserModel/userModel.js';
import { render } from 'ejs';
class UserRouter
{
   constructor()
   {
       this.router=Router();
       this.getRoute();
   }
   getRoute()
   {
      //  this.router.get('/login',(req,res)=>{
      //    res.render('login');
      //  })
       this.router.get('/home',UserController.showAllPost);
      // this.router.post('/upload/article',,UserController.uploadimage);
       this.router.get('/blog/:id',UserController.show);
       this.router.get('/addPost',(req,res)=>{
         res.render('addNewPost');
       })
       this.router.post('/update/:id/edit',Utils.upload.single('file-image'),UserController.updatePost)
       this.router.get('/edit/:id',UserController.editPost)
       this.router.post('/addNewPost',Utils.upload.single('file-image'),UserController.addNewPost);
       this.router.get('/delete/:id',UserController.deletePost);
   }

}
var RouteLinker=new UserRouter().router;
export default RouteLinker;