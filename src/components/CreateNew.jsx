import React from 'react'
import { useHistory } from 'react-router-dom'
import { useField } from '../hooks'

const CreateNew = ({ addNew, notification }) => {
  const history = useHistory()

  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
    notification(`A new anecdote ${content.value} created!`)
    history.push('/')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' value={content.value} onChange={content.onChange} />
        </div>
        <div>
          author
          <input name='author' value={author.value} onChange={author.onChange} />
        </div>
        <div>
          url for more info
          <input name='info' value={info.value} onChange={info.onChange} />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default CreateNew
