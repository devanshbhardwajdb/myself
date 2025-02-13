
import "@styles/globals.css";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "Devanya Forever",
  description: "Moments to Remember",
  other:{
    
    "twitter:card" : "summary_large_image",
    "og:url":"devanya-forever.netlify.app",
   
  }
};

const RootLayout = ({ children }) => (

  <html lang='en' >
    <head>
    </head>
    <body>
      <main className="overflow-x-hidden " >
        <Navbar />
        {children}
      </main>

    </body>
  </html>
);

export default RootLayout;