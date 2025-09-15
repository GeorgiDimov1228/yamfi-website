'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-green-600 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('bg')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'bg'
            ? 'bg-green-600 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Switch to Bulgarian"
      >
        BG
      </button>
    </div>
  )
}