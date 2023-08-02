require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sakeRouter = require('./routes/sake');
const uri = process.env.ATLAS_URI;
const app = express();

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

// A Promise that gets rejected but the rejection is not caught anywhere
let myPromise = new Promise((resolve, reject) => {
  reject("Some error");
});


app.use(cors());
app.use(express.json());
app.use('/sake', sakeRouter);

//mongooseを使って MongoDB データベースに接続します。ここでは、新しいパーサーとトポロジーを使用するように指定しています。
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//mongooseの接続オブジェクトを取得します。これは、接続の状態を確認したり、接続が開かれたときに特定のアクションを実行したりするのに便利です。
const connection = mongoose.connection;

//一度だけ 'open' イベントをリッスンします。これは、データベース接続が開かれたときに一度だけ発火します。
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//アプリケーションを特定のポートで待機させます。このコードはサーバーを起動してクライアントからの接続を待ち受けるためのものです。
app.listen(5000, () => {
    console.log("Server is running on Port: 5000");
});



