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
              'Family business with over 50 years of tradition in seed processing',
              'Семеен бизнес с над 50 години традиция в преработката на семена'
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
                  'YAMFI is a family business with over 50 years of tradition in seed processing. Currently managed by the third generation of our family, we combine traditional expertise with modern technology to deliver the finest quality seeds.',
                  'YAMFI е семеен бизнес с над 50 години традиция в преработката на семена. В момента управляван от третото поколение на нашето семейство, ние съчетаваме традиционния опит с модерни технологии, за да доставяме най-качествени семена.'
                )}
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t(
                  'Located in Červen Bryag, Bulgaria, our modern factory is equipped with state-of-the-art processing equipment. We specialize in processing and packaging sunflower and pumpkin seeds, maintaining the perfect balance between traditional roasting methods and innovative technology.',
                  'Разположени в Червен бряг, България, нашата модерна фабрика е оборудвана с най-съвременно оборудване за преработка. Специализираме се в преработката и опаковането на слънчогледови и тиквени семки, поддържайки перфектния баланс между традиционните методи за печене и иновативните технологии.'
                )}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t(
                  'Our competitive advantages are guaranteed by solid investments in modern technologies, while preserving the authentic taste and nutritional value that our customers have trusted for generations.',
                  'Нашите конкурентни предимства се гарантират от солидните инвестиции в съвременни технологии, като същевременно запазваме автентичния вкус и хранителната стойност, на които нашите клиенти се доверяват от поколения.'
                )}
              </p>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 to-blue-900/20"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white z-10">
                  <div className="text-6xl font-bold mb-2">50+</div>
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