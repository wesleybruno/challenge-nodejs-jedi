const liveOnSolutionsCommand = require('./../command/LiveOnSolutionsCommand')

exports.orderByStatus = async (req, res) => {
    const result = await liveOnSolutionsCommand.orderByStatus()
    res.status(200).send(result)
};

exports.orderTotal = async (req, res) => {
    const result = await liveOnSolutionsCommand.orderTotal()
    res.status(200).send(result)
};

exports.orderMajorValue = async (req, res) => {
    const result = await liveOnSolutionsCommand.orderMajorValue()
    res.status(200).send(result)
};

exports.groupByCountry = async (req, res) => {
    const result = await liveOnSolutionsCommand.groupByCountry()
    res.status(200).send(result)
};