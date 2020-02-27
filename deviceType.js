var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/devicedb', {useNewUrlParser: true, useUnifiedTopology: true})

// tạo schema
var deviceType = new mongoose.Schema({
    namedevice: String,
    typeid: String,
    properties: 
        [ {
            name: {
                label: String,
                htmltag: String,
                placeholder: String,
                typeof: [String]
            },
            username: {
                label: String,
                htmltag: String,
                placeholder: String,
                typeof: [String]
            },
            password: {
                label: String,
                htmltag: String,
                placeholder: String,
                typeof: [String]
            },
            streamurl: {
                label: String,
                htmltag: String,
                placeholder: String,
                typeof: [String]
            },
            ptz: {
                label: String,
                htmltag: String,
                placeholder: String,
                typeof: [String]
            }
        }
        ]
    
})

// biên dịch model từ schema (tham số 1 là tên collection tham số 2 là schema)
var user = mongoose.model('deviceType', deviceType)
user.create({
    namedevice: 'Camera Quan Sát',
    typeid: 'cctv',
    properties: {
        name: {
            label: 'Device Name',
            htmltag: 'input',
            placeholder: 'Device Name',
            typeof: ['all']
        },
        username: {
            label: 'User Name',
            htmltag: 'input',
            placeholder: 'User Name',
            typeof: ['cctv']
        },
        password: {
            label: 'Password',
            htmltag: 'input',
            placeholder: '',
            typeof: ['cctv']
        },
        streamurl: {
            label: 'Stream Url',
            htmltag: 'input',
            placeholder: 'Stream Url',
            typeof: ['cctv']
        },
    }
})


app.get('/cctv/create', (req, res) => {
})
app.listen(3000);