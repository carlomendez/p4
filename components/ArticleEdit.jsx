"use client"

import { useRouter } from "next/navigation";

const ArticleEditButton = (id) => {
  const router = useRouter();

  console.log(id)

  const handleEdit = (id) => {
    router.push(`/update-post?id=${id}`);
  }; 
  
    return (
            <p
              className='font-inter text-sm orange_gradient cursor-pointer'
              onClick={() => handleEdit(id)}
            >
              Edit
            </p>
    );
  };
  
  export default ArticleEditButton;