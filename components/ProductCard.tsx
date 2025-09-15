'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import PlaceholderImage from './PlaceholderImage'

interface ProductCardProps {
  id: string
  nameEn: string
  nameBg: string
  image: string
  shortDescriptionEn: string
  shortDescriptionBg: string
}

const productColors: { [key: string]: string } = {
  '1': '#22c55e',  // Green
  '2': '#fbbf24',  // Yellow
  '3': '#f59e0b',  // Amber
  '4': '#16a34a',  // Dark Green
  '5': '#84cc16',  // Lime
  '6': '#a3e635'   // Light Lime
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
      <div className="relative h-48 bg-gray-200">
        <PlaceholderImage
          text={productName}
          color={productColors[id] || '#718096'}
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