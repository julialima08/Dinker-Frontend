import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CreateRideForm = (props) => {
  const [formState, setFormState] = useState({
    title: '',
    image: '',
    description: '',
    capacity: '',
    typeOfRide: '',
    minimumHeight: ''
  })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newRide = await axios
      .post(`${BASE_URL}/add/ride`, {
        ...formState,
        themeParkId: props.parkId
      })
      .catch((error) => {
        console.log(error)
      })

    setFormState({
      title: '',
      image: '',
      description: '',
      capacity: '',
      typeOfRide: '',
      minimumHeight: ''
    })

    props.updateThemePark()
  }

  return (
    <div>
      <h2>Submit A Ride Here!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name: </label>
        <input
          id="title"
          value={formState.title}
          onChange={handleChange}
          placeholder="Name"
          required
        />

        <label htmlFor="image">Image: </label>
        <input
          id="image"
          value={formState.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />

        <label htmlFor="description">Description: </label>
        <input
          id="description"
          value={formState.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />

        <label htmlFor="capacity">Capacity: </label>
        <input
          type="number"
          id="capacity"
          value={formState.capacity}
          onChange={handleChange}
          placeholder="Capacity"
          required
        />

        <label htmlFor="typeOfRide">Type of Ride: </label>
        <input
          id="typeOfRide"
          value={formState.typeOfRide}
          onChange={handleChange}
          placeholder="Type of ride"
          required
        />

        <label htmlFor="minimumHeight">Minimum Height: </label>
        <input
          type="number"
          id="minimumHeight"
          value={formState.minimumHeight}
          onChange={handleChange}
          placeholder="Minimum height"
          required
        />

        <button className="btn" type="submit">
          Submit New Ride!
        </button>
      </form>
    </div>
  )
}

export default CreateRideForm
