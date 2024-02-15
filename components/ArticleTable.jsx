import Pagination from "@components/Pagination";
import Link from "next/link";
import Image from "next/image";
import Search from "@components/Search";
import { fetchArticles } from "@lib/data";

const ArticleTable = async (searchParams) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, articles } = await fetchArticles(q, page);
  


  return (
    <section className="w-full flex-center flex-col">
      <div >
        <div >
          <Search placeholder="Search for an article..." />
          <br/>
          <Link href="/create-post">
            <button >Add New</button>
          </Link>
        </div>
        <br/>
        <table className="table-auto border-separate border-spacing-10">
          <thead>
            <tr>
              <td>Title</td>
              <td>Author</td>
              <td>Created At</td>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td>
                  <div >
                  <Link href={`/news/${article.id}`}>
                    <Image
                      src={article.img || "/noproduct.jpg"}
                      alt=""
                      width={40}
                      height={40}
                      // className={styles.productImage}
                    />
                    {article.title}
                  </Link>  
                  </div>
                </td>
                <td>{article.author}</td>
                <td>{article.createdAt?.toString().slice(4, 16)}</td>
                <td>
                  <div >
                    <Link href={`/update-post/${article.id}`}>
                      <button >
                        Update or Delete
                      </button>
                    </Link>
                    {/* <ArticleEditButton id={article.id.toString()}/> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      <Pagination count={count} />
    </div>  
    </section>
  )
}

export default ArticleTable