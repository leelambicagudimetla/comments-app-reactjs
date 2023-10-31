// Write your code here
const CommentItem = props => {
  const {eachItem, itemColor, toggleIsFavorite, deleteLike} = props
  const {name, textContent, date, id, isFavorite} = eachItem
  const like = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onGoLike = () => {
    toggleIsFavorite(id)
  }

  const onDelete = () => {
    deleteLike(id)
  }

  return (
    <>
      <li className="list-items">
        <div className="pages">
          <p className={itemColor}>{name}</p>
          <p>{date}</p>
        </div>

        <p>{textContent}</p>
        <div className="like-delete">
          <div className="pages">
            <button type="button" onClick={onGoLike}>
              <img src={like} alt="like" />
            </button>
            <p>Like</p>
          </div>
          <button type="button" data-testid="delete" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </>
  )
}
export default CommentItem
