import React from "react"
import SearchResult from "./SearchResult"

const SearchList = ({games}) => {
    return(
        <div className="direct-search-result">
            {games.length > 0
            ? games.map(game => 
                <SearchResult
                    key={game.gameID}
                    {...game} 
                />
                )
            : <div className="no-result">No Result</div>
            }

        </div>
    )
}

export default SearchList