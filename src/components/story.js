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
            train: [
                      images.train0.url, images.train1.url, images.train2.url,
                      images.train3.url, images.train4.url, images.train5.url,
                      images.train6.url, images.train7.url, images.train8.url,
                      images.train9.url, images.train10.url, images.train11.url,
                      images.train12.url, images.train13.url,images.train14.url,
                      images.train15.url, images.train16.url, images.train17.url,
                      images.train18.url, images.train19.url, images.train20.url,
                      images.train21.url, images.train22.url, images.train23.url
                    ],
            time: images.timestamp.url,
            halongbay: images.halongbay.url,
            mountleft: images.mountleft.url,
            mountright: images.mountright.url
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