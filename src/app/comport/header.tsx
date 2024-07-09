import Link from "next/link"
import styles from './Header.module.css'

export default function Header() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'Mail', path: '/mail' },
    { name: 'Tech', path: '/tech' },
    { name: 'Culture', path: '/culture' },
    { name: 'Sports', path: '/sports' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.logo}>telecha</div>
          <ul className={styles.menu}>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path} prefetch={false} className={styles.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}