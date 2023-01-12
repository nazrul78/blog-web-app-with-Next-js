import Navbar from "./navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div><Navbar /></div>

        {children}</body>
    </html>
  )
}
