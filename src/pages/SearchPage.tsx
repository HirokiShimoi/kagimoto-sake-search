import { useState,useContext } from "react"
import './SearchPage.css';
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../contexts/SearcContext";
import { Header, Footer } from './Header_Footer';
import CheckboxGroup from "./CheckboxGroup";


const SearchPage = () => {
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

    return (
        <>
        <Header />
        <table>
            <tbody>
                <tr>
                    <td>甘辛度</td>
                    <td>
                        <CheckboxGroup values={spicy} setter={setSpicy} options={['辛口', 'やや辛口', '中口', 'やや甘口', '甘口']}/>
                    </td>
                </tr>
                <tr>
                    <td>香り</td>
                    <td>
                        <CheckboxGroup values={smell} setter={setSmell}options={['強い', 'やや強い', '普通', 'やや弱い', '弱い']}/>
                    </td>
                </tr>
            </tbody>
        </table>
        <Footer/>
        </>
    );
};
