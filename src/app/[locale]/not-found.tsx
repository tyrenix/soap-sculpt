import {useTranslations} from 'next-intl'

import styles from '../not-found.module.css'

export default function NotFound() {
    const t = useTranslations('Not-found')

    return (
        <div className={styles.wrapper}>
            <h1>404</h1>
            <h2>{t('title')}</h2>
        </div>
    )
}
