import { fetchLog, fetchUser } from "@lib/data";
import styles from "@components/entries/singleEntry/singleEntry.module.css";

const SingleLogPage = async ({ params }) => {
  const { id } = params;
  const log = await fetchLog(id);
  const user = await fetchUser(log?.userId);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <label>Category</label>
          <p>{log.category}</p>
          <label>User ID</label>
          <p>{user?.email}</p>
          <label>Timestamp</label>
          <p>{log.createdAt?.toString().slice(4, 16)}</p>
          <label>Entry</label>
          <textarea rows={5}>{log.entry}</textarea>
        </div>
      </div>
    </div>
  );
};

export default SingleLogPage;
