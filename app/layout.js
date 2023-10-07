"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";

const inter = Inter({ subsets: ['latin'] })
/*AVYk9Jm9dgGNsPfhvT1PbfA9sc16SzrZATdgWr1DQpBt0J9U53lnhCJU*/
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
