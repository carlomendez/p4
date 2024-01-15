"use client";

import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import "react-quill/dist/quill.snow.css";
import { addArticle } from "@/lib/actions";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import Form from '@components/Form';
// import ReactQuill from "react-quill";

const CreatePost = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [article, setArticle] = useState({ title: "", author: "", img:"" });
  const [desc, setDesc] = useState("");
  
  // const [file, setFile] = useState(null);
  // const [media, setMedia] = useState("");
  // const [value, setValue] = useState("");
  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");

  const createArticle = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          title: article.title,
          desc,
          author: article.author,
          creator: session?.user.id,
          img: article.img
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Create'
      article={article}
      setArticle={setArticle}
      desc={desc}
      setDesc={setDesc}
      submitting={submitting}
      handleSubmit={createArticle}
    />
    // <div>
    //   <div>
    //       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><label htmlFor="image">Select Image</label></button>
    //       <input
    //           type="text"
    //           name="img"
    //           id="img"
    //           value={media.toString()}
    //           readOnly
    //       />
    //   </div>
    //   <div >
    //     <form action={addArticle} >
    //       <label>Title</label>
    //       <input type="text" name="title" placeholder="Title" id="title" onChange={(e) => setTitle(e.target.value)}/>
    //       <label>Author</label>
    //       <input type="text" name="author" id="author" placeholder="Author's name" onChange={(e) => setAuthor(e.target.value)}/>
    //       <input
    //           type="file"
    //           id="image"
    //           onChange={(e) => setFile(e.target.files[0])}
    //           style={{ display: "none" }}
    //         />
    //       <input
    //           type="text"
    //           name="img"
    //           id="img"
    //           value={media.toString()}
    //           style={{ display: "none" }}
    //       />
    //       <ReactQuill
    //         modules={module}
    //         theme="snow"
    //         value={value}
    //         onChange={setValue}
    //         placeholder="Tell your story..."
    //       />
    //       <textarea
    //         name="desc"
    //         id="desc"
    //         value={value}
    //         style={{ display: "none" }}
    //       ></textarea>
    //       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default CreatePost;