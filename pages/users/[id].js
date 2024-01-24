export const getStaticPaths = async () => {
  await fetch('https://jsonplaceholder.typicode.com/todos')
  const resUser = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await resUser.json()

  const paths = data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async context => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const user = await res.json()

  const resTodo = await fetch(
    'https://jsonplaceholder.typicode.com/todos/' + id
  )
  const todo = await resTodo.json()

  return {
    props: { todo, user }
  }
}

const Details = ({ todo, user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h2>{todo.title}</h2>
      <h2>Completed: {todo.completed ? 'true' : 'false'}</h2>
    </div>
  )
}

export default Details
