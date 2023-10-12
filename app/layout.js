import { Inter } from 'next/font/google'
import Nav from './/_components/navigation';
import Footer from './/_components/footer';
import './/_styles/main.styles.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SOTE Sanctuary',
  description: 'Salt of the Earth Sanctuary is a sustainable off-grid farmstead dedicated to the wellness of animals and the community.',
  author: 'Victoria Jones',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
