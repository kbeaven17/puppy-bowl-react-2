import { useState, useEffect } from 'react'
import { getAllPlayers } from '../API/index'
import { useNavigate } from 'react-router-dom'

function AllPlayers() {
    
 const [players, setPlayers] = useState([])
 const navigate = useNavigate() 
 getAllPlayers()

 useEffect(() => {
    async function updatePlayers() {
    try {
       const players= await getAllPlayers()
        setPlayers(players)
   } catch (error) {
    console.error('error',error)
   }
}

   updatePlayers()
 
 }, [])


console.log(players)



return <main>{
    players.map((player) => {
      return <article key={player.id}>
        <h2> onClick={() => navigate(`/players/${player.id}`)}</h2>
        <h2> {player.id} </h2>
        <h2> {player.name} </h2>
        <h2> {player.breed}</h2>
        <h2><img src={player.imageUrl} /></h2>
      
        
      </article>
    })
  }</main>
}




export default AllPlayers