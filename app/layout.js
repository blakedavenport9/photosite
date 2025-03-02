// app/layout.js
import '../public/styles/globals.css';
import Header from '../components/Header';


export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can add meta tags, title, or other head elements here */}
        <title>My Photo Shop</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
