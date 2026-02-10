import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import QuraanAudio from "./QurannAudio";
import "./quraanDel.css";

const Details = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    const nextHandler = () => { if (Number(id) < 604) navigate(`/${Number(id) + 1}`); };
    const prevHandler = () => { if (Number(id) > 1) navigate(`/${Number(id) - 1}`); };

    useEffect(() => {
        if (id) {
            setLoading(true);
            fetch(`https://api.alquran.cloud/v1/page/${id}/quran-uthmani`)
                .then((res) => res.json())
                .then((data) => {
                    setPageData(data.data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [id]);

    return (
        <div className="allQUR" dir="rtl">
            {/* عرض اسم السورة كعنوان */}
            <div className="text" style={{boxShadow: 'none', border: 'none', background: 'transparent'}}>
                 <h3>{pageData ? `سورة ${pageData.ayahs[0].surah.name}` : "جارٍ التحميل..."}</h3>
            </div>
            
            {/* تمرير رقم السورة للمشغل الصوتي ليعمل ياسر الدوسري صح */}
            <QuraanAudio surahId={pageData?.ayahs[0]?.surah?.number} />  
            
            {/* تطبيق تصميمك الجديد هنا */}
            <div className="text">
                {!loading && pageData ? (
                    pageData.ayahs.map((ayah, index) => (
                        <p key={index} style={{display: 'inline'}}>
                            {ayah.text} 
                            <span>{ayah.numberInSurah}</span>
                        </p>
                    ))
                ) : (
                    <p className="loading-text">جارٍ تحميل الصفحة {id}...</p>
                )}
            </div>

            {pageData && (
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                    <div className="pagination-buttons">
                        <button className="btn btn-primary m-2" onClick={nextHandler}>الصفحة التالية</button>
                        <span style={{ fontSize: "1.2rem", fontWeight: "bold", background: 'none', color: 'black', border: 'none' }}>
                            صفحة: {pageData.number}
                        </span>
                        <button className="btn btn-primary m-2" onClick={prevHandler}>الصفحة السابقة</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;