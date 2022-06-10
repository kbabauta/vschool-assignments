import React, {Component} from "react"
import PriceList from "./PriceList"
import RatingNotes from "./RatingNotes"

class GameInfo extends Component {
    render() {
        const {deals, thumb} = this.props.location.state.game
        const {title} =  this.props.locations.state.game.info
        const {dealID, price} = deals[0]
        const {gameID} = this.props.match.params
        const {game} = this.props.location.state

        return(
            <div className="container">
            <section className="banner">
                <div className="container banner-container">
                    <div className="banner-element">
                        <div className="banner-info">
                            <h1>{title}</h1>
                            <RatingNotes dealID={dealID} />    
                        </div>    
                    </div>
                    <div>
                        <PriceList deals={deals}/>    
                    </div>    
                </div> 
            </section>
            </div>
        )
    }
}

export default GameInfo