import { Component } from "react";

import PokemonFetch from "../../Services/Fetch";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import Skeleton from "../Skeleton/Skeleton";

class PokemonInfo extends Component {

    state = {
        char: null,
        loading: false,
        error: false
    }

    pokemonFetch = new PokemonFetch()

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedItemId !== prevProps.selectedItemId) {
            this.updateChar()
        }
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

    updateChar = () => {
        const {selectedItemId} = this.props

        if(!selectedItemId) {
            return
        }

        this.onCharLoading()
        this.pokemonFetch.getChar(selectedItemId).then(this.onCharLoaded).catch(this.onError)
    }
  
    render() {
        const {char, loading, error} = this.state

        const skeleton = char || loading ? null : <Skeleton/>
        const errorMessage = error ? <Error/> : null
        const spinner = loading ? <Spinner/> : null
        const okContent = !(loading || error || !char) ? <View char={char}/> : null

        return(
            <div>
                {skeleton}
                {errorMessage}
                {spinner}
                {okContent}
            </div>
        )
    }   
}

const View = ({char}) => {
    const {name, experience, image} = char
    return(
        <>
            <h2>
                    Блок с покемоном
            </h2>
            <div className="p-2">
                <img src={image} alt={name} />
            </div>
            <h3 className="m-2">{name}</h3>
            <div className="m-2">Experience: {experience}</div>
        </>
    )
}

export default PokemonInfo