import { useState } from "react"

const SearchPage = () => {
    const [keyword, setKeyword] = useState(''); //フリーワード検索
    const [minPrice, setMinPrice] = useState(''); //最低価格
    const [maxPrice, setMaxPrice] = useState(''); //最高価格
    const [spicy, setSpicy] = useState(""); //甘辛度
    const [smell, setSmell] = useState(""); //香り
    const [spec, setSpec] = useState(""); //精米スペック
    const [rice, setRice] = useState(""); //酒米の種類
    const [error, setError] = useState("");

    const handlePriceChange = (setter) => (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        if (isNaN(value) || value === '') {
            setter("");
            setError("数字で入力してください。");
        } else {
            setter(value);
            setError("");  // clear the error message
        }
    };

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleMinPriceChange = (event) => {
        const value = parseInt(event.target.value);
        setMinPrice(isNaN(value) ? '' : value);
    };

    const handleMaxPriceChange = (event) => {
        const value = parseInt(event.target.value);
        setMaxPrice(isNaN(value) ? '' : value);
    };

    const handleSpicyChange = (event) => {
        setSpicy(event.target.value);
      };
    
      const handleSmellChange = (event) => {
        setSmell(event.target.value);
      };
    
      const handleSpecChange = (event) => {
        setSpec(event.target.value);
      };
    
      const handleRiceChange = (event) => {
        setRice(event.target.value);
      };


    return(
        <>
            <h1>日本酒を検索</h1>
            <form>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td>キーワード</td>
                            <td>
                              <input
                                type="text"
                                id="keywordInput"
                                placeholder="検索したいキーワードを入力"
                                value={keyword}
                                onChange={handleKeywordChange}
                              />
                            </td>
                        </tr>
                        <tr>
                            <td>価格</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="price-en">
                                  <input type="text" placeholder="￥" id="minPriceInput" value={minPrice} onChange={handlePriceChange(setMinPrice)} />
                                </div>
                                <span className="from-to">~</span>
                                <div className="price-en">
                                  <input type="text" placeholder="￥" id="maxPriceInput" value={maxPrice} onChange={handlePriceChange(setMaxPrice)} />
                                </div>
                              </div>
                            </td>
                        </tr>
                        <tr>
                            <td>甘辛度</td>
                            <td>
                                <ul className="input-wrapper d-flex flex-row flex-wrap list-unstyled">
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input type="radio" name="amakarido" value="辛口" id="spicy" onChange={handleSpicyChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="spicy">辛口</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input type="radio" name="amakarido" value="やや辛口" id="somewhat-spicy" onChange={handleSpicyChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="somewhat-spicy">やや辛口</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input type="radio" name="amakarido" value="中口" id="medium" onChange={handleSpicyChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="medium">中口</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input type="radio" name="amakarido" value="やや甘口" id="somewhat-sweet" onChange={handleSpicyChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="somewhat-sweet">やや甘口</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input type="radio" name="amakarido" value="甘口" id="sweet" onChange={handleSpicyChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="sweet">甘口</label>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>香り</td>
                            <td>
                                <ul className="input-wrapper">
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input
                                              type="radio"
                                              name="smell"
                                              id="strong-smell"
                                              value="strong"
                                              onChange={handleSmellChange}
                                            />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="strong-smell">強い</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input
                                            type="radio"
                                            name="smell"
                                            id="moderate-strong-smell"
                                            value="moderate-strong"
                                            onChange={handleSmellChange}
                                            />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="moderate-strong-smell">やや強い</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input
                                                type="radio"
                                                name="smell"
                                                id="moderate-smell"
                                                value="moderate"
                                                onChange={handleSmellChange}
                                            />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="moderate-smell">普通</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                             <input
                                                type="radio"
                                                 name="smell"
                                                 id="moderate-weak-smell"
                                                 value="moderate-weak"
                                                 onChange={handleSmellChange}
                                             />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="moderate-weak-smell">やや弱い</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                        <input
                                            type="radio"
                                            name="smell"
                                            id="weak-smell"
                                            value="weak"
                                            onChange={handleSmellChange}
                                        />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="weak-smell">弱い</label>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>スペック</td>
                            <td>
                                <ul className="input-wrapper">
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input type="radio" name="spec" value="純米" id="jyunnmai" onChange={handleSpecChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="jyunnmai">純米</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input type="radio" name="spec" value="純米吟醸" id="jyunnmaiginnjyou" onChange={handleSpecChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="jyunnmaiginnjyou">純米吟醸</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input type="radio" name="spec" value="純米大吟醸" id="jyunnmaidaiginnjyou" onChange={handleSpecChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="jyunnmaidaiginnjyou">純米大吟醸</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input type="radio" name="spec" value="吟醸" id="ginjyou" onChange={handleSpecChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="ginjyou">吟醸</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input type="radio" name="spec" value="大吟醸" id="daiginjyou" onChange={handleSpecChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="daiginjyou">大吟醸</label>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>酒米</td>
                            <td>
                              <ul className="input-wrapper">
                                <li className="category-selecter flex-fill">
                                    <div className="check-box">
                                        <input type="radio" name="sakamai" value="山田錦" onChange={handleRiceChange}/>
                                    </div>
                                    <div className="info">
                                        <label>山田錦</label>
                                    </div>
                                </li>
                                <li className="category-selecter flex-fill">
                                    <div className="check-box">
                                        <input type="radio" name="sakamai" value="五百万石" onChange={handleRiceChange} />
                                    </div>
                                    <div className="info">
                                         <label>五百万石</label>
                                    </div>
                                </li>
                                <li className="category-selecter flex-fill">
                                    <div className="check-box">
                                         <input type="radio" name="sakamai" value="愛山" onChange={handleRiceChange}/>
                                    </div>
                                    <div className="info">
                                         <label>愛山</label>
                                    </div>
                                </li>
                                <li className="category-selecter flex-fill">
                                    <div className="check-box">
                                        <input type="radio" name="sakamai" value="雄町" onChange={handleRiceChange}/>
                                    </div>
                                    <div className="info">
                                        <label>雄町</label>
                                    </div>
                                </li>
                                <li className="category-selecter flex-fill">
                                    <div className="check-box">
                                        <input type="radio" name="sakamai" value="美山錦" onChange={handleRiceChange}/>
                                    </div>
                                    <div className="info">
                                        <label>美山錦</label>
                                    </div>
                                </li>
                                <li className="category-selecter flex-fill">
                                    <div className="check-box">
                                        <input type="radio" name="sakamai" value="その他" onChange={handleRiceChange}/>
                                    </div>
                                    <div className="info">
                                        <label>その他</label>
                                    </div>
                                </li>
                              </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default SearchPage