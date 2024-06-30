'use client'

import {useTranslations} from 'next-intl'
import productsStyles from './styles.module.css'
import styles from '../../styles.module.css'
import Item from '@/components/item'

export const ProductsComponent = () => {
    const t = useTranslations('About.products')

    return (
        <div className={styles.wrapper} id='catalog'>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={productsStyles.sliderWrapper}>
                {Array.from({length: Number(t('count-list'))}, (_, index) => (
                    <Item
                        key={index}
                        title={t(`list.${index}.title`)}
                        image={t(`list.${index}.image`)}
                        price={t(`list.${index}.price`)}
                        textButton={t('list-button')}
                    />
                ))}
            </div>
        </div>
    )
}
