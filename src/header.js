import React from 'react'

const Header = () => {
  return (
    <>
    <header>
        <section className='container main-hero-container'>
          <div className='row'>
            <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column
            align-items-start'>
                <h1 className='dispaly-2'> Online Payment Made <br/> Easy For You </h1>
                <p className='main-hero-para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
               odio. Duis nec ullamcorper nisl, ut convallis nunc. Vestibulum sollic          
                massa vitae pulvinar. Maecenas in turpis elit. Curabitur non lacinia li
                eget lacinia nisi. Etiam quis 
                 </p>
                 <h3> Get early access for you</h3>
                 <div className='input-group mt-3' >
                    <input type='text'
                    placeholder='Enter Your Email ' 
                    className='rounded-pill w-50 p-2 me-3 form-control-text'/>
                    <div className='input-group-button'>Get it now</div>
                 </div>

            </div>
             {/*--------------------------------- main header right side---------------------------------------- */}

             <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images'>
             <img src='./images/pic-222.jpg' alt='hero' className='img-fluid' />
                <img src='./images/pic-1.jpg' alt='hero' className='img-fluid mainhero-im2' />
             </div>
          </div>
        </section>
    </header>
    
    </>
  )
}

export default Header