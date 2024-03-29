import Pagination from "@components/Pagination";
import Link from "next/link";
import Image from "next/image";
import Search from "@components/Search";
import styles from "@components/entries/entries.module.css";
import { fetchArticles } from "@lib/data";

const ArticleTable = async (searchParams) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, articles } = await fetchArticles(q, page);
  


  return (
    <section className="w-full flex-center flex-col">
      <div >
        <div className={styles.top}>
          <Search placeholder="Search for an article..." />
          <br/>
          <Link href="/create-post">
            <button  className={styles.addButton}>Add New</button>
          </Link>
        </div>
        <br/>
        <table className="table-auto border-separate border-spacing-10">
          <thead>
            <tr>
              <td className="font-bold">Title</td>
              <td className="font-bold">Author</td>
              <td className="font-bold">Created At</td>
              <td className="font-bold">Action</td>
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
                    />
                    {article.title}
                  </Link>  
                  </div>
                </td>
                <td>{article.author}</td>
                <td>{article.createdAt?.toString().slice(4, 16)}</td>
                <td>
                  <div >
                    <Link href={`/update-post/${article.id}`} className="bg-teal-700 px-1.5 py-2.5 rounded-md">
                      <button>
                        Update or Delete
                      </button>
                    </Link>
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