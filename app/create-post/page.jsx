"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import Form from '@components/Form';

const CreatePost = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [article, setArticle] = useState({ title: "", author: "", img:"" });
  const [desc, setDesc] = useState("");

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
  );
};

export default CreatePost;