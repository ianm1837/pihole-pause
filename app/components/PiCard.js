import React from 'react'

export default function PiCard() {
  return (
      <div className="card w-96 bg-neutral shadow-xl p-4 mx-auto m-3">
          <div className="flex justify-between">
              <div>
                  <h1>
                      <span className="text-primary">PiHole Name</span>
                  </h1>
                  <div>10.0.0.3</div>
              </div>
              <div className="inline-block align-text-bottom">
                  Status: <span className="text-success">Online</span>
              </div>
          </div>
      </div>
  )
}
