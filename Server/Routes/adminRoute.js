// const express= require("express");
// const route=express.Router();
// const multer = require('multer');
// const path = require('path');


// const AdminController =require("../Controllers/adminController");





// // Set storage engine for Multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/'); // Set the folder where files will be saved
//     },
//     filename: (req, file, cb) => {
//       cb(null, `${Date.now()}-${file.originalname}`); // Save file with a unique name
//     },
//   });
//   // File filter for allowed extensions (optional)
//   const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = /jpeg|jpg|png|pdf/;
//     const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = allowedFileTypes.test(file.mimetype);
  
//     if (extname && mimetype) {
//       cb(null, true);
//     } else {
//       cb(new Error('Invalid file type. Only JPEG, PNG, and PDF are allowed.'));
//     }
//   };
  
//   // Multer middleware configuration
//   const upload = multer({
//     storage: storage,
//     fileFilter: fileFilter,
//     limits: { fileSize: 5 * 1024 * 1024 }, // Limit files to 5MB
//   });

//   route.post("/productsave",upload.array('files', 10), AdminController.productSave);
//   module.exports=route;






const express = require("express");
const route = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const AdminController = require("../Controllers/adminController");

// Ensure the uploads directory exists
const uploadPath = "uploads/";
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

// Set storage engine for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

// File filter for allowed extensions
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png|pdf|webp/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);

    if (extname && mimetype) {
        cb(null, true);
    } else {
        cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE", "Invalid file type. Only JPEG, PNG, and PDF are allowed."));
    }
};

// Multer middleware configuration
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit files to 5MB
});

// Route for product save
route.post("/productsave", upload.array("files", 10), (req, res, next) => {
    AdminController.productSave(req, res).catch(next);
}, (error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        return res.status(400).json({ error: error.message });
    } else if (error) {
        return res.status(500).json({ error: "Something went wrong!" });
    }
});

route.get("/productdisplay", AdminController.productDisplay);
route.post("/productmakeprimary", AdminController.productMakePrimary);
route.post("/productmakenormal", AdminController.productMakeNormal);
// route.post('/deleteProduct', AdminControllers.DeleteProduct);
route.get('/customerOrders', AdminController.CustomerOrderDetails);
route.get('/displaycustomer', AdminController.DisplayCustomer);
route.post('/userDelete', AdminController.CustomerDelete);

module.exports = route;
