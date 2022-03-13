import React from 'react'
import Carousel from 'react-elastic-carousel';
          // Não esqueça de instalar a Dependencia

/*
    Para fazer importações de imagens Locais, vc deve ir no arquivo react-app-env.d.ts, que está na Raíz do Projeto
    e add o seguinte código:

    declare module '*.png'
    declare module '*.jpg'

    Esses códigos "tipam" e liberam o uso de imgs quando usamos Typescript
*/

 import arcane from '../../assets/images/arcane.jpg';  // Importação de imagens Locais
 import jujutsukaisen from '../../assets/images/JujutsuKaisen.jpg';
 import babyyoda from '../../assets/images/BabyYoda.jpg';
 import homemaranha from '../../assets/images/HomemAranha.jpg';
 import kimetsunoyaiba from '../../assets/images/KimetsuNoYaiba.jpg';
 import harrypotter from '../../assets/images/HarryPotter.jpg';
 import perdidosnoespaco from '../../assets/images/PerdidosNoEspaco.jpg';
 import naruto from '../../assets/images/Naruto.jpg';
 import alvin from '../../assets/images/Alvin.jpg'

import './CarouselComponent.css'

function CarouselComponent() {
    var items  = [
        { img: arcane },
        { img: alvin},
        { img: jujutsukaisen},
        { img: babyyoda},
        { img: homemaranha},
        { img: kimetsunoyaiba},
        { img: harrypotter},
        { img: perdidosnoespaco},
        { img: naruto},
        
        { img: "https://trecobox.com.br/wp-content/uploads/2021/11/Arcane-2.jpg" },
        { img: "https://i.blogs.es/79f36c/portada-analisis-trailer-arcane-league-of-legends/1366_2000.jpeg" },
        { img: "https://cdn1.dotesports.com/wp-content/uploads/sites/3/2021/09/26143317/LUkXhMag.jpeg" }
        // { img: { arcane } } // 
    ]

    return (
        
        <Carousel  isRTL={false} enableAutoPlay autoPlaySpeed={5000} easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700} showArrows={false} >
            {
                items.map(item => (
                    <>
                        <img src={item.img} alt="Item" />
                        
                    </>
                ))
            }
        </Carousel>
        
        
    )
}

export default CarouselComponent;