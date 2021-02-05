import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import image from 'gatsby-image'

export default class Coursecart extends Component {
   constructor(props) {
       super(props)
       this.state={
           courses: props.courses.edges,
          
       }
   }   
   render(){
      //console.log(this.state.courses);
        return (
           <section className="py-5">
               <div className="container">
                   <Heading title="Courses" />
                   <div className="row">
                       {this.state.courses.map(({node}) => {
                            return(
                               <div key={node.id} className="col-11 col-md-5 d-flex mx-auto">
                                       <image fixed={node.image.fixed}/>
                                    <div className="flex-grow-1 px-3">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-0">{node.title}</h5>
                                            <h5  className="mb-0 text-success">{node.price}</h5>
                                            <button 
                                            data-item-id={node.id}
                                            data-item-name={node.title}
                                            data-item-price={node.price}
                                            data-item-url="https://www.lcoecommerce.com"
                                            data-item-image={node.image.fixed.src}
                                            className="btn btn-warning snipcart-add-item">Join Now</button>
                                        </div>
                                    </div>
                                   </div> 
                            )

                       })
                        }
                   </div>
               </div>

           </section>
        )
    }
}
