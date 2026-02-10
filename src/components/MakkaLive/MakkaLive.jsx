import React from 'react';
import './makkahLive.css';

const MakkahLive = () => {
    // رابط البث بصيغة التضمين مع تشغيل تلقائي وصامت لضمان عمله في المتصفحات
    const liveStreamUrl = "https://www.youtube.com/embed/R06ivUSDkiY?autoplay=1&mute=1&rel=0";

    return (
        <div className="makkah-live-container" dir="rtl">
            <div className="header-section text-center mb-4">
                <h1 className="live-title">🕋 بث مباشر من المسجد الحرام</h1>
                <div className="live-badge">
                    <span className="red-dot"></span> مباشر الآن
                </div>
            </div>

            {/* إطار الفيديو */}
            <div className="video-wrapper shadow-lg">
                <iframe 
                    src={liveStreamUrl}
                    title="Makkah Live Stream"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>

            {/* تنبيه الصوت الذكي */}
            <div className="audio-notice mt-3 text-center">
                <div className="alert alert-info py-2 rounded-pill shadow-sm">
                    <i className="bi bi-volume-up-fill me-2"></i>
                    فضلاً، قم بتشغيل الصوت من داخل مشغل الفيديو للاستماع
                </div>
            </div>

            {/* قسم الأدعية */}
            <div className="dua-footer mt-5 text-center">
                <blockquote className="blockquote shadow-sm p-4 bg-white rounded-4 border-end border-warning border-5">
                    <p className="mb-0 fs-4 text-dark italic">
                        "اللهم اجعلنا من عمار بيتك الحرام، وارزقنا زيارته مراراً وتكراراً."
                    </p>
                </blockquote>
            </div>
        </div>
    );
};

export default MakkahLive;