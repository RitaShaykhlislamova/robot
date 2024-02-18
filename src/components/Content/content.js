import React from "react";
import './Content.css';
import Image from '../Image/Image';
import Title from "../Title/Title";
import BlockItem from "../BlockItem/BlockItem";

const obj = {
    id: 1,
    name: "Robot 1",
    description: "Description of Robot1",
    size: "Small",
    age: 2,
    image: "https://robohash.org/1",
    
}
const Content = (props) => {
    //name, description, size, age, Image,
    return (
        <div className={'content'}>

                <Image image={obj.image} name={obj.name}/>
                <div style={{display: "flex", flexDirection: "column", justifyContent:"space-around", alignContent: "center"}}>
                    <Title text={obj.name}/>
                    <p>
                        {
                          obj.description
                        }
                        </p>
                         <BlockItem size={obj.size}/>
                </div>

        </div>
  );
};

export default Content;