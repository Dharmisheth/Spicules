// import Head from "next/head";
// import Link from "next/link";
// import { useRouter } from "next/router"; // Import useRouter from Next.js
// import "../styles/style.scss";
// import Sidebar from "@/src/layouts/sidebars/vertical/Sidebar";
// import FullLayout from "../src/layouts/FullLayout";

// function MyApp({ Component, pageProps }) {
//   const router = useRouter(); // Get the router object

//   // Check if the current route is the admin page
//   const isAdminPage = router.pathname === "/admin";"/admin/Leads/leads";

//   return (
//     <>
//       <Head>
//         <title>Spicules Insight</title>
//         <meta
//           name="description"
//           content="Monster Free Next Js Dashboard Template"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Conditional rendering based on the isAdminPage flag */}
//       {isAdminPage ? (
//         <FullLayout>
//           <Component {...pageProps} />
//         </FullLayout>
//       ) : (
//         <Component {...pageProps} />
//       )}
//     </>
//   );
// }

// export default MyApp;


import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import "../styles/style.scss";
import Sidebar from "@/src/layouts/sidebars/vertical/Sidebar";
import FullLayout from "../src/layouts/FullLayout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Check if the current route is within the admin section
  const isAdminPage = router.pathname.startsWith("/admin");

  return (
    <>
      <Head>
        <title>Spicules Insight</title>
        <meta
          name="description"
          content="Monster Free Next Js Dashboard Template"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Render the Sidebar component on every page within the admin section */}
      {/* {isAdminPage && <Sidebar />} */}

      {/* Conditional rendering based on the isAdminPage flag */}
      {isAdminPage ? (
        <FullLayout>
          <Component {...pageProps} />
        </FullLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
