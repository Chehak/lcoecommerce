import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/Infoblock'
import Dualinfoblock from '../components/Reuseable/Dualinfoblock'
import TeamSection from "../components/Reuseable/TeamSection"




const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
     title = "About LearnCode Online"
     subtitle = "Write Code"
     heroclass = "about-background"/>
   
     <Dualinfoblock heading ="A message From CEO" />
     <Infoblock heading="About Vision"/>
     <TeamSection/>
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
     childImageSharp {
       fluid {
        ...GatsbyImageSharpFluid_tracedSVG
     }
   }
  }
 }
 `
export default AboutPage
