import TrashIcon from "./icons/TrashIcon"
import UpArrow from "./icons/UpArrow"
import DownArrow from "./icons/DownArrow"

export default function PiCardSettings() {
    return (
        <div className="flex items-center bg-neutral rounded-xl p-3 m-3 ">
            <input
                type="text"
                placeholder="PiHole Name"
                className="input input-bordered input-secondary w-full max-w-xs m-1"
            />
            <input
                type="text"
                placeholder="IP Address"
                className="input input-bordered input-secondary w-full max-w-xs m-1"
            />
            <input
                type="text"
                placeholder="API Key"
                className="input input-bordered input-secondary w-full max-w-xs m-1"
            />
            <button className="btn btn-outline btn-primary m-1">
                <UpArrow />
            </button>
            <button className="btn btn-outline btn-primary m-1">
                <DownArrow />
            </button>
            <button className="btn btn-outline btn-error m-1">
                <TrashIcon />
            </button>
        </div>
    )
}
