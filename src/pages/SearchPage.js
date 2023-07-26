import { useState,useContext } from "react"
import './SearchPage.css';
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";
import { Header, Footer } from './Header_Footer';

const SearchPage = () => {
    const [keyword, setKeyword] = useState(''); //フリーワード検索
    const [minPrice, setMinPrice] = useState(''); //最低価格
    const [maxPrice, setMaxPrice] = useState(''); //最高価格
    const [spicy, setSpicy] = useState([]); //甘辛度
    const [smell, setSmell] = useState([]); //香り
    const [spec, setSpec] = useState([]); //精米スペック
    const [rice, setRice] = useState([]); //酒米の種類
    const [error, setError] = useState("");//エラー
    const [gift,setGift] = useState("");//ギフトかどうか
    const [stock,setStock] = useState("");//在庫があるか

    const {setSearchParams} = useContext(SearchContext)

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

    const handleClear = () => {
        setKeyword('');     // キーワードステートを初期化
        setMinPrice('');    // 最低価格ステートを初期化
        setMaxPrice('');    // 最高価格ステートを初期化
        setSpicy('');       // スパイシー（甘辛度）ステートを初期化
        setSmell('');       // 香り（種類）ステートを初期化
        setSpec('');        // スペック（仕様）ステートを初期化
        setRice('');        // ご飯（種類）ステートを初期化
        setError('');       // エラー（バリデーションエラーメッセージ）ステートを初期化
        setGift('');        // ギフト（用途）ステートを初期化
        setStock('');   
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const searchParams = {
            keyword,minPrice,maxPrice,spicy,smell,spec,rice,error,gift,stock,
        }; 
        setSearchParams(searchParams);
        console.log(setSearchParams)
        navigate('/sakeresult')
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
        const {value, checked } = event.target;
        setSpicy(prevState => {
            if (checked) {
                return [...prevState,value]
            } else {
                return prevState.filter(item => item !== value);
            }
        });
    };
    
    const handleSmellChange = (event) => {
        const { value, checked } = event.target
        setSmell(prevState => {
            if (checked) {
                return [...prevState,value]
            } else {
                return prevState.filter(item => item !== value);
            }
        });
    };
    
    const handleSpecChange = (event) => {
        const { value, checked } = event.target
        setSpec(prevState => {
            if (checked) {
                return [...prevState,value]
            } else {
                return prevState.filter(item => item !== value);
            }
        });
    };
    
    const handleRiceChange = (event) => {
        const { value, checked } = event.target
        setRice(prevState => {
            if (checked) {
                return [...prevState,value]
            } else {
                return prevState.filter(item => item !== value);
            }
        });
    };

      const handleGiftChange = (event) => {
        setGift(event.target.value);
    };

      const handleStockChange = (event) => {
        setStock(event.target.value);
    };

      const navigate = useNavigate();

      const handleTop = (event) => {
        navigate("/")
    };

    return(
        <>
            <Header />
            <h1 className="d-flex justify-content-center">日本酒を検索</h1>
            <form>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td>キーワード</td>
                            <td>
                                <input className="form-control" onChange={handleKeywordChange} type="text" placeholder="検索したいキーワードを入力" aria-label="default input example" id="keywordInput" value={keyword}/>
                            </td>
                        </tr>
                        <tr>
                            <td>価格</td>
                            <td>
                                <div className="row">
                                    <div className="price-en col-3">
                                        <input className="form-control" type="number" placeholder="￥" id="minPriceInput" value={minPrice} onChange={handlePriceChange(setMinPrice)} />
                                    </div>
                                    <div className="col-auto">
                                        <span className="from-to">~</span>
                                    </div>
                                    <div className="price-en col-3">
                                        <input className="form-control" type="number" placeholder="￥" id="maxPriceInput" value={maxPrice} onChange={handlePriceChange(setMaxPrice)} />
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
                                            <input className="form-check-input" type="checkbox" name="amakarido" value="辛口" id="spicy" onChange={handleSpicyChange} />
                                        </div>
                                        <div className="info">
                                            <label className="form-check-label" htmlFor="spicy">辛口</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="checkbox" name="amakarido" value="やや辛口" id="somewhat-spicy" onChange={handleSpicyChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="somewhat-spicy">やや辛口</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="checkbox" name="amakarido" value="中口" id="medium" onChange={handleSpicyChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="medium">中口</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="checkbox" name="amakarido" value="やや甘口" id="somewhat-sweet" onChange={handleSpicyChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="somewhat-sweet">やや甘口</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input type="checkbox" name="amakarido" value="甘口" id="sweet" onChange={handleSpicyChange} />
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
                                <ul className="input-wrapper d-flex flex-row flex-wrap list-unstyled">
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="checkbox" name="smell" id="strong-smell" value="強い" onChange={handleSmellChange}/>
                                        </div>
                                        <div className="info">
                                            <label htmlFor="strong-smell">強い</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="checkbox" name="smell" id="moderate-strong-smell" value="やや強い" onChange={handleSmellChange}/>
                                        </div>
                                        <div className="info">
                                            <label htmlFor="moderate-strong-smell">やや強い</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="checkbox" name="smell" id="moderate-smell" value="普通" onChange={handleSmellChange}/>
                                        </div>
                                        <div className="info">
                                            <label htmlFor="moderate-smell">普通</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                             <input className="form-check-input" type="checkbox"  name="smell"  id="moderate-weak-smell"  value="やや弱い"  onChange={handleSmellChange}/>
                                        </div>
                                        <div className="info">
                                            <label htmlFor="moderate-weak-smell">やや弱い</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                        <input className="form-check-input" type="checkbox" name="smell" id="weak-smell" value="弱い" onChange={handleSmellChange}/>
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
                                <ul className="input-wrapperinput-wrapper d-flex flex-row flex-wrap list-unstyled">
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="checkbox" name="spec" value="純米" id="jyunnmai" onChange={handleSpecChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="jyunnmai">純米</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="checkbox" name="spec" value="純米吟醸" id="jyunnmaiginnjyou" onChange={handleSpecChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="jyunnmaiginnjyou">純米吟醸</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="checkbox" name="spec" value="純米大吟醸" id="jyunnmaidaiginnjyou" onChange={handleSpecChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="jyunnmaidaiginnjyou">純米大吟醸</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="checkbox" name="spec" value="吟醸" id="ginjyou" onChange={handleSpecChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor="ginjyou">吟醸</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="checkbox" name="spec" value="大吟醸" id="daiginjyou" onChange={handleSpecChange} />
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
                              <ul className="input-wrapper d-flex flex-row flex-wrap list-unstyled">
                                <li className="category-selecter flex-fill">
                                    <div className="check-box">
                                        <input className="form-check-input" type="checkbox" name="sakamai" value="山田錦" onChange={handleRiceChange}/>
                                    </div>
                                    <div className="info">
                                        <label>山田錦</label>
                                    </div>
                                </li>
                                <li className="category-selecter flex-fill">
                                    <div className="check-box">
                                        <input className="form-check-input" type="checkbox" name="sakamai" value="五百万石" onChange={handleRiceChange} />
                                    </div>
                                    <div className="info">
                                         <label>五百万石</label>
                                    </div>
                                </li>
                                <li className="category-selecter flex-fill">
                                    <div className="check-box">
                                         <input className="form-check-input" type="checkbox" name="sakamai" value="愛山" onChange={handleRiceChange}/>
                                    </div>
                                    <div className="info">
                                         <label>愛山</label>
                                    </div>
                                </li>
                                <li className="category-selecter flex-fill">
                                    <div className="check-box">
                                        <input className="form-check-input" type="checkbox" name="sakamai" value="雄町" onChange={handleRiceChange}/>
                                    </div>
                                    <div className="info">
                                        <label>雄町</label>
                                    </div>
                                </li>
                                <li className="category-selecter flex-fill">
                                    <div className="check-box">
                                        <input className="form-check-input" type="checkbox" name="sakamai" value="美山錦" onChange={handleRiceChange}/>
                                    </div>
                                    <div className="info">
                                        <label>美山錦</label>
                                    </div>
                                </li>
                                <li className="category-selecter flex-fill">
                                    <div className="check-box">
                                        <input className="form-check-input" type="checkbox" name="sakamai" value="その他" onChange={handleRiceChange}/>
                                    </div>
                                    <div className="info">
                                        <label>その他</label>
                                    </div>
                                </li>
                              </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>用途</td>
                            <td>
                                <ul className="input-wrapper d-flex flex-row flex-wrap list-unstyled">
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="radio" name="gift" value="gift" onChange={handleGiftChange}/>
                                        </div>
                                        <div className="info">
                                            <label>ギフト用</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="radio" name="gift" value="private" onChange={handleGiftChange}/>
                                        </div>
                                        <div className="info">
                                            <label>個人用</label>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>在庫</td>
                            <td>
                                <ul className="input-wrapper d-flex flex-row flex-wrap list-unstyled">
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="radio" name="stock" value="onstock" onChange={handleStockChange}/>
                                        </div>
                                        <div className="info">
                                            <label>在庫あり</label>
                                        </div>
                                    </li>
                                    <li className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="radio" name="stock" value="offstock" onChange={handleStockChange}/>
                                        </div>
                                        <div className="info">
                                            <label>在庫なし</label>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-primary m-2" onClick={handleTop}>TOPに戻る</button>
                    <button className="btn btn-secondary m-2" onClick={handleClear}>条件をクリア</button>
                    <button className="btn btn-primary m-2" onClick={handleSearch}>この条件で検索</button>
                </div>
            </form>
            <Footer />
        </>
    )
}

export default SearchPage