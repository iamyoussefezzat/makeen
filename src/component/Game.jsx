import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import "../App.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper/modules";
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';

// icons

import GamesIcon from '@mui/icons-material/Games';
import AddIcon from '@mui/icons-material/Add';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import InterestsIcon from '@mui/icons-material/Interests';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import Footer from './Footer';


const Game = () => {










  return (

    <div className="game">

      <section className='games1'>
      <h2>
        المشروع
      </h2>

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

          

                     <SwiperSlide className='gamedes'> 

                     <div >
                    لعبة تعليمية تفاعيلية تعتمد علي الويب ومصممة لطلاب المدارس الابتدائية والإعدادية وثانوية, وهو مشروع قمنا بتطويره تحت مسمي فريق " مستكشفوالمخاطر" 
                    </div>
                                
                     </SwiperSlide>

                    <SwiperSlide className='gamedes'> 

<div >نحن نقدم رحلة مغامرة في دورة الحياة فرد وعلاقته بتدخين والتحديات التي يمكن أن يواجها من مغريات في الاختيارات المتاحة له والتعرض مستمر لخيارات معينة يزيد من قو الإغراء التي تكمن في التأثيرات العميق لفرد سواء بالشكل الإيجابى أو سلبى. 
</div>
           
                    </SwiperSlide>

                      <SwiperSlide className='gamedes'> 

                      <div >
                      يعالج هذا المشروع تحدى تثقيف الطلاب حول أضرار التدخين وأنواعه و ما مدي الأضرار على جسم الإنسان لفهم ومكافحة تأثيرالتى يعاني منها الفرد والبيئة لما تسببه التدخين من أضرار وذلك من خلال لعبة التفاعيلية والمحاكاة وسرد القصص الجذابة ودمج بيانات 
                      </div>
                                
                      </SwiperSlide>

                      <SwiperSlide className='gamedes'> 

                      <div >
                      نزود الطلاب بالمعرفة والدافع لاتخاذ قرارات مستنيرة بشأن الحفاظ على حياتهم مما يساهم في نهاية المطاف في نشأة جيل أكثر توعية بمخاطر التبغ.
                      </div>
                                
                      </SwiperSlide>

             

                                   
          
   </Swiper>
 
</div>
       
      </section>

      <section className='games2'>

        
          <Container>

              <Row>

        
         
         

            <Col md={6} sm={12} lg={6} className='game2Col'>

                    <h1>
                    المشروع النهائي 
                

                  </h1>

                  <HashLink to="https://joezzat.itch.io/journey-through-the-smoke-data"><button>    رابط اللعبة  </button></HashLink>  


          
          
            </Col>  

          
          </Row>
          </Container>

         
      </section>

      <section className="homesec4" id="process">
     
        <h3> كيفية تعاملنا مع اللعبة     </h3>
       


            <div className="divLeft animate__animated animate__fadeInUp animate__delay-0.1s ">
            
                  <div className='divs3'>
                

                      <p> <AddIcon className='ico'/> قد تضمنت استجابتنا لتطوير لعبة وقد صممت هذه الأداة الشاملة لإشراك طلاب المدارس الابتدائي والإعدادي والثانوية في رحلة تفاعيلية عبر حياة شخص توازي ما يحدث على أرض الواقع للأطفال والمراهقين , مع التركيز بشكل خاص على إظهار التأثير العميق لتغيرات التي تحدث لشخص.</p>
                    
                </div>

            </div>

            <div className="divRight animate__animated animate__fadeInUp animate__delay-0.5s ">

            <div className='divs3'>
                  
                  <p>  <TripOriginIcon className='ico'/>   ينطلق المستخدمون " مستكشفو المخاطر" في رحلة تعليمي تتألف من مستويات متعددة ويتكون كل منها من عنصرين أساسيين: مرحلة التعلم ومرحلة التفاعل.</p>
                
            </div>

            </div>

            <div className="divLeft animate__animated animate__fadeInUp animate__delay-1.0s animate-duration: 2s">

                    <div className='divs3'>
                            <h1>   <TripOriginIcon className='ico'/> كيفية تعاملنا مع اللعبة  </h1>
                            <p>تبدأ الرحلة بتصور لتعقيدات لمخاطر التدخين بشكل غير مباشر في البداية مما يمضمن فهم المستخدمون لمفاهيمها الأساسية</p>
                           
                    </div>

            </div>

            <div className="divRight animate__animated animate__fadeInUp animate__delay-1.0s animate-duration: 2s">

<div className='divs3'>
        <h1>   <ModeStandbyIcon className='ico'/>الهدف الأساسي من المشروع</h1>

        <p> تثقيف وتمكين الأجيال القادمة من خلال فهم عميق لمخاطر وسلبيات التدخين على الفرد

لتحقيق هذه الرؤية, استفدنا من مفاهيم التصميم المادي, ونفذنا بنية متجانسة, واتبعنا نموذج تطوير متاحا علي الأجهزة لديهم
</p>
      
</div>

</div>

<div className="divLeft animate__animated animate__fadeInUp animate__delay-1.0s animate-duration: 2s">
<div className='divs3'>
  <h1>  <InterestsIcon className='ico'/> نأمل في تحقيق </h1>

      <p>
          هو جعل تعليم بشكل أكثر متعة وطريقة غير تقليدية عن مشكلة "أضرار ومخاطر التدخين " تهدد الصحة بشكل كبير, اعتمادا على المنهج التفاعلي والأساليب التعليم الحديثة وذلك من خلال توفير منصة تجمع بين التعليم والتجارب التفاعيلية التي تهدف إلى تعزيز تقدير أهمية صحة الجسم وزيادة الوعى بعواقب ومخاطر التدخين المختلفة  التي تؤثر على المراهقين والأطفال 
         في النهاية نطمح إلي إلهام الطلاب ليصبحوا دعاة للحفاظ علي صحة أجسامهم وأيضا البيئة من تلوث التبغ والتدخين والاستدامة 
      </p>

    
  
</div>
</div>
        
    
      </section>

   
      <section className='games4'>
          <div>
              <h1>كيف قومنا بتطوير هذا المشروع</h1>

              


          </div>

          <Swiper
              slidesPerView={1}
              spaceBetween={30}
              freeMode={false}
              pagination={{
                clickable: false,
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

          

                     <SwiperSlide className='gameslid' > 


                           <img src="images\png-transparent-unity-technologies-game-engine-video-game-developer-unity-game-angle-electronics-thumbnail.png" alt=""  />
                 

                     </SwiperSlide>

                     <SwiperSlide className='gameslid' > 


                             <img src="images\pngwing.com.png" alt=""  />


                      </SwiperSlide>

                      <SwiperSlide className='gameslid' > 


<img src="images\kyKz5.png" alt=""  />


</SwiperSlide>

                                      
                     

                                   
          
                       </Swiper>
      
      </section>

      <Footer/>
    </div>


  )
}

export default Game
