import PiCard from './PiCard'
import { useGlobalContext } from '../../context/GlobalContext'

export default function PiCardList() {
    const { serverData } = useGlobalContext()

    return (
        <div className="flex-col m-auto w-full">
            {serverData ? (
                serverData.map((pi) => {
                    return (
                        <PiCard
                            key={pi.id}
                            name={pi.serverName}
                            ip={pi.serverAddress}
                            status={pi.status}
                        />
                    )
                })
            ) : (
                <div className="m-auto text-center">
                    No servers available...
                    <br></br>
                    Click the gear to add a server
                </div>
            )}
        </div>
    )
}
