var mongoose = require('mongoose');
const Schema = mongoose.Schema;
let deviceTypeModel;
let locationModel;
function initDB() {
  mongoose.connect("mongodb://localhost:27017/devicedb-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// tạo schema

const device = new mongoose.Schema({
    name: {
      vi_vn: String,
      en_us: String
    },
    type: String,
    properties: {}
})

const deviceType = new mongoose.Schema({
  id: String,
  name: {
    vi_vn: String,
    en_us: String
  },
  properties: [
    {
      key: String,
      value: {
        keyType: String,
        label: {
          vi_vn: String,
          en_us: String
        },
        placeholder: {
          vi_vn: String,
          en_us: String
        },
        validates: {
          required: boolean
        },
        defaultValue: {type: boolean, default: false}
      }
    }
  ]
});

const devicemodel = mongoose.model("device", device);
devicemodel.create({
    name : {
      vi_vn: "Camera Quan Sát Q1",
      en_us: ""
    },
    type : "cctv",
    properties : {
        username : "root",
        password : "root",
        streamUrl : "rtsp://10.82.68.201/live.dp",
        ptz : true
    }
})

devicemodel.create({
  name : {
    vi_vn: "Đo đếm lưu lượng xe Q1",
    en_us: "VDS Q1"
  },
  type : "vds",
  properties : {
      username : "root",
      password : "root"
  }
})

// biên dịch model từ schema (tham số 1 là tên collection tham số 2 là schema)
deviceTypeModel = mongoose.model("deviceType", deviceType);

deviceTypeModel.create({
  id: "cctv",
  name: {
    vi_vn: "Camera Quan Sát",
    en_us: "Camera"
  },
  properties: [
    {
      key: "deviceName",
      value: {
        keyType: "text",
        label: { vi_vn: "Tên Thiết Bị", en_us: "Device Name" },
        placeholder: { vi_vn: "Nhập tên thiết bị", en_us: "Enter Device Name" },
        validates: {required: true}
      }
    },
    {
      key: "userName",
      value: {
        keyType: "text",
        label: { vi_vn: "Tài Khoản", en_us: "Username" },
        placeholder: { vi_vn: "Nhập Tài Khoản", en_us: "Enter Username" },
        validates: {required: false}
      }
    },
    {
      key: "password",
      value: {
        keyType: "password",
        label: { vi_vn: "Mật Khẩu", en_us: "Password" },
        placeholder: { vi_vn: "Nhập Mật Khẩu", en_us: "Enter Password"},
        validates: {required: false}
      }
    },
    {
      key: "streamUrl",
      value: {
        keyType: "url",
        label: { vi_vn: "Đường dẫn trực tiếp", en_us: "Stream Url" },
        placeholder: { vi_vn: "Đường dẫn trực tiếp", en_us: "Stream Url"},
        validates: {required: true}
      }
    },
    {
      key: "ptz",
      value: {
        keyType: "checkbox",
        label: { vi_vn: "PTZ", en_us: "PTZ" }
      },
      validates: {required: false},
      defaultValue: {
        checked: false
      }
    }
  ],

});



}
// async function updateDeviceList(deviceId, typeId) {
//   console.log({deviceId, typeId});
//   const filter = {
//     typeId
//   };
//   await deviceTypeModel.updateOne(filter, {
//     $push: {
//       device: mongoose.Types.ObjectId(deviceId)
//     }
//   })
// }

// module.exports = {
//   updateDeviceList, initDB
// }
