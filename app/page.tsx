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

      <section className="py-16 bg-green-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {t('Health Benefits of Our Seeds', 'Ползи за здравето от нашите семена')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">
                {t('Pumpkin Seeds', 'Тиквено семе')}
              </h3>
              <div className="text-gray-600 space-y-4">
                <p>
                  {t(
                    'The seed is rich in fats, proteins, zinc salts and vitamin E. They also contain various amino acids and vitamin E, prevent premature aging and stimulate reproductive functions. Pumpkin seed oil has antioxidant, anti-sclerotic and anti-ulcer effects.',
                    'Семето е богато на мазнини, белтъчини, цинкови соли и витамин Е. Те съдържат също и различни аминокиселини и витамин Е, предотвратяват преждевременното стареене и стимулират репродуктивните функции. Маслото от тиквено семе има антиоксидантно, анти-склеротично и противоязвено действие.'
                  )}
                </p>
                <h4 className="font-semibold text-green-700">
                  {t('Why are pumpkin seeds beneficial?', 'Защо е полезно тиквеното семе?')}
                </h4>
                <p>
                  {t(
                    'Regular consumption of pumpkin seeds can help regulate blood sugar, which is beneficial for people with diabetes or pre-diabetic conditions. The iron content in pumpkin seeds supports the production of red blood cells and prevents anemia. Additionally, zinc and antioxidants in pumpkin seeds can improve prostate health and reduce the risk of developing prostate cancer.',
                    'Редовната консумация на тиквено семе може да помогне и за регулиране на кръвната захар, което е от полза за хора с диабет или преддиабетни състояния. Съдържанието на желязо в тиквеното семе подпомага производството на червени кръвни клетки и предотвратява анемия. Освен това цинкът и антиоксидантите в тиквеното семе могат да подобрят здравето на простатата и да намалят риска от развитие на рак на простатата.'
                  )}
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">
                {t('Sunflower Seeds', 'Слънчогледово семе')}
              </h3>
              <div className="text-gray-600 space-y-4">
                <p>
                  {t(
                    'These small seeds provide a healthy dose of microelements such as iron, copper, magnesium, selenium, zinc, potassium and calcium for healthy bones and teeth. They are an excellent source of unsaturated fatty acids Omega 6 and Omega 9 and phytosterols, which play an important role in maintaining the health of blood vessels and the heart.',
                    'Тези малки семена осигуряват здравословна доза микроелементи като желязо, мед, магнезий, селен, цинк, калий и калций за здрави кости и зъби. Те са изключителен източник на ненаситени мастни киселини Омега 6 и Омега 9 и на фитостероли, които играят важна роля за поддържане здравето на кръвоносните съдове и сърцето.'
                  )}
                </p>
                <h4 className="font-semibold text-green-700">
                  {t('Why are sunflower seeds beneficial?', 'Защо е полезно слънчогледовото семе?')}
                </h4>
                <p>
                  {t(
                    'They have an excellent balance between mono- and polyunsaturated fatty acids, which help remove plaques deposited by "bad" LDL cholesterol on blood vessel walls. Additionally, sunflower seeds can reduce the risk of diabetes. The seeds are an excellent source (20% or more of the daily amount) of proteins, dietary fiber, all B vitamins and vitamin E. The seeds also contain large amounts of minerals, magnesium, manganese, phosphorus, iron and zinc.',
                    'Те имат отличен баланс между моно- и полиненаситени мастни киселини, които спомагат за премахване на плаки, наслагвани от „лошия" LDL холестерол по стените на кръвоносните съдове. Освен това слънчогледовите семки могат да намалят риска от диабет. Семената са отличен източник (20% или повече от дневното количество) на белтъчини, баластни вещества, всички витамини В и витамини Е. Семената съдържат също големи количества минерали, магнезий, манган, фосфор, желязо и цинк.'
                  )}
                </p>
                <p className="text-sm">
                  {t(
                    'Sunflower seeds have a mild flavor and firm, but tender texture. They are often roasted to enhance their flavor, but you can also consume them raw. They are a rich source of vitamins E, B and D. The amount of "sunshine" vitamin D in them is much more than in cod liver, which is considered one of the richest sources.',
                    'Слънчогледовите семки имат лек вкус и твърда, но нежна текстура. Често се пекат, за да се подчертае вкусът им, но можете да ги консумирате и сурови. Те са богат източник на витамин Е, В и D. Количеството на „слънчевият" витамин D в тях е много повече, отколкото в черния дроб на риба треска, която се е счита за един от най-богатите източници.'
                  )}
                </p>
              </div>
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