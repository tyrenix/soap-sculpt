import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
    return (
        <html lang='en'>
            <body>
                <Link href='/' className={styles.wrapper}>
                    <div className={styles.wrapper}>
                        <h1>404</h1>
                        <h2>Not Found</h2>
                    </div>
                </Link>
            </body>
        </html>
    )
}
