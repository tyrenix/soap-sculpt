import Footer from '@/components/footer'
import Header from '@/components/header'
import {envConstants} from '@/constants/env.constants'
import {seoConstants} from '@/constants/seo.constants'
import '@/styles/global.css'
import '@/styles/variables.css'
import clsx from 'clsx'
import {Metadata} from 'next'
import {NextIntlClientProvider} from 'next-intl'
import {getLocale, getMessages, getTranslations} from 'next-intl/server'
import {Roboto} from 'next/font/google'
import {cookies} from 'next/headers'
import {PropsWithChildren} from 'react'

const font = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['cyrillic', 'latin']
})

interface IProps extends PropsWithChildren {
    params: {
        locale: string
    }
}

export const generateMetadata = async (): Promise<Metadata> => {
    const locale = await getLocale()
    const t = await getTranslations({
        namespace: 'Seo',
        locale
    })

    return {
        title: t('name'),
        description: t('description'),
        icons: seoConstants.ICONS,
        openGraph: {
            title: t('name'),
            description: t('description'),
            images: `${envConstants.NEXT_PUBLIC_NEXT_HOST}/icons/logo1024.png`
        }
    }
}

export default async function LocaleLayout({children, params}: IProps) {
    const cookieStore = cookies()
    const theme = cookieStore.get('theme')?.value

    const messages = await getMessages()

    return (
        <html lang={params.locale}>
            <body className={clsx(theme, font.className)}>
                <NextIntlClientProvider messages={messages}>
                    <main>
                        <Header themeColor={theme} />
                        {children}
                        <Footer />
                    </main>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
