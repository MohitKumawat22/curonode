'use client'; // Added for compatibility if you add interactivity later

import React from 'react';
import Image from 'next/image'; // Import Next.js optimized Image component

const conditions = [
  {
    id: 'endo',
    title: 'Endometriosis',
    description: 'A chronic condition where tissue similar to the uterine lining grows outside the uterus (ovaries, tubes, bladder). It responds to hormonal signals, causing internal bleeding, inflammation, and scar tissue.',
    symptoms: [
      'Extremely painful periods (dysmenorrhea)',
      'Chronic pelvic pain',
      'Pain during intercourse',
      'Painful bowel movements',
      'Heavy bleeding',
      'Infertility'
    ],
    risks: 'Chronic inflammation can lead to organ damage, reduced fertility, and severe mental health impact.',
    management: 'Early diagnosis, pain management, hormonal therapy, and surgery.',

  },
  {
    id: 'pcos',
    title: 'Polycystic Ovary Syndrome (PCOS)',
    description: 'A hormonal disorder causing enlarged ovaries with small cysts and excess androgen levels. It disrupts ovulation and is often linked to insulin resistance.',
    symptoms: [
      'Irregular or absent periods',
      'Excess facial/body hair (hirsutism)',
      'Severe acne',
      'Weight gain',
      'Difficulty conceiving'
    ],
    risks: 'Type 2 Diabetes, Heart Disease, Infertility, Depression, and Endometrial Cancer.',
    management: 'Lifestyle changes (diet/exercise), medication for insulin resistance, and hormonal regulation.',
 
  },
  {
    id: 'menorrhagia',
    title: 'Menorrhagia',
    description: 'Abnormally heavy or prolonged bleeding (soaking pads every hour or bleeding >7 days). Causes include fibroids, hormonal imbalances, or thyroid issues.',
    symptoms: [
      'Soaking through protection hourly',
      'Bleeding for more than a week',
      'Passing large blood clots'
    ],
    risks: 'Severe iron-deficiency anemia leading to weakness, heart strain, and poor immunity. May require hospitalization.',
    management: 'Medical evaluation to treat underlying causes.',

  },
  {
    id: 'amenorrhea',
    title: 'Amenorrhea',
    description: 'Absence of menstruation for 3+ months in non-pregnant individuals. Causes include stress, eating disorders, excessive exercise, or hormonal issues.',
    symptoms: [
      'No period for 3 consecutive months',
      'Hair loss',
      'Headache',
      'Vision changes'
    ],
    risks: 'Estrogen deficiency leading to Osteoporosis (bone loss), infertility, and long-term hormonal dysfunction.',
    management: 'Addressing the root cause (lifestyle, hormonal, or structural).',

  },
  {
    id: 'dysmenorrhea',
    title: 'Dysmenorrhea',
    description: 'Menstrual pain severe enough to interfere with daily life. Can be Primary (no underlying disease) or Secondary (symptom of conditions like Endometriosis).',
    symptoms: [
      'Severe cramping',
      'Nausea',
      'Vomiting',
      'Dizziness'
    ],
    risks: 'Ignoring pain can allow underlying diseases to progress untreated. Reliance on painkillers is a warning sign.',
    management: 'Medical investigation is necessary if pain disrupts daily life.',

  },
  {
    id: 'fibroids',
    title: 'Uterine Fibroids',
    description: 'Non-cancerous growths in the uterus wall. Their growth is influenced by estrogen and they can distort the uterus shape.',
    symptoms: [
      'Heavy bleeding',
      'Pelvic pressure',
      'Frequent urination',
      'Constipation',
      'Infertility'
    ],
    risks: 'Severe anemia, pregnancy complications, and potential need for surgery.',
    management: 'Monitoring, medication, or surgical removal.',
   
  },
  {
    id: 'pid',
    title: 'Pelvic Inflammatory Disease (PID)',
    description: 'Infection of reproductive organs (uterus, tubes, ovaries), often a complication of untreated STIs.',
    symptoms: [
      'Pelvic pain',
      'Fever',
      'Foul discharge',
      'Irregular bleeding',
      'Pain during intercourse'
    ],
    risks: 'Permanent scarring leading to infertility, chronic pain, and increased ectopic pregnancy risk.',
    management: 'Antibiotics and early treatment to prevent scarring.',

  },
  {
    id: 'pmdd',
    title: 'Premenstrual Dysphoric Disorder (PMDD)',
    description: 'A severe form of PMS with extreme mood disturbances occurring weeks before menstruation. It is a psychiatric and medical condition.',
    symptoms: [
      'Severe depression',
      'Panic attacks',
      'Intense rage',
      'Suicidal thoughts'
    ],
    risks: 'High risk of suicide and severe disruption of life. Requires immediate professional psychiatric care.',
    management: 'Therapy, medication (antidepressants), and hormonal treatments.',

  },
  {
    id: 'anemia',
    title: 'Menstrual-Related Anemia',
    description: 'Iron deficiency caused by chronic blood loss from heavy periods. Often normalized but dangerous.',
    symptoms: [
      'Chronic fatigue',
      'Dizziness',
      'Hair fall',
      'Pale skin',
      'Brain fog'
    ],
    risks: 'Cardiovascular stress, heart strain, and weakened immune system.',
    management: 'Iron supplementation and treating the cause of heavy bleeding.',

  },
  {
    id: 'cysts',
    title: 'Ovarian Cysts',
    description: 'Fluid-filled sacs on ovaries. While often benign, they can become medical emergencies.',
    symptoms: [
      'Sudden sharp pain',
      'Nausea',
      'Vomiting',
      'Bloating'
    ],
    risks: 'Rupture causing internal bleeding. Ovarian Torsion (twisting of ovary) which is a surgical emergency risking ovary loss.',
    management: 'Watchful waiting or surgery for large/dangerous cysts.',
  
  },
  {
    id: 'cancer',
    title: 'Endometrial Cancer',
    description: 'Cancer of the uterine lining. Prolonged estrogen exposure (e.g., from missed periods in PCOS) is a risk factor.',
    symptoms: [
      'Abnormal uterine bleeding',
      'Spotting between periods',
      'Bleeding after menopause'
    ],
    risks: 'Life-threatening if not caught early. Highly curable in initial stages.',
    management: 'Early detection through biopsy and surgery.',
    
  },
  {
    id: 'tss',
    title: 'Toxic Shock Syndrome (TSS)',
    description: 'Rare, life-threatening bacterial infection linked to prolonged use of high-absorbency tampons or cups.',
    symptoms: [
      'Sudden high fever',
      'Sunburn-like rash',
      'Vomiting',
      'Low blood pressure'
    ],
    risks: 'Multi-organ failure and death. Medical emergency.',
    management: 'Immediate hospitalization and antibiotics.',

  }
];

