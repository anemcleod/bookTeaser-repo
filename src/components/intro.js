import React, {useState, useEffect, useRef} from 'react';

import "../assets/stylesheets/intro.css";
import Trainmation from "./svg/trainmation";

const Intro = ({setOffsetY, offsetY, setChapter, chapterImages}) => {
    
    const [trainScale, setTrainScale] = useState(0); 
  
    const section = useRef(null);
    
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {  
      let maxScroll =  section.current.scrollHeight- window.innerHeight;
      setTrainScale(offsetY/maxScroll);
      if(Math.ceil(offsetY) >= maxScroll-0.5) {
          setChapter(2);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [offsetY]);


 return (
    <div 
        className="intro-container " 
        ref={section}>
        <div className="scroll" >
            <div className="intro-image-container">
                <Trainmation trainScale={trainScale}></Trainmation>
                <img 
                    className="timestamp" 
                    src={chapterImages.time} 
                    alt="2am timestamp"/>
 
            </div>

            <div className="intro-content-container">
                <div className="intro-column-container">
                    <h1 className="intro-title">Hanoi</h1>

                    <h2 className="intro-subtitle">present day</h2> 

                    <p>Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Volutpat consequat mauris nunc congue nisi vitae suscipit. Posuere urna nec tincidunt praesent semper feugiat. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Ultrices dui sapien eget mi proin sed. Purus non enim praesent elementum facilisis. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. </p>
                </div>

                <div className="intro-column-container">
                    <p>Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Volutpat consequat mauris nunc congue nisi vitae suscipit. Posuere urna nec tincidunt praesent semper feugiat. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Ultrices dui sapien eget mi proin sed. Purus non enim praesent elementum facilisis. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. </p>
                    
                    <p>Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Volutpat consequat mauris nunc congue nisi vitae suscipit. Posuere urna nec tincidunt praesent semper feugiat. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Ultrices dui sapien eget mi proin sed. Purus non enim praesent elementum facilisis. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. </p>
                </div>
            </div>
        </div>
    </div>
 )
}

export default Intro;