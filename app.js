const express = require('express');
const app = express();

const {updateDeviceList, initDB} = require('./deviceType'); 

initDB();

app.get('/', (req, res) => {
    res.send('ok');
});
app.post('/deviceTypes/:typeId/:deviceId', (req, res) => {
    const {typeId, deviceId} = req.params;
    // const {deviceId} = req.body;
    console.log({typeId, deviceId});
    updateDeviceList(deviceId, typeId);
});
app.post('/location/create', (req, res) => {
    const body = req;
    console.log(body)
})
app.listen(3000, () => {
    console.log('server is listening at', 3000);
})