export default function MenstrualHealthAwareness() {
  return (
    <div className="min-h-screen w-full bg-pink-50 text-rose-900 font-sans selection:bg-rose-200">
      
      <header className="w-full bg-gradient-to-r from-rose-600 to-pink-500 text-white py-12 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Menstrual Health Pathologies
          </h1>
          <p className="text-lg md:text-xl font-medium text-pink-100 max-w-3xl mx-auto">
            A comprehensive guide to understanding symptoms, risks, and management of significant menstrual health conditions.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditions.map((condition) => (
            <article 
              key={condition.id} 
              className="bg-white rounded-2xl shadow-md border-l-8 border-rose-500 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-rose-700">
                    {condition.title}
                  </h2>
                </div>

                {/* FIXED: Replaced text div with proper Next.js Image component */}
                {condition.imageSrc && (
                  <div className="mb-4 relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                    <Image 
                      src={condition.imageSrc} 
                      alt={condition.imageAlt || condition.title}
                     
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {condition.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-sm font-bold text-pink-600 uppercase tracking-wider mb-2">
                    Symptoms
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    {condition.symptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-4">
                  <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-1">
                    Risks & Dangers
                  </h3>
                  <p className="text-sm text-red-800">
                    {condition.risks}
                  </p>
                </div>
              </div>

              <div className="bg-pink-100 p-4 border-t border-pink-200 mt-auto">
                <h3 className="text-xs font-bold text-pink-800 uppercase mb-1">
                  Management approach
                </h3>
                <p className="text-sm text-pink-900 font-medium">
                  {condition.management}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="w-full bg-rose-900 text-pink-200 py-8 mt-12 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Menstrual Health Awareness Initiative.
        </p>
        <p className="text-xs mt-2 opacity-75">
          Disclaimer: This information is for educational purposes only and does not constitute medical advice.
        </p>
      </footer>
    </div>
  );
}