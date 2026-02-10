import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './delTafsir.css'

const DelTafsir = () => {
    const { id } = useParams(); 
    const [hadis, setHadis] = useState(null);
    const [surahs, setSurahs] = useState([]);

    // 1. جلب تفسير السورة
    useEffect(() => {
        if (id) {
            fetch(`https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.result) {
                        setHadis(data.result);
                    }
                })
                .catch((error) => console.error("Error fetching Tafsir:", error));
        }
    }, [id]);

    // 2. جلب أسماء السور (تعديل استلام البيانات)
    useEffect(() => {
        fetch("https://api.alquran.cloud/v1/surah")
            .then((res) => res.json())
            .then((data) => {
                // يجب الوصول إلى data.data لأن الـ API يغلف المصفوفة داخل كائن
                setSurahs(data.data); 
            })
            .catch((error) => console.error("Error fetching Surahs:", error));
    }, []);

    // 3. البحث عن السورة (تعديل الحقل من id إلى number)
    const currentSurah = surahs && surahs.length > 0 
        ? surahs.find((surah) => surah.number.toString() === id) 
        : null;

    return (
        <>
            <div dir="rtl" className="deltafsir">
                <div className="container">
                    {/* عرض اسم السورة */}
                    <h1 className="text-center my-4">
                        {currentSurah ? `سورة ${currentSurah.name}` : "جارٍ تحميل اسم السورة..."}
                    </h1>

                    <hr/>

                    {/* عرض التفسير */}
                    {hadis ? (
                        hadis.map((aya, index) => (
                            <div key={index} className="aya-container mb-4">
                                <h5 className="aya-text">
                                    <span className="badge bg-success ml-2">{aya.aya}</span> 
                                    {aya.arabic_text}
                                </h5>
                                <p className="tafsir-text text-muted">
                                    <strong>التفسير: </strong>{aya.translation}
                                </p>
                                <hr/>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">
                            <p>جارٍ تحميل التفسير...</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default DelTafsir;