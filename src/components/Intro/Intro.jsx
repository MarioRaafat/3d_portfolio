import {intro_pic} from "../../assets";
// import {SectionWrapper} from "../../hoc/index.js";
// import { styles } from '../../styles.js'
import "./Intro.css"

const Intro = () => {
  return (
      <div className="intro-section">
      <div className="intro-container">
        <div className="intro-card">
          <div className="dot-container">
              <div className="dot">
                <div className="circle"></div>
                <div className="line"></div>
              </div>
          </div>
          <div className="card-content">
              <h1 className="intro-name"> Hi, I&apos;m <span className='text-[#915EFF]'>Mario</span>
              </h1>
              <p className="intro-text">
                <p className="intro-profession">I&apos;m a <span className='text-[#fb8057]'>Software Engineer</span></p>
                <p className="intro-description">Looking for a software engineer who codes with creativity, solves problems with a smile,
                and brings a spark of humor to the team? Well, you’re in luck—I&apos;m your perfect match!</p>
              </p>
            </div>
          </div>
        <div className="intro-image">
                <img src={intro_pic} alt="intro-pic" />
        </div>
      </div>
      </div>
  )
}

// const WrappedIntro = SectionWrapper(Intro, "home");
// export default WrappedIntro;

export default Intro;