'use client'

import Image from 'next/image'
import {useTranslations} from 'next-intl'
import subscriptionStyles from './styles.module.css'
import styles from '../../styles.module.css'

export const SubscriptionComponent = () => {
    const t = useTranslations('About.subscription')

    return (
        <div className={`${subscriptionStyles.wrapper} ${styles.wrapper}`}>
            <div className={subscriptionStyles.info}>
                <Image
                    src='/images/main/subscription/email.webp'
                    alt='email'
                    width={200}
                    height={200}
                />
                <h3>{t('title')}</h3>
                <p>{t('description')}</p>
            </div>
            <div className={subscriptionStyles.formWrapper}>
                <input type='email' placeholder={t('form.input')} />
                <button className='button fill'>{t('form.button')}</button>
            </div>
        </div>
    )
}
