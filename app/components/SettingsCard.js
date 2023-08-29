import PiCardSettingsList from './PiCardSettingsList'
import SaveButton from './buttons/SaveButton'
import { useGlobalContext } from './GlobalContext'

export default function SettingsCard() {
    const { saveSettings } = useGlobalContext()
    return (
        <div className="flex flex-col items-center w-100">
            <div className="rounded-2xl w-8/12 bg-base-100 shadow-xl grow m-8 p-5">
                <div className=" w-100">
                    <PiCardSettingsList />
                    <div className="w-100 flex align-middle mb-3">
                        <SaveButton />
                    </div>
                </div>
            </div>
        </div>
    )
}
