'use client'

import Image from 'next/image'
import {useTranslations} from 'next-intl'
import testimonialsStyles from './styles.module.css'
import productsStyles from '../Products/styles.module.css'
import styles from '../../styles.module.css'

export const TestimonialsComponent = () => {
    const t = useTranslations('About.testimonials')

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={productsStyles.sliderWrapper}>
                {Array.from({length: Number(t('count-list'))}, (_, index) => (
                    <div key={index} className={testimonialsStyles.itemWrapper}>
                        <div className={testimonialsStyles.itemImage}>
                            <Image
                                src={t(`list.${index}.image`)}
                                alt='image'
                                width={450}
                                height={450}
                            />
                        </div>
                        <div className={testimonialsStyles.itemInfo}>
                            <div>{t(`list.${index}.name`)}</div>
                            <p>{t(`list.${index}.text`)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
