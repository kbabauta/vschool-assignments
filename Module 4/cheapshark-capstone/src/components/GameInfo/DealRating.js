import React, {Component} from "react"
import axios from "axios"

const price = {
    marginTop: "30px",
}
const priceValue={
    marginTop: "20px",
}

class DealRating extends Component {
    constructor(props){
        super(props)
        this.state={
            price: 0
        }
    }

    getDealRating=(id)=>{
        axios.get(`https://www.cheapshark.com/api/1.0/deals?id=${id}`)
        .then(res => {
            return res.data
        })
        .then(data => {
            const salePrice = data.gameInfo.salePrice
            this.setState({price: salePrice})
        })
        .catch (err => {
            console.log(err)
        })
    }

    componentDidMount(){
        const {dealID} = this.props
        this.getDealRating(dealID)
    }

    render(){
        const {dealID} = this.props
        const dealUrl = `https://www.cheapshark.com/redirect?dealID=${dealID}`
        return(
            <a href={dealUrl} className="best-deal">
                <p style={priceValue}>Best Deal</p>
                <h2 style={price}>${this.state.price}</h2>
                <a className="button"
                    href={`https://www.cheapshark.com/redirect?dealID=${dealID}`}
                    target="_blank">

                </a>
            </a>
        )
    }
}

export default DealRating