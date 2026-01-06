"use client"
import Image from "next/image"
export default function Kit() {
  return (
    <main className="h-screen w-screen overflow-auto bg-pink-50 text-slate-800 font-sans">
      <header className="max-w-6xl mx-auto px-6 py-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center">
              <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2v20M2 12h20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-lg font-semibold">Care Collective</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline-block px-4 py-2 rounded-md text-sm bg-white ring-1 ring-slate-200">Learn</button>
            <a href="#order" className="px-4 py-2 rounded-md bg-slate-800 text-white text-sm shadow-sm">Buy Kit</a>
          </div>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">Complete Period Care Kit</h1>
            <p className="mt-4 text-slate-600 text-lg">Comfort, care, and confidence — in one kit.</p>
            <p className="mt-6 text-sm text-slate-500 max-w-prose">Everything thoughtfully selected to support menstrual health with dignity and ease. Discreet, trusted, and ready whenever you need it.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#order" className="px-5 py-3 rounded-lg bg-slate-800 text-white shadow hover:bg-slate-900">Buy Kit</a>
              <button className="px-5 py-3 rounded-lg bg-white ring-1 ring-slate-200 text-slate-700">Learn More</button>
            </div>
            <ul className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
              <li className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-400 inline-block" />
                Doctor-informed selection
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-400 inline-block" />
                Discreet packaging
              </li>
            </ul>
          </div>
          <div className="w-full md:w-96 bg-slate-50 rounded-xl p-6 shadow-inner flex flex-col items-center">
            <div className="h-64 w-full rounded-lg bg-gradient-to-br from-slate-100 to-white border border-slate-100 flex items-center justify-center">
              <Image 
              src="/pkit.jpeg"
              height={400}
              width={300}
              className='h-64 w-auto object-fit'
              alt="" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-slate-600">Compact, discreet pouch</p>
              <p className="mt-2 text-xs text-slate-400">Fits in a bag or locker</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="rounded-2xl bg-white shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-slate-900">What is in the kit</h2>
          <p className="mt-2 text-sm text-slate-500">Carefully chosen items to cover comfort, hygiene, and education.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-white ring-1 ring-slate-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 20c4.418 0 8-3.582 8-8V6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 20c4.418 0 8-3.582 8-8V6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Sanitary pads & essentials</h3>
                <p className="text-sm text-slate-500 mt-1">High-absorbency pads in discreet wraps and disposal bags.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-white ring-1 ring-slate-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2v6M6 8v4a6 6 0 0012 0V8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Pain relief essentials</h3>
                <p className="text-sm text-slate-500 mt-1">Gentle relief options and heat patch for cramps.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-white ring-1 ring-slate-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 7h18M7 7v10a5 5 0 0010 0V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Hygiene products</h3>
                <p className="text-sm text-slate-500 mt-1">Gentle wipes, hand sanitizer, and a small wash pouch.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-white ring-1 ring-slate-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 3v18M3 12h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Comfort items</h3>
                <p className="text-sm text-slate-500 mt-1">A soft packable heat wrap and soothing balm for comfort.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-white ring-1 ring-slate-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Educational guide</h3>
                <p className="text-sm text-slate-500 mt-1">Clear, respectful guidance on cycle care and comfort tips.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="rounded-2xl bg-white shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Why this kit</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg bg-slate-50 shadow-sm text-center">
              <div className="mx-auto h-10 w-10 rounded-full bg-white ring-1 ring-slate-100 flex items-center justify-center">
                <svg className="h-5 w-5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2v6M9 9h6M7 13l3 3 7-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-3 font-medium text-slate-900">Doctor-informed</h3>
              <p className="mt-2 text-sm text-slate-500">Selected with clinical guidance for safety and comfort.</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 shadow-sm text-center">
              <div className="mx-auto h-10 w-10 rounded-full bg-white ring-1 ring-slate-100 flex items-center justify-center">
                <svg className="h-5 w-5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 12h18M8 12v6a4 4 0 004 4 4 4 0 004-4v-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-3 font-medium text-slate-900">All-in-one convenience</h3>
              <p className="mt-2 text-sm text-slate-500">Everything you need in a single thoughtful pouch.</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 shadow-sm text-center">
              <div className="mx-auto h-10 w-10 rounded-full bg-white ring-1 ring-slate-100 flex items-center justify-center">
                <svg className="h-5 w-5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16v16H4z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-3 font-medium text-slate-900">Discreet packaging</h3>
              <p className="mt-2 text-sm text-slate-500">Neutral, compact packaging for privacy and portability.</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 shadow-sm text-center">
              <div className="mx-auto h-10 w-10 rounded-full bg-white ring-1 ring-slate-100 flex items-center justify-center">
                <svg className="h-5 w-5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-3 font-medium text-slate-900">Designed for real needs</h3>
              <p className="mt-2 text-sm text-slate-500">Practical, respectful items that fit daily life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="rounded-2xl bg-white shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Who is this for</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 shadow-sm">
              <h3 className="font-medium text-slate-900">First-time periods</h3>
              <p className="mt-2 text-sm text-slate-500">Gentle guidance and essentials to build confidence.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 shadow-sm">
              <h3 className="font-medium text-slate-900">College students</h3>
              <p className="mt-2 text-sm text-slate-500">Compact kit for dorms and busy schedules.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 shadow-sm">
              <h3 className="font-medium text-slate-900">Working professionals</h3>
              <p className="mt-2 text-sm text-slate-500">Discreet, reliable care for workdays and travel.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 shadow-sm">
              <h3 className="font-medium text-slate-900">Anyone seeking stress-free care</h3>
              <p className="mt-2 text-sm text-slate-500">A ready solution for comfortable, private period support.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-2xl bg-white shadow-sm p-8 md:flex md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Order your kit</h2>
            <p className="mt-2 text-sm text-slate-500">Simple pricing and discreet delivery.</p>
            <div className="mt-4 flex items-end gap-4">
              <div className="text-3xl font-bold text-slate-900">₹ 500 </div>
              <div className="text-sm text-slate-500">one-time purchase</div>
            </div>
            <p className="mt-3 text-xs text-slate-400">Privacy-forward packaging • Sensitive-skin friendly items • Clinically reviewed</p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-teal-600 text-white shadow hover:bg-teal-700">Order Now</button>
            <button className="px-4 py-2 rounded-lg bg-white ring-1 ring-slate-200 text-slate-700">Add to Cart</button>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-slate-500">
          <p>We respect your privacy. Discreet billing and packaging ensure comfort and confidentiality.</p>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 pb-12">
        <div className="text-center text-sm text-slate-400">© {new Date().getFullYear()} Care Collective. All rights reserved.</div>
      </footer>
    </main>
  )
}