import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/kbeaven17/players'



function NewPlayerForm() {
    
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [imgUrl, setImgUrl] = useState('')

  const navigate = useNavigate()


  function clearForm() {
    setId('')
    setName('')
    setBreed('')
    setImgUrl('')
  }

  async function handleSumbit(event) {
    event.preventDefault()

    const payload = {
      id,
      data: {
      name,  
      breed,
      imgUrl
      }
    }
    

    try {

        const { data } = await axios.post(BASE_URL, payload)
  
        console.log('ADDED player', data)
  
        
        navigate('./App')
  
      } catch (err) {
        console.error(err)
      }
    }

    console.table({ id, name, breed, imgUrl })
  return (
    <form onSubmit={handleSumbit}>
      <label >
        Id:
        <input value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Breed:
        <input value={breed} onChange={(e) => setBreed(e.target.value)} />
      </label>
      <label>
        ImgUrl:
        <input value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
      </label>

      <button type='button' onClick={clearForm}>Clear Form</button>
      <button type='submit'>Add Player</button>
    </form>
  )


  }


export default NewPlayerForm