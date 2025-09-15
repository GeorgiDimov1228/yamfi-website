'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import ProductCard from '@/components/ProductCard'
import products from '@/data/products.json'

export default function ProductsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-green-700 to-yellow-500 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {t('Our Products', 'Нашите продукти')}
          </h1>
          <p className="text-xl text-center mt-4 max-w-2xl mx-auto">
            {t(
              'Explore our wide range of premium frozen poultry products',
              'Разгледайте нашата широка гама от премиум замразени птичи продукти'
            )}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            {t('Need Something Specific?', 'Нуждаете се от нещо специфично?')}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t(
              'We can source and supply various poultry products based on your specific requirements. Contact us to discuss your needs.',
              'Можем да доставим различни птичи продукти според вашите специфични изисквания. Свържете се с нас, за да обсъдим вашите нужди.'
            )}
          </p>
          <a href="/contact" className="btn-primary">
            {t('Contact Us', 'Свържете се с нас')}
          </a>
        </div>
      </section>
    </div>
  )
}