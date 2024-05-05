import './ConditionCart.scss';
interface propData{
  title:string,
  desc:string
}
const ConditionsCart = ({title,desc}:propData) => {
  return (
    <div className='cart'>
     <div className="cart__item">
      <h3 title={title}>{title}</h3>
     </div>
       <p desc={desc}>{desc}</p>
    </div>
  )
}

export default ConditionsCart