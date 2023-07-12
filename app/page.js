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
        <div className="card w-7/12 bg-base-100 shadow-xl bg-neutral grow m-8">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <PauseButton />
      </div>
      {/* modal */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Server Settings</h3>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <SaveSettingsButton />
          </div>
        </form>
      </dialog>
    </div>
  )
}
