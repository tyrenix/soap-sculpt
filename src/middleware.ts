import createMiddleware from 'next-intl/middleware'
import {localeConstant} from './constants/locale.constants'

export default createMiddleware({
    locales: localeConstant.LOCALES,
    defaultLocale: localeConstant.LOCALE_DEFAULT,
    localeDetection: false,
    localePrefix: 'as-needed'
})

export const config = {
    matcher: ['/', '/(ru|en)/:path*']
}
