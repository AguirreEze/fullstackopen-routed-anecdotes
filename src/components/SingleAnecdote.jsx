import React from 'react'
import { useParams } from 'react-router-dom'

const SingleAnecdote = ({ anecdotes }) => {
  const { id } = useParams()

  const anecdote = anecdotes.find(anecdote => anecdote.id === id)

  return (
    <div>
      <h1>{anecdote.content} by {anecdote.author}</h1>
      <p>has {anecdote.votes} votes</p>
      <p>Click <a href={anecdote.info}>here</a>for more info see</p>

    </div>
  )
}

export default SingleAnecdote
