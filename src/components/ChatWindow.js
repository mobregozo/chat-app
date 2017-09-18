import React from 'react';

export default ({ chatList }) =>  
    <div>
        {
            chatList.map(( text, index) =>         
                <div className="msg" key={ index }>{ text }</div>
            )
        }
    </div>


