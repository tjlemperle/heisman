const favoritesArr = []
let id = 0;

module.exports = {
    add: (req, res) => {
        const {favorite} = req.body
        favorite.id = id
        id++
        favoritesArr.push(favorite)
        res.status(200).send(favoritesArr)
    },
    delete: (req,res) => {
        const {id} = req.params
        const index = favoritesArr.findIndex(e => e.id === +id)
        favoritesArr.splice(index, 1)
        res.status(200).send(favoritesArr)
    }
}