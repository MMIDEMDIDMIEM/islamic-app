import { useEffect, useState } from "react";
import "./hadis.css";

const Hadis = () => {
    const [hadiths, setHadiths] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [book, setBook] = useState("sahih-bukhari"); // الكتاب الافتراضي

    // ضع هنا الـ API Key الخاص بك
    const API_KEY = "$2y$10$S9V93A2Iu7i6p0XmD2v2AeLp7Hw7m1D3v2AeLp7Hw7m1D3"; 

    const fetchHadiths = async () => {
        setLoading(true);
        try {
            // جلب 50 حديث من الكتاب المختار (يمكنك تغيير paginate)
            const response = await fetch(
                `https://hadithapi.com/api/hadiths?apiKey=${API_KEY}&book=${book}&paginate=50`
            );
            const data = await response.json();
            
            if (data.hadiths && data.hadiths.data) {
                setHadiths(data.hadiths.data);
                setCurrentIndex(0); // إعادة المؤشر للبداية عند تغيير الكتاب
            }
        } catch (error) {
            console.error("خطأ في جلب الأحاديث:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHadiths();
    }, [book]);

    const nextHadith = () => {
        if (currentIndex < hadiths.length - 1) setCurrentIndex(currentIndex + 1);
    };

    const prevHadith = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    return (
        <div className="hadith-app py-5" dir="rtl">
            <div className="container">
                <h2 className="text-center mb-4 main-title">✨ السنة النبوية الشريفة</h2>

                {/* قائمة اختيار الكتاب */}
                <div className="books-filter d-flex flex-wrap justify-content-center gap-2 mb-4">
                    <button className={`btn ${book === 'sahih-bukhari' ? 'btn-success' : 'btn-outline-success'}`} onClick={() => setBook('sahih-bukhari')}>صحيح البخاري</button>
                    <button className={`btn ${book === 'sahih-muslim' ? 'btn-success' : 'btn-outline-success'}`} onClick={() => setBook('sahih-muslim')}>صحيح مسلم</button>
                    <button className={`btn ${book === 'abu-dawood' ? 'btn-success' : 'btn-outline-success'}`} onClick={() => setBook('abu-dawood')}>سنن أبي داود</button>
                    <button className={`btn ${book === 'al-tirmidhi' ? 'btn-success' : 'btn-outline-success'}`} onClick={() => setBook('al-tirmidhi')}>جامع الترمذي</button>
                </div>

                <div className="hadith-card shadow-lg bg-white p-4">
                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-success"></div>
                            <p>جارٍ تحميل الأحاديث...</p>
                        </div>
                    ) : hadiths.length > 0 ? (
                        <div className="hadith-content">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span className="badge bg-success">{hadiths[currentIndex].book.bookName}</span>
                                <span className={`status-badge ${hadiths[currentIndex].status.toLowerCase()}`}>
                                    {hadiths[currentIndex].status}
                                </span>
                            </div>

                            <p className="arabic-text">{hadiths[currentIndex].hadithArabic}</p>
                            
                            <hr />
                            <div className="english-section" dir="ltr">
                                <p className="english-text">{hadiths[currentIndex].hadithEnglish}</p>
                            </div>

                            <div className="hadith-info mt-3 text-muted small">
                                <span>رقم الحديث: {hadiths[currentIndex].hadithNumber}</span> | 
                                <span> الباب: {hadiths[currentIndex].chapter.chapterArabic}</span>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center">لم يتم العثور على أحاديث.</p>
                    )}
                </div>

                {/* أزرار التنقل */}
                <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                    <button className="nav-btn" onClick={prevHadith} disabled={currentIndex === 0}>السابق</button>
                    <span className="counter">{currentIndex + 1} / {hadiths.length}</span>
                    <button className="nav-btn" onClick={nextHadith} disabled={currentIndex === hadiths.length - 1}>التالي</button>
                </div>
            </div>
        </div>
    );
};

export default Hadis;