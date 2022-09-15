import React from "react";
import { Component } from "react";
import PokemonService from "../Services/PokemonService";
import Spinner from "./Spinner/Spinner";
import Error from "./Error/Error";

class RandomPokermon extends Component {

    state = {
        char: {},
        loading: true,
        error: false
    }

    pokemonService = new PokemonService()

    componentDidMount() {
        this.randomChar()
    }

    onCharLoaded = (res) => {
        this.setState({
            char: res,
            loading: false,
            error: false,
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true,
            error: false,
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    randomChar = () => {
        const id = Math.floor(Math.random() * (0 - 905) + 1111)
        console.log(id);
        this.onCharLoading()
        this.pokemonService.getChar(id).then(this.onCharLoaded).catch(this.onError)
        //this.pokemonService.getAllChars().then(res => console.log(res))
    }

    render() {
        const {char, loading, error} = this.state

        const errorMessage = error ? <Error/> : null
        const spinner = loading ? <Spinner/> : null
        const okContent = !(loading || error) ? <View char={char}/> : null

        return(
            <div>
                {errorMessage}
                {spinner}
                {okContent}
                <button 
                    type="button"
                    className="m-2 btn btn-success"
                    onClick={this.randomChar} >Random one</button>
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

