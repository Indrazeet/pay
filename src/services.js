import React, { useState } from 'react'
import serviceapi from './API/servicesApi';


const Servicess = () => {
    const [serviceDeta, setServiceData] = useState (serviceapi)
  return (
    <>
    <section className='services-main-container'>
        <div className='container services-container'>
            <h1 className='main-heading text-center fw-bold'>
                How to send money
            </h1>
            <div className='row'>
                {serviceDeta.map((curElem) => {
                    const{id,logo,title,info} = curElem; 
                    return(<>
                      <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv 'key={id}>
                <i className={`fontawesome-style ${logo}`}></i>
                <h2 className='sub-heading'> {title}</h2>
                <p className='main-hero-para'>
               {info}

                </p>
            </div>
                    </>)
                })}
          
            </div>
        </div>
    </section>
    </>
  )
}

export default Servicess;