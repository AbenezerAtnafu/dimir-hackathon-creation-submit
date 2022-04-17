const path = require('path');
const uuidv4 = require('node-uuid');
const { BadRequestError } = require('../errors');


const uploadImage = async (req, res, next) => {
    if(!req.files){
        throw new BadRequestError('Please upload a file');
    }
    
    const file = req.files.image;
    // Make sure the file is a photo
    if(!file.mimetype.startsWith('image')){
        throw new BadRequestError('Please upload an image file');
    }

    // Check filesize
    if(file.size > process.env.MAX_FILE_UPLOAD){
        throw new BadRequestError(`Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`);
    }

    // Create custom filename
    file.name = `photo_${uuidv4()}${path.parse(file.name).ext}`;

    file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
        if(err){
            console.error(err);
            throw new BadRequestError(`Problem with file upload`);
        }
    });


    req.body.image = file.name;
    next();
}

module.exports = uploadImage;