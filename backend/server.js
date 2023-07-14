require('dotenv').config();

//これらは、Node.js アプリケーションで必要な外部モジュールを読み込むためのコードです。
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//expressを使って新しいアプリケーションオブジェクトを作成します。
const app = express();

//CORS (Cross-Origin Resource Sharing) のミドルウェアを追加します。これは、別のドメイン/ポートから来るリクエストを許可するために必要です。
app.use(cors());

//JSON を理解して解析するためのミドルウェアを追加します。これにより、リクエストのボディに含まれる JSON データを扱うことができます。
app.use(express.json());

const sakeRouter = require('./routes/sake')
app.use('/sake', sakeRouter)

//.envファイルから MongoDB の URI を取得します。これは、MongoDB データベースに接続するために必要な情報です。
const uri = process.env.ATLAS_URI;

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
