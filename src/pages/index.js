import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/Infoblock'
import Dualinfoblock from '../components/Reuseable/Dualinfoblock'
import Coursecart from '../components/Cart/Coursecart'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
     title = "I Write Code"
     subtitle = "I Love Code"
     heroclass = "hero-background"/>
     <Infoblock heading="About us"/>
     <Coursecart courses={data.courses}/>
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
  courses:allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:200,height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
    }
    
 }
 `
export default IndexPage
