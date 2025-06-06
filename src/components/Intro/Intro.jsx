import {intro_pic} from "../../assets";
// import {SectionWrapper} from "../../hoc/index.js";
// import { styles } from '../../styles.js'
import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Mail } from "lucide-react";
import "./Intro.css"

const Intro = () => {
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Mario_Raafat_cv.pdf'; // Add your resume file to public/resume.pdf
        link.download = 'Mario_Raafat_cv.pdf';
        link.click();
    };

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
                  <div className="flex flex-col justify-center items-start gap-2">
                      <h1 className="intro-name"> Hi, I&apos;m <span className='text-[#915EFF]'>Mario</span>
                      </h1>
                      <p className="my-3">
                          <p className="intro-profession">I&apos;m a <span
                              className='text-[#fb8057]'>Software Engineer</span></p>
                          <p className="intro-description">Looking for a software engineer who codes with creativity,
                              solves problems with a smile,
                              and brings a spark of humor to the team? Well, you’re in luck—I&apos;m your perfect
                              match!</p>
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                              onClick={handleDownloadResume}
                              className="flex items-center gap-2 hover:text-[#915EFF] transition-colors duration-300"
                              size="lg"
                          >
                              <Download className="w-4 h-4"/>
                              Download Resume
                          </Button>
                          <Button size="lg"
                                  className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300">
                              <Mail className="w-4 h-4 mr-2"/>
                              <a href={`#contact`}>Get In Touch</a>
                          </Button>
                      </div>
                  </div>
              </div>
              {/*<div className="intro-image">*/}
              {/*        <img src={intro_pic} alt="intro-pic" />*/}
              {/*</div>*/}
              <div className="relative mx-auto">
                  <div className="aspect-square max-w-md relative mr-11">
                      <div
                          className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl"></div>
                      <img
                          src={intro_pic}
                          alt="Mario Raafat"
                          className="relative rounded-full w-full h-full object-cover border-4 border-background shadow-2xl"
                      />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Intro;