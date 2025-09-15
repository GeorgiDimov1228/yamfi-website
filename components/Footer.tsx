'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">YAMFI</h3>
            <p className="text-gray-400">
              {t(
                'Premium sunflower and pumpkin seeds supplier',
                'Доставчик на премиум слънчогледови и тиквени семки'
              )}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('Quick Links', 'Бързи връзки')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  {t('Home', 'Начало')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  {t('Products', 'Продукти')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t('About Us', 'За нас')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('Contact', 'Контакти')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('Contact Info', 'Информация за контакт')}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('Phone:', 'Телефон:')} +359 888 123 456</li>
              <li>Email: info@yamfi.eu</li>
              <li>{t('Address:', 'Адрес:')} Sofia, Bulgaria</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('Business Hours', 'Работно време')}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('Monday - Friday', 'Понеделник - Петък')}</li>
              <li>9:00 AM - 6:00 PM</li>
              <li>{t('Saturday', 'Събота')}: 10:00 AM - 2:00 PM</li>
              <li>{t('Sunday: Closed', 'Неделя: Затворено')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 YAMFI. {t('All rights reserved.', 'Всички права запазени.')}</p>
        </div>
      </div>
    </footer>
  )
}