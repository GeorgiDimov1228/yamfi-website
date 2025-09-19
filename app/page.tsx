'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import ProductCard from '@/components/ProductCard'
import products from '@/data/products.json'

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <section className="relative h-[600px] text-white">
        <Image
          src="/products/attachments/yamfi_products_mix.jpeg"
          alt="YAMFI Seeds Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-yellow-600/50"></div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {t('NEED FOR SEED', 'NEED FOR SEED')}
            </h1>
            <p className="text-xl mb-8">
              {t(
                'Premium sunflower and pumpkin seeds. Your trusted supplier of high-quality roasted and raw seeds for retail and wholesale.',
                'Премиум слънчогледови и тиквени семки. Вашият надежден доставчик на висококачествени печени и сурови семки за търговия на дребно и едро.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary text-center">
                {t('View Our Products', 'Вижте нашите продукти')}
              </Link>
              <Link href="/contact" className="btn-secondary text-center">
                {t('Get in Touch', 'Свържете се с нас')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {t('Why Choose YAMFI?', 'Защо да изберете YAMFI?')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('Quality Assured', 'Гарантирано качество')}
              </h3>
              <p className="text-gray-600">
                {t(
                  'All our products meet the highest international standards for food safety and quality.',
                  'Всички наши продукти отговарят на най-високите международни стандарти за безопасност и качество на храните.'
                )}
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('Fast Delivery', 'Бърза доставка')}
              </h3>
              <p className="text-gray-600">
                {t(
                  'Reliable cold chain logistics ensure your products arrive fresh and on time.',
                  'Надеждната логистика с хладилна верига гарантира, че вашите продукти пристигат свежи и навреме.'
                )}
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('Expert Support', 'Експертна поддръжка')}
              </h3>
              <p className="text-gray-600">
                {t(
                  'Our dedicated team provides personalized service and support for all your needs.',
                  'Нашият специализиран екип предоставя персонализирано обслужване и поддръжка за всички ваши нужди.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {t('Featured Products', 'Избрани продукти')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              {t('View All Products', 'Вижте всички продукти')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            {t('Ready to Order?', 'Готови ли сте да поръчате?')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t(
              'Contact us today to discuss your requirements and get a competitive quote for premium seeds products.',
              'Свържете се с нас днес, за да обсъдим вашите изисквания и да получите конкурентна оферта за премиум семена.'
            )}
          </p>
          <Link href="/contact" className="btn-primary">
            {t('Contact Us Now', 'Свържете се сега')}
          </Link>
        </div>
      </section>
    </>
  )
}