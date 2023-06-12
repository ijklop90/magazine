import steam from '../img/steam.svg'
import epicGames from '../img/epic-games.png'
import gog from '../img/gog.svg'

const getIcons = (id) => {
    switch(id) {
        case 0: 
            return steam
        case 1: 
            return epicGames
        case 2: 
            return gog
        default:
            return 'none'
    }
}

export { getIcons}