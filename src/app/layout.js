import { CartProvider } from '@/app/CartContext';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.scss';

export const metadata = {
  title: 'E2E Shop',
  description: 'Shopping store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
