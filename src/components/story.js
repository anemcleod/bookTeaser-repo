import React, {useState, useEffect} from 'react';
import Loader from './loader';
import Intro from './intro';
import Trans from './transition';
import PartOne from './partone';
import Footer from './footer';

const Story = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [chapter, setChapter] = useState(0);
    
    useEffect(()=> {
      setTimeout(() => setChapter(1), 5000)
    },[])
    return(
        <>
        { (chapter === 0) && (
          <Loader/>
          )
        }
        { (chapter === 1) && (
          <Intro
            offsetY={offsetY}
            setOffsetY={setOffsetY}
            setChapter={setChapter}/>
          )
        }

        { (chapter === 2) && (
          <Trans 
            offsetY={offsetY}
            setOffsetY={setOffsetY}
            setChapter={setChapter}/>
          )
        }

        { (chapter === 3) && (
          <PartOne 
            offsetY={offsetY}
            setOffsetY={setOffsetY}
            setChapter={setChapter}/>
          )
        }
        
        { (chapter === 4) && (
          <Footer
            setOffsetY={setOffsetY}
            setChapter={setChapter}/>
          )
        }
        

        </>
    )
}

export default Story;