// Sake.js
const mongoose = require('mongoose');

const SakeSchema = new mongoose.Schema({
  name: String,         // 酒の名前
  price: Number,        // 価格
  spicy: String,        // 甘辛度
  smell: String,        // 香り
  spec: String,         // 精米スペック
  rice: String,         // 酒米の種類
  stock: Boolean,       // 在庫があるか
  gift: Boolean,        // ギフト対応しているか
  // その他、日本酒に特有の項目があれば追加...
});

module.exports = mongoose.model('Sake', SakeSchema);
