import React, {useState, useEffect, useRef,componentDidMount} from 'react';
import {IntroImages} from "../assets/images";
import time from '../assets/intro/time.png'
import "../assets/stylesheets/intro.css"

const Intro = ({setOffsetY, offsetY, setChapter}) => {
    const [trainIndex, setTrainIndex] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const section = useRef(null);

    useEffect(() => {  
      let maxScroll =  section.current.scrollHeight- window.innerHeight;
      let scrolltrigger = maxScroll/(IntroImages.length-1);
      setTrainIndex(Math.floor(offsetY/scrolltrigger));
      if(Math.ceil(offsetY) >= maxScroll-0.5) {
          setChapter(2);
      }
      window.addEventListener("scroll", handleScroll);
      console.log(`${offsetY} ${maxScroll}`);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [offsetY]);

 return (
    <div className="intro-container " ref={section}>
        <div className="scroll" >
            <div className="intro-image-container">
                <img className="timestamp" src={time} alt="2am timestamp"/>
                {
                    IntroImages.map( (image, i) => {
                        return(
                            <img className="train-image" 
                            style={{opacity: `${trainIndex === i ? 1 : 0}`}}
                            src={image} 
                            key={`train${i}`} 
                            alt="train"/>
                        )
                    })
                }
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