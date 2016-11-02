import React from 'react'

export default (props) => (
    <div>
        {props.data.map((item, index) =>
            <div key={index}>
                {item}
            </div>
        )}
    </div>
);