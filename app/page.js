"use client"
import ContainerCard from './components/ContainerCard'
import GlobalProvider from './components/GlobalProvider'

export default function Home() {
    return (
        <GlobalProvider>
            <ContainerCard/>
        </GlobalProvider>
    )
}
