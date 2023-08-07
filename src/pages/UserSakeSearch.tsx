import { useState,useContext } from "react"
import '../css/SearchPage.css';
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";
import { Header, Footer } from '../components/Header_Footer';

const UserSearchPage = () => {
    const [keyword, setKeyword] = useState(''); //フリーワード検索
    const [minPrice, setMinPrice] = useState(''); 
    const [maxPrice, setMaxPrice] = useState(''); 
    const [spicy, setSpicy] = useState<string[]>([]); 
    const [smell, setSmell] = useState<string[]>([]); 
    const [spec, setSpec] = useState<string[]>([]); 
    const [rice, setRice] = useState<string[]>([]); 
    const [error, setError] = useState("");
    const [gift,setGift] = useState("");
    const [stock,setStock] = useState("onsrock");
    const [priceError, setPriceError] = useState("");

    const {setSearchParams} = useContext(SearchContext)

    const handleClear = () => {
        setKeyword('');     
        setMinPrice('');    
        setMaxPrice('');   
        setSmell([]);      
        setSpec([]);      
        setRice([]);        
        setError('');       
        setGift('');        
        setStock('');   
    };

    const handleSearch = (event:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
        event.preventDefault();
        const searchParams = {
            keyword,minPrice,maxPrice,spicy,smell,spec,rice,error,gift,stock,
        }; 
        setSearchParams(searchParams);
        console.log(setSearchParams)
        navigate('/sakeresult')
    };

    const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    const handlePriceChange = (setter: React.Dispatch<React.SetStateAction<string>>) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            setter(event.target.value);

            if (Number(value) < 0) {
                setPriceError("価格は0以上でなければなりません")
                return;
            }
            setter(value);

            if(setter === setMinPrice && Number(value) > Number(maxPrice)){
                setPriceError("最小価格は最大価格より低くなければなりません。");
            } else if (setter === setMaxPrice && Number(value) < Number(minPrice)) {
                setPriceError("最大価格は最小価格より高くなければなりません。");
            } else {
                setPriceError("");
            }
        };
    };

    const handleSpicyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, checked } = event.target;
        setSpicy(prevState => {
            if (checked) {
                return [...prevState,value]
            } else {
                return prevState.filter(item => item !== value);
            }
        });
    };
    
    const handleSmellChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target
        setSmell(prevState => {
            if (checked) {
                return [...prevState,value]
            } else {
                return prevState.filter(item => item !== value);
            }
        });
    };
    
    const handleSpecChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target
        setSpec(prevState => {
            if (checked) {
                return [...prevState,value]
            } else {
                return prevState.filter(item => item !== value);
            }
        });
    };
    
    const handleRiceChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target
        setRice(prevState => {
            if (checked) {
                return [...prevState,value]
            } else {
                return prevState.filter(item => item !== value);
            }
        });
    };

      const handleGiftChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setGift(event.target.value);
    };

      const handleStockChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setStock(event.target.value);
    };

      const navigate = useNavigate();

      const handleTop = (event:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
        navigate("/")
    };

    const spicyOptions = [
        { value: "辛口", id: "spicy" },
        { value: "やや辛口", id: "somewhat-spicy" },
        { value: "中口", id: "medium" },
        { value: "やや甘口", id: "somewhat-sweet" },
        { value: "甘口", id: "sweet" }
      ];

      const smellOptions = [
        { id: "strong-smell", value: "強い" },
        { id: "moderate-strong-smell", value: "やや強い" },
        { id: "moderate-smell", value: "普通" },
        { id: "moderate-weak-smell", value: "やや弱い" },
        { id: "weak-smell", value: "弱い" }
      ];
      
      const specOptions = [
        { id: "jyunnmai", value: "純米" },
        { id: "jyunnmaiginnjyou", value: "純米吟醸" },
        { id: "jyunnmaidaiginnjyou", value: "純米大吟醸" },
        { id: "ginjyou", value: "吟醸" },
        { id: "daiginjyou", value: "大吟醸" }
      ];
      
      const riceOptions = [
        { id:"yamadanishiki",value: "山田錦" },
        { id:"gohyakumanngoku",value: "五百万石" },
        { id:"aiyama",value: "愛山" },
        { id:"omatchi",value: "雄町" },
        { id:"miyamanishiki",value: "美山錦" },
        { id:"other",value: "その他" }
      ];

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
                                {priceError && <p className="text-danger">{priceError}</p>}
                            </td>
                        </tr>
                        <tr>
                            <td>甘辛度</td>
                            <td>
                                <ul className="input-wrapper d-flex flex-row flex-wrap list-unstyled">
                                {spicyOptions.map(option => (
                                    <li key={option.id} className="category-selecter flex-fill">
                                        <div className="check-box">
                                            <input className="form-check-input" type="checkbox" name="amakarido" value={option.value} id={option.id} onChange={handleSpicyChange} />
                                        </div>
                                        <div className="info">
                                            <label htmlFor={option.id}>{option.value}</label>
                                        </div>
                                    </li>
                                ))}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>香り</td>
                            <td>
                                <ul className="input-wrapper d-flex flex-row flex-wrap list-unstyled">
                                    {smellOptions.map(option => (
                                        <li className="category-selecter flex-fill" key={option.id}>
                                            <div className="check-box">
                                                <input className="form-check-input" type="checkbox" name="smell" id={option.id} value={option.value} onChange={handleSmellChange} />
                                            </div>
                                            <div className="info">
                                                <label htmlFor={option.id}>{option.value}</label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>スペック</td>
                            <td>
                                <ul className="input-wrapper d-flex flex-row flex-wrap list-unstyled">
                                    {specOptions.map(option => (
                                        <li className="category-selecter flex-fill" key={option.id}>
                                            <div className="check-box">
                                                <input className="form-check-input" type="checkbox" name="spec" id={option.id} value={option.value} onChange={handleSpecChange} />
                                            </div>
                                            <div className="info">
                                                <label htmlFor={option.id}>{option.value}</label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>酒米</td>
                            <td>
                                <ul className="input-wrapper d-flex flex-row flex-wrap list-unstyled">
                                    {riceOptions.map(option => (
                                        <li className="category-selecter flex-fill" key={option.id}>
                                            <div className="check-box">
                                                <input className="form-check-input" type="checkbox" name="rice" id={option.id} value={option.value} onChange={handleRiceChange} />
                                            </div>
                                            <div className="info">
                                                <label htmlFor={option.id}>{option.value}</label>
                                            </div>
                                        </li>
                                    ))}
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
                                            <input className="form-check-input" type="radio" name="stock" value="onstock" onChange={handleStockChange} checked={stock === 'onstock'}/>
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

export default UserSearchPage