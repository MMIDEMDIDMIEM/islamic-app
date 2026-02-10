import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tafsir = () => {
    const api = "https://api.alquran.cloud/v1/surah";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => setProducts(data.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <section dir="rtl" className="Qurran">
                <div className="container">
                    <div className="work">
                        <h2>تفسير القران الكريم</h2>
                        <div className="col-lg-12">
                            <div className="mo">
                                {products.map((product) => {
                                    return (
                                        // تأكد من استخدام product.number هنا
                                        <Link className="ALL" to={`/tafsir/${product.number}`} key={product.number}>
                                            <div className="ones">
                                                <p>{product.number}</p>
                                                <h3 className="text">{product.name}</h3>
                                                <h3>{product.englishName}</h3>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Tafsir;