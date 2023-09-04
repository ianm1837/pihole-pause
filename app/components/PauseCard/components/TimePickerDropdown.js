import React from 'react'

export default function TimePickerDropdown() {
  return (
      <div className="form-control w-36 max-w-xs">
          <select className="select select-sm select-bordered select-primary text-primary h-8">
              <option>1 Minute</option>
              <option selected>5 Minutes</option>
              <option>10 Minutes</option>
          </select>

      </div>
  )
}
