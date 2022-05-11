import Link from "next/link"
import { useRouter } from "next/router"

export const ActiveLink = ({ href, text }) => {

    const {asPath} = useRouter()
    const styles = {
        active: {
            color: '#0070f3',
            textDecoration: 'underline'
        }
    }
   
    return (
        <Link href={href } >
        <a style={ asPath == href ? styles.active : null }>{text}</a>
        </Link>
    )
    }