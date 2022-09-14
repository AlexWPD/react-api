import React from "react";
import { Component } from "react";
import PokemonService from "../Services/PokemonService";
import Spinner from "./Spinner/Spinner";

class RandomPokermon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            char: {},
            loading: true
        }
        this.randomChar()
    }

    pokemonService = new PokemonService()

    onCharLoaded = (res) => {
        this.setState({
            char: res,
            loading: false
        })
    }

    randomChar = () => {
        const id = Math.floor(Math.random() * (0 - 905) + 905)
        console.log(id);
        this.pokemonService.getChar(id).then(this.onCharLoaded)
        this.pokemonService.getAllChars().then(res => console.log(res))
    }

    render() {
        const {char, loading} = this.state

        return(
            <div>
                {loading ? <Spinner/> : <View char={char}/>}
                <button type="button" className="m-2 btn btn-success">Random one</button>
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, height, image} = char
    return (
        <>
            <div className="p-2">
                <img src={image} alt="" />
            </div>
            <h2 className="m-2">{name}</h2>
            <div className="m-2">Height: {height} sm</div>
        </>
    )
}

export default RandomPokermon

