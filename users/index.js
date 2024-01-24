import Link from 'next/link'
const Users = ({ users }) => {
  return (
    <>
      <h1>Users-List</h1>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>
            <Link href={`users/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

const getStaticProps = async () => {
  const endpoint = 'http://localhost:3000/users'
  const users = await fetch(endpoint).then(res => res.json().users)
  console.log(users)
  return {
    props: { users: 'users' }
  }
}
export { getStaticProps }
export default Users
