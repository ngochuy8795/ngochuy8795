var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/devicedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// tạo schema
var cctv = new mongoose.Schema({
  typeId: String,
  typeName: {
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
        }
      }
    }
  ]
});

// biên dịch model từ schema (tham số 1 là tên collection tham số 2 là schema)
var device = mongoose.model("deviceTypeTest", cctv);
device.create({
  typeId: "cctv",
  typeName: {
    vi_vn: "Camera Quan Sát",
    en_us: "Camera"
  },
  properties: [
    {
      key: "userName",
      value: {
        keyType: "text",
        label: { vi_vn: "Tài Khoản", en_us: "User Name" },
        placeholder: { vi_vn: "Nhập Tài Khoản", en_us: "Enter Username" }
      }
    },
    {
      key: "password",
      value: {
        keyType: "password",
        label: { vi_vn: "Mật Khẩu", en_us: "Password" },
        placeholder: { vi_vn: "Nhập Mật Khẩu", en_us: "Enter Password"}
      }
    },
    {
      key: "streamUrl",
      value: {
        keyType: "url",
        label: { vi_vn: "Đường dẫn trực tiếp", en_us: "Stream Url" },
        placeholder: { vi_vn: "Đường dẫn trực tiếp", en_us: "Stream Url"}
      }
    },
    {
      key: "ptz",
      value: {
        keyType: "boolean",
        label: { vi_vn: "PTZ", en_us: "PTZ" }
      }
    }
  ]
});

device.create({
  typeId: "vds",
  typeName: {
    vi_vn: "Đếm lưu lượng xe",
    en_us: "VDS"
  },
  properties: [
    {
      key: "userName",
      value: {
        keyType: "text",
        label: { vi_vn: "Tài Khoản", en_us: "User Name" },
        placeholder: { vi_vn: "Nhập Tài Khoản", en_us: "Enter Username" }
      }
    },
    {
      key: "password",
      value: {
        keyType: "password",
        label: { vi_vn: "Mật Khẩu", en_us: "Password" },
        placeholder: { vi_vn: "Nhập Mật Khẩu", en_us: "Enter Password"}
      }
    }
  ]
});

// app.get('/cctv/create', (req, res) => {
// })
// app.listen(3000);
