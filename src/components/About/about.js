import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/Infoblock'
import Dualinfoblock from '../components/Reuseable/Dualinfoblock'



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
     title = "I Write Code"
     subtitle = "I Love Code"
     heroclass = "hero-background"/>
     <Infoblock heading="About us"/>
     <Dualinfoblock heading ="Our Team" />
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
     childImageSharp {
       fluid {
        ...GatsbyImageSharpFluid_tracedSVG
     }
   }
  }
 }
 `
export default IndexPage
