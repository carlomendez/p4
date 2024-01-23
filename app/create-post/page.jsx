"use client";

// import { useState } from "react";
import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
import CreateForm from '@components/CreateForm';

const CreatePost = () => {
  // const router = useRouter();
  const { data: session, status } = useSession();
  const creator = session?.user.id;

  // const [submitting, setIsSubmitting] = useState(false);
  // const [article, setArticle] = useState({ title: "", author: "", img:"" });
  // const [desc, setDesc] = useState("");

  // const createArticle = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch("/api/post/new", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         title: article.title,
  //         desc,
  //         author: article.author,
  //         creator: session?.user.id,
  //         img: article.img
  //       }),
  //     });

  //     if (response.ok) {
  //       router.push("/");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }
  
  if(session?.user.role != "editor"){
    return <p>Access Denied</p>
  }
  return (
    <CreateForm creator = {creator}/>
  );
};

export default CreatePost;