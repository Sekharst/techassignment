import {Component} from 'react'

import Title from './Title'

import './App.css'

class App extends Component {
  state = {
    count: 1,
    userList: [],
  }

  getApiRequest = async () => {
    // console.log('hello')
    const apiUrl = ` https://gorest.co.in/public/v1/todos`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const fetchData = await response.json()
    // console.log(fetchData)
    const updatedData = fetchData.data.map(eachId => ({
      userId: eachId.user_id,
      title: eachId.title,
    }))
    this.setState({
      userList: updatedData,
    })
    // console.log(updatedData)
  }

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count * 3,
    }))
  }

  onDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  render() {
    const {count, userList} = this.state
    console.log(userList)

    return (
      <>
        <div className="bg-container">
          <h1 className="heading">Counter</h1>
          <div className="container">
            <button type="button" className="icon" onClick={this.onDecrement}>
              -
            </button>
            <p className="count">{count}</p>
            <button type="button" className="icon" onClick={this.onIncrement}>
              +
            </button>
          </div>
        </div>
        <div>`{this.getApiRequest()}`</div>
        <div>
          <ul>
            {userList.map(user => (
              <Title userData={user} key={user.userId} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default App
