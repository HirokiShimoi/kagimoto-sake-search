const mongoose = require('mongoose');

const SakeSchema = new mongoose.Schema({
  name: String,         // 酒の名前
  price: {              // 価格
    large: Number,      // 1.8Lの価格
    small: Number,      // 720mlの価格
  },
  spicy: String,        // 甘辛度
  smell: String,        // 香り
  spec: String,         // 精米スペック
  rice: String,         // 酒米の種類
  stock: Boolean,       // 在庫があるか
  gift: Boolean,        // ギフト対応しているか
  // その他、日本酒に特有の項目があれば追加...
  region:String,        //都道府県
  cool: Boolean,        //要冷蔵か常温か
  imageUrl: String,     // 画像のURL
  maker: String,        // メーカー名
});

module.exports = mongoose.model('Sake', SakeSchema);
