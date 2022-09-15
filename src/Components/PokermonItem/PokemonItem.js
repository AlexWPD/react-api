import { Component } from "react";


class PokemonItem extends Component {
    render() {
        return(
            <li className="list-group-item fs-4">
                {this.props.name}
            </li>
        )
    }
}

export default PokemonItem
