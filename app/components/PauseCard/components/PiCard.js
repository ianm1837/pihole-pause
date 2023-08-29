import React from 'react'

export default function PiCard({ name, ip, status }) {
  return (
      <div className="card w-96 bg-neutral shadow-xl p-4 mx-auto m-3">
          <div className="flex justify-between">
              <div>
                  <h1>
                      <span className="text-primary">{name}</span>
                  </h1>
                  <div>{ip}</div>
              </div>
              <div className="inline-block align-text-bottom">
                  Status: <span className="text-success">{status}</span>
              </div>
          </div>
      </div>
  )
}
