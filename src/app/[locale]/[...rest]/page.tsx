import {notFound} from 'next/navigation'

export const runtime = 'edge'

export default async function RestPage() {
    notFound()
}
