import { db } from '@/lib/firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import CaseStudyCard from './ui/CaseStudyCard';

type CaseStudy = {
    industry: string;
    id: string;
    coverImage: string;
    title: string;
    growthPercentage: number;
    growthType: string;
    tags: string[];
    slug: string;

    // add other properties as needed
};

const CaseStudiesGroup = async () => {
    const caseStudiesDocs = await getDocs(collection(db, 'case-studies'));

    const caseStudies: CaseStudy[] = caseStudiesDocs.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<CaseStudy, 'id'>),
    }));

  return (
<section className="w-full py-20 lg:py-40 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
    {[0, 1, 2].map((colIndex) => (
      <div
        key={colIndex}
        className={`flex flex-col gap-y-4 ${
          colIndex === 1 ? 'mt-10' : ''
        }`}
      >
        {[...caseStudies, ...caseStudies, ...caseStudies]
          .filter((_, i) => i % 3 === colIndex)
          .map((caseStudy, i) => (
            <CaseStudyCard
              key={`${colIndex}-${i}`}
              brandName={caseStudy.title}
              growthPercentage={caseStudy.growthPercentage}
              growthType={caseStudy.growthType}
              tags={caseStudy.tags}
              backgroundImage={caseStudy.coverImage}
              slug={caseStudy.slug}
            />
          ))}
      </div>
    ))}
  </div>
  <div className='w-pfull text-center flex items-center justify-center py-4 text-xl text-black font-black uppercase'>And more..</div>
</section>

  )
}

export default CaseStudiesGroup
