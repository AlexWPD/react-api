import defaultImg from './no-image.jpg'

class PokemonFetch {
    _apiBase = "https://pokeapi.co/api/v2/pokemon"
    _baseOffSet = 0

    getResource = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error (`Не получилось достать ${url}, статус: ${res.status}`)
        }

        return await res.json()
    }

    getAllChars = async (offset = this._baseOffSet) => {
        const res = await this.getResource(`${this._apiBase}?limit=3&offset=${offset}`)
        return res.results
    }

    getChar = async (id) => {
        const res = await this.getResource(`${this._apiBase}/${id}/`)
        return this._transformChar(res)
    }

    _transformChar = (res) => {
        const img = res.sprites.other.dream_world.front_default
        return {
            name: res.name,
            experience: res.base_experience,
            image: img ? img : defaultImg
        }
    }
}

export default PokemonFetch