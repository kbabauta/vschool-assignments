import React, {Component} from "react"
import SortedPrice from "./SortedPrice"
import GameCard from "./GameCard"

class GameList extends Component {
    state = {
        games: this.props.location.state.games,
        sortBy: ''
    }

    handleSorted = event => {
        const value = event.target.value
        const byPrice = (a,b) => a.cheapest-b.cheapest
        if(value === "cheapest") {
            const filteredPrice = {...this.state.games}.sort(byPrice)
            this.setState({
                games: filteredPrice
            })
        } else {
            const {games} = this.props.location.state
            this.setState({games})
        }
    }

    render() {
        return(
            <div className="container result-container">
                <h2>Your Search Result</h2>
                    <SortedPrice handleSorted={this.handleSorted}/>
                    <div className="game-list-rows">
                        {
                        this.state.games.map(game => 
                            <GameCard
                                key={game.gameID}
                                {...game}
                            />)
                        }
                    </div>
            </div>
        )
    }
}

export default GameList