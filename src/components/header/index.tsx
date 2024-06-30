'use client'

import {setCookie} from 'cookies-next'
import {useLocale, useTranslations} from 'next-intl'
import type {MouseEvent} from 'react'
import {Link, usePathname} from '@/utils/navigation'
import {useRef, useState} from 'react'
import {
    IoClose,
    IoEarthOutline,
    IoGridOutline,
    IoMoonOutline,
    IoSunnyOutline
} from 'react-icons/io5'
import styles from './styles.module.css'

const prefixLanguages = {
    ru: 'Рус',
    en: 'Eng'
}

const Header = ({themeColor}: {themeColor?: string}) => {
    const pathname = usePathname()
    const locale = useLocale()

    const t = useTranslations('Header')
    const tSeo = useTranslations('Seo')

    const [theme, setTheme] = useState<'light' | 'dark' | null>(
        (themeColor as any) || null
    )

    const [isDropdownLangOpen, setIsDropdownLangOpen] = useState<
        'open' | 'close' | false
    >(false)

    const [isSidebarOpen, setIsSidebarOpen] = useState<
        'open' | 'close' | false
    >(false)

    const timeoutRef = useRef<any>(null)

    const changeTheme = () => {
        typeof theme === 'string' && document.body.classList.remove(theme)

        const newTheme = theme === 'light' ? 'dark' : 'light'

        setCookie('theme', newTheme, {
            expires: new Date('9999-01-01T00:00:00Z')
        })
        document.body.classList.add(newTheme)
        setTheme(newTheme)
    }

    const closeSidebar = () => {
        setIsSidebarOpen('close')
        timeoutRef.current = setTimeout(() => {
            setIsSidebarOpen(false)
        }, 300)
    }

    const toTop = (e: MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            document.body.scrollTo({
                top: 0,
                behavior: 'smooth'
            })

            e.preventDefault()
        }
    }

    return (
        <header
            className={`${styles.header} ${
                isSidebarOpen === 'open'
                    ? styles.sidebarOpen
                    : isSidebarOpen === 'close'
                    ? styles.sidebarClose
                    : ''
            }`}
        >
            <div className={styles.wrapper}>
                <Link href='/' className={styles.logo} onClick={toTop}>
                    <span>
                        <span>{tSeo('title.accent')}</span>
                        {tSeo('title.standart')}
                    </span>
                </Link>
                <nav className={styles.nav}>
                    <Link href='/#catalog'>{t('links.catalog')}</Link>
                    <Link href='/#why_we'>{t('links.why-we')}</Link>
                    <Link href='/#why_do_it'>{t('links.why-do-it')}</Link>
                </nav>
                <div className={styles.settings}>
                    <div onClick={changeTheme}>
                        {theme === 'dark' ? (
                            <IoSunnyOutline />
                        ) : (
                            <IoMoonOutline />
                        )}
                    </div>
                    <div className={styles.language}>
                        <IoEarthOutline />
                        <span>
                            {(prefixLanguages as any)[
                                (locale as any) || 'en'
                            ] || prefixLanguages.ru}
                        </span>
                        <div className={styles.dropdownWrapper}>
                            <div className={styles.dropdown}>
                                <Link href={pathname} locale='ru'>
                                    Русский
                                </Link>
                                <Link href={pathname} locale='en'>
                                    English
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button
                        className={styles.sidebarButton}
                        onClick={() => {
                            clearTimeout(timeoutRef.current)

                            if (isSidebarOpen) {
                                closeSidebar()
                            } else {
                                setIsSidebarOpen('open')
                            }
                        }}
                    >
                        {isSidebarOpen ? <IoClose /> : <IoGridOutline />}
                    </button>
                </div>
            </div>
            <div className={styles.sidebar}>
                <div className={styles.sidebarWrapper}>
                    <nav className={styles.nav}>
                        <Link href='/#catalog' onClick={closeSidebar}>
                            {t('links.catalog')}
                        </Link>
                        <Link href='/#why_we' onClick={closeSidebar}>
                            {t('links.why-we')}
                        </Link>
                        <Link href='/#why_do_it' onClick={closeSidebar}>
                            {t('links.why-do-it')}
                        </Link>
                    </nav>
                    <div className={styles.settings}>
                        <div onClick={changeTheme}>
                            {theme === 'dark' ? (
                                <IoSunnyOutline />
                            ) : (
                                <IoMoonOutline />
                            )}
                        </div>
                        <div
                            className={styles.language}
                            onClick={() => setIsDropdownLangOpen('open')}
                        >
                            <IoEarthOutline />
                            <span>
                                {(prefixLanguages as any)[
                                    (locale as any) || 'en'
                                ] || prefixLanguages.ru}
                            </span>
                            <div
                                onClick={() => {
                                    setTimeout(
                                        () => setIsDropdownLangOpen(false),
                                        0
                                    )
                                    setTimeout(closeSidebar, 300)
                                }}
                                className={`${styles.dropdownWrapper} ${
                                    isDropdownLangOpen === 'open'
                                        ? styles.dropdownMobileOpen
                                        : isDropdownLangOpen === 'close'
                                        ? styles.dropdownMobileClose
                                        : ''
                                }`}
                            >
                                <div className={styles.dropdown}>
                                    <Link href={pathname} locale='ru'>
                                        Русский
                                    </Link>
                                    <Link href={pathname} locale='en'>
                                        English
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
