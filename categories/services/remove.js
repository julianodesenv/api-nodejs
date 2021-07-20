import Category from './../schema/Category'

export default (req, res) => {
    Category.findByIdAndRemove(req.params.id)
        .then(() => res.status(204).end())
        .catch((err) => res.status(500)
            .json({
                status: false, data: {}
            }))

}