import Link from "next/link";
import Image from "next/image";
import Box from '@mui/material/Box';
import { fetchArticle } from '@lib/data';

const SinglePage = async ({ params }) => {
  const { id } = params;
  const article = await fetchArticle(id);

  return (
    <section className="w-10/12">
      <Box className='mb-10'>
      <div >
        <div >
          <div >
            <h1 className="head_text font-extrabold mb-8">{article?.title}</h1>
              <div >
                <span >{article.author} -</span>
                <span >
                  {article.createdAt.toString().substring(4, 15)}
                </span>
              </div>
          </div>
          {article?.img && (
            <div className="flex-1 h-96 relative" >
              <Image src={article.img} alt="" fill className="object-cover" />
            </div>
          )}
        </div>
        <div >
          <div >
            <div  dangerouslySetInnerHTML={{ __html: article?.desc }}/>
          </div>
        </div>
      </div>
      <Link href="/news" className="black_btn mt-10">
          Back
      </Link>
      </Box>
    </section>
  );
};

export default SinglePage;