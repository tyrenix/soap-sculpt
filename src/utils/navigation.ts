import {createSharedPathnamesNavigation} from 'next-intl/navigation'
import {localeConstant} from '@/constants/locale.constants'

export const {Link, redirect, usePathname, useRouter} =
    createSharedPathnamesNavigation({locales: localeConstant.LOCALES})
