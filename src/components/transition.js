import React, {useEffect, useState} from 'react';
import "../assets/stylesheets/transition.css"

const Trans = ({setOffsetY, setChapter}) => {
    const [showTitle, setShowTitle] = useState(false);
    const [showSubTitle, setShowSubTitle] = useState(false);
    
    useEffect(()=> {
        setTimeout(()=>{
            setShowTitle(true);
            setTimeout(()=>{
                setShowSubTitle(true);
                setTimeout(()=>{
                    setOffsetY(0);
                    setChapter(3);
                },1000)
            }, 2000)
        },1000)
    }, []);

 return (
    <div className="trans-container">
        <div className="trans-content">
            <div 
                className={showTitle ?"trans-title reveal-trans-titles" :"trans-title" }>
                but this story is about the moment it began
            </div>

            <div>
                <div 
                    className={showSubTitle ?"trans-subtitle reveal-trans-titles" :"trans-subtitle" }>
                    provocative line...
                </div>
            </div>
        </div>
    </div>
 )
}

export default Trans;