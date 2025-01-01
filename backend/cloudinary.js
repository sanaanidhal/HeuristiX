const { v2: cloudinary } = require('cloudinary');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });


(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dbj2jhkr0', 
        api_key: "919263258427652", 
        api_secret: "-zfhG9TMM7eEIYAHea6lYQT2VH0" 
    });
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();