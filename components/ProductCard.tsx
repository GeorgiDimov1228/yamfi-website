'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

interface ProductCardProps {
  id: string
  nameEn: string
  nameBg: string
  image: string
  shortDescriptionEn: string
  shortDescriptionBg: string
}

export default function ProductCard({
  id,
  nameEn,
  nameBg,
  image,
  shortDescriptionEn,
  shortDescriptionBg,
}: ProductCardProps) {
  const { t, language } = useLanguage()
  const productName = language === 'en' ? nameEn : nameBg

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-80 bg-white">
        <Image
          src={image}
          alt={productName}
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {productName}
        </h3>
        <p className="text-gray-600 mb-4">
          {language === 'en' ? shortDescriptionEn : shortDescriptionBg}
        </p>
        <Link
          href={`/products/${id}`}
          className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          {t('View Details', 'Виж детайли')}
        </Link>
      </div>
    </div>
  )
}