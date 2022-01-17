import React, {useState, useEffect} from 'react';
import Prismic from '@prismicio/client'
import Loader from './loader';
import Intro from './intro';
import Trans from './transition';
import PartOne from './partone';
import Footer from './footer';

const Story = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [chapter, setChapter] = useState(0);
    const [chapterImages, setChapterImages] = useState(null);
    
    const apiEndpoint = process.env.REACT_APP_PRISMIC_API_ENDPOINT
    const accessToken = process.env.REACT_APP_PRISMIC_ACCESS_TOKEN
  
    const Client = Prismic.client(apiEndpoint, { accessToken });
  
    useEffect(() => {
    const fetchData = async () => {
        const book = await Client.query( Prismic.Predicates.at('document.type', 'train'));
        if (book) {
          let images = book.results[0].data;
          setChapterImages({
            time: images.timestamp.url,
        });
          setTimeout(() => {
            setChapter(1);}, 5000);
        }
      }
      fetchData();
    }, []);

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
            setChapter={setChapter}
            chapterImages={chapterImages}
            />
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
            setChapter={setChapter}
            chapterImages={chapterImages}/>
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