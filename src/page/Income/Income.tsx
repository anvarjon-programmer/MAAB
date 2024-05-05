import { incomeData } from '../../data/incomeData';
import kubok from '../././../../public/logos/kubok.jpg'
import './Income.scss';
const Income = () => {
  return (
    <div className='container'>
        <div className="income">
                <div className='income__wraper'>
                <h3>BI mutaxassislarining daromadi qancha?</h3>
                 <div className="income__wraper--card">
                    {incomeData.map((item,index)=>(
                    <div key={index} className="income__cards">
                    <div className="card__item">
                     <h1>{item.title}</h1>
                     <p>{item.desc}</p>
                  </div>
                    </div>
                    ))}
            </div>
                </div>
        </div>

        <div className="grant">
            <div className="grant__item">
               <div className="grant__item--text">
                <h3>Grantni qo‘lga kiriting!</h3>
                <p>MAAB Academyda biz eng yaxshi iqtidor egalariga oyiga 3+3 gacha grantlar taqdim etamiz. Agar siz o'zingizni iqtidorli deb hisoblasangiz va ingliz tilini mukammal bilsangiz, kirish imtihonida qatnashing! BI sayohatingizni biz bilan boshlash imkoniyatidan foydalaning!</p>
                <button>Ro'yhatdan o'ting</button>
               </div>
               <div className="grant__item--img">
               </div>
            </div>
        </div>
    </div>
  )
}

export default Income