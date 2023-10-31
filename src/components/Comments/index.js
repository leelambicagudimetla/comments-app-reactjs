import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const contactList = []
// Write your code here
class Comments extends Component {
  state = {
    count: 0,
    name: '',
    textContent: '',
    contactsList: contactList,
    date: '',
    initialColor: initialContainerBackgroundClassNames[0],
  }

  onAddContact = event => {
    event.preventDefault()
    const {name, textContent, date, count} = this.state
    const initialBackgroundColorClassName = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newContact = {
      id: uuidv4(),
      name,
      textContent,
      date: formatDistanceToNow(new Date()),
      isFavorite: false,
      initialColor: initialBackgroundColorClassName,
    }
    console.log(newContact)
    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newContact],
      count: count + 1,
      name: '',
      textContent: '',
    }))
  }

  onChangeMobileNo = event => {
    this.setState({textContent: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      contactsList: prevState.contactsList.map(each => {
        if (id === each.id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  deleteLike = id => {
    const {contactsList, count} = this.state
    const filterDetailUser = contactsList.filter(each => each.id !== id)
    this.setState({
      contactsList: filterDetailUser,
      count: count - 1,
    })
  }

  render() {
    const {name, textContent, initialColor, contactsList, count} = this.state

    console.log(initialColor)
    return (
      <div className="main-container">
        <div className="comment-app-container">
          <div>
            <h1 className="heading-comments">Comments</h1>
            <p>Say Something about 4.0 Technologies</p>
            <form className="form-container">
              <input
                type="text"
                placeholder="Your Name"
                className="name-of-yours"
                value={name}
                onChange={this.onChangeName}
              />
              <textarea
                type="textarea"
                placeholder="Your Comment"
                className="comment-input"
                r="80"
                value={textContent}
                onChange={this.onChangeMobileNo}
              />
              <button
                className="button-comment"
                type="submit"
                onClick={this.onAddContact}
              >
                Add Comment
              </button>
            </form>
            <hr className="separator" />
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="img-class"
            alt="comments"
          />
        </div>
        <hr className="separator" />
        <div className="zero-comment-section">
          <p className="zero">{count}</p>
          <p className="comm">Comments</p>
          <ul className="unoedrer">
            {contactsList.map(each => (
              <CommentItem
                toggleIsFavorite={this.toggleIsFavorite}
                itemColor={initialColor}
                eachItem={each}
                key={each.id}
                deleteLike={this.deleteLike}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
