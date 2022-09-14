import defaultImg from './no-image.jpg'

class PokemonService {
    _apiBase = "https://pokeapi.co/api/v2/pokemon"

    getResource = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error (`Не получилось достать ${url}, статус: ${res.status}`)
        }

        return await res.json()
    }

    getAllChars = async () => {
        const res = await this.getResource(`${this._apiBase}?limit=12&offset=0`)
        return res.results.map(item => item.name)
    }

    getChar = async (id) => {
        const res = await this.getResource(`${this._apiBase}/${id}/`)
        return this._transformChar(res)
    }

    _transformChar = (res) => {
        const img = res.sprites.other.dream_world.front_default
        //const defaultImg = defaultImg
        return {
            name: res.name,
            height: res.height,
            image: img ? img : defaultImg
        }
    }
}

export default PokemonService