import Pagination from "@components/Pagination";
import Search from "@components/Search";
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
          <section className="w-full">
          <Search placeholder="Search for an article..." />
          <div className='mt-16 prompt_layout'>
             <div >
               {articles.map((article) => (
                <div className="mb-12" key={article.id}>
                {article.img && (
                  <div className="flex-1 h-80 relative" >
                    <Link href={`/news/${article.id}`}>
                      <Image src={article.img || dummyPic} alt="" fill className="object-cover"/>
                    </Link>
                  </div>
                )}
                <div >
                  <div >
                    <span >
                      {article.createdAt.toString().substring(0, 15)}
                    </span>
                  </div>
                  <div className='flex flex-col'>
                    <Link href={`/news/${article.id}`}>
                      <h1 className='font-satoshi font-semibold text-gray-900'>{article.title}</h1>
                    </Link>
                  </div>
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