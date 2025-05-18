import { db } from '@/lib/firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import CaseStudyCard from './ui/CaseStudyCard';

type CaseStudy = {
    industry: string;
    id: string;
    coverImage: string;
    title: string;
    // add other properties as needed
};

const CaseStudiesGroup = async () => {
    const caseStudiesDocs = await getDocs(collection(db, 'case-studies'));

    const caseStudies: CaseStudy[] = caseStudiesDocs.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<CaseStudy, 'id'>),
    }));

  return (
    <section className='w-full py-20 lg:py-40 px-4'>
      {caseStudies.map((caseStudy) => (
        <CaseStudyCard img={caseStudy.coverImage} key={caseStudy.id} title={caseStudy.title} industry={caseStudy.industry} />
    
      ))}
    </section>
  )
}

export default CaseStudiesGroup
