import './index.css'

const Title = props => {
  const {userData} = props
  const {userId, title} = userData
  console.log('hello')

  return (
    <>
      <div className="container">
        <li className="list">
          <h1 className="title">{userId}</h1>
          <p className="name">{title}</p>
        </li>
      </div>
    </>
  )
}

export default Title
