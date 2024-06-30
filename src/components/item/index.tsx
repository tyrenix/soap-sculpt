import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.css'

type PropsType = {
    title: string
    image: string
    price: number | string
    textButton: string
}

const Item = (item: PropsType) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <Image
                    src={item.image}
                    alt='soap'
                    width={300}
                    height={300}
                />
            </div>
            <div className={styles.info}>
                <h3>{item.title}</h3>
                <span>{Number(item.price).toLocaleString('ru-RU')}₽</span>
                <Link href='/cart' className='button fill'>{item.textButton}</Link>
            </div>
        </div>
    )
}

export default Item