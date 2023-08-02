const mongoose = require('mongoose');

const ProductVariationSchema = new mongoose.Schema({
  products_id: Number,
  products: String,
  price: Number,
  stock: Boolean
}, {_id: false});

const SakeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,               // MongoDBのオブジェクトID
  productName: String,       // 酒の名前
  maker: String,             // メーカー名
  region: String,            // 都道府県
  spicy: [String],           // 甘辛度
  smell: [String],           // 香り
  spec: String,              // 精米スペック
  rice: String,              // 酒米の種類
  gift: Boolean,             // ギフト対応しているか
  cool: Boolean,             // 要冷蔵か常温か
  muddiness:Boolean,
  imageUrl: String,          // 画像のURL
  description: String,       // 商品の説明
  content: String,           // 商品の詳細説明
  variations: [ProductVariationSchema] // 商品のバリエーション
});

module.exports = mongoose.model('Sake', SakeSchema);

