import Link from "next/link";
import styles from "@components/entries/entries.module.css";
import Search from "@components/Search";
import Pagination from "@components/Pagination";
import { fetchInformationList } from "@lib/data";

const RecordsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, informationList } = await fetchInformationList(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a record..." />
        <Link href="/dashboard/records/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td className="font-bold">Strain Id</td>
            <td className="font-bold">Accession No.</td>
            <td className="font-bold">{`Genus and/or species`}</td>
            <td className="font-bold">Description</td>
            <td className="font-bold">Action</td>
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
                  <Link href={`/dashboard/records/${record.id}`}>
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

export default RecordsPage;
