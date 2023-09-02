import React from 'react'

export default function TimePicker() {
  return (
      <div className="join">
          <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="1"
          />
          <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="5"
              defaultChecked
          />
          <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="10"
          />
      </div>
  )
}
