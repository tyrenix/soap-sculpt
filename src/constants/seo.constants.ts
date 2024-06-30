import {Icon, Icons, IconURL} from 'next/dist/lib/metadata/types/metadata-types'

class SeoConstants {
    readonly NO_INDEX_PAGE = {robots: {index: false, follow: false}}
    readonly ICONS: IconURL | Array<Icon> | Icons = {
        icon: [
            {
                rel: 'icon',
                sizes: '1024x1024',
                type: 'image/png',
                url: '/logo1024.png'
            },
            {
                rel: 'icon',
                sizes: '512x512',
                type: 'image/png',
                url: '/logo512.png'
            },
            {
                rel: 'icon',
                sizes: '192x192',
                type: 'image/png',
                url: '/logo192.png'
            },
            {
                rel: 'icon',
                sizes: '32x32',
                type: 'image/png',
                url: '/favicon.png'
            }
        ]
    }
}

export const seoConstants = new SeoConstants()
