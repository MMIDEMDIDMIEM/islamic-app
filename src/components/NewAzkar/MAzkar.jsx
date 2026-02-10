import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetalAzkar = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [azkrs, setAzkrs] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // مؤشر الذكر الحالي
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json")
            .then((res) => res.json())
            .then((data) => {
                const result = data[category];
                if (result) {
                    // حل مشكلة أذكار الصباح المتداخلة وتنظيف البيانات
                    const cleanData = result.flat()
                        .filter(item => item.content && item.content !== "stop")
                        .map(item => ({
                            ...item,
                            currentCount: parseInt(item.count) || 1 // تحويل العدد لرقم للعداد
                        }));
                    setAzkrs(cleanData);
                }
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [category]);

    // دالة العداد
    const handleCounter = () => {
        const updatedAzkrs = [...azkrs];
        const currentAzkar = updatedAzkrs[currentIndex];

        if (currentAzkar.currentCount > 1) {
            // إنقاص العداد
            currentAzkar.currentCount -= 1;
            setAzkrs(updatedAzkrs);
            // اهتزاز بسيط للموبايل (اختياري)
            if ("vibrate" in navigator) navigator.vibrate(50);
        } else {
            // إذا وصل العداد لـ 0، ننتقل للذكر التالي
            if (currentIndex < azkrs.length - 1) {
                setCurrentIndex(currentIndex + 1);
                if ("vibrate" in navigator) navigator.vibrate([50, 30, 50]);
            } else {
                alert("أحسنت! لقد أتممت جميع الأذكار في هذا القسم.");
                navigate("/"); // العودة للرئيسية
            }
        }
    };

    if (loading) return <div className="text-center py-5">جارٍ التحميل...</div>;
    if (azkrs.length === 0) return <div className="text-center py-5">لا توجد أذكار.</div>;

    const currentItem = azkrs[currentIndex];

    return (
        <div className="container py-5" dir="rtl">
            <h2 className="text-center mb-4 text-green mt-5 ">{category}</h2>
            
            {/* شريط التقدم العلوي */}
            <div className="progress mb-4" style={{ height: "10px" }}>
                <div 
                    className="progress-bar bg-success" 
                    style={{ width: `${((currentIndex + 1) / azkrs.length) * 100}%` }}
                ></div>
            </div>

            <div 
                className="azkar-card-main shadow-lg p-4 rounded-4 text-center border-0"
                onClick={handleCounter}
                style={{ 
                    cursor: 'pointer', 
                    minHeight: '300px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    transition: '0.3s',
                    backgroundColor: '#fff'
                }}
            >
                <p className="fs-2 mb-4 leading-relaxed" style={{ lineHeight: '1.8' }}>
                    {currentItem.content}
                </p>

                <div className="counter-display mt-auto">
                    <div className="display-1 fw-bold text-primary mb-2">
                        {currentItem.currentCount}
                    </div>
                    <p className="text-muted">اضغط لتسبيح</p>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
                <button 
                    className="btn btn-outline-secondary" 
                    onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                    disabled={currentIndex === 0}
                >
                    السابق
                </button>
                <span className="align-self-center fw-bold">
                    {currentIndex + 1} من {azkrs.length}
                </span>
                <button 
                    className="btn btn-outline-secondary" 
                    onClick={() => {
                        if (currentIndex < azkrs.length - 1) setCurrentIndex(currentIndex + 1);
                    }}
                    disabled={currentIndex === azkrs.length - 1}
                >
                    التالي
                </button>
            </div>
        </div>
    );
};

export default DetalAzkar;