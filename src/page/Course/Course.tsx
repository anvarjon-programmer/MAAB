import CourseCard from '../../components/conditions/CourseCard/CourseCard';
import { coursedata } from '../../data/courseData';
import './Course.scss';
const Course = () => {
  return (
    <div className='container'>
        <div className='course__wraper'>
        <h2 id='title'>Kurs kimlar uchun?</h2>
        <div className="wraper">
            <div className="item">
              {coursedata.map((item,index) =>(
                <CourseCard key={index} {...item}/>
              ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Course