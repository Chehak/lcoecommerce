import React from 'react'
import Heading from "./Heading";
import {Link} from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
           <div className="container">
            <Heading title={heading}/>
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-center">
                    <p className="lead text-white mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur 
                      quisquam amet omnis expedita corporis eveniet a voluptas molestiae corrupti
                       harum distinctio soluta maiores reiciendis cupiditate rem ullam voluptatibus
                        magni ut, numquam sint! Ipsum reprehenderit magni, beatae quibusdam itaque non,
                       odit pariatur facere consequatur architecto veniam, doloribus quidem tempora accusamus vel!
                    </p>
                    <Link to="/about/">
                        <button className="btn btn-warning btn-lg">{heading}</button>
                    </Link>
                </div>
            </div>

           </div>
        </section>
    )
}
