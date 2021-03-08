import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/stylesheets/legal.css';
import background from '../assets/partone/background.png';

const Legal = () => {

    return (
      <div className="legal-container">
            <img className="legal-background" src={background} alt="ha long bay"/>
            <div className="legal-content-container">
                <div className="legal-content">
                    <h1>Terms and conditions</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum pretium condimentum. Maecenas sit amet efficitur nulla, sit amet iaculis orci. Donec iaculis sed odio eget viverra. Sed id nisi eu massa facilisis iaculis. Quisque posuere, velit ut dapibus finibus, nulla sem ultricies dui, non vestibulum urna tellus vel augue. Integer tincidunt sagittis tortor in venenatis. Ut fermentum turpis eu nisi mollis, eu porttitor dui ultrices. Nullam bibendum, tellus sed elementum mattis, arcu velit pulvinar diam, ut varius ex felis non tortor. Ut bibendum molestie commodo. Quisque sed nulla molestie, sollicitudin mauris ut, venenatis tortor. In eu neque egestas, sodales lorem in, maximus ligula. Vivamus rutrum maximus dolor cursus laoreet. Fusce elit nibh, pretium eu lacinia at, pulvinar eu nibh. </p>
                    <p>Maecenas sed arcu vitae lectus euismod hendrerit quis id ex. Aliquam vulputate porttitor eros non dictum. Suspendisse potenti. Mauris in nisi luctus nunc dignissim accumsan. In vitae viverra eros, vel fermentum tellus. Morbi tortor magna, interdum vitae lectus at, lobortis vehicula leo. Integer congue nibh eget ultrices porttitor. </p>
                    <p>Nam posuere efficitur mauris eget consectetur. Cras in quam dictum, consectetur turpis a, malesuada sem. Morbi velit purus, imperdiet a cursus eu, lobortis quis nulla. Sed vestibulum orci sed ultrices tincidunt. Integer elementum varius ligula id imperdiet. Etiam elementum, libero nec maximus blandit, nibh urna tempus leo, ac accumsan augue felis vel dui. Nunc et felis aliquam, accumsan justo ac, egestas velit. Integer cursus leo eu ipsum fringilla facilisis. Ut lobortis molestie turpis, eget lobortis sem molestie quis. Morbi dignissim porta convallis. Suspendisse nec ex suscipit ante scelerisque vehicula at et lacus. Proin iaculis velit tellus, eu efficitur purus porta id. Pellentesque tempus dolor ac nulla condimentum fermentum. In pharetra posuere est vel tincidunt. Nulla iaculis eu orci eu commodo</p>
                    <p>Morbi malesuada felis at diam congue pharetra. Proin diam ex, egestas eu sagittis eget, imperdiet in nibh. Duis eu risus molestie, feugiat lacus ac, ornare nibh. Morbi eleifend dictum dolor, at maximus diam ultricies ut. Vivamus eu nibh ac velit consequat viverra. Aenean a ligula lectus. Integer non mollis ligula. Proin non felis in urna hendrerit sodales. Suspendisse et sollicitudin tortor. </p>
                    <div className="spacer">
                    <Link to="/"><button class="back__button">go back <span>to the beginning</span></button></Link> 
                    </div>
                </div>    
            </div>   
      </div>
    )
}

export default Legal;