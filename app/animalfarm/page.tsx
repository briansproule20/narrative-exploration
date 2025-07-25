import React from 'react'
import Link from 'next/link'

export default function AnimalFarmPage() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative">
        
        {/* Navigation */}
        <div className="flex justify-between items-start mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            🏠 Return to Parlor
          </Link>
          
          <Link 
            href="/animalfarmmodule" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            🚜 Enter Farm
          </Link>
        </div>

        {/* Book Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 rounded-xl shadow-2xl relative" style={{
            background: `
              radial-gradient(circle at 25% 20%, rgba(239, 68, 68, 0.2) 0%, transparent 60%),
              radial-gradient(circle at 75% 80%, rgba(220, 38, 38, 0.3) 0%, transparent 60%),
              linear-gradient(135deg, #7F1D1D 0%, #991B1B 20%, #B91C1C 40%, #DC2626 60%, #991B1B 80%, #7F1D1D 100%)
            `,
            border: '3px solid #DC2626',
            boxShadow: `
              0 8px 32px rgba(220, 38, 38, 0.4),
              inset 0 2px 8px rgba(255, 255, 255, 0.1),
              inset 0 -2px 4px rgba(153, 27, 27, 0.3)
            `
          }}>
            <h1 className="text-4xl font-bold text-amber-100 mb-4 font-serif">
              Animal Farm
            </h1>
            <p className="text-red-200 text-lg mb-2 font-serif italic">
              by George Orwell
            </p>
            <div className="text-red-300 font-serif">
              "All animals are equal, but some animals are more equal than others."
            </div>
          </div>
        </div>





        {/* Book Summary */}
        <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 p-8 rounded-xl shadow-xl border border-red-600 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-amber-100 mb-4 font-serif">About This Novel</h2>
          <p className="text-red-100 leading-relaxed font-serif mb-4">
            <em>Animal Farm</em> is a 1945 allegorical novella by George Orwell. The book tells the story 
            of a group of farm animals who rebel against their human farmer, hoping to create a society 
            where animals can be equal, free, and happy.
          </p>
          <p className="text-red-100 leading-relaxed font-serif mb-4">
            However, the rebellion is betrayed and the farm ends up under the dictatorship of Napoleon, 
            a pig as tyrannical as the human owner before him. The story serves as an allegory for the 
            Russian Revolution and the rise of Stalin's Soviet Union.
          </p>
          <p className="text-red-100 leading-relaxed font-serif">
            Through its simple yet powerful narrative, Orwell explores themes of power, corruption, 
            propaganda, and the dangers of totalitarianism. The novella remains one of the most 
            influential political allegories of the 20th century.
          </p>
        </div>

      </div>
    </main>
  )
} 