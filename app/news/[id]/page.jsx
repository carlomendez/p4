
// import Menu from "@/components/menu/Menu";
import Link from "next/link";
import Image from "next/image";
import Box from '@mui/material/Box';
// import Comments from "@/components/comments/Comments";
import { fetchArticle } from '@lib/data';
// import { useSession } from "next-auth/react";

const SinglePage = async ({ params }) => {
  // const {data: session} = useSession();
  const { id } = params;
  const article = await fetchArticle(id);

  return (
    <section className="w-full">
      <Box className='mb-10'>
      <div >
        <div >
          <div >
            <h1 >{article?.title}</h1>
            {/* <div className={styles.user}> */}
                {/* <div className={styles.userImageContainer}>
                  <Image src="/noavatar.png" alt="" fill className={styles.avatar} />
                </div> */}
              <div >
                <span >{article.author} -</span>
                <span >
                  {article.createdAt.toString().substring(0, 15)}
                </span>
              </div>
            {/* </div> */}
          </div>
          {article?.img && (
            <div className="flex-1 h-96 relative" >
              <Image src={article.img} alt="" fill className="object-cover" />
            </div>
          )}
            {/* <div className={styles.imageContainer}>
              <Image src="/noproduct.jpg" alt="" fill className={styles.image} />
            </div> */}
        </div>
        <div >
          <div >
            <div  dangerouslySetInnerHTML={{ __html: article?.desc }}/>
            {/* <div className={styles.description}>
              <Comments postSlug={slug}/>
            </div> */}
          </div>
          {/* <Menu /> */}
        </div>
      </div>
      <Link href="/news" className="text-gray-500 text-sm">
          Back
      </Link>
      {/* {session?.user.role === "editor" ?  (
        <Link href="/news" className="text-gray-500 text-sm">
            Back
        </Link>
            ) : (
                <>
                </>
            ) } */}
      </Box>
    </section>
  );
};

export default SinglePage;