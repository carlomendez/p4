import Pagination from "@components/pagination";
import Search from "@components/search";
import { fetchArticles } from "@lib/data";
import Link from "next/link";
import Image from "next/image";
import dummyPic from "../../public/assets/images/logo.svg"


const News = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, articles } = await fetchArticles(q, page);
  return (
    <>
    <section className="w-full">
      <h1 className="text-2xl text-left mt-6">
          News Releases
          <br className="max-md:hidden"/>
      </h1>   
    </section>
          <section>
          <Search placeholder="Search for an article..." />
          <div  style={{margin: "50px 0px"}}>
             <div >
               {articles.map((article) => (
                <div  key={article.id}>
                {article.img && (
                  <div className="flex-1 h-80 relative" >
                    <Image src={article.img || dummyPic} alt="" fill/>
                  </div>
                )}
                <div >
                  <div >
                    <span >
                      {article.createdAt.toString().substring(0, 10)}
                    </span>
                  </div>
                  <Link href={`/news/${article.id}`}>
                    <h1>{article.title}</h1>
                  </Link>
                  <div  dangerouslySetInnerHTML={{ __html: article?.desc.substring(0,60) }}/>
                  <Link href={`/news/${article.id}`} >
                    Read More
                  </Link>
                </div>
              </div>
              ))}
            </div>
          </div>
          </section>
          <section>
          <Pagination count={count} />
          </section>
          </>
  )
}

export default News;