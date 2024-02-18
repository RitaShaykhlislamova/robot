import React from 'react';
import './BlockItem.css';

const BlockItem = (props) => {
    return (
        <div className={'block-item'}>
            {
                props.size
            }
        </div>
    );
};

export default BlockItem; 