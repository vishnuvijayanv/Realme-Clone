import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
function Carousal() {
  return (
    <div >
    <Carousel data-bs-theme="dark" style={{height:'600px'}}>
      <Carousel.Item>
        <img
          height={'600px'}
          className="d-block w-100 "
          src="https://image01.realme.net/general/20231113/1699844137692405939d1638a48a59945712d3e8f3a1f.jpg.webp"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          className="d-block w-100 "
          height={'600px'}
          src="https://image01.realme.net/general/20231116/1700104218282867589de091248ebaccd8ce801f84f32.jpg.webp"
          alt="Second slide"
        />
        <Carousel.Caption style={{textAlign:'justify',marginBottom:'00px'}}>
          <h1>Realme C53</h1>
          <h3>108MP Camera Under 10K</h3>
          <p>*Upto ₹1000Off</p>
          <h2>₹9999 | 4GB+64GB</h2>
          <div>
          <Button style={{borderRadius:'30px',width:'130px'}} variant="dark">Buy Now</Button>{' '}
          <Button style={{borderRadius:'30px',width:'130px'}} variant="light">Learn More</Button>{' '}          </div>
          <p>On Sale Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={'600px'}
          className="d-block w-100"
          src="https://image01.realme.net/general/20231116/17001041673409b1fa9917a1646b6aad9fe596452045e.jpg.webp"
          alt="Third slide"
        />
         <Carousel.Caption style={{textAlign:'justify',marginBottom:'100px'}}>
          <h1>Realme Narzo N55</h1>
          <h3>Sales Champion Of The Year</h3>
          <p>*Upto ₹2000Off</p>
          <h2>₹9999 | 8GB+128GB</h2>
          <div>
          <Button style={{borderRadius:'30px',width:'130px'}} variant="dark">Buy Now</Button>{' '}
          <Button style={{borderRadius:'30px',width:'130px'}} variant="light">Learn More</Button>{' '}          </div>
          <p>On Sale Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            height={'600px'}

          className="d-block w-100"
          src="https://image01.realme.net/general/20231116/1700104260866b75722fd74de449997054c711aff2fdc.jpg.webp"
          alt="Third slide"
        />
         <Carousel.Caption style={{textAlign:'justify',marginBottom:'100px'}}>
          <h1>Realme C55</h1>
          <h3>64MP AI Champion Camera</h3>
          <p>*Upto ₹1000Off</p>
          <h2>₹8999* | 4GB+64GB</h2>
          <div>
          <Button style={{borderRadius:'30px',width:'130px'}} variant="dark">Buy Now</Button>{' '}
          <Button style={{borderRadius:'30px',width:'130px'}} variant="light">Learn More</Button>{' '}          </div>
          <p>On Sale Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
                  height={'600px'}

          className="d-block w-100"
          src="https://image01.realme.net/general/20231116/170010429668935b9eaa971494d9eaf5b56460ff1cb29.jpg.webp"
          alt="Third slide"
        />
         <Carousel.Caption style={{textAlign:'justify',marginBottom:'100px',color:'white'}}>
          <h1>realme narzo 60Pro 5G</h1>
          <h3>120Hz Curved Visiom Display</h3>
          <p>*Upto ₹4000Off</p>
          <h2>₹19999 | 8GB+128GB</h2>
          <div>
          <Button style={{borderRadius:'30px',width:'130px'}} variant="dark">Buy Now</Button>{' '}
          <Button style={{borderRadius:'30px',width:'130px'}} variant="light">Learn More</Button>{' '}
          </div>
          <p>On Sale Now</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className=' container d-flex' style={{fontSize:'13px'}}>
        <div className='  align-items-center justify-content-center'>
            <img src="https://image01.realme.net/general/20230309/1678358962281.png" width={'150px'} alt="" />
            <p className='ms-4'>Daily Lottery</p>
        </div>
        <div >
            <img src="https://image01.realme.net/general/20231024/16981360524202d9137fa54d147229e0cdc4bf7bb1808.png" width={'150px'} alt="" />
            <p className='ms-4'> Coupon Zone</p>
        </div>

        <div >
            <img src="https://image01.realme.net/general/20230309/1678358984609.png" width={'150px'} alt="" />
            <p className='ms-4'>Flash Sale</p>

        </div>
        <div >
            <img src="https://image01.realme.net/general/20230920/1695191744730f9b90faf428b47c494fb9e0d74e5eb4e.png" width={'150px'} alt="" />
            <p className='ms-4'>realme VIP</p>
        </div>
        <div >
            <img src="https://image01.realme.net/general/20230309/1678358993180.png" width={'150px'} alt="" />
            <p className='ms-4'> ₹10,000 </p>

        </div>
        <div >
            <img src="https://image01.realme.net/general/20230309/1678359107140.png" width={'150px'} alt="" />
            <p className='ms-4'>₹10,000 - ₹15,000</p>
            
        </div>
        <div >
            <img src="https://image01.realme.net/general/20230612/1686560163188ca86a393723847cd8d3a0c2976ef794e.png" width={'150px'} alt="" />
            <p className='ms-4'>₹15,000</p>

        </div>
        <div >
            <img src="https://image01.realme.net/general/20231106/1699269997003c839c82c995444ce943430188848023c.png" width={'150px'} alt="" />
            <p className='ms-4'>Audio</p>

        </div>

       
    </div>
{/* Best Sellers */}
    <div className='d-flex justify-content-center align-items-center none'>
      <p style={{fontSize:'50px'}}><i class="fa-solid fa-tag fa-rotate-90 me-2 mt-5"></i><span style={{fontSize:'bold'}}>Best</span> Sellers</p>
    </div>

    <div className='container' style={{height:'600px'}}>
      <div className="row w-100"  >
        <div className="col-lg-6 position-relative" >
          <img width={'100%'} height={'600px'} style={{borderRadius:'10px'}} src="https://image01.realme.net/general/20231115/1700053237654f2a863dfdea048e2abe25bdf7aac5ddf.webp.webp" alt="" />
        </div>
        <div style={{marginTop:'400px'}} className='position-absolute  ms-5 mb-5 f-bottom'>
        <h6>
          <Badge bg='' style={{borderRadius:'40px',backgroundColor:'#ff581a'}}>Upto ₹4,000 Off</Badge>
        </h6>
          <h4 style={{color:'white'}}>realme narzo 60 Pro <br /> 5G</h4>
          <p style={{color:'#707070'}}>Curve into the Next</p>
        <h5 className='mt-3' style={{color:'#ff581a'}}><span style={{fontSize:'13px',color:'#707070'}}>from</span> ₹23,999</h5>
        </div>
        <div className="col-lg-6 position-relative">
          <div className="row">
            <div className="col-lg-12 mb-3" >
              <img width={'100%'} height={'300px'} style={{borderRadius:'10px'}} src="https://image01.realme.net/general/20231115/17000537691055fa30ad928a9494d89ce06711d51a7ea.jpg.webp" alt="" />
            </div>
          <div className='position-absolute mt-5 ms-4 mb-5'>
            <h6>
          <Badge bg='' style={{borderRadius:'40px',backgroundColor:'#ff581a'}}>Upto ₹2,000 Off</Badge>
        </h6>
        <h4>realme narzo N53</h4>
        <p style={{color:'#707070'}}>Sales Champion of the Year</p>
      <h5  style={{color:'#ff581a',marginTop:'95px'}}><span style={{fontSize:'13px',color:'#707070'}}>from</span> ₹8,999</h5>
      </div>
          </div>
          <div className="row">
          <div className="col-lg-12 position-relative" >
            <img width={'100%'} height={'280px'} style={{borderRadius:'10px'}} src="https://image01.realme.net/general/20231115/170005376407876b7cdb1384c4623a5a5f0328a9237ea.jpg.webp" alt="" />
          </div>
          <div className='position-absolute mt-5 ms-4 mb-5'>
            <h6>
          <Badge bg='' style={{borderRadius:'40px',backgroundColor:'#ff581a'}}>Upto ₹3,000 Off</Badge>
        </h6>
        <h4>realme 11 5G</h4>
        <p style={{color:'#707070'}}>Double Ace ,Double Leap</p>
      <h5  style={{color:'#ff581a',marginTop:'95px'}}><span style={{fontSize:'13px',color:'#707070'}}>from</span> ₹18,999</h5>
      </div>

          </div>
        </div>
      </div>
    </div>
{/* Recommenter Productss */}
    <div className='container'>
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <p style={{fontSize:'40px'}}>Recommended Products</p>
      </div>
      <div className='w-100' style={{height:'200px' ,borderRadius:'10px',objectFit:'cover'}}>
       <img height={'200px'} width={'100%'} src="https://image01.realme.net/general/20231116/1700099490512f0556d038f504113bc92e10b059401e1.jpg.webp" alt="" />
      </div>
    </div>

    <div className='container'>
      <div className="row">
        <div className="col-lg-6 d-flex  position-relative" >
          <img   height={'300px'}  src="https://image01.realme.net/general/20231116/17001029151234bfb4ce807c74ae087fdfef672e52711.jpg.webp" alt="" />
        </div>
        <div className='position-absolute mt-5 ms-5 mb-5'>
        <h6>
        <Badge bg='' style={{borderRadius:'40px',backgroundColor:'#ff581a'}}>Upto ₹500 Off</Badge>
      </h6>
          <h4>realme 11x 5G</h4>
          <p style={{color:'#707070'}}>All-Rounder 5G phone</p>
        <h5 className='mt-5' style={{color:'#ff581a'}}>₹14,999</h5>
        </div>

{/* .................................................. */}
        <div className="col-lg-6 d-flex  " >
          <div className='position-relative'>
            <img   height={'300px'}  src="https://image01.realme.net/general/20231116/17001029192983d07327373fc4455bd10aefd771a1b5f.jpg.webp" alt="" />
          </div>
          <div className='position-absolute mt-5 ms-5 mb-5'>
          <h6>
          <Badge bg='' style={{borderRadius:'40px',backgroundColor:'#ff581a'}}>Upto ₹500 Off</Badge>
        </h6>
            <h4>realme 11 5G</h4>
            <p style={{color:'#707070'}}>108MP and 67W Charging</p>
          <h5 className='mt-5' style={{color:'#ff581a'}}>₹18,999</h5>
          </div>
          </div>
      </div>

{/* .................................................. */}

      <div className="row">
      <div className="col-lg-6 d-flex  position-relative" >
          <img   height={'300px'}  src="https://image01.realme.net/general/20231116/1700102924458b7748932898d4ec2b40536cad5e31e19.jpg.webp" alt="" />
        </div>
        <div className='position-absolute mt-5 ms-5 mb-5'>
        <h6>
        <Badge bg='' style={{borderRadius:'40px',backgroundColor:'#ff581a'}}>Upto ₹3000 Off</Badge>
      </h6>
          <h4>realme 11 5G</h4>
          <p style={{color:'#707070'}}>108MP and 67W Charging </p>
        <h5 className='mt-5' style={{color:'#ff581a'}}>₹23,999</h5>
        </div>
{/* .................................................. */}


        <div className="col-lg-6 d-flex " >
          <div className=' position-relative'>
            <img   height={'300px'}  src="https://image01.realme.net/general/20231116/17001029284480379abf586b84658bec8af3ce7d9be2b.jpg.webp" alt="" />
          </div>
          <div className='position-absolute mt-5 ms-5 mb-5'>
          <h6>
          <Badge bg='' style={{borderRadius:'40px',backgroundColor:'#ff581a'}}>Upto ₹1000 Off</Badge>
        </h6>
            <h4>realme 11pro+ 5G</h4>
            <p style={{color:'#707070'}}>200MP OIS SuperZoom Camera</p>
          <h5 className='mt-5' style={{color:'#ff581a'}}>₹27,999</h5>
          </div>
          </div>
      </div>
{/* .................................................. */}

    </div>

    <div className='w-100 container' style={{height:'200px' ,borderRadius:'10px',objectFit:'cover'}}>
       <img height={'200px'} width={'100%'} src="https://image01.realme.net/general/20231115/1700049363372362cebf7b34a485fae8d1c3378a36a0e.jpg.webp" alt="" />
    </div>



    <div className='container'>
      <div className="row">
        <div className="col-lg-6 d-flex  position-relative" >
          <img   height={'300px'}  src="https://image01.realme.net/general/20231116/1700102851033c67d68b4d0b14e3d984e647fb870c161.jpg.webp" alt="" />
        </div>
        <div className='position-absolute mt-5 ms-5 mb-5'>
        
          <h4>realme C51</h4>
          <p style={{color:'#707070'}}>33W Charging Under 10K</p>
        <h5 className='mt-5' style={{color:'#ff581a'}}><span style={{fontSize:'13px',color:'#707070'}}>from</span> ₹8,999</h5>
        </div>

{/* .................................................. */}
        <div className="col-lg-6 d-flex  " >
          <div className='position-relative'>
            <img   height={'300px'}  src="https://image01.realme.net/general/20231116/1700102854939ce40d3e4ab6a469484c6a8375633996f.jpg.webp" alt="" />
          </div>
          <div className='position-absolute mt-5 ms-5 mb-5'>
          <h6>
          <Badge bg='' style={{borderRadius:'40px',backgroundColor:'#ff581a'}}>Upto ₹500 Off</Badge>
        </h6>
            <h4>realme C53</h4>
            <p>108MP Champion Like Never <br /> Before</p>
            <h5 className='mt-5' style={{color:'#ff581a'}}><span style={{fontSize:'13px',color:'#707070'}}>from</span> ₹9,999</h5>
          </div>
          </div>
      </div>
    </div>

    <div className='w-100 container' style={{height:'200px' ,borderRadius:'10px',objectFit:'cover'}}>
       <img height={'200px'} width={'100%'} src="https://image01.realme.net/general/20231115/17000495102374098898d351640d492a2dda035495435.jpg.webp" alt="" />
      </div>

      <div className='container'>
      <div className="row">
        <div className="col-lg-6 d-flex  position-relative" >
          <img   height={'300px'}  src="https://image01.realme.net/general/20231116/1700102863317d50a72a11e844c92bead9337915bd20d.jpg.webp" alt="" />
        </div>
        <div className='position-absolute mt-5 ms-5 mb-5'>
        
          <h4>realme narzo 60X 5G</h4>
          <p style={{color:'#707070'}}>realme Best 5G Phone</p>
        <h5 className='mt-5' style={{color:'#ff581a'}}><span style={{fontSize:'13px',color:'#707070'}}>from</span> ₹12,999</h5>
        </div>

{/* .................................................. */}
        <div className="col-lg-6 d-flex  " >
          <div className='position-relative'>
            <img   height={'300px'}  src="https://image01.realme.net/general/20231116/1700102854939ce40d3e4ab6a469484c6a8375633996f.jpg.webp" alt="" />
          </div>
          <div className='position-absolute mt-5 ms-5 mb-5'>
          <h6>
          <Badge bg='' style={{borderRadius:'40px',backgroundColor:'#ff581a'}}>Upto ₹500 Off</Badge>
        </h6>
            <h4>realme narzo N53</h4>
            <p>Sales Champion of the Year</p>
            <h5 className='mt-5' style={{color:'#ff581a'}}><span style={{fontSize:'13px',color:'#707070'}}>from</span> ₹8,999</h5>
          </div>
          </div>
      </div>
    </div>
    <div className='container'>
      <div className="row">
        <div className="col-lg-6 d-flex  position-relative" >
          <img   height={'300px'}  src="https://image01.realme.net/general/20231116/1700102873921d7264e7678e7409f897b5997f1ee67fd.jpg.webp" alt="" />
        </div>
        <div className='position-absolute mt-5 ms-5 mb-5'>
        
          <h4>realme narzo 60 5G</h4>
          <p style={{color:'#707070'}}>Premium Vegam Leather Design</p>
        <h5 className='mt-5' style={{color:'#ff581a'}}><span style={{fontSize:'13px',color:'#707070'}}>from</span> ₹17,999</h5>
        </div>

{/* .................................................. */}
        <div className="col-lg-6 d-flex  " >
          <div className='position-relative'>
            <img   height={'300px'}  src="https://image01.realme.net/general/20231116/1700102877482d17ba78d883042ee8dd57bd673bd3e03.jpg.webp" alt="" />
          </div>
          <div className='position-absolute mt-5 ms-5 mb-5'>
          <h6>
          <Badge bg='' style={{borderRadius:'40px',backgroundColor:'#ff581a'}}>Upto ₹4000 Off</Badge>
        </h6>
            <h4>realme narzo 60 Pro 5G</h4>
            <p>120Hz Curved Vison Display</p>
            <h5 className='mt-5' style={{color:'#ff581a'}}><span style={{fontSize:'13px',color:'#707070'}}>from</span> ₹23,999</h5>
          </div>
          </div>
      </div>
    </div>

{/* Audio Banner */}
    <div className='w-100 container' style={{height:'200px' ,borderRadius:'10px',objectFit:'cover'}}>
       <img height={'100%'} width={'100%'} src="https://image01.realme.net/general/20231115/17000501124534d5394419ead4dc599ccca6d0c9cafdc.jpg.webp" alt="" />
      </div>

{/* Audio Devices */}

      <div className='container'>
      <div className="row">
        <div className="col-lg-6 d-flex  position-relative" >
          <img   height={'300px'}  src="https://image01.realme.net/general/20231116/1700102977693f8c276195dbf444ab9d5e37ea0c363b3.jpg.webp" alt="" />
        </div>
        <div className='position-absolute mt-5 ms-5 mb-5'>
          <h4>realme Buds Air 5 Pro</h4>
          <p style={{color:'#707070'}}>Coaxial Dual-driver</p>
        <h5 className='mt-5' style={{color:'#ff581a'}}>₹4,999</h5>
        </div>

{/* .................................................. */}
        <div className="col-lg-6 d-flex  " >
          <div className='position-relative'>
            <img   height={'300px'}  src="https://image01.realme.net/general/20231116/170010298098679550cc74bdc495bb94c46ffd29dca21.jpg.webp" alt="" />
          </div>
          <div className='position-absolute mt-5 ms-5 mb-5'>
          
            <h4>realme Buds Air 5</h4>
            <p style={{color:'#707070'}}>Leading ANC Product Series</p>
          <h5 className='mt-5' style={{color:'#ff581a'}}>₹3,699</h5>
          </div>
          </div>
      </div>

{/* .................................................. */}

      <div className="row">
      <div className="col-lg-6 d-flex  position-relative" >
          <img   height={'300px'}  src="https://image01.realme.net/general/20231116/1700102984705fcadea24b0384d78b17ef187c822432b.jpg.webp" alt="" />
        </div>
        <div className='position-absolute mt-5 ms-5 mb-5'>
        
          <h4>realme Buds T300</h4>
          <p style={{color:'#707070'}}>12.4mm Dynamic Bass Driver </p>
        <h5 className='mt-5' style={{color:'#ff581a'}}>₹2,299</h5>
        </div>
{/* .................................................. */}


        <div className="col-lg-6 d-flex " >
          <div className=' position-relative'>
            <img   height={'300px'}  src="https://image01.realme.net/general/20231116/1700102987885b7073a264dff4e2eb814fbef86893867.jpg.webp" alt="" />
          </div>
          <div className='position-absolute mt-5 ms-5 mb-5'>
          
            <h4>realme Buds Wireless 3</h4>
            <p style={{color:'#707070'}}>Show Off That Bass</p>
          <h5 className='mt-5' style={{color:'#ff581a'}}>₹1,799</h5>
          </div>
          </div>
      </div>
{/* .................................................. */}

    </div>

    {/* Tablet & Wearables banner */}

    <div className='w-100 container' style={{height:'200px' ,borderRadius:'10px',objectFit:'cover'}}>
       <img height={'200px'} width={'100%'} src="https://image01.realme.net/general/20231117/17002085261771304f7f97a3c47dfb8a30341f4b3965e.jpg.webp" alt="" />
      </div>
    {/* Tablet & Wearable Devices */}

    <div className='container'>
      <div className="row">
        <div className="col-lg-6 d-flex  position-relative" >
          <img   height={'300px'}  src="https://image01.realme.net/general/20231116/17001029679524dbf5b251798443097a5ca60af2c9d85.jpg.webp" alt="" />
        </div>
        <div className='position-absolute mt-5 ms-5 mb-5'>
          <h4>realme Pad 2</h4>
          <p style={{color:'#707070'}}>Create Bigger,Create Faster</p>
        <h5 className='mt-5' style={{color:'#ff581a'}}>₹19,999</h5>
        </div>

{/* .................................................. */}
        <div className="col-lg-6 d-flex  " >
          <div className='position-relative'>
            <img   height={'300px'}  src="https://image01.realme.net/general/20231116/17001029709599a83963efcc3435b885d0c93c57529ec.jpg.webp" alt="" />
          </div>
          <div className='position-absolute mt-5 ms-5 mb-5'>
          
            <h4>realmePad X</h4>
            <p style={{color:'#707070'}}>Hey Creatives</p>
          <h5 className='mt-5' style={{color:'#ff581a'}}>₹19,999</h5>
          </div>
          </div>
      </div>
    </div>


{/* HighLighted Events */}
<div className='container'>
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <p className='fw-bold' style={{fontSize:'35px '}}>HighLighted Events</p>
      </div>
      <div className='w-100' style={{height:'300px' ,borderRadius:'10px',objectFit:'cover'}}>
       <img height={'300px'} width={'100%'} src="https://image01.realme.net/general/20231115/1700048277217f4187716e21c4891991ef846c5dfae70.jpg.webp" alt="" />
      </div>
    </div>

{/* why shop with realme  */}

<div className='container'>
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <p className='fw-bold' style={{fontSize:'35px '}}>Why Shop With Realme Store</p>
      </div>
      <div className='w-100' style={{height:'300px' ,borderRadius:'10px',objectFit:'cover'}}>
       <img height={'300px'} width={'100%'} src="https://image01.realme.net/general/20231115/1700050384818e134ed7ae2f840e5a72c049cc3a8cd43.jpg.webp" alt="" />
      </div>
      <div className='w-100' style={{height:'400px' ,borderRadius:'10px',objectFit:'cover'}}>
       <img height={'400px'} width={'100%'} src="https://image01.realme.net/general/20231116/1700103060038259e43b23cc74e1288f4400c02977649.png.webp" alt="" />
      </div>
    </div>

  {/* Dare To Leap Section */}

  <div className='container'>
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <p className='fw-bold' style={{fontSize:'35px '}}>Dare To Leap</p>
      </div>
      <div className="row">
        <div className="col-lg-4 ">
         <div> 
         <img  width={'100%'} height={'350px'} style={{borderRadius:'20px'}} src="https://image01.realme.net/general/20230316/1678969834762.jpg.webp" alt="" />
         </div>
        </div>
       
       
        <div className="col-lg-8 position-relative">
          <img width={'100%'} height={'350px'} style={{borderRadius:'20px'}} src="https://image01.realme.net/general/20220920/1663638234748.jpg.webp" alt="" />
        </div>
        
      </div>
      
    </div>


    

    </div>
  )
}

export default Carousal