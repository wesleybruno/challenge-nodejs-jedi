const express = require('express');
const app = express();

//Rotas
const liveOnSolutionsRouter = require('./route/LiveOnSolutionsRouter');

app.use('/api/v2/', liveOnSolutionsRouter);

const port = process.env.PORT || '3000';

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})