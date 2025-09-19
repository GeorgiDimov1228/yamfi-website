'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-green-700 to-yellow-500 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {t('Contact Us', 'Свържете се с нас')}
          </h1>
          <p className="text-xl text-center mt-4 max-w-2xl mx-auto">
            {t(
              'Get in touch with our team for inquiries, orders, or partnership opportunities',
              'Свържете се с нашия екип за запитвания, поръчки или възможности за партньорство'
            )}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                {t('Send us a message', 'Изпратете ни съобщение')}
              </h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                {t('Get in Touch', 'Свържете се')}
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {t('Head Office', 'Централен офис')}
                  </h3>
                  <address className="not-italic text-gray-600">
                    YAMFI Ltd.<br />
                    Červen Bryag<br />
                    5980<br />
                    Bulgaria
                  </address>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {t('Contact Information', 'Информация за контакт')}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{t('Phone:', 'Телефон:')} +359 897 877 897</span>
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Email: office@yamfi.eu</span>
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{t('Sales:', 'Продажби:')} sales@yamfi.eu</span>
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {t('Business Hours', 'Работно време')}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <strong>{t('Monday - Friday:', 'Понеделник - Петък:')}</strong><br />
                      9:00 AM - 6:00 PM
                    </p>
                    <p>
                      <strong>{t('Saturday:', 'Събота:')}</strong><br />
                      10:00 AM - 2:00 PM
                    </p>
                    <p>
                      <strong>{t('Sunday:', 'Неделя:')}</strong><br />
                      {t('Closed', 'Затворено')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            {t('Frequently Asked Questions', 'Често задавани въпроси')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {t('What is your minimum order quantity?', 'Каква е минималната количество за поръчка?')}
              </h3>
              <p className="text-gray-600">
                {t(
                  'Our minimum order quantity varies by product and package size. We offer flexible options for both retail and wholesale. Contact us for specific requirements.',
                  'Минималното количество за поръчка варира според продукта и размера на опаковката. Предлагаме гъвкави опции както за търговия на дребно, така и на едро. Свържете се с нас за специфични изисквания.'
                )}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {t('Do you offer samples?', 'Предлагате ли мостри?')}
              </h3>
              <p className="text-gray-600">
                {t(
                  'Yes, we can provide samples for serious buyers. Please contact our sales team to discuss sample requirements and shipping.',
                  'Да, можем да предоставим мостри за сериозни купувачи. Моля, свържете се с нашия търговски екип, за да обсъдите изискванията за мостри и доставка.'
                )}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {t('What are your payment terms?', 'Какви са вашите условия за плащане?')}
              </h3>
              <p className="text-gray-600">
                {t(
                  'We offer flexible payment terms including bank transfer, letter of credit, and other arrangements based on order volume and partnership duration.',
                  'Предлагаме гъвкави условия за плащане, включително банков превод, акредитив и други договорености въз основа на обема на поръчката и продължителността на партньорството.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}