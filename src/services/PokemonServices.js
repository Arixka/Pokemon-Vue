import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export default {  
  async listType(){
    const types = await api.get('types')
    return types.data
  },
  async pokemonsByType(type){
    const pokemons = await api.get(`/pokemons?type=${type}`)
    return pokemons.data
  }
}