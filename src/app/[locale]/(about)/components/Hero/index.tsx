'use client'

import {useTranslations} from 'next-intl'
import heroStyles from './styles.module.css'
import styles from '../../styles.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const HeroComponent = () => {
    const t = useTranslations('About.hero')
    return (
        <div className={heroStyles.mainWrapper}>
            <div className={heroStyles.wrapper}>
                <div className={heroStyles.left}>
                    <h2>{t('title')}</h2>
                    <p>{t('description')}</p>
                    <Link className={`button fill`} href='/#catalog'>
                        {t('mainButton')}
                    </Link>
                </div>
                <div className={heroStyles.right}>
                    <Image
                        src='/images/main/hero/banner.svg'
                        alt='banner'
                        loading='eager'
                        height={450}
                        width={450}
                    />
                </div>
            </div>
        </div>
    )
}
