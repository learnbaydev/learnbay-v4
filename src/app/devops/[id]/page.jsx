// src/pages/[id].js
import React from "react";
import Hero from "@/components/course/heroCourse/Hero";
import { getPageData } from "@/utils/getDevopspageData";


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
      </div>

  );
};

export default Page;
