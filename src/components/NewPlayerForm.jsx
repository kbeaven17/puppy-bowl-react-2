import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { addPlayer } from "../API"




function NewPlayerForm() {
    const navigate = useNavigate()
    
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [imgUrl, setImgUrl] = useState('')

  async function handleSumbit(event) {
    event.preventDefault()

    const playerObject = {
        name: name,
        breed: breed,
        imageUrl: imgUrl
    }

    await addPlayer(playerObject);
    
    navigate('/')
  }
    
    return <form onSubmit={handleSumbit}>
        <h1>Add Player</h1>
      <label > 
        <input name='ID' value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <label>
        <input  name='Name' value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        <input name='Breed' value={breed} onChange={(e) => setBreed(e.target.value)} />
      </label>
      <label>
        <input name='imgUrl' value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
      </label>

      
      <button type='submit'>Add Player</button>
    </form>
  


  }


export default NewPlayerForm