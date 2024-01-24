
const getStaticProps = async () => {
  const endpoint = 'localhost:3000/users'
  const data = await fetchData(endpoint)
  return {
    props: {
      data
    }
  }
}
export { getStaticProps }
