import styles from '../../styles/User.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { users: data }
  }
}

const Users = ({ users }) => {
  return (
    <div>
      <h1>All Users</h1>
      {users.map(user => (
        // userのリンクの設定
        <Link href={'/users/' + user.id} key={user.id} className={styles.list}>
          <h3>・{user.name}</h3>
        </Link>
      ))}
    </div>
  )
}
export default Users
