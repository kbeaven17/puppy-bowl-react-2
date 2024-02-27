import axios from 'axios'
const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/kbeaven17/players'


export const getAllPlayers = async() =>  {
    const { data } = await axios.get(BASE_URL)
    console.log('data', data)
    return data.data.players
}

export const addPlayer = async (player) => {
    await axios.post(BASE_URL, player)
  }