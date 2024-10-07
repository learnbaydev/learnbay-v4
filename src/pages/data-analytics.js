import React from "react";
import Hero from "@/components/course/heroCourse/Hero";
import Secondsection from "@/components/course/secondSection/secondsection";
import Domainelective from "@/components/course/domainElective/Domainelective";
import GrowthSection from "@/components/course/growthSection/GrowthSection";
import CareerServicePro from "@/components/course/careerServicePro/CareerServicePro";
import ToolsCoverd from "@/components/course/toolsCoverd/ToolsCoverd";
import Layout from "../components/layout";
import Review from "@/components/course/reviewSection/Review";

import MediaSection from "@/components/home/media/Media";
import Learners from "@/components/course/learner/Learner";

const DataAnalytics = () => {
  return (
<>
<Layout>
      {/* Ensure all components render consistently */}
      <Hero />
      <Secondsection />
      <Domainelective />
      <GrowthSection />
      <CareerServicePro />
      <ToolsCoverd />
<Learners/>
</Layout>

</>
 



export default DataAnalytics;
