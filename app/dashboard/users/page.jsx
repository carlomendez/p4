import { fetchUsers } from "@lib/data";
import styles from "@components/entries/entries.module.css";
import Search from "@components/Search";
import Pagination from "@components/Pagination";
import { admins, editors } from "@lib/roles";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td className="font-bold">Name</td>
            <td className="font-bold">Email</td>
            <td className="font-bold">Role</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              {(admins.includes(user?.email)) && <td>administrator</td>}
              {(editors.includes(user?.email)) && <td>editor</td>}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
