import ConditionsCart from '../../components/conditions/ConditionsCart'
import { data } from '../../data/conditaionDta'
import './Conditain.scss';

const Conditain = () => {
  return (
    <div className="container">
        <div className="warper">
            {data.map((item,index) =>(
                <ConditionsCart key={index} {...item}/>
            ))}
        </div>
    </div>
  )
}

export default Conditain