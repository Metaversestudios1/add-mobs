// // pages/api/products.js
// import cloudinary from 'cloudinary';
// import Products from '@/models/Products';
// import connectDb from '@/middleware/mongoose';
// import { NextResponse } from 'next/server';

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// export const POST = async (req) => {
//     const {title, description, price, stock } = await req.json()
//     try {
//       await connectDb()
//       const formData = await new Promise((resolve, reject) => {
//         upload.single('image')(req, res, (err) => {
//           if (err) {
//             reject(err);
//           }
//           resolve(req);
//         });
//       });
//     console.log(title, description,stock , price)

//       if (formData.file) {
//         const result = cloudinary.v2.uploader.upload_stream(
//           {
//             folder: 'products',
//           },
//           (error, result) => {
//             if (error) {
//               throw new Error('Image upload failed');
//             }
//             img = result.secure_url;
//           }
//         );

//         formData.file.stream.pipe(result);
//       }
//       if (!title || !description || !price || !stock) {
//         return NextResponse.json({ success: false, error: 'All fields are required' });
//       }
//       const product = new Products({
//         title,
//         description,
//         img,
//         price,
//         stock,
//         createdAt: new Date().toISOString(),
//       });
//       await product.save()
//       return NextResponse.json({ success: true, product });
//     } catch (error) {
//       console.error(error);
//       return NextResponse.json({ success: false, error: error.message });
//     }

// };

import cloudinary from "cloudinary";
import Products from "@/models/Products";
import connectDb from "@/connection/mongoose";
import { NextResponse } from "next/server";

await connectDb();
export const POST = async (req) => {
  try {
    const date = new Date();
    const time =
      date.getDate() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes();
    const { title, description, price, stock, mediaUrl } = await req.json();
    console.log(title, mediaUrl);

    if (!title || !description || !price || !stock) {
      return NextResponse.json({
        success: false,
        error: "All fields are required",
      });
    }

    const product = new Products({
      title,
      description,
      mediaUrl,
      price,
      stock,
      createdAt: time,
    });

    await product.save();
    return NextResponse.json({ success: true, product });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
};
