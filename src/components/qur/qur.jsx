import React, { useEffect, useState } from "react";
import "./qur.css"
import { data } from "react-router-dom";
import Prayer from "./prayer";
import Swipe from "../swiper/Swiper";
const Qur=()=>{


    
  const [praierTimes , setPraiertimes]=useState({})
  const [datetime , setdate]=useState("")
 
  const [city , setcity]=useState("cairo")

    useEffect(()=>{
        const fetchPrayerTimes=async()=>{
          try{
            const response=await fetch(`https://api.aladhan.com/v1/timingsByCity/06-12-2024?city=${city}&country=egypt&method=8`)
            const data_Prayer=await response.json()
            setPraiertimes(data_Prayer.data.timings)
            setdate(data_Prayer.data.date.gregorian.date)
           
            console.log(data_Prayer.data)
          } catch(error){
            console.log(error)
          }
           
        }
        fetchPrayerTimes()
       },[city])




    const cites=[
        {name:"القاهرة" ,value:"Cairo"},
        {name:"الاسكندرية" ,value:"Alexandria"},
        {name:"الجيزة" ,value:"Giza"},
        {name:"المنصورة" ,value:"Mansora"},
        {name:"اسوان" ,value:"Aswan"},
        {name:"الاقصر" ,value:"Luxor"},
        {name:"كفرالشيخ" ,value:"Kafrel-sheikh"},
    
      ]


    return(
        <>
         
           <section className="qur">
            <div className="container">
                <div className="row">
                <h3>اوقات الصلاة</h3>
                    <div className="col-lg-20 ">
                         
                         <div className="time">
                            
                            <div className="name">{datetime}</div>
                            <div className="sel" dir="rtl">

                               <h4>المدينة</h4>
                                 <select  onChange={(e)=> setcity(e.target.value)}>
                                
                                     {cites.map((city)=>(
                                            <option key={city.value} value={city.value}>{city.name}</option>
                                                 ))}
                                   
                                </select>
                                
                            </div>
                            
                         </div>

                      
                         <div className="inner">
                                 
                        <Prayer name="الفجر" time={praierTimes.Fajr}/>
                        <Prayer name="الظهر" time={praierTimes. Dhuhr}/>
                        <Prayer name="العصر" time={praierTimes.Asr}/>
                        <Prayer name="المغرب" time={praierTimes.Maghrib}/>
                        <Prayer name="العشاء"time={praierTimes.Sunrise}/>
                            
                         </div>
                          
                        
                           
                             
                             
                            
                         
                    </div>
                </div>
            </div>
           </section>
        </>
    )
}

export default Qur