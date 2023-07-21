const mongoose = require('mongoose');

const SakeSchema = new mongoose.Schema({
  name: String,         // 酒の名前
  maker: String,        // メーカー名
  region:String,        //都道府県
  price_large: Number,
  price_small: Number,
  spicy: [String],        // 甘辛度
  smell: [String],        // 香り
  spec: String,         // 精米スペック
  rice: String,         // 酒米の種類
  stock: Boolean,       // 在庫があるか
  gift: Boolean,        // ギフト対応しているか
  cool: Boolean,        //要冷蔵か常温か
  imageUrl: String,     // 画像のURL
  description: String, // 商品の説明
});

module.exports = mongoose.model('Sake', SakeSchema);
