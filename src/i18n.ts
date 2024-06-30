import {notFound} from 'next/navigation'
import {getRequestConfig} from 'next-intl/server'
import {localeConstant} from './constants/locale.constants'

export default getRequestConfig(async ({locale}) => {
    if (!localeConstant.LOCALES.includes(locale)) {
        notFound()
    }

    return {
        messages: (await import(`./locales/${locale}.json`)).default
    }
})
