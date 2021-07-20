import Bill from './../schema/Bill'

export default (req, res) => {
    Bill.find({})
        .populate('category')
        .then((bills) => {
            if (!bills || bills.lenght) {
                return res.status(404), json({
                    status: 404,
                    data: []
                })
            }

            return res.status(200).json({
                status: true,
                data: bills
            })
        })
        .catch(err => res.status(500).json({
            status: false,
            data: []
        }))
}