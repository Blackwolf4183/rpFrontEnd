import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "Dark",
  useSystemColorMode: false,
}

const colors = {
    /*MEMBERS BADGE COLOR */
    fundador:"orange",
    programador:"rgb(209, 10, 44)",
    administrador:"teal",
    moderador:"rgb(11, 186, 93)",
    soporte:"purple",


    primary:"rgba(35, 47, 165, 0.8)",
    secondary:"rgba(103, 58, 217, 1)",

    mainFont:"rgba(255, 255, 255, 0.90)",
    highlightFont: "rgba(20,20,20,1)",
    border:"rgba(175, 174, 175, 0.81)",
    transparency:"rgba(225, 225, 225, 0.81)",
    icons:"rgba(250, 250, 250, 0.95)",
    menus:"rgba(0, 0, 0, 0.5)",

    /* INFORMATIONPANNEL TYPES */
    /* news:"rgba(125, 58, 180, 0.85)", */
    news:"rgba(16, 121, 150, 0.95)",
    updates:"rgba(192, 48, 29, 0.85)",
    aboutUsBg:"rgba(0, 0, 0, 0.80)",

    divider:"rgba(255, 255, 255, 0.40)",
    darkDivider:"rgba(0, 0, 0, 0.40)",
    hoverHamburguerMenuItem:"rgba(0, 0, 0, 0.1)",
    progressBarScroll:"rgba(103, 58, 180, 0.85)",
    staffMemberCardFont:"rgba(0,0,0,1)",
    staffMemberCardBg:"rgba(250, 250, 250, 0.95)"

}

const fonts = {
    heading: "Graduate",
    body: "Nixie One",
}

const myNewTheme = extendTheme({config,colors,fonts})

export default myNewTheme