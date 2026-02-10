import React, { useEffect, useState } from "react";
import "./Quraan.css"
import { Link } from "react-router-dom";
import Swipe from "../swiper/Swiper";

const Quraan = () => {
    const api = "https://api.alquran.cloud/v1/surah"
    const [quraanData, setQuraanData] = useState([]);
    // 1. حالة لتخزين نص البحث
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => setQuraanData(data.data))
            .catch((err) => console.log(err))
    }, [])

    // 2. تصفية البيانات بناءً على نص البحث (بالعربي أو الإنجليزي)
    const filteredSurahs = quraanData.filter((surah) => {
        return (
            surah.name.includes(searchTerm) || 
            surah.englishName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <>
            <Swipe />
            <section dir="rtl" className="Qurran">
                <div className="container">
                    <div className="work">
                        <h2>القرآن الكريم</h2>
                        
                        {/* 3. صندوق البحث */}
                        <div className="search-container" style={{ margin: "20px 0", textAlign: "center" }}>
                            <input
                                type="text"
                                placeholder="ابحث عن السورة..."
                                className="search-input"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    padding: "10px 20px",
                                    width: "100%",
                                    maxWidth: "400px",
                                    borderRadius: "25px",
                                    border: "1px solid green",
                                    outline: "none"
                                }}
                            />
                        </div>

                        <div className="col-lg-12 col-lg-10">
                            <div className="mo">
                                {/* 4. استخدام المصفوفة المصفاة filteredSurahs بدلاً من quraanData */}
                                {filteredSurahs.length > 0 ? (
                                    filteredSurahs.map((b) => (
                                        <Link className="ALL" to={`/${b.number}`} key={b.number}>
                                            <div className="ones">
                                                <p>{b.number}</p>
                                                <h3 className="text">{b.name}</h3>
                                                <h3>{b.englishName}</h3>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <p style={{ textAlign: "center", gridColumn: "1/-1" }}>لا توجد نتائج مطابقة لبحثك.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Quraan;