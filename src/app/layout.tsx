import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'
import ThemeSwitcher from './components/ThemeSwitcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '개인 포트폴리오',
  description: '개인 포트폴리오 웹사이트',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`} suppressHydrationWarning>
        <ThemeProvider>
          <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <div className="flex space-x-8">
                  <a href="/#home" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">홈</a>
                  <a href="/#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">소개</a>
                  <a href="/#skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">기술</a>
                  <a href="/#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">프로젝트</a>
                  <a href="/#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">연락처</a>
                </div>
              </div>
            </div>
          </nav>
          <main>
            {children}
          </main>
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  )
} 