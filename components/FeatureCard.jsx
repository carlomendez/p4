"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const FeatureCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  const {data:session} = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");
  const handleCopy = () => {
    setCopied(post.post);
    navigator.clipboard.writeText(post.post);
    setTimeout(() => setCopied(""), 3000);
  }

  return (
    <div className="prompt_card">

      <p
        className='font-inter text-sm'
      >
        {post.tag}
      </p>
    </div>
  )
}

export default FeatureCard