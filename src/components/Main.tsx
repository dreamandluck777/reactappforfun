interface ForMain {
    styleForDiv?: string;
    styleForMain?:string;
    textForH2: string;
    textForP: string;
}

const Main: React.FC<ForMain> = ({styleForMain, textForH2,textForP}) => {
    return (
        <main className={styleForMain}>
            <h2>{textForH2}</h2>
            <p>{textForP}</p>
        </main>
    )
}

export default Main;