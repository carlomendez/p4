"use client"
import Link from "next/link";
// import ReactQuill from "react-quill";
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { useEffect, useState } from "react";
import { updateArticle } from "@/lib/actions";

const EditForm = ({id, title, desc, author}) => {
  
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState(desc);

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [ 'link', 'image' ],          // add's image support
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']  
  ];

  const module ={
    toolbar: toolbarOptions
  };

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left"><span className="blue_gradient">Edit Post</span></h1>
      <p className="desc text-left max-w-md">
        Update a post with the following available fields.
      </p>
      <p className="desc text-left max-w-md">
        As of this moment, editing the image requires admin request. Contact an admin in case there is a need to replace the image.
      </p>
      <br></br>
      <form
        action={updateArticle}
        className="mt-10 w-full flex flex-col gap-7 glassmorphism" 
      >
          <label>
            <input type="hidden" name="id" value={id} />
            <span
              className="font-satoshi font-semibold text-base text-gray-700"  
            >
              Your Article
            </span>
            <textarea 
              value={title} 
              // onChange={(e)=> setArticle({ ...article, title: e.target.value})} 
              name = "title"
              // placeholder={article.title}
              placeholder={title}
              className="form_input"
            />
          </label>
          <label>
            <span
              className="font-satoshi font-semibold text-base text-gray-700"  
            >
              Author
            </span>
            <input 
              value={author} 
              // onChange={(e)=> setArticle({ ...article, author: e.target.value})} 
              name="author"
              // placeholder={article.author}
              placeholder={author}
              className="form_input"
            />
          </label>
          <label>
          <span
              className="font-satoshi font-semibold text-base text-gray-700"  
            >
              Article
            </span>
            <ReactQuill
              modules={module}
              // name="desc"
              theme="snow"
              value={value}
              onChange={setValue}
              // placeholder={desc}
            />
          </label>
          <textarea
             name="desc"
             id="desc"
             value={value}
             onChange={setValue}
             style={{ display: "none" }}
          ></textarea>
          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/article-dashboard" className="text-gray-500 text-sm">
              Cancel
            </Link>
            <button
              type="submit"
              className="px-5 py-1.5 bg-primary-orange text-sm rounded-full text-white"
            >
              Edit
            </button>
          </div>
      </form>
    </section>
  )
}

export default EditForm