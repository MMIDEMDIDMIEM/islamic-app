import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Audio.css"

const QuraanAudio = () => {
    const [audioUrl, setAudioUrl] = useState(""); 
    const [reciters, setReciters] = useState([]); 
    const [selectedReciter, setSelectedReciter] = useState("14"); // ياسر الدوسري افتراضياً
    const { id } = useParams();

    // قائمة الـ 20 قارئ الأساسية
    const top20Ids = [14, 7, 2, 3, 4, 6, 9, 10, 8, 12, 54, 34, 43, 22,30,40,50,70];

    useEffect(() => {
        const getReciters = async () => {
            try {
                const response = await fetch(`https://api.quran.com/api/v4/resources/recitations?language=ar`);
                const data = await response.json();
                
                let filtered = data.recitations.filter(r => top20Ids.includes(r.id));

                // نضمن وجود ياسر الدوسري بالاسم العربي
                const hasDossary = filtered.some(r => r.id === 14);
                if (!hasDossary) {
                    filtered.push({ id: 14, reciter_name: "الشيخ ياسر الدوسري", style: "مرتل" });
                }

                // وضعه في أول القائمة
                filtered.sort((a, b) => (a.id === 14 ? -1 : b.id === 14 ? 1 : 0));
                setReciters(filtered);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        getReciters();
    }, []);

    useEffect(() => {
        const fetchAudio = async () => {
            if (!id || !selectedReciter) return;
            try {
                setAudioUrl(""); 
                const response = await fetch(`https://api.quran.com/api/v4/chapter_recitations/${selectedReciter}/${id}`);
                const data = await response.json();
                if (data.audio_file) {
                    setAudioUrl(data.audio_file.audio_url);
                }
            } catch (error) {
                setAudioUrl("");
            }
        };
        fetchAudio();
    }, [id, selectedReciter]);

    return (
        <div className="audio-wrapper" dir="rtl">
            <div className="selector-container">
                <select 
                    className="reciter-select" 
                    value={selectedReciter}
                    onChange={(e) => setSelectedReciter(e.target.value)}
                >
                    {reciters.map((r) => (
                        <option key={r.id} value={r.id}>
                            {r.id === 14 ? "الشيخ ياسر الدوسري" : r.reciter_name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="allAudio">
                {audioUrl ? (
                    <audio key={`${id}-${selectedReciter}`} className="audio" controls>
                        <source src={audioUrl} type="audio/mpeg" />
                    </audio>
                ) : (
                    <p className="loading-text">جارٍ جلب التلاوة...</p>
                )}
            </div>
        </div>
    );
};

export default QuraanAudio;