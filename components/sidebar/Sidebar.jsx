
import MenuLink from "./menuLink/MenuLink";
import styles from "./sidebar.module.css";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
      },
      {
        title: "Users",
        path: "/dashboard/users",
      },
      {
        title: "Archive Logs",
        path: "/dashboard/logs",
      }
    ],
  },
  {
    title: "Database",
    list: [
      {
        title: "Records",
        path: "/dashboard/records",
      },
      {
        title: "References",
        path: "/dashboard/references",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
