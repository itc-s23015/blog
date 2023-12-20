import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav () {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href='/'>
            Home<
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
