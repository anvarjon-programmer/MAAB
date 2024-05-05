import './CourseCard.scss';
interface propData{
  title:string
  desc:string
}
const CourseCard = ({title,desc}:propData) => {
  return (
    <div className='carts'>
        <div className="cart__iten">
            <b className='cart__iten--title' title={title}>{title}</b>
             <p className='cart__iten--desc' desc={desc}>{desc}</p>
        </div>
    </div>
  )
}

export default CourseCard