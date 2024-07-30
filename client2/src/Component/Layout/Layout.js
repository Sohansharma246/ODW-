// import React from "react";
// import Footer from "./Footer";
// import Header from "./Header";
// import { Helmet } from "react-helmet";
// import { Toaster } from "react-hot-toast";
// const Layout = ({ children, title, description, keywords, author }) => {
//   return (
//     <div>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <meta name="description" content={description} />
//         <meta name="keywords" content={keywords} />
//         <meta name="author" content={author} />
//         <title>{title}</title>
//       </Helmet>
//       <Header />
//       <main style={{ minHeight: "70vh" }}>
//         <Toaster />

//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// Layout.defaultProps = {
//   title: "ONLINE DAIRY-ORDER MILK NOW!!",
//   description: "mern stack project",
//   keywords: "mern,react,node,mongodb",
//   author: "Techinfoyt",
// };

// export default Layout;
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";


const Layout = ({
  children,
  title = "ONLINE DAIRY-ORDER MILK NOW!!",
  description = "mern stack project",
  keywords = "mern,react,node,mongodb",
  author = "Techinfoyt",
}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "77vh" }}>
        
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
