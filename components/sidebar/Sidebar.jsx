
import Image from "next/image";
import MenuLink from "./menuLink/MenuLink";
import styles from "./sidebar.module.css";
// import { useSession } from "next-auth/react";

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
  // {
  //   title: "User",
  //   list: [
  //     {
  //       title: "Settings",
  //       path: "/dashboard/settings",
  //     },
  //     {
  //       title: "Help",
  //       path: "/dashboard/help",
  //     },
  //   ],
  // },
];

const Sidebar = () => {
  // const {data: session} = useSession();
  return (
    <div className={styles.container}>
      {/* <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={session?.user.image}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{session?.user.name}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div> */}
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
      {/* <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form> */}
    </div>
  );
};

export default Sidebar;
