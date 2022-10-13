import React from 'react'
import "bootstrap/dist/css/bootstrap.css";



export default function Imagesmap(props){

    const img = props.data.map((imgmap)=>{
        return (<img>{img}</img>)
    })



}
