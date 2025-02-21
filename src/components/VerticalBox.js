import React from 'react'

export default function VerticalBox(props) {
  return (
        <div className="third">
            <label htmlFor="title">{props.head}</label>

            <textarea placeholder={props.place} id="title" name="title" rows={props.row} cols={props.column}></textarea>
    
        
        </div>
  );
}

