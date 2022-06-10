import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"

import axios from "axios"

class GameCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            game: {
                info: {
                    title: ""
                },
                deals: {
                    0: {
                        price: ""
                    }
                }
            }
        }
    }

    componentDidMount = () => {
        this.getGame(this.props.gameID)
    }

    getGame = gameID => {
        axios.get(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`)
        .then(res => res.data)
        .then(data => {
            const game = data
            game.thumb = this.props.thumb
            this.setState({ game })
        })
    }

    render(){
        const { game } = this.state
        const { savings, price } = game.deals[0]
        const { gameID } = this.props
        const thumb = {backgroundImage: `url(${this.props.thumb})`}

        return (
            <div className="gamecard-row">
                <Link
                    className="game-card"
                    to={{
                        pathname: `/game/${gameID}`,
                        state: {game: game}
                    }}>
                    <span className="card-thumb" style={thumb}></span>
                    <div className="game-info-container">
                        <div className="game-info">
                            <p>{game.info.title}</p>
                        </div>

                        <div className="game-price-card">
                            <div className="game-savings">
                                {savings > 0 ? <p>-{Math.round(savings)}%</p> : ""}
                            </div>
                        <div>
                            <p>Best deal</p>
                            <p>{price}</p>
                        </div>
                        </div>
                    </div>
                
                </Link>
            </div>
        )
    }
}

export default withRouter (GameCard)