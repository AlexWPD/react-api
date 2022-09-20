import React from "react";
import { Component } from "react";
import PokemonFetch from "../Services/Fetch";
import Spinner from "./Spinner/Spinner";
import Error from "./Error/Error";

class RandomPokermon extends Component {

    state = {
        char: {},
        loading: true,
        error: false
    }

    pokemonFetch = new PokemonFetch()

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
        const id = Math.floor(Math.random() * (0 - 905) + 1000)
        console.log(id);
        this.onCharLoading()
        this.pokemonFetch.getChar(id).then(this.onCharLoaded).catch(this.onError)
        //this.pokemonFetch.getAllChars().then(res => console.log(res))
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
                    className="m-4 btn btn-success"
                    onClick={this.randomChar} >Random one
                </button>
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, experience, image} = char
    return (
        <>
            <div className="p-2">
                <img src={image} alt="" />
            </div>
            <h2 className="m-2">{name}</h2>
            <div className="m-2">Experience: {experience}</div>
        </>
    )
}

export default RandomPokermon

