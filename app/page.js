"use client"
import ContainerCard from './components/ContainerCard'
import GlobalProvider from './components/context/GlobalProvider'

export default function Home() {
    return (
        <GlobalProvider>
            <ContainerCard/>
        </GlobalProvider>
    )
}
