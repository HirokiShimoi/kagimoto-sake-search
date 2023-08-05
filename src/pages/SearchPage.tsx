import React, { useState,useContext } from "react"
import './SearchPage.css';
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";
import { Header, Footer } from './Header_Footer';
import CheckboxGroup from "./CheckboxGroup";
import { useForm } from "react-hook-form"

const NewSearchPage = () => {
    const [keyword, setKeyword] = useState(''); //フリーワード検索
    const [minPrice, setMinPrice] = useState(''); //最低価格
    const [maxPrice, setMaxPrice] = useState(''); //最高価格
    const [spicy, setSpicy] = useState<string[]>([]); //甘辛度
    const [smell, setSmell] = useState<string[]>([]); //香り
    const [spec, setSpec] = useState<string[]>([]); //精米スペック
    const [rice, setRice] = useState<string[]>([]); //酒米の種類
    const [error, setError] = useState("");//エラー
    const [gift,setGift] = useState("");//ギフトかどうか
    const [stock,setStock] = useState("");//在庫があるか
    const {setSearchParams} = useContext(SearchContext);
    const [checkboxValues, setCheckboxValues] = useState<string[]>([]);

    const handleGiftChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setGift(e.target.value);
    }
    const handleStockChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setStock(e.target.value);
    }
    const navigate = useNavigate()

    const handleTop = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate("/toppage")
    }

    const handleClear = () => {
        setKeyword('');     
        setMinPrice('');   
        setMaxPrice('');   
        setSpicy([]);      
        setSmell([]);      
        setSpec([]);       
        setRice([]);       
        setError('');       
        setGift('');        
    }

    type FormData = {
        keywordInput: string;
        minPriceInput: number;
        maxPriceInput:number;
    };

    const {register, handleSubmit, formState:{errors}, watch} = useForm<FormData>();
    const minPriceWatch = watch("minPriceInput");
    const maxPriceWatch = watch("maxPriceInput");


    const handleSearch = (data:FormData) => {
        const searchParams = {
            keyword: data.keywordInput, // フリーワード検索の値を取得
            minPrice: data.minPriceInput,
            maxPrice: data.maxPriceInput,
        }; 
        //setSearchParams(searchParams);
        setSearchParams(searchParams);
        navigate('/sakeresult')
    }
    

    return (
        <>
        <Header />
        <h1 className="d-flex justify-content-center">日本酒を検索</h1>
        <form onSubmit= {handleSubmit(handleSearch)}>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>キーワード</td>
                        <td>
                            <input className="form-control" onChange={(e) => setKeyword(e.target.value)} type="text" placeholder="検索したいキーワードを入力" aria-label="default input example" id="keywordInput" value={keyword}/>
                        </td>
                    </tr>
                    <tr>
                        <td>価格</td>
                        <td>
                            <div className="row">
                                <div className="price-en col-3">
                                    <input className="form-control" type="number" placeholder="￥" id="minPriceInput"  
                                    {...register("minPriceInput", {validate: value => value >= 0 || "最低価格は0以上で入力してください"})}
                                    />
                                    {errors.minPriceInput? <p>{errors.minPriceInput.message}</p>: null}                             
                                </div>
                                <div className="col-auto">
                                    <span className="from-to">~</span>
                                </div>
                                <div className="price-en col-3">
                                    <input className="form-control" type="number" placeholder="￥" id="maxPriceInput" 
                                    {...register("maxPriceInput", {validate: value => (minPrice ? Number(value) >= Number(minPrice) : true) || "最高価格は最低価格以上で入力してください"
                                    })}
                                    />
                                    {errors.maxPriceInput && <p>{errors.maxPriceInput.message}</p>}
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>甘辛度</td>
                        <td>
                            <CheckboxGroup values={spicy} setter={setSpicy} options={['辛口', 'やや辛口', '中口', 'やや甘口', '甘口']}/>
                        </td>
                    </tr>
                    <tr>
                        <td>香り</td>
                        <td>
                            <CheckboxGroup values={smell} setter={setSmell} options={['強い','やや強い', '普通', 'やや弱い', '弱い']}/>
                        </td>
                    </tr>
                    <tr>
                        <td>スペック</td>
                        <td>
                            <CheckboxGroup values={spec} setter={setSpec} options={['純米', '純米吟醸', '純米大吟醸', '吟醸', '大吟醸']}/>
                        </td>
                    </tr>
                    <tr>
                        <td>酒米の種類</td>
                        <td>
                            <CheckboxGroup values={rice} setter={setRice} options={['山田錦', '雄町', '愛山', '五百万石', '美山錦','その他']}/>
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
                <button type="button" className="btn btn-primary m-2" onClick={handleTop}>TOPに戻る</button>
                <button type="button" className="btn btn-secondary m-2" onClick={handleClear}>条件をクリア</button>
                <button type="submit" className="btn btn-primary m-2">この条件で検索</button>
            </div>        
        </form>
        <Footer />
        </>
      );  
  };

  export default NewSearchPage