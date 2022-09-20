import { Component } from "react"
import PokemonFetch from "../../Services/Fetch"

class PokemonItemList extends Component {

    state = {
        pokemonsArr: [],
        offset: 0
    }

    pokemonFetch = new PokemonFetch()

    componentDidMount() {
        this.charList()
    }

    charList = () => {
        this.pokemonFetch.getAllChars().then(this.onListLoaded)
    }

    addNewCharItems = (offset) => {
        this.pokemonFetch.getAllChars(offset).then(this.onListLoaded)
    }

    onListLoaded = (newRes) => {
        console.log(newRes);
        this.setState((state) => ({
            pokemonsArr: [...state.pokemonsArr, ...newRes],
            offset: state.offset + 3
        }))
    }

    renderItems = (arr) => {
        const {onItemSelected} = this.props
        const items = arr.map((item, index) => {
            return(
                <li 
                    key={index}
                    className="list-group-item fs-4"
                    onClick={() => onItemSelected(index)} >
                    {item.name}
                </li>
            )
        })

        return items
    }


    render() {
        const {pokemonsArr, offset} = this.state
        const pokemonItems = this.renderItems(pokemonsArr)

        return(
            <div>
                {pokemonItems}
                <button 
                    type="button"
                    className="m-2 btn btn-primary"
                    onClick={() => this.addNewCharItems(offset)} >
                        Show more
                </button>
            </div>
        )
    }
}

export default PokemonItemList