'use client'

import {useTranslations} from 'next-intl'
import makingStyles from './styles.module.css'
import styles from '../../styles.module.css'

export const MakingComponent = () => {
    const t = useTranslations('About.making')

    return (
        <div className={styles.wrapper} id='why_do_it'>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={makingStyles.wrapper}>
                <iframe
                    title='YouTube video player'
                    src='https://www.youtube.com/embed/jO9R2uYkhYs?si=GGFoEBxmc8ZOn_hi'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                    loading='lazy'
                />
            </div>
        </div>
    )
}
