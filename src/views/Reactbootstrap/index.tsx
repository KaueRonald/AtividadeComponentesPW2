import MyNavbar from "../../components/navbar/navbar"
import Alert from '../../components/alert/alert'
import Accordion from '../../components/accordion/accordion'
import Button from '../../components/button/button'
import { useEffect } from "react"



export default function Reactbootstrap() {
    useEffect(() => {
        window.document.title = "React Bootstrap"
    }, [])
    return (
        <>
            <MyNavbar />
            <br />
            <Alert />
            <Accordion />
            <br />
            <Button />
        </>
    )
}