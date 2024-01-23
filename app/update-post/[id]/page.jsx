// "use client";
// import { useEffect, useState} from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { useSession } from "next-auth/react";
import AuthChecker from '@components/AuthChecker';
import EditForm from '@components/EditForm';
import { fetchArticle } from "@/lib/data";

const EditPost = async ({ params }) => {
    const { id } = params;
    const article = await fetchArticle(id);
    // const router = useRouter();
    // const { data: session, status } = useSession();
    // const searchParams = useSearchParams();
    // const articleId = searchParams.get('id');
    // const [submitting, setSubmitting] = useState(false);
    // const [article, setArticle] = useState({
    //     title:'',
    //     desc:'',
    //     author:''
    // })
    
    // const [desc, setDesc] = useState("");
    // useEffect(()=>{
    //     const getArticleDetails = async () => {
    //         const response = await fetch(`api/post/${articleId}`)
    //         const data = await response.json();
    //         setArticle({
    //             title:data.title,
    //             desc,
    //             author: data.author
    //         });
    //     }
    //     if (articleId) getArticleDetails();
    // }, [articleId]);
    // const updateArticle = async (e) => {
    //     e.preventDefault();
    //     setSubmitting(true);
    //     if(!articleId) return alert('Article ID not found');
    //     try{
    //         const response = await fetch(`api/post/${articleId}`, {
    //             method: 'PATCH',
    //             body: JSON.stringify({
    //                 title:data.title,
    //                 desc,
    //                 author: data.author
    //             })
    //         })
    //         if(response.ok) {
    //             router.push("/");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setSubmitting(false);
    //     }
    // }
    // if (status === "loading") {
    //     return <p>Loading...</p>
    //   }
    
    //   if (status === "unauthenticated") {
    //     return <p>Access Denied</p>
    //   }
      
    //   if(session?.user.role === "user"){
    //     return <p>Access Denied</p>
    //   }  
  return (
    <AuthChecker>
        <EditForm 
            id = {article.id}
            title = {article.title}
            desc = {article.desc}
            author = {article.author}
        />
    </AuthChecker>
  )
}

export default EditPost;