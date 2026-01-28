export const metadata = {
  title: "Sagar Jain | Java Full Stack Developer",
  description: "Portfolio of Sagar Jain - System Engineer at TCS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />

        <style>{`
          body { font-family: 'Poppins', sans-serif; }
        `}</style>
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
