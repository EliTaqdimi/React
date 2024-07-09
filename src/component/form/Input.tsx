import React, { useState } from 'react'

export default function Form(props) {

  return (
    <>
      <div>
        <label className="block text-white mb-2 text-right">{props.label}</label>
        <input name={props.name} title={props.title} onChange={props.handleChange} type={props.type} className="w-full p-2 rounded bg-gray-600 text-white" ></input>

      </div>
    </>

  )
}
