

"use client";
import React, { useState } from "react";
import style from "../../dashboard.module.css";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
const AddProductPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [media, setMedia] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "stock":
        setStock(value);
        break;
      case "image":
        setMedia(e.target.files[0]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mediaUrl = await imageUpload()
    const res = await fetch("/api/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({title, price, stock, description, mediaUrl}),
    });

    const response = await res.json();
    console.log(response);
    if (response.success) {
      setTitle("");
      setDescription("");
      setPrice("");
      setStock("");

      setTimeout(() => {
        router.push("/dashboard/products");
      }, 1000);
    } else {
      alert("Failed to add product");
    }
  };
const imageUpload = async()=>{
  const data = new FormData();
  data.append("file", media)
  data.append("upload_preset", "mystore")
  data.append("cloud_name", "detfcrrsv")
  const res = await fetch("https://api.cloudinary.com/v1_1/detfcrrsv/image/upload",
   { method:"POST",
    body:data}
  )
  const response = await res.json()
  return response.url
}
  return (
    <div className={`${style.addContainer}`}>
      <Link href="/dashboard/products" className="text-5xl">
        <IoIosArrowRoundBack />
      </Link>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              value={title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              value={description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              value={price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Stock
            </label>
            <input
              type="tel"
              id="stock"
              name="stock"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              value={stock}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
