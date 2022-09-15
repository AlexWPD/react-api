import { Component } from "react"
import PokemonService from "../../Services/PokemonService"
import PokemonItem from "../PokermonItem/PokemonItem"

class PokemonItemList extends Component {

    state = {
        pokemonsArr: []
    }

    pokemonService = new PokemonService()

    componentDidMount() {
        this.charList()
    }

    charList = () => {
        this.pokemonService.getAllChars().then(this.onListLoaded)
    }

    onListLoaded = (res) => {
        this.setState({
            pokemonsArr: res
        })
    }

    renderItems = (arr) => {
        const items = arr.map((item, index) => {
            return (
                <PokemonItem key={index} name={item}/>
            )
        })

        return items
    }


    render() {
        const {pokemonsArr} = this.state

        const pokemonItems = this.renderItems(pokemonsArr)

        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            {pokemonItems}
                        </ul>
                    </div>
                    <div className="col">
                        Column
                    </div>
                </div>
            </div>
        )
    }
}

export default PokemonItemList