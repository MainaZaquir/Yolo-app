const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './public/images/',
    filename: function(req, file, cb){
        cb(null,file.originalname);
    }
})

const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
    fileFilter: function(req,file, cb){
        checkFileType(file, cb);
    }
}).single('image');

function checkFileType(file, cb){
    
    const fileType = /jpeg|jpg|png|gif/;
    
    const extname = fileType.test( path.extname(file.originalname).toLowerCase());
    
    const mimetype = fileType.test(file.mimetype);

    if(mimetype && extname){
        return cb(null, true);
    }else{
        cb('Error: Images Only!!')
    }
}


module.exports = upload;
