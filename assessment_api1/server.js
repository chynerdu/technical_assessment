var express = require('express');
var app =express();
  var  bodyParser =require('body-parser');  
var mongoose = require('mongoose');
 var  router = express.Router();
 var multer = require('multer');
 const gcsSharp = require('multer-sharp');
 var fs =require ('fs');  
 const  path = require('path');
var port =process.env.PORT ||8083;
var db= mongoose.connect('mongodb://chinedu:klicky123@ds245523.mlab.com:45523/assessmentchinedu');
// Mongodb Schema
var products= mongoose.model('products' , {id: Number, category:String, productName : String,  description: String, color: String, imageFullPath: String,
//     destination:{
//        type:String,
//        required:true,
//        trim:true
//    },

//        filename:{
//                 type:String,
//                 required:true
//        },
   
   price: String});

     /* multer config */
//   var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'public/lib/images/uploads');
//     },
//     filename: function (req, file, cb) {
//       if  (!file.originalname.match(/\.(jpeg|jpg|png)$/)){
//           var err =new Error();
//           err.code = 'filetype';
//           return cb(err);
//       } else{
//           cb (null,  Date.now() + '_' + file.originalname);
//       }
//     }
//   });

//upload to google cloud storage
const storage = gcsSharp({
   
    filename: function (req, file, cb) {
    if  (!file.originalname.match(/\.(jpeg|jpg|png)$/)){
        var err =new Error();
        err.code = 'filetype';
        return cb(err);
    } else{
        cb (null,  Date.now() + '_' + file.originalname);
    }
    },
    bucket: 'widgethub-cdabd.appspot.com', // Required : bucket name to upload
    projectId: 'widgethub-cdabd', // Required : Google project ID
    keyFilename: 'WidgetHub-f06b062130d2.json', // Optional : JSON credentials file for Google Cloud Storage
    destination: 'assessments', // Optional : destination folder to store your file on Google Cloud Storage, default: ''
    //acl: 'publicRead' // Optional : acl credentials file for Google Cloud Storage, 'publicrRead' or 'private', default: 'private'

});

  var upload = multer({  storage: storage,limits:{fileSize:50000000}
  })  
    


   /* end config */
 
   app.use(bodyParser.urlencoded())
   app.use(bodyParser.json())   


    // allow api request from other server 
    .use(function(req, res, next) { 
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next(); 
    })

 .get('/products', function(req, res){
 products.find(function(err, products){
         res.json(products);
     });
 })
 .get('/products/:id', function(req, res){
    products.findById(req.params.id, function(err, Singleproduct){
            res.json(Singleproduct);
        });
    })
 .post('/products', upload.any(), function(req, res, next){
    var newProducts  = new products;
    
      newProducts.category = req.body.category,
      newProducts.productName = req.body.product, 
      newProducts.description = req.body.description,
      newProducts.color = req.body.color,
    //   newProducts.destination = req.files[0].destination,
    //   newProducts.filename = req.files[0].filename,
      newProducts.imageFullPath = req.files[0].path
      newProducts.price = req.body.price, 
      newProducts.save(function(err, results){
      console.log('posted '+ results);
      console.log('posted body '+ req.files[0].destination);
      console.log(req.files);
      res.send(results);
     });
})
   var publicDir = require('path').join(__dirname+'/public')
   app.use('/images', express.static(__dirname + '/public/lib/images/uploads/'))
    .use(express.static('./public'))
//    .all('*', function (req, res){
//     res.sendfile('public/main.html');
         
// });




var server= app.listen(port, function(){
  console.log('');
   console.log('Hello there, Your server is running fine on port ' + port);
});