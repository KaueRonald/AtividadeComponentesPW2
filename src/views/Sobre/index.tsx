import { useEffect } from "react"
import MyNavbar from "../../components/navbar/navbar"

export default function Sobre() {
    useEffect(() => {
        window.document.title = "Página Sobre"
    }, [])

    return (
        <>
            <MyNavbar />
        </>
    )
}