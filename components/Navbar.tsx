'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { href: '/', labelEn: 'Home', labelBg: 'Начало' },
    { href: '/products', labelEn: 'Products', labelBg: 'Продукти' },
    { href: '/about', labelEn: 'About', labelBg: 'За нас' },
    { href: '/contact', labelEn: 'Contact', labelBg: 'Контакти' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/products/attachments/logo.png"
              alt="YAMFI"
              width={145}
              height={145}
              className="object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                {t(link.labelEn, link.labelBg)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            aria-label="Toggle menu"
          >
            <span className={`bg-gray-700 h-0.5 w-6 rounded-sm transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`bg-gray-700 h-0.5 w-6 rounded-sm my-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`bg-gray-700 h-0.5 w-6 rounded-sm transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.labelEn, link.labelBg)}
                </Link>
              ))}
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}