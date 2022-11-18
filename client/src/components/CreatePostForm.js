import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { createPost } from '../services/Auth'
// import ReactCSSTransitionGroup from 'react-transition-group'
// import styled from 'styled-components'
// import useRainbow from './use-rainbow.hook'
// import MagicRainbowButton from './MagicRainbowButton'

const CreatePostForm = ({ getPosts, posts, userAvatar, username }) => {
  // useEffect(() => {
  //   getPosts()
  // }, [posts])

  const initialState = {
    title: '',
    body: '',
    skills: []
  }
  const [formState, setFormState] = useState(initialState)
  const handleSubmit = async (event) => {
    event.preventDefault()
    createPost(formState)
    setFormState(initialState)
    window.location.reload()
  }
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const postformheader = {}
  const postformheadertext = {
    color: 'white',
    textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black'
  }

  const formstyle = {
    width: '400px',
    margin: '0.75rem 0',
    padding: '0.75rem 1.5rem',
    outline: 'none',
    fontSize: '1.5em',
    borderRadius: '10px',
    backgroundColor: 'black',
    border: 'none',
    color: 'white',
    borderBottom: '4px solid #515867',
    transition: 'all 0.3s ease'
    // ':focus': {
    //   borderColor: 'white',
    //   color: 'red'
    // }
  }
  const skillsstyle = {
    width: '448px',
    height: '50px',
    margin: '0.75rem 0',
    padding: '0.75rem 1.5rem',
    outline: 'none',
    fontSize: '1.5em',
    borderRadius: '10px',
    backgroundColor: 'black',
    border: 'none',
    color: 'white',
    borderBottom: '4px solid #515867',
    transition: 'all 0.3s ease'
  }

  return (
    <div>
      {/* <MagicRainbowButton> */}
      <h2 style={postformheader}>
        <img src={userAvatar} alt="no avatar"></img>
        {/* <MagicRainbowButton> */}
        <div style={postformheadertext}>
          Hey {username}, need a dink to collaborate with?
        </div>
        {/* </MagicRainbowButton> */}
      </h2>
      {/* </MagicRainbowButton> */}

      <form onSubmit={handleSubmit}>
        <input
          style={formstyle}
          id="title"
          value={formState.title}
          placeholder="Title"
          // required
          onChange={handleChange}
        />
        <input
          style={formstyle}
          id="body"
          value={formState.body}
          placeholder="Post body"
          // required
          onChange={handleChange}
        />

        <div className="formDiv">
          <label htmlFor="skills" className="formLabel"></label>
          <select
            style={skillsstyle}
            onChange={handleChange}
            type="checkbox"
            id="skills"
            value={formState.skills}
          >
            <option value="pick">Pick a Skill</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSSL</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Express">Express</option>
            <option value="PostgreSQL">PostgreSQL</option>
            <option value="Sequelize">Sequelize</option>
            <option value="Auth">Auth</option>
            <option value="Vue">Vue.jsL</option>
            <option value="Python">Python</option>
            <option value="Flask">Flask</option>
          </select>
        </div>

        <button
          // onClick={() => getPosts()}
          type="submit"
          disabled={
            !formState.title || !formState.body || formState.skills.length === 0
          }
        >
          Submit New Post!
        </button>
      </form>
    </div>
  )
}

export default CreatePostForm
