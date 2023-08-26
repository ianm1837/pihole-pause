
import PauseCard from './components/PauseCard'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function saveSettings() {
    return
}

const serverList = await prisma.servers.findMany()

export default function Home() {
    return (
        <PauseCard serverList={serverList} />
    )
}
