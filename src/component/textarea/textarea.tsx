import React from "react"


export default function Textarea(props) {
  return (
    <div>
      <label className="block text-white mb-2 text-right">{props.label}</label>
      <textarea onChange={props.onChange} className="w-full p-2 rounded bg-gray-600 text-white"></textarea>
    </div>
  )
}
