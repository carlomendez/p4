import Link from "next/link";
import Search from "@components/Search";
import Pagination from "@components/Pagination";
import { fetchReferences } from "@lib/data";
import styles from "@components/entries/entries.module.css";

const ReferencesPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, references } = await fetchReferences(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a record..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td className="font-bold">Author</td>
            <td className="font-bold">Article Title</td>
            <td className="font-bold">Publisher</td>
            <td className="font-bold">Publication Date</td>
            <td className="font-bold">Action</td>
          </tr>
        </thead>
        <tbody>
          {references?.map((reference) => (
            <tr key={reference?.id}>
              <td>{reference?.author}</td>
              <td>{reference?.articleTitle?.toString().slice(0, 50)}</td>
              <td>{reference?.publisher?.toString().slice(0, 30)}</td>
              <td>{reference?.publicationDate}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/records/reference/${reference.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
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
  );
};

export default ReferencesPage;
