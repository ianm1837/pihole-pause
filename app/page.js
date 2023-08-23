import Image from 'next/image'
import SettingsButton from './components/SettingsButton'
import PauseButton from './components/PauseButton'
import SaveSettingsButton from './components/SaveSettingsButton'



async function saveSettings(){

  return
}

export default async function Home() {
  return (
    <div className="container">
      {/* navbar */}
      <div className="navbar bg-base-100 w-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">PiHole Pause</a>
        </div>
        <div className="flex-none">
          <SettingsButton />
        </div>
      </div>
      {/* body */}
      <div className='flex flex-col items-center w-100'>
        <div className="card w-5/12 bg-neutral shadow-xl grow m-8 pb-14">
          <div className="card-body items-center text-center">
            <h2 className="card-title">PiHole's</h2>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Mode</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>PiHole Alpha</td>
                    <td>Online</td>
                    <td>
                      <div className='badge badge-error'>
                        Blocking
                      </div>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>PiHole Beta</td>
                    <td>Online</td>
                    <td>
                      <div className='badge badge-success'>
                        Paused
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        <PauseButton />
        </div>
      </div>
      {/* modal */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h1 className="font-bold text-lg">Add Server</h1>

          <div className="form-control w-full max-w-xs">

            <label for="serverName">
              <span className="label-text">Server Name</span>
            </label>
            <input id="serverName" type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mb-2" />

            <label for="serverIP">
              <span className="label-text">Server IP</span>
            </label>
            <input id="serverIP" type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mb-2" />


            
          </div>
            <h3  className="font-bold text-lg">
              Current Servers
          </h3>
          <table className="table w-full max-w-xs">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>IP</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>PiHole Alpha</td>
                <td>
                  10.0.0.0
                </td>
                <td>
                  <button className="btn btn-sm btn-error">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>PiHole Beta</td>
                <td>
                  10.0.0.0
                </td>
                <td>
                  <button className="btn btn-sm btn-error">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>


          <div className="modal-action">
            <SaveSettingsButton />
          </div>
        </form>
      </dialog>
    </div>
  )
}
