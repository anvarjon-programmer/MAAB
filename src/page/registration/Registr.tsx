import './Registration.scss';

const Registr = () => {
  return (
    <div className='container'>
    <div className="registration">
      <div className="registration--item">
      <div className="registration__text">
        <h3>
        MAAB Academy bilan BI kelajagingizni oching! Hozir roʻyxatdan oʻting!
        </h3>
        <p>
        Kirish imtihonimizni topshiring va Grant yutib olish imkoniyatiga ega bo'ling
        </p>
      </div>

      <div className="registration__input">
        <div className="registration__input--item">
          <h3>Kursga yozilish</h3>
          <form className='form'>
            <div className="left">
            <div className='input'>
            <label>Ismingiz</label>
            <input type="text" placeholder='Abbos' />
            </div>
            <div className='input'>
            <label>Inglis tili darajangiz</label>
            <select>
              <option value="">darajangiz</option>
            </select>
            </div>
            </div>

            <div>
            <div className="right">
            <div className='input'>
            <label>Telefon raqamingiz</label>
            <input type="text" placeholder='+998' />
            </div>
            <div className='input'>
            <label>Mantiqiy bilim darajangiz</label>
            <select>
              <option value="">blim darajangiz</option>
              <option value="">blim darajangiz</option>

            </select>
            </div>
            </div>
            
            </div>
          </form>
          <div className="end-register">
          <div className="checkbox">
            <input type="checkbox" />
            <label>
            Arizani topshirish orqali siz shaxsiy ma'lumotlaringizni “Maxfiylik siyosati”ga muvofiq qayta ishlashga rozilik bildirasiz
            </label>
          </div>
          <button className='register--btn'>Arizani jo'nating</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Registr