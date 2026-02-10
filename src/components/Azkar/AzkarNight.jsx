// import { useEffect, useState } from "react";
// import "/src/components/Azkar/delAzkar.css";

// const AzkarNight = () => {
//     const [azkrs, setAzkrs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const api = "https://alquran.vip/APIs/azkar";

//     useEffect(() => {
//         fetch(api)
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data["أذكار المساء"]) {
//                     // تحويل النص (مثل "3 مرات") إلى رقم ليسهل طرحه
//                     const formattedData = data["أذكار المساء"].map(item => ({
//                         ...item,
//                         currentCount: parseInt(item.count) || 1
//                     }));
//                     setAzkrs(formattedData);
//                 }
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//                 setLoading(false);
//             });
//     }, []);

//     // دالة لتقليل العداد عند النقر على بطاقة الذكر
//     const handleDecrement = (index) => {
//         const updatedAzkrs = [...azkrs];
//         if (updatedAzkrs[index].currentCount > 0) {
//             updatedAzkrs[index].currentCount -= 1;
//             setAzkrs(updatedAzkrs);
//         }
//     };

//     return (
//         <div className="azkar-section" dir="rtl">
//             <h2 className="section-title">أذكار المساء</h2>
            
//             <div className="azkar-card-container">
//                 {loading ? (
//                     <div className="loader">جارٍ تحميل الأذكار...</div>
//                 ) : (
//                     azkrs.map((a, index) => (
//                         <div 
//                             className={`detail-azkar ${a.currentCount === 0 ? 'completed' : ''}`} 
//                             key={index}
//                             onClick={() => handleDecrement(index)}
//                         >
//                             <div className="head">
//                                 <div className="head-del">
//                                     <h5>المتبقي</h5>
//                                     <div className="count-circle">
//                                         {a.currentCount}
//                                     </div>
//                                 </div>
//                                 <div className="head-del1">
//                                     <p className="category-tag">{a.category}</p>
//                                 </div>
//                             </div>
                            
//                             <h3 className="azkar-content">{a.content}</h3>
                            
//                             {/* إضافة وصف أو فضل الذكر إذا وجد */}
//                             {a.description && (
//                                 <p className="azkar-desc">{a.description}</p>
//                             )}
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AzkarNight;