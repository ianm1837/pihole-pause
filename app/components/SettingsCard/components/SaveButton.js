import { useGlobalContext } from '../../context/GlobalContext'
export default function SaveButton() {
    const { saveSettings } = useGlobalContext()

    return (
        <button
            className="btn btn-outline btn-success m-auto"
            onClick={() => saveSettings()}
        >
            Save Settings
        </button>
    )
}
