import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../Navbar"
import  styles from "./MainLayout.module.css"


interface Props {
    children: React.ReactNode
}

export const MainLayout: FC<Props>  = ( { children } ) => {
    return (
        <div className={styles.container}>
        <Head>
          <title>Martin - Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <main className={styles.main}>
            {children}
        </main>
      </div>
    )
}