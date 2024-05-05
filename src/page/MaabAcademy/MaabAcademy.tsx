import './MaabAcademy.scss';
const MaabAcademy = () => {
  return (
    <div className='container'>
        <div className="maab__academy">
            <h2>MAAB Akademiyasida BI imkoniyatlarini oching!</h2>
            <p>Biz nafaqat nazariyani o'rgatamiz, balki o'quvchilarimizga qisqa vaqt ichida global miqyosda raqobatbardosh dasturchilar bo'lish imkoniyatini beradigan haqiqiy bilimlarni taqdim etamiz. Sizning kar’erangiz butkul o'zgarishi shu erdan boshlanadi</p>

            <div className="maab__academy__card">
                <div className="card">
                        <div className="card__body">
                            <h3>DATA ANALYTICS</h3>
                            <p>
                            Aniq tushunchalar va tahlillarga sho'ng'ing. Ma'lumotlardan mazmunli namunalarni olish, biznes qilish  qilish     qilish imkoniyatlarini kengaytirish uchun ilg'or usullarni o'rganing. Bizning amaliy yondashuvimiz sizning ishga tayyor bo’lishingizni ta'minlaydi.
                            </p>
                        </div>
                            <div className="price--wraper">
                                <div className='price'>
                                <span>kurs narxi:</span>
                                <h3>23,975,000 so'm</h3>
                                </div>
                            </div>
                </div>

                <div className="card">
                        <div className="card__body">
                            <h3>DATA ENGINEERING</h3>
                            <p>
                            Ishonchli ma'lumotlar infratuzilmasini qurishni o'rganing. Data Engineering sohasida muvaffaqiyatli kar’yera qurish uchun ma'lumotlar tizimlarini loyihalash va joriy etish ko'nikmalariga ega bo'ling. Haqiqiy loyihalar sizning amaliy tajribangizni oshiradi.

                            </p>
                        </div>
                            <div className="price--wraper">
                                <div className='price'>
                                <span>kurs narxi:</span>
                                <h3>23,975,000 so'm</h3>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MaabAcademy