import Link from "next/link";
import { fetchLogs } from "@lib/data";
import styles from "@components/entries/entries.module.css";
import Search from "@components/Search";
import Pagination from "@components/Pagination";

const LogsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, logs } = await fetchLogs(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a log..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Category</td>
            <td>Entry</td>
            <td>Timestamp</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>
                <div className={styles.user}>
                  {log.category}
                </div>
              </td>
              <td>{log.entry?.toString().slice(0, 30) + '...'}</td>
              <td>{log.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/logs/${log.id}`}>
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

export default LogsPage;
