'use client'

import Image from 'next/image'
import {useTranslations} from 'next-intl'
import benefitsStyles from './styles.module.css'
import styles from '../../styles.module.css'
import Link from 'next/link'

export const BenefitsComponent = () => {
    const t = useTranslations('About.benefits')

    return (
        <div className={styles.wrapper} id='why_we'>
            <h2 className={styles.title}>{t('title')}</h2>
            <ul className={benefitsStyles.list}>
                {Array.from({length: Number(t('count-list'))}, (_, index) => (
                    <li
                        key={index}
                        className={
                            index % 2 !== 0 ? benefitsStyles.liReverse : ''
                        }
                    >
                        <div className={benefitsStyles.liImageWrapper}>
                            <Image
                                src={t(`list.${index}.image`)}
                                alt='natural ingredients'
                                loading='eager'
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className={benefitsStyles.liDescriptionWrapper}>
                            <div>
                                <h3>{t(`list.${index}.title`)}</h3>
                                <Link
                                    href='/#catalog'
                                    className='button border'
                                >
                                    {t('list-button')}
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
