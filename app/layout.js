
import "./globals.css"; // Assuming this file contains additional styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,500;1,9..40,1000&display=swap');
</style>
      </head>
      <body >{children}</body>
    </html>
  );
}
