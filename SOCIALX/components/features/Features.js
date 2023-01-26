import React from 'react';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import "./Features.css";
import rainbowimg from "../rainbowimg.png";
import Feature from './Feature';
import {FeatureList} from "./data";





const Features = () => {
  return (
    <section id='features'>
        <div className='container features'>
          <div className='title'>
             <BsFillBookmarkStarFill color='orangered' size={30}/>
             <h2>
               core Features
             </h2>
             <p className='u-text-small u-text-dark'>
                sdfjksdfajksfbkrjfdkjjkdsnkfsnkvnfvndfvnfvnkjfvnkjfvfvjkv
                bjfdvnkfknvdfknvfnkvnvnkdfvnkdfnvkdfk
                nvdfvnkdfvnkfvnf bjkfvjk
                jhdbvbdjvfjd dfjfhbvrdvrjek efbvjjebkjebkujdf hkjdvnkjfvfvjnfv
                bvdfjvjkfrvjkf
             </p>
          </div>
          <div className='features-content'>
            <div className='features-left'>
              <img src={rainbowimg}  alt="bowimg"/>

              </div>
              <div className="features-right">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />))}
                
                   
              </div>
          </div>

        </div>
    </section>
  )
}

export default Features
