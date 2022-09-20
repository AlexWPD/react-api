import { Component } from "react"
import PokemonFetch from "../../Services/Fetch"
import PokemonItem from "../PokermonItem/PokemonItem"

class PokemonItemList extends Component {

    state = {
        pokemonsArr: []
    }

    pokemonFetch = new PokemonFetch()

    componentDidMount() {
        this.charList()
    }

    charList = () => {
        this.pokemonFetch.getAllChars().then(this.onListLoaded)
    }

    onListLoaded = (res) => {
        this.setState({
            pokemonsArr: res
        })
    }

    renderItems = (arr) => {
        const {onItemSelected} = this.props
        const items = arr.map((item, index) => {
            return (
                <PokemonItem 
                key={index}
                name={item.name}
                onItemSelected={() => onItemSelected(index)} />
            )
        })

        return items
    }


    render() {
        const {pokemonsArr} = this.state

        const pokemonItems = this.renderItems(pokemonsArr)

        return(
            <>
                {pokemonItems}
            </>
        )
    }
}

export default PokemonItemList