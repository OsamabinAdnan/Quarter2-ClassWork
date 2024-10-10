import React from 'react'

interface StdIDCard {
    name:string,
    age:number|string,
    rollNo:number,
    Class:string
}

export default function Card(props:StdIDCard) {
  return (
    <div>
        <h2><b>Name:</b> {props.name}</h2>
        <h2><b>Age:</b> {props.age}</h2>
        <h2><b>Roll No:</b> {props.rollNo}</h2>
        <h2><b>Class:</b> {props.Class}</h2>
    </div>
  )
}
