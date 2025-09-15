'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-green-700 to-yellow-500 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {t('About YAMFI', 'За YAMFI')}
          </h1>
          <p className="text-xl text-center mt-4 max-w-2xl mx-auto">
            {t(
              'Your trusted partner in premium seeds and nuts since 2010',
              'Вашият надежден партньор в премиум семена от 2010'
            )}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {t('Our Story', 'Нашата история')}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t(
                  'YAMFI was founded with a simple mission: to provide the highest quality sunflower and pumpkin seeds to businesses and consumers across Europe. Starting from humble beginnings, we have grown to become one of the most trusted seed suppliers in the region.',
                  'YAMFI беше основана с проста мисия: да предоставя най-висококачествени слънчогледови и тиквени семки на бизнеси и потребители в цяла Европа. Започвайки от скромни начала, ние израснахме до един от най-надеждните доставчици на семена в региона.'
                )}
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t(
                  'Our commitment to quality, reliability, and customer service has earned us long-lasting partnerships with restaurants, retailers, and food service companies throughout Bulgaria and beyond.',
                  'Нашият ангажимент към качеството, надеждността и обслужването на клиентите ни спечели дългосрочни партньорства с ресторанти, търговци и компании за хранителни услуги в цяла България и извън нея.'
                )}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t(
                  'Today, we continue to invest in state-of-the-art cold storage facilities and logistics to ensure that our products maintain the highest standards from farm to table.',
                  'Днес продължаваме да инвестираме в най-съвременни хладилни съоръжения и логистика, за да гарантираме, че нашите продукти поддържат най-високи стандарти от фермата до масата.'
                )}
              </p>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 to-blue-900/20"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white z-10">
                  <div className="text-6xl font-bold mb-2">14+</div>
                  <div className="text-xl">{t('Years of Excellence', 'Години превъзходство')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t('Our Values', 'Нашите ценности')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-600 rounded-full mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('Quality First', 'Качество на първо място')}
              </h3>
              <p className="text-gray-600">
                {t(
                  'We never compromise on quality. Every product is carefully selected and processed to meet the highest standards.',
                  'Никога не правим компромиси с качеството. Всеки продукт е внимателно подбран и обработен, за да отговаря на най-високите стандарти.'
                )}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-600 rounded-full mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('Fair Pricing', 'Справедливи цени')}
              </h3>
              <p className="text-gray-600">
                {t(
                  'We believe in transparent and competitive pricing that creates value for both our business partners and their customers.',
                  'Вярваме в прозрачни и конкурентни цени, които създават стойност както за нашите бизнес партньори, така и за техните клиенти.'
                )}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-600 rounded-full mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('Fast & Reliable', 'Бързо и надеждно')}
              </h3>
              <p className="text-gray-600">
                {t(
                  'Our efficient logistics network ensures timely delivery while maintaining the cold chain integrity throughout.',
                  'Нашата ефективна логистична мрежа гарантира навременна доставка, като същевременно поддържа целостта на хладилната верига.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t('Certifications & Standards', 'Сертификати и стандарти')}
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 text-center mb-8">
              {t(
                'We maintain the highest international standards in food safety and quality management:',
                'Поддържаме най-високите международни стандарти в безопасността на храните и управлението на качеството:'
              )}
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">ISO 22000</div>
                <p className="text-sm text-gray-600">{t('Food Safety Management', 'Управление на безопасността на храните')}</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">HACCP</div>
                <p className="text-sm text-gray-600">{t('Hazard Analysis', 'Анализ на опасностите')}</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">BRC</div>
                <p className="text-sm text-gray-600">{t('Global Standard', 'Глобален стандарт')}</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">HALAL</div>
                <p className="text-sm text-gray-600">{t('Certified Products', 'Сертифицирани продукти')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}