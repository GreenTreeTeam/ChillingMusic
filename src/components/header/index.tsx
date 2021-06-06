import React from "react"
import style from "./style.module.sass"
import { Header } from 'semantic-ui-react'

const HeaderComponent: React.FC = () => {
    return <div className={style.Header}>
        <Header as='h1' inverted textAlign="center">Chilling Music
            <Header.Subheader inverted as="h2" textAlign="center">Welcome to Chilling Music, The place where you can listen to music and relax and enjoy your time 24/7!</Header.Subheader>
        </Header>
    </div>
}

export default HeaderComponent