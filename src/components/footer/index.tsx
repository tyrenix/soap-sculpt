import {FaTelegramPlane, FaVk} from 'react-icons/fa'
import {useTranslations} from 'next-intl'
import Link from 'next/link'

import styles from './styles.module.css'

const Footer = () => {
    const t = useTranslations('Footer')
    const tSeo = useTranslations('Seo')

    return (
        <>
            <hr className={styles.hr} />
            <footer className={styles.footer}>
                <div className={styles.wrapper}>
                    <nav className={styles.nav}>
                        <Link href='/#catalog'>{t('links.catalog')}</Link>
                        <Link href='/#why_we'>{t('links.why-we')}</Link>
                        <Link href='/#why_do_it'>{t('links.why-do-it')}</Link>
                    </nav>
                    <div className={styles.social}>
                        <a
                            href='https://t.me/'
                            target='_about'
                            className={styles.telegramLink}
                        >
                            <FaTelegramPlane />
                        </a>
                        <a
                            href='https://vk.com/'
                            target='_about'
                            className={styles.vkLink}
                        >
                            <FaVk />
                        </a>
                    </div>
                </div>
                <div className={styles.info}>
                    <p>&copy; 2024 {tSeo('title.full')}</p>
                    <p className={styles.infoCreater}>
                        <a href='https://tyrenix.ru' target='_about'>
                            Tyrenix
                        </a>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
