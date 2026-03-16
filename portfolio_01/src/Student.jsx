
import React from 'react'

function Student(props) {
  return (
    <div>
        <h2>student information</h2>
      <p>Student: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}

export default Student
