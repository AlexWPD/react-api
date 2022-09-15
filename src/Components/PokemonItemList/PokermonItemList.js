import { Component } from "react"
import PokemonService from "../../Services/PokemonService"
import PokemonItem from "../PokermonItem/PokemonItem"

class PokemonItemList extends Component {

    state = {
        pokemonItem: null
    }

    pokemonService = new PokemonService()

    componentDidMount() {
        this.charList()
    }

    onCreateList = (res) => {
        const pokemonItem = res.map((item, index) => {
            return (
                <PokemonItem key={index} name={item}/>
            )
        })
        this.setState({
            pokemonItem: pokemonItem
        })
    }

    charList = () => {
        this.pokemonService.getAllChars().then(this.onCreateList)
    }

    render() {
        const {pokemonItem} = this.state
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                        {pokemonItem}
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