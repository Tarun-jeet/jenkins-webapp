import React from 'react'

export default function HorizontalBox(props) {
  
  return (
        <div className="fourth">

            <label htmlFor="title1">{props.head1}</label>

            <textarea placeholder={props.place1} id="title1" name="title1" rows={props.row1} cols={props.column1}></textarea>
    
        
        </div>
  );
}

