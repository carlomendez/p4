import Link from "next/link";
import styles from "@components/entries/entries.module.css";
import Search from "@components/Search";
import Pagination from "@components/Pagination";
import { fetchInformationList } from "@lib/data";

const DatabasePage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, informationList } = await fetchInformationList(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a record..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Strain Id</td>
            <td>Accession No.</td>
            <td>{`Genus and/or species`}</td>
            <td>Description</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {informationList?.map((record) => (
            <tr key={record.id}>
              <td>{record.strainId}</td>
              <td>{record.accessionNumber}</td>
              <td>{record.genusspecies}</td>
              <td>{record.description?.toString().slice(0, 50)}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/database/${record.id}`}>
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

export default DatabasePage;
