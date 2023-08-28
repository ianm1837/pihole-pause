import CardFooter from './CardFooter'
import PiCardSettingsList from './PiCardSettingsList'
import SaveButton from './buttons/SaveButton'

export default function SettingsCard() {
    return (
        <div className="flex flex-col items-center w-100">
            <div className="rounded-2xl w-8/12 bg-base-100 shadow-xl grow m-8 p-5">
                <div className=" w-100">
                    <PiCardSettingsList />
                    <div className="w-100 flex align-middle mb-3">
                        <button className="btn btn-outline btn-success m-auto">
                            Save Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
