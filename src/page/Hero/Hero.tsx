import './Hero.scss';
import video from '../../../public/video/videoLess.mp4';
const Hero = () => {
  return (
    <div className="hero__container">
            <video src={video} controls></video>
    </div>
  )
}

export default Hero