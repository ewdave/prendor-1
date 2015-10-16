/**
 * Created by ponty on 10/16/15.
 */


generateFileType = function(fileName){

    var index = fileName.lastIndexOf(".");
    return fileName.substring((index + 1),fileName.length);
}

module.exports = (app,multer)=> {

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/tmp/uploads')
        },
        filename: function (req, file, cb) {
            //var fileExt = generateFileType(file.originalname);
            //cb(null, file.fieldname + '-' + Date.now()+"."+fileExt);
            cb(null, file.originalname);
        }
    })

    var upload = multer({ storage:storage}).array('files', 40);

    app.post('/api/upload',(req,res) => {
        upload(req, res, (err) => {
            if (err) {
               res.json({message:"file upload unsuccessful",status:false});
            }
            res.json({message:"file upload successful",status:true});
        })
    });

}
