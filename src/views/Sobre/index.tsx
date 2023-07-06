import { useEffect } from "react"
import MyNavbar from "../../components/navbar/navbar"
import Carousels from "../../components/Carousels"
import Messages from "../../components/Messages";

import style from "./sobre.module.css";

export default function Sobre() {
    useEffect(() => {
        window.document.title = "Página Sobre"
        document.body.style.backgroundColor = "#242424"
    }, [])

    return (
        <>
            <MyNavbar />

            <section className={style.info}>
                <h2>Desenvolvedores</h2>

                <section className={style.devInfos}>
                    <Messages devName="Matheus Nunes" message="Olá, seja Bem-Vindo(a) a nossa página!" />
                    <Messages devName="Luis Felippe" message="Aqui você conhece um pouco sobre os responsáveis pelo desenvolvimento desse site" />
                    <Messages devName="Kauê Ronald" message="Se divirta e aproveite para tirar dúvidas!" />
                </section>
            </section>

            <footer className={style.container}>
                <Carousels
                    firstImage="https://avatars.githubusercontent.com/u/80282447?v=4"
                    firstName="Matheus Nunes"
                    firstDesc="Desenvolvedor back-end Java"

                    secondImage="https://avatars.githubusercontent.com/u/87948087?v=4"
                    secondName="Luis Felippe"
                    secondDesc="Desenvolvedor fullstack"

                    thirdImage="https://avatars.githubusercontent.com/u/87199965?v=4"
                    thirdName="Kauê Ronald"
                    thirdDesc="Desenvolvedor front-end React"
                />
            </footer>
        </>
    )
}