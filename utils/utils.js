import multer from 'multer';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
export class Utils
{
    static upload=multer({ storage: storage });
}