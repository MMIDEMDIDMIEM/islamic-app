
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import photto from "../assets/Beautiful Al Aqsa Mosque Photo _ JPG Free Download - Pikbest.jpg"
import pho from "../assets/La Mezquita de Hazrat Sultan, Astaná - Kazajistán.jpg"
import phs from "../assets/download (5).jpg"
import phe from "../assets/download (6).jpg"
import phc from "../assets/download (7).jpg"
import "./swiper.css"



// import required modules
import {  Navigation } from 'swiper/modules';

export default function Swipe() {
  return (
    <>
      <div className='col-lg-12  col-sp-2'>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <h1>(إِنَّ اللَّـهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا)</h1>
           
            <img src={photto}/>
        </SwiperSlide>
        <SwiperSlide>
        <h1>(إِنَّ اللَّـهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا)</h1>
       
        <img src={pho}/>
        </SwiperSlide>
        <SwiperSlide>
        <h1>(إِنَّ اللَّـهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا)</h1>
        
            <img src={phs}/>
        </SwiperSlide>
        <SwiperSlide>
        <h1>(إِنَّ اللَّـهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا)</h1>
      
            <img src={phe}/>
        </SwiperSlide>
        
       
      </Swiper>
      </div>
    </>
  );
}
