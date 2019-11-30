const express = require('express');
const app = express();

//Rotas
// const index = require('./routes/index');
// const personRoute = require('./routes/personRoute');

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.use('/', index);
// app.use('/person', personRoute);

const port = process.env.PORT || '3000';

app.listen(port, () => {

    // const service = require('./services/DataService')
    // const data = await service.getJsonData()
    
    //console.log(data)

    console.log(`app listening on port ${port}`)
})