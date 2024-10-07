// src/app/datascience/[id]/page.jsx
import React from 'react';
import Hero from '@/components/course/heroCourse/Hero';
import Secondsection from '@/components/course/secondSection/secondsection';
import CareerServicePro from '@/components/course/careerServicePro/CareerServicePro';
import { getPageData } from '@/utils/getDSPageData';
import DomainElective from '@/components/course/domainElective/Domainelective';
import GrowthSection from '@/components/course/growthSection/GrowthSection';

const Page = async ({ params }) => {
  const { id } = params;
  const pageData = await getPageData(id);

  if (pageData.error) {
    return <div>{pageData.error}</div>;
  }

  return (
    <div>
      <Hero
        title={pageData.header.title}
        description={pageData.header.description}
        para={pageData.header.para}
        subtitle={pageData.header.subtitle}
        typeLogo={pageData.header.typeLogo}
      />
      <Secondsection />
      <DomainElective/>
      <GrowthSection/>
      <CareerServicePro />
      
    </div>
  );
};

export default Page;
