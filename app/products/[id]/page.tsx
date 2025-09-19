'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import products from '@/data/products.json'
import { notFound } from 'next/navigation'

export default function ProductDetailPage() {
  const params = useParams()
  const { t, language } = useLanguage()

  const product = products.find(p => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <section className="py-16">
        <div className="container-custom">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-green-600 hover:text-green-700">
                  {t('Home', 'Начало')}
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/products" className="text-green-600 hover:text-green-700">
                  {t('Products', 'Продукти')}
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-900">
                {language === 'en' ? product.nameEn : product.nameBg}
              </li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={product.image}
                alt={language === 'en' ? product.nameEn : product.nameBg}
                fill
                className="object-contain p-8"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">
                {language === 'en' ? product.nameEn : product.nameBg}
              </h1>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('Description', 'Описание')}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'en' ? product.detailsEn : product.detailsBg}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('Packaging', 'Опаковане')}
                </h2>
                <p className="text-gray-600">
                  {language === 'en' ? product.packagingEn : product.packagingBg}
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-2 text-green-900">
                  {t('Quality Guarantee', 'Гаранция за качество')}
                </h3>
                <p className="text-green-800">
                  {t(
                    'All our products are certified and meet international food safety standards.',
                    'Всички наши продукти са сертифицирани и отговарят на международните стандарти за безопасност на храните.'
                  )}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-primary text-center"
                >
                  {t('Enquire Now', 'Запитване')}
                </Link>
                <Link
                  href="/products"
                  className="btn-secondary text-center"
                >
                  {t('Back to Products', 'Обратно към продуктите')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            {t('Related Products', 'Подобни продукти')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-56 bg-gray-50">
                    <Image
                      src={relatedProduct.image}
                      alt={language === 'en' ? relatedProduct.nameEn : relatedProduct.nameBg}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {language === 'en' ? relatedProduct.nameEn : relatedProduct.nameBg}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {language === 'en' ? relatedProduct.shortDescriptionEn : relatedProduct.shortDescriptionBg}
                    </p>
                    <Link
                      href={`/products/${relatedProduct.id}`}
                      className="text-green-600 font-semibold hover:text-green-700"
                    >
                      {t('View Details →', 'Виж детайли →')}
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}