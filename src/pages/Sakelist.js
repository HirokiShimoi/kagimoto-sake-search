import React, { useEffect, useState } from 'react';

function SakeList() {
    const [sakes, setSakes] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:5000/sake')
        .then(response => response.json())
        .then(data => {
            console.log(data); // 追加
            setSakes(data)
          })
        .catch((error) => console.error('Error:', error));
    }, []);
  
    return (
      <div>
        <h1>Sake List</h1>
        {sakes.map(sake => (
          <div key={sake._id}>
            <h2>{sake.name}</h2>
            <p>大瓶価格: {sake.price.large} 円</p>
            <p>小瓶価格: {sake.price.small} 円</p>
            <p>甘辛度: {sake.spicy}</p>
            <p>香り: {sake.smell}</p>
            <p>精米スペック: {sake.spec}</p>
            <p>酒米の種類: {sake.rice}</p>
            <p>在庫: {sake.stock ? 'あり' : 'なし'}</p>
            <p>ギフト対応: {sake.gift ? '対応' : '非対応'}</p>
            <p>生産地: {sake.region}</p>
            <p>保存方法: {sake.cool ? '冷蔵' : '常温'}</p>
            <img src={sake.imageUrl} alt={sake.name} />
            <p>メーカー: {sake.maker}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default SakeList;
  