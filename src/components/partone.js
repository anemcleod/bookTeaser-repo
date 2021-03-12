import React, {useState, useEffect, useRef} from 'react';
import '../assets/stylesheets/partone.css';
import background from '../assets/partone/background.png';
import mountain_left from '../assets/partone/mountain_left.png';
import mountain_right from '../assets/partone/mountain_right.png';


const PartOne = ({setOffsetY, offsetY, setChapter}) => {
    const handleScrollpo = () => setOffsetY(window.pageYOffset);
    const [zoom, setZoom] = useState(1);
    const fix = useRef(false);
    const reveal = useRef(false);
    const backgroundContainer = useRef(null);
    const partonescroll= useRef(null);
 
    useEffect(() => {  
      setZoom((offsetY - window.innerHeight)/70);
         if( offsetY >= 70){
            reveal.current = true;
        } else {
            reveal.current= false;
        };

        if( offsetY > backgroundContainer.current.offsetHeight*0.5){
            fix.current = true;
        } else {
            fix.current= false;
        };

        if( offsetY >= partonescroll.current.offsetHeight-window.innerHeight-1){
            setTimeout(()=>{
                setOffsetY(0);
                setChapter(4);
            },500)
            
        };

      window.addEventListener("scroll", handleScrollpo);
      console.log(`${offsetY}, ${window.innerHeight}, ${backgroundContainer.current.offsetHeight}`);
      
      return () => window.removeEventListener("scroll", handleScrollpo);
    }, [offsetY]);


    return (
        <div className="partone-container">
              
            <div className="scroll scroll-partone" ref={partonescroll}>
            <div className="partone__title">
                    <div 
                        className={reveal.current ? "partone_main_title reveal-text" : "partone_main_title"}>
                            part one
                    </div>
                    <div 
                        className={reveal.current ? "partone_sub_title reveal-text": "partone_sub_title"}>
                            Rogue Pants in Halong Bay
                    </div>
                </div>
                <div className={fix.current ? "partone-background-container fixed-background" : "partone-background-container" } 
                     ref={backgroundContainer}
                     style={{
                        width: `${fix.current ? 100+zoom : 100}%`
                    }}>
                <img 
                    className="partone-background"
                    src={background} alt="boat floating in Ha long Bay"/>
                
                <img 
                    className="partone-mountain-left" 
                    src={mountain_left} alt="limestone mountain"
                    style={{
                        width: `${80+zoom}%`,
                        left: `${50+zoom}%`,
                        bottom: `${0-zoom}%`
                    }}/>
                <img 
                    className="partone-mountain-right" 
                    src={mountain_right} alt="limestone mountain"
                    style={{
                        width: `${80+zoom}%`,
                        right: `${45+zoom}%`,
                        bottom: `${-5-zoom}%`
                    }}/>

                </div>
                <div 
                    className="partone-content-container">
                    <div className="partone-column-container">
                        <h1 className="partone-title">Ha Long Bay</h1>   
                        <p>Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Volutpat consequat mauris nunc congue nisi vitae suscipit. Posuere urna nec tincidunt praesent semper feugiat. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Ultrices dui sapien eget mi proin sed. Purus non enim praesent elementum facilisis. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. </p>
                        <p>Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Volutpat consequat mauris nunc congue nisi vitae suscipit. Posuere urna nec tincidunt praesent semper feugiat. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Ultrices dui sapien eget mi proin sed. Purus non enim praesent elementum facilisis. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. </p>
                    </div>
                    <div className="partone-column-container">
                        <p>Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Volutpat consequat mauris nunc congue nisi vitae suscipit. Posuere urna nec tincidunt praesent semper feugiat. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Ultrices dui sapien eget mi proin sed. Purus non enim praesent elementum facilisis. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. </p>
                        <p>Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Volutpat consequat mauris nunc congue nisi vitae suscipit. Posuere urna nec tincidunt praesent semper feugiat. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Ultrices dui sapien eget mi proin sed. Purus non enim praesent elementum facilisis. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartOne;