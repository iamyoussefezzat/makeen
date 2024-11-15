import { Container, Row, Col } from 'react-bootstrap'
import Footer from './Footer';
import 'swiper/css';
import 'animate.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper/modules";

// icons
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import 'swiper/css';
import "../App.css"






const Home = () => {

  
  
  const [counter,setCounter]=useState(false)
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true
   
  }
    


  return (
      <div className='body'>  
     
     <section className="bannar">
        <Container>
          <Row >  
            <Col md={7} sm={12} className="bannartext animate__animated animate__fadeInLeft animate__delay-0.1s animate-duration: 2s" >
                  <h2>عن حياتك بلا دخان </h2>

                  <h5>كل نفخة تقرب النهاية...</h5>
                  <h6> يعد وباء التبغ أكبر التهديدات التي تهدد الصحة العامة ويشكل خطرا تحديدا على الأطفال والمراهقين؛حيث يتعرضون لمخاطر جسيمة نتيجة تدخين السجائر أو التعرض للتدخين السلبي بسبب طبيعية أجسامهم وحساسيتهم العالية.
                  </h6>
              <HashLink to="/#latest"><button>  الفوائد الصحية للاقلاع عن التدخين </button></HashLink>
            </Col>
            <Col md={5} sm={12} className="bannarimgs animate__animated animate__fadeInRight animate__delay-0.1s animate-duration: 2s " >
             
              <img src="images\Asset 2.png" alt="" className="laptop" width={"250px"} />
              
            </Col>
          </Row>
        </Container>
      </section>
  
   
    

   
      <section className="homesec4" id="process">
      <ScrollTrigger onEnter={()=> setCounter(true)} onExit={()=> setCounter(false  )}>
        <h3> ارقام واحصائيات عن التدخين </h3>
        <img src="images/623506fac432155edb494f48_Topology-2%20(1).svg" alt="" className="waves" />
        <div className="divLeft animate__animated animate__fadeInUp animate__delay-0.1s ">
          <SmokingRoomsIcon className='ico'/>
          <div>
            <h5>نسب الوفيات</h5>
            <p>   يقتل أكثر من   
            { counter &&
               <CountUp start={0}
                   end={8}
                   duration={2.75}
                   className='counter'
                   >
                   </CountUp>}مليون  
                   من متعاطي التبغ في العالم البالغ عددهم 1,3 مليار شخص في البلدان المنخفضة</p>
          </div>
        </div>
        <div className="divRight animate__animated animate__fadeInUp animate__delay-0.5s ">
          <SmokingRoomsIcon className='ico'/>
          <div>
            <h5> نسب الوفيات</h5>
            <p> وأكثر من 
            { counter &&
               <CountUp start={0}
                   end={7}
                   duration={2.75}
                   className='counter'
                   > 
                   </CountUp>}مليون
                  وفاة من هذه الوفيات ناجمة عن تعاطي التبغ المباشر</p>
          </div>
        </div>
        <div className="divLeft animate__animated animate__fadeInUp animate__delay-1.0s animate-duration: 2s">
          <SmokingRoomsIcon className='ico'/>
          <div>
            <h5>نسب الوفيات</h5>
            <p> بينما تقع نحو 
            { counter &&
               <CountUp start={0}
                   end={1.3}
                   duration={2.75}
                   className='counter'
                   > 
                   </CountUp>}مليون
                
                   وفاة نتيجة تعرض غير المدخنين للتدخين غير المباشر
                
                </p>
          </div>
        </div>
        <div className="divRight animate__animated animate__fadeInUp animate__delay-1.5s animate-duration: 2s">
        <SmokingRoomsIcon className='ico'/>
          <div>
            <h5>نسب المدخنين</h5>
            <p>يعيش نحو
            { counter &&
               <CountUp start={0}
                   end={80}
                   duration={2.75}
                   className='counter'
                   > 
                   </CountUp>}%
               من متعاطي التبغ في العالم البالغ عددهم 1,3 مليار شخص في البلدان المنخفضة</p>
          </div>
        </div>
        <div className="divLeft animate__animated animate__fadeInUp animate__delay-1.0s animate-duration: 2s">
          <SmokingRoomsIcon className='ico'/>
          <div>
            <h5>نسب المدخنين</h5>
            <p>  في مصر، تُقدر نسبة المدخنين بحوالي
            { counter &&
               <CountUp start={0}
                   end={24}
                   duration={2.75}
                   className='counter'
                   > 
                   </CountUp>}%
                     من إجمالي السكان.</p>
          </div>
         </div>
         <div className="divRight animate__animated animate__fadeInUp animate__delay-1.5s animate-duration: 2s">
        <SmokingRoomsIcon className='ico'/>
          <div>
            <h5>نسب المدخنين</h5>
            <p>في السعودية، حوالي 
            { counter &&
               <CountUp start={0}
                   end={22}
                   duration={2.75}
                   className='counter'
                   > 
                   </CountUp>}%
                   من الرجال مدخنين، مع زيادة ملحوظة في التدخين بين الشباب.</p>
          </div>
        </div>

          </ScrollTrigger>
      </section>

      <section className="homesec2" id='links'>

<Container>
  <Row>
    <Col md={12} sm={12}>
    <h2 className=" wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">  في اطار استخدام التكنولوجيا في التوعية : </h2>
  <p className='slidp'> يتمثل المشروع الخاص بينا في إنشاء أداة بصرية لمساعدة الطلاب على فهم المخاطر التدخين عبر لعبة تفاعيلية وكيف يتأثر الفرد بالاختيارات التي تقدمه له الحياة وطريقة التفكير</p>

<HashLink className='btn-l' to="/Game">
        <button class="btn-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="arr-2"
        viewBox="0 0 24 24"
      >
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
      <span class="text">المشروع </span>
      <span class="circle"></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="arr-1"
        viewBox="0 0 24 24"
      >
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
    </button>
           </HashLink>

      
    </Col>




           
      </Row>
 </Container>



      </section>


      <section className="homesec5" id="latest">
   

      <Container>
        <Row>
          <Col md={12} sm={12}>
          <h2 className=" wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s"> الفوائد الصحية للاقلاع عن التدخين </h2>
        <p className='slidp'> يمكن لأي شخص الاستفادة من الإقلاع عن التدخين بغض النظر عن المدة التي استمر فيها التدخين. وفيما يلي بعض الفوائد الصحية التي ستتمتع بها بعد 20 دقيقة من الإقلاع عن التدخين.

</p>
          
          </Col>
          </Row>
       </Container>
       
          
   
       <div className="slider-container">

       <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper wow fadeInUp" 
        >

                 

                            <SwiperSlide className='slid'> 

                              <h4>  <AccessTimeIcon className='icontime'/>  بعد   
                            {<CountUp start={0}
                                  end={20}
                                  duration={2.75}
                                  className='slidcounter'
                                  >
                                  </CountUp>}
                                    
                                  دقيقة من الإقلاع عن التدخين</h4>

                          

                              <img src='images\4850774.png'/>

                              <p> ينخفض ​​ضغط دمك إلى المستوى الطبيعي.
                              </p>
                              <p>
                              ترتفع درجة حرارة اليدين والقدمين إلى المستوى الطبيعي.

                              </p>
                            </SwiperSlide>

                            <SwiperSlide className='slid'> 

                                        <h4> <AccessTimeIcon className='icontime'/> بعد   
                                        {<CountUp start={0}
                                            end={8}
                                            duration={2.75}
                                            className='slidcounter'
                                            >
                                            </CountUp>}
                                              
                                            ساعات من الإقلاع عن التدخين</h4>



                                        <img src='images\pngtree-co2-emissions-icon-png-image_6573856.png'/>

                                        
                                        <p>
                                        ينخفض ​​مستوى أول أكسيد الكربون (غاز سام عديم اللون والرائحة ينطلق إلى مجرى الدم عند تدخين السجائر) في دمك إلى المعدل الطبيعي.

                                        </p>
                            </SwiperSlide>

                            <SwiperSlide className='slid'> 

                            <h4> <AccessTimeIcon className='icontime'/> بعد   
                            {<CountUp start={0}
                                end={24 }
                                duration={2.75}
                                className='slidcounter'
                                >
                                </CountUp>}
                                  
                                ساعة من الإقلاع عن التدخين</h4>



                            <img src='images\man-feels-heartache-suffering-from-cardio-ailments-and-clutching-chest-during-attack-png.png'/>

                            
                            <p>
                            يبدأ خطر إصابتك بنوبة قلبية بالانخفاض.

                            </p>
                            </SwiperSlide>

                            <SwiperSlide className='slid'> 

                            <h4> <AccessTimeIcon className='icontime'/> من أسبوعين إلى ثلاثة أشهر بعد الإقلاع عن التدخين	
</h4>



                            <img src='images\imgbin-circulatory-system-cardiovascular-disease-artery-capillary-heart-heart-x2aQcuzQq0Z1bb3iEyVfPaRJQ.png'/>

                            <p>تتحسن الدورة الدموية لديك.

                            </p>
                            <p>
                            تبدأ رئتيك بالعمل بشكل أفضل بنسبة
                            
                            {<CountUp start={0}
                                  end={30}
                                  duration={2.75}
                                  className='slidcounter'
                                  >
                                  </CountUp>}
                             
                             %.

                            </p>
                            </SwiperSlide>

                            <SwiperSlide className='slid'> 

                            <h4> <AccessTimeIcon className='icontime'/> من 1 إلى 9 أشهر بعد الإقلاع عن التدخين	
                              </h4>



                            <img src='images\Energy-Icon-300x300.png'/>

                            <p>    يقل السعال واحتقان الجيوب الأنفية وضيق التنفس لديك.


                            </p>
                            <p>
                            لديك المزيد من الطاقة.

                            </p>
                            <p>
                            يتم تقليل خطر الإصابة بالعدوى.

                            </p>
                            </SwiperSlide>



                            <SwiperSlide className='slid'> 

                            <h4> <AccessTimeIcon className='icontime'/> بعد   
                            {<CountUp start={0}
                                end={1}
                                duration={2.75}
                                className='slidcounter'
                                >
                                </CountUp>}
                                  
                                عام من الإقلاع عن التدخين</h4>



                            <img src='images\heart-01.png'/>

                        
                            <p>
                            خطر الإصابة بأمراض القلب لديك أقل.

                            </p>
                            </SwiperSlide>



                            <SwiperSlide className='slid'> 

                            <h4>  <AccessTimeIcon className='icontime'/> بعد   
                            {<CountUp start={0}
                                end={5 }
                                duration={2.75}
                                className='slidcounter'
                                >
                                </CountUp>}
                                  
                                سنوات  من الإقلاع عن التدخين</h4>



                            <img src='images\1000_F_160573631_M1q9HoDrTj0a3ApZbCgXT9MVE0PM5nJI.png'/>

                          
                            <p>
                            خطر إصابتك بالسكتة الدماغية هو نفسه بالنسبة لشخص غير مدخن، أي أقل بأربع مرات مما كان عليه عندما كنت مدخنًا.

                            </p>
                            </SwiperSlide>

                              <SwiperSlide className='slid'> 


                                    <h4> <AccessTimeIcon className='icontime'/> بعد   
                                    {<CountUp start={0}
                                        end={10 }
                                        duration={2.75}
                                        className='slidcounter'
                                        >
                                        </CountUp>}
                                          
                                        سنوات  من الإقلاع عن التدخين</h4>



                                    <img src='images\lung-cancer-screening-questions-answered.png'/>

                                    <p>    إن خطر الوفاة بسبب سرطان الرئة لديك أقل بنسبة
                                      
                                    {<CountUp start={0}
                                  end={50}
                                  duration={2.75}
                                  className='slidcounter'
                                  >
                                  </CountUp>} %
                                       من خطر الوفاة بسبب الشخص الذي يستمر في التدخين.
 
                                    </p>
                                    <p>
                                    يقل خطر إصابتك بسرطان الفم، والحلق، والمريء، والمثانة، والكلى، والبنكرياس.

                                    </p>
                            </SwiperSlide>


                          <SwiperSlide className='slid'> 

                          <h4> <AccessTimeIcon className='icontime'/>  بعد   
                          {<CountUp start={0}
                              end={15 }
                              duration={2.75}
                              className='slidcounter'
                              >
                              </CountUp>}
                                
                              عامًا   من الإقلاع عن التدخين</h4>



                          <img src='images\heart-01.png'/>

                     
                          <p>
                          خطر الإصابة بأمراض القلب لديك هو نفس خطر الإصابة لدى غير المدخنين.

                          </p>
                          </SwiperSlide>

                                                    

                                          
                 
          </Swiper>
        
       </div>
  
          
       
 
     
  
      
      
       
       
        



             
  
      </section>
     

      <section className='sec6' id='contact'>
        <Container>
          <Row>

            <Col   className="con">

              <img src="images\WhatsApp Image 2024-09-01 at 18.01.23_03bff219.jpg" alt=""  width={"230px"} height={"270px"}/>

                <div className='contxt'>
                رنا جابر 
                </div>

                <p>  باحثة عن المعلومات  </p>
              <div className='detil'>

              <HashLink to="/#process"> <LinkedInIcon /> </HashLink>
              <HashLink to="/#process"> <GitHubIcon /> </HashLink>
              <HashLink to="/#process"> <EmailIcon /> </HashLink>
             
              </div> 
            
            
            </Col>

            <Col   className="con">

            <img src="images\WhatsApp Image 2024-01-20 at 19.42.48_9f2d7cb5.jpg" alt="" width={"230px"} height={"270px"}/>


            <div className='contxt'>
                يوسف محمد عزت
                </div>

              <p> مطور الويب  </p>

            <div className='detil'>
            <HashLink to="http://www.linkedin.com/in/youssef-m-ezzat-63412b300"> <LinkedInIcon /> </HashLink>
            <HashLink to="https://github.com/iamyoussefezzat/makeen"> <GitHubIcon /> </HashLink>
            <HashLink to="youssefm.ezzat99@gmail.com"> <EmailIcon /> </HashLink>
             
              </div> 
            
            
            </Col>

            <Col   className="con">

                <img src="images\WhatsApp Image 2024-09-01 at 18.01.23_838cd0ce.jpg" alt=""  width={"230px"} height={"270px"}/>


                <div className='contxt'>
                     محمد محمد الصياد 
                    </div>
                
                    <p> مطور اللعبة </p>

                <div className='detil'>
                <HashLink to="/#process"> <LinkedInIcon /> </HashLink>
                <HashLink to="/#process"> <GitHubIcon /> </HashLink>
                <HashLink to="/#process"> <EmailIcon /> </HashLink>
                
                  </div> 


            </Col>
          


         </Row>
        </Container>
      </section>
     

      <Footer />
    </div>
  )
}

export default Home
