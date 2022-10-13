import React from 'react';
import "bootstrap/dist/css/bootstrap.css";


export default function Movies (props){

    const myList =props.data.map ((element)=> {
        return(<h2>{element}</h2>)
      })

    return (<> {myList} </>)
}