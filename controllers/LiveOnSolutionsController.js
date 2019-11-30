const liveOnSolutionsCommand = require('./../command/LiveOnSolutionsCommand')

exports.orderByStatus = async (req, res) => {
    const result = await liveOnSolutionsCommand.orderByStatus()
    res.status(200).json(result)
};

exports.orderTotal = async (req, res) => {
    const result = await liveOnSolutionsCommand.orderTotal(req.params['status'])
    res.status(200).json(result)
};

exports.orderMajorValue = async (req, res) => {
    const result = await liveOnSolutionsCommand.orderMajorValue()
    res.status(200).json(result)
};

exports.groupByCountry = async (req, res) => {
    const result = await liveOnSolutionsCommand.groupByCountry()
    res.status(200).json(result)
};