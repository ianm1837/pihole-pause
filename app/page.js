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
          <h3 className="font-bold text-lg">Add Server</h3>
          <form>
            <label>
              Server Name
            </label>

            <input />
            
            <h3  className="font-bold text-lg">
              Current Servers
            </h3>
          </form>
          <div className="modal-action">
            <SaveSettingsButton />
          </div>
        </form>
      </dialog>
    </div>
  )
}
