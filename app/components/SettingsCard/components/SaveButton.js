import { useGlobalContext } from '../../context/GlobalContext'
export default function SaveButton() {
    const { saveSettings, modifiedServerData } = useGlobalContext()

    return (
        <button
            className="btn btn-outline btn-success m-auto"
            onClick={() => saveSettings(modifiedServerData)}
        >
            Save Settings
        </button>
    )
}
