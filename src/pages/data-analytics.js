import Hero from "@/components/course/heroCourse/Hero";
import React from "react";
import Secondsection from "@/components/course/secondSection/secondsection";
import Domainelective from "@/components/course/domainElective/Domainelective";
import GrowthSection from "@/components/course/growthSection/GrowthSection";
import CareerServicePro from "@/components/course/careerServicePro/CareerServicePro";
import ToolsCoverd from "@/components/course/toolsCoverd/ToolsCoverd";
import Layout from "../components/layout";
import Review from "@/components/course/reviewSection/Review";
import Navbar from "@/components/global/navbar/Navbar";

const DataAnalytics = () => {
  return (
    <Layout>
      <>
      <Navbar />
        <Hero />
        <Secondsection />
        <Domainelective />
        <GrowthSection />
        <CareerServicePro />
        <ToolsCoverd />
        <Review/>
      </>
    </Layout>
  );
};

export default DataAnalytics;
