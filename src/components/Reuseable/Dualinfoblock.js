import React from 'react'
import Heading from './Heading'

export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme ">
            <div className="container">
                <Heading title= {heading}/>
                <div className="row">
                   <div className="col-8 mx-auto">
                     <p className="lead text-white mb-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae laboriosam atque corrupti ducimus totam asperiores tempore aliquam nisi voluptates maiores obcaecati vero, veniam sequi? Fugit velit maiores debitis? Aliquid voluptatem a maxime iusto rem hic ratione possimus
                         id illo nostrum magni eius, asperiores, qui veniam quia aperiam fugit magnam officia!
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, nobis incidunt at eligendi, laboriosam quo consequatur nisi quis ad similique temporibus aliquid maiores, numquam illum tenetur. Voluptates quas possimus ipsa hic enim. Quibusdam facere eos reiciendis, tempore blanditiis saepe voluptatem sit labore fuga dolorum ad veniam assumenda dignissimos! Non aspernatur nisi temporibus eum adipisci blanditiis, reprehenderit, ipsum sint dolor quos quisquam, iure nesciunt. Veniam, doloremque nihil sequi nesciunt suscipit iure ducimus adipisci necessitatibus dignissimos illum quis odit vero reprehenderit architecto, deleniti eaque cum saepe quaerat alias velit porro eveniet, culpa consequatur accusamus. 
                         Nihil suscipit reprehenderit ullam aliquid perferendis eligendi accusamus.
                     </p>
                   </div>
                   <div className="col-4">
                   <div className="card bg-dark">
                    <img className="card-img-top" src="https://images.pexels.com/photos/1092422/pexels-photo-1092422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Just Card image cap" />
                    <div className="card-body text-white">
                        <h5 className="card-title">Click Photos</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste hic nam, maxime, doloribus necessitatibus, consectetur labore adipisci nesciunt temporibus laudantium pariatur odio c
                        orporis quo quae possimus cumque? Unde, molestiae excepturi!cl</p>
                        <a href="#" className="btn btn-warning btn-block">{heading}</a>
                    </div>
                    </div>
                   </div>
                     </div>
            </div>

        </section>
    )
}
