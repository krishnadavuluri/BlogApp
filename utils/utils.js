import multer from 'multer';
import cloudinary from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
var Cloudinary=cloudinary.v2;
Cloudinary.config({
  cloud_name:'ducl2cnk8',
  api_key:'691112982735498',
  api_secret:'5Rp8bxJ0tnQz0kTysoO61MjG-6I'
})
var storage=new CloudinaryStorage({
  cloudinary:Cloudinary,
  floder:'blogImages',
  allowedFormats:['png','jpeg','jpg','pdf']
})
export class Utils
{
    static upload=multer({ storage:storage});
}