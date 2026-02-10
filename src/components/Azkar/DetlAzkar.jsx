// import  { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const DetalAzkar = () => {
//     const [azkrs, setAzkrs] = useState([]);
//     const api = "https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json";

//     useEffect(() => {
//         fetch(api)
//             .then((res) => res.json())
//             .then((data) => {
//                 let combinedAzkrs = [];
//                 if (data["أذكار الصباح"]) {
//                     combinedAzkrs = [...combinedAzkrs, ...data["أذكار الصباح"]];
//                 }
//                 if (data["أذكار المساء"]) {
//                     combinedAzkrs = [...combinedAzkrs, ...data["أذكار المساء"]];
//                 }
//                 setAzkrs(combinedAzkrs);
//             })
            
//             .catch((error) => console.error("Error fetching data:", error));
//     }, []);
    
//          console.log(azkrs)
    

//     const params = useParams();
                
//             console.log(azkrs)
           
//     return (
//        <>

        


                  
//         <div className="azkar-card">
//              <h1>{params.category}</h1>
//             {azkrs.length > 0 ? (
//                 azkrs.map((a, index) => (
//                     <div className="  detail-azkar" key={index}>
//                         <div className="head">
                            
//                            <div dir="rtl" className="head-del">
//                             <h5>عددالمرات</h5>
//                             <p>{a.count}</p>
//                            </div>
//                            <div className="head-del1">
//                               <p>{a.category}</p>
//                            </div>
//                         </div>
//                         <h1> {a.content}</h1>
//                     </div>
//                 ))
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div> 

            

       

        
       
//        </>

        
//     );
// };

// export default DetalAzkar;
