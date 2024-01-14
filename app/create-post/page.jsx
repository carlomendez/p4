// "use client";
// import { useState} from 'react';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';

// import Form from '@components/Form';

// const CreatePost = () => {
//     const router = useRouter();
//     const {data: session} = useSession();
//     const [submitting, setSubmitting] = useState(false);
//     const [post, setPost] = useState({
//         post:'',
//         tag:''
//     })
//     const createPost = async (e) => {
//         e.preventDefault();
//         setSubmitting(true);
//         try{
//             const response = await fetch('api/post/new', {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     post:post.post,
//                     userId:session?.user.id,
//                     tag:post.tag
//                 })
//             })
//             if(response.ok) {
//                 router.push("/");
//             }
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setSubmitting(false);
//         }
//     }
//   return (
//     <Form
//         type="Create"
//         post={post}
//         setPost={setPost}
//         submitting={submitting}
//         handleSubmit={createPost}
//     />
//   )
// }

// export default CreatePost;

"use client";

// import dynamic from 'next/dynamic'
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Image from "next/image";
// import styles from "./writePage.module.css";
// import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { addArticle } from "@/lib/actions";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import ReactQuill from "react-quill";

const CreatePost = () => {
  
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

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
    <div>
      <div>
          <button><label htmlFor="image">Select Image</label></button>
          <input
              type="text"
              name="img"
              id="img"
              value={media.toString()}
              readOnly
          />
      </div>
      <div >
        <form action={addArticle} >
          <label>Title</label>
          <input type="text" name="title" placeholder="Title" id="title" onChange={(e) => setTitle(e.target.value)}/>
          <label>Author</label>
          <input type="text" name="author" id="author" placeholder="Author's name" onChange={(e) => setAuthor(e.target.value)}/>
          <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          <input
              type="text"
              name="img"
              id="img"
              value={media.toString()}
              style={{ display: "none" }}
          />
          <label>Description</label>
          <ReactQuill
            
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
          <textarea
            name="desc"
            id="desc"
            value={value}
            style={{ display: "none" }}
          ></textarea>
          <button>Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;