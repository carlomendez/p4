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

const Form = ({type, article, setArticle, desc, setDesc, submitting, handleSubmit}) => {
  
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");

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
      <h1 className="head_text text-left"><span className="blue_gradient">{type} Post</span></h1>
      <p className="desc text-left max-w-md">
        {type} a post by providing a title, author, a picture, and the content of the article inside the formatted field. Play around with the functionalities to figure out the best way of publishing the article.
      </p>
      <p className="desc text-left max-w-md">
        As of this moment, only one image could be uploaded at a time. Make sure to properly select the right image the first time. Contact an admin in case there is a need to replace the image.
      </p>
      <br></br>
      <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><label htmlFor="image">Select Image</label></button>
          <textarea
              type="text"
              name="img"
              id="img"
              value={media.toString()}
              readOnly
              placeholder="Image url will show if upload succeeds" 
              className="form_input"
          />
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism" 
      >
          <label>
            <span
              className="font-satoshi font-semibold text-base text-gray-700"  
            >
              Your Article
            </span>
            <textarea 
              value={article.title} 
              onChange={(e)=> setArticle({ ...article, title: e.target.value})} 
              placeholder="Write your post here..." 
              required
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
              value={article.author} 
              onChange={(e)=> setArticle({ ...article, author: e.target.value})} 
              placeholder="Author" 
              required
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
              theme="snow"
              value={desc}
              onChange={setDesc}
              placeholder="Tell your story..."
            />
          </label>
          {/* <textarea
             name="desc"
             id="desc"
             value={value}
             style={{ display: "none" }}
          ></textarea> */}
          <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
          />
          {/* <input
              type="text"
              name="img"
              id="img"
              value={media.toString()}
              onChange={(e)=> setArticle({ ...article, img: e.target.value})}
              style={{ display: "none" }}
          /> */}
          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">
              Cancel
            </Link>
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-1.5 bg-primary-orange text-sm rounded-full text-white"
            >
              {submitting ? `${type}...` : type}
            </button>
          </div>
      </form>
    </section>
  )
}

export default Form