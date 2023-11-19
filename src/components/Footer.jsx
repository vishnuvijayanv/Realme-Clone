import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <div style={{width:'100%' ,height:'300pxx'}}className='container-fluid d-flex justify-content-center align-items-center flex-column mt-5' >
    <div className="container  footer d-flex justify-content-evenly align-items-center w-100">
      <div className="col-lg-2 d-flex flex-column ms-4">
       <p className='fw-bold' style={{fontSize:'15px'}}>Recommended</p>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>realme narzo 60x 5G</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>realme C51</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>realme 11 5G</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>realme 11x 5G</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>realme C53</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>realme narzo 60 5G</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>realme narzo 60 Pro 5G</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>realme 11 Pro 5G</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>realme 11 Pro+ 5G</Link>
        <Link  to={'/'} className='mb-5' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>More phones</Link>

        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>India ( English / INR )</Link>
      </div>
      {/*.....................................*/}
      <div className="col-lg-2 d-flex flex-column ms-4" style={{marginBottom:'84px'}}>
       <p className='fw-bold' style={{fontSize:'15px'}}>Support</p>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>realme VIP</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>realme care+</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>FAQ</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>User Guide</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>Service Centers</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>realme Coins</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>E-waste Management</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>realme Exchange T&C</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>UI 4.0</Link>
      </div>

            {/*.....................................*/}

      <div className="col-lg-2 d-flex flex-column ms-4" style={{marginBottom:'144px'}}>
       <p className='fw-bold' style={{fontSize:'15px'}}>About realme</p>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>Our Brand </Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>Retail Store</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>Declaration</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>realmeow</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>Disclosure</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>Integrity and Anti-corruption</Link>
       
      </div>
            {/*.....................................*/}

            <div className="col-lg-2 d-flex flex-column ms-4" style={{marginBottom:'184px'}}>
       <p className='fw-bold' style={{fontSize:'15px'}}>Contact realme</p>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>HR: HR@realme.com</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>PR: indiapr@realme.com</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>Legal: legal.in@realme.com</Link>
        <Link  to={'/'} className='mb-2' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}>Marketing: marketing.in@realme.com</Link>
        
       
      </div>

            {/*.....................................*/}

      <div className="col-lg-2 d-flex flex-column ms-4 " style={{marginBottom:'184px'}}>
       <Button className=' fw-bold ms-3' style={{borderRadius:'25px',width:'170px'}} variant="outline-dark"><i class="fa-sharp fa-solid fa-headset"></i> CHAT SUPPORT</Button>
       <p className='ms-5' style={{color:'#707070 ',fontSize:'11px',textAlign:'justify' }}>9:00-21:00, MON-SUN <br />
       <span className='ms-3'> Including Holidays</span></p>
        <Link  to={'/'} className='mb-2 fw-bold ms-5' style={{color:'black' ,textDecoration:'none' ,fontSize:'16px',marginTop:'-15px'}}>1800 102 2777</Link>
       <div className='d-flex mt-4'>
          <Link  to={'/'} className='mb-2 fw-bold me-3 ms-4' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          <Link  to={'/'} className='mb-2 me-3' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
          <Link  to={'/'} className='mb-2 me-3' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}><i class="fa-brands fa-youtube fa-2x"></i></Link>
          <Link  to={'/'} className='mb-2 ' style={{color:'black' ,textDecoration:'none' ,fontSize:'11px'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>

       </div>
      </div>
    </div>
    <div className='d-flex  w-75 mb-5' style={{borderTop:" 1px solid #707070"}}>
      <hr />
        <div className='d-flex justify-content-between'>
          <p style={{float:'left',fontSize:'11px',color:'#707070'}} color='black'>© 2018-2023 realme. All Rights Reserved.</p>
          <div className='d-flex ' style={{float:'right',color:'#707070',marginLeft:'410px'}}>
            <Link  to={'/'} className='mb-2  me-3 ms-4' style={{color:'#707070' ,textDecoration:'none' ,fontSize:'11px'}}>User Agreement&nbsp;&nbsp;|</Link>
            <Link  to={'/'} className='mb-2 me-3' style={{color:'#707070' ,textDecoration:'none' ,fontSize:'11px'}}>&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;|</Link>

            <Link  to={'/'} className='mb-2 me-3' style={{color:'#707070' ,textDecoration:'none' ,fontSize:'11px'}}>&nbsp;&nbsp;Terms of Sales&nbsp;&nbsp;|</Link>

            <Link  to={'/'} className='mb-2 ' style={{color:'#707070' ,textDecoration:'none' ,fontSize:'11px'}}>Warrenty Terms</Link>
  
         </div>
        </div>

      </div>
    
  </div>
  
  )
}

export default Footer