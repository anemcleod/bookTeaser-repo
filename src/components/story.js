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
    const [IntroImages, setIntroImages] = useState(null);
    const [bayImages, setBayImages] = useState(null);
    const [timeImage, setTimeImage] = useState(null);
    
    const apiEndpoint = process.env.REACT_APP_PRISMIC_API_ENDPOINT
    const accessToken = process.env.REACT_APP_PRISMIC_ACCESS_TOKEN
  
    const Client = Prismic.client(apiEndpoint, { accessToken });
  
    useEffect(() => {
    const fetchDataTrain = async () => {
        const train = await Client.query( Prismic.Predicates.at('document.type', 'train'));
        if (train) {
          let trains = train.results[0].data;
          setIntroImages([
            trains.train0.url, trains.train1.url, trains.train2.url,
            trains.train3.url, trains.train4.url, trains.train5.url,
            trains.train6.url, trains.train7.url, trains.train8.url,
            trains.train9.url, trains.train10.url, trains.train11.url,
            trains.train12.url, trains.train13.url,trains.train14.url,
            trains.train15.url, trains.train16.url, trains.train17.url,
            trains.train18.url, trains.train19.url, trains.train20.url,
            trains.train21.url, trains.train22.url, trains.train23.url
          ]);
          setTimeout(() => {
            setChapter(1);}, 5000);
        }
      }
      fetchDataTrain();
    }, []);

    useEffect(() => {
        const fetchDataTime = async () => {
          const time = await Client.query( Prismic.Predicates.at('document.type', 'storytime'));
          if (time) {
            setTimeImage(time.results[0].data);      
          }
        }
        fetchDataTime();
      }, []);

      useEffect(() => {
            const fetchDataBay = async () => {
              const bay = await Client.query( Prismic.Predicates.at('document.type', 'halongbay'));
              if (bay) {
                setBayImages(bay.results[0].data);       
              }
          }
          fetchDataBay();
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
            IntroImages={IntroImages}
            timeImage={timeImage}/>
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
            bayImages={bayImages}/>
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