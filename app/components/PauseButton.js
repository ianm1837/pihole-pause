"use client"

export default function PauseButton(){
  return(
  <div className="tooltip tooltip-info tooltip-bottom m-auto w-40" data-tip="Restart PiHole">
    <button className="m-auto btn-neutral  rounded-full border-8 w-40 h-40">
      {/* Power Button <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="inline-block w-24 h-24 stroke-current fill-current" viewBox="0 0 24 24"><path d="M12 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm5.14 2.86a.99.99 0 0 0-.01 1.39c1.13 1.2 1.83 2.8 1.87 4.57c.09 3.83-3.08 7.13-6.91 7.17A6.981 6.981 0 0 1 5 12c0-1.84.71-3.51 1.87-4.76c.37-.39.37-1-.01-1.38a.993.993 0 0 0-1.43.02A8.92 8.92 0 0 0 3 11.74c-.14 4.88 3.83 9.1 8.71 9.25c5.1.16 9.29-3.93 9.29-9c0-2.37-.92-4.51-2.42-6.11c-.38-.41-1.04-.42-1.44-.02z"/></svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" viewBox="0 0 24 24" className="inline-block w-24 h-24 stroke-current fill-current"><path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"/></svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" className="inline-block w-24 h-24 stroke-current fill-current"><path d="M12 5V3.21c0-.45-.54-.67-.85-.35l-2.8 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.32.31.86.09.86-.36V7c3.31 0 6 2.69 6 6c0 2.72-1.83 5.02-4.31 5.75c-.42.12-.69.52-.69.95c0 .65.62 1.16 1.25.97A7.991 7.991 0 0 0 20 13c0-4.42-3.58-8-8-8zm-6 8c0-1.34.44-2.58 1.19-3.59c.3-.4.26-.95-.09-1.31c-.42-.42-1.14-.38-1.5.1a7.991 7.991 0 0 0 4.15 12.47c.63.19 1.25-.32 1.25-.97c0-.43-.27-.83-.69-.95C7.83 18.02 6 15.72 6 13z" /></svg>

    </button>
  </div>
  )
}