import React from 'react';
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/content";

const data = [
    {
        id: 1,
        name: "Robot 1",
        description: "Description of Robot1",
        size: "Small",
        age: 3,
        image: "https://robohash.org/1",
        
    },
    {
        id: 2,
        name: "Robot 2",
        description: "Description of Robot2",
        size: "Medium",
        age: 5,
        image: "https://robohash.org/2",
        
    },
    {
        id: 3,
        name: "Robot 3",
        description: "Description of Robot3",
        size: "Large",
        age: 7,
        image: "https://robohash.org/3",
        
    },
    {
        id: 4,
        name: "Robot 4",
        description: "Description of Robot4",
        size: "Small",
        age: 2,
        image: "https://robohash.org/4",
        
    },
    {
        id: 5,
        name: "Robot 5",
        description: "Description of Robot5",
        size: "Medium",
        age: 4,
        image: "https://robohash.org/5",
        
    }
];


const App = () => {
    return (
        <div className={'app'}>
           <Menu data={data}/>
           <Content/>
        </div>
    );
};

export default App;