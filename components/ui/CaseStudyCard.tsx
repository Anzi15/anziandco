import React from 'react'

interface CaseStudyCardProps {
  img: string;
  title: string;
    industry: string;

}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ img, title, industry,  }) => {
  return (
    <div className='aspect-square w-full rounded-2xl overflow-hidden relative group max-w-[400px]'>
        <h3>{title}</h3>
      <img src={img} alt="" className='w-full h-full aspect-square object-fill brightness-75' />
    </div>
  )
}

export default CaseStudyCard
