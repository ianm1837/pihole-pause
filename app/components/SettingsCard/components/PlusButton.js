import AddIcon from '../../icons/AddIcon'
import { useGlobalContext } from '../../context/GlobalContext'

export default function PlusButton() {
    const { addCard } = useGlobalContext()

    return (
        <button
            className="btn btn-outline btn-secondary m-auto"
            onClick={() => addCard()}
        >
            <AddIcon />
        </button>
    )
}
