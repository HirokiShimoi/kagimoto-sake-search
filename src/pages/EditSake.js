import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from '../components/PrivateRoute'

function EditSake() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [sake,setSake] = useState('');
    const [errorMessage,setErrorMessage] = useState('')

    useEffect(()=> {
        const fetchData = async () => {
            const result = await axios(`http://localhost:5000/sake/${id}`);
            setSake(result.data)
            console.log(sake)
        };

        fetchData();
    },[id]);

    const handleInputChange = (event) => {
        setSake({...sake, [event.target.name]:event.target.value})
      };
      
    const handleVariationChange = (index, field, value) => {
        let newVariations = [...sake.variations];
        newVariations[index][field] = value;
        setSake({...sake, variations: newVariations});
    };

    const handleSpicyChange = (index, value) => {
        let newSpicy = [...sake.spicy];
        newSpicy[index] = value;
        setSake({...sake,spicy:newSpicy});
    }

    const handleSmellChange = (index,value) => {
        let newSmell = [...sake.smell];
        newSmell[index] = value;
        setSake({...sake,smell:newSmell});
    }

    const handleSave = async (event) => {
        event.preventDefault();
        console.log('handleSave was called')
        try {
            const response = await axios.put(`http://localhost:5000/sake/${id}`,sake);
            console.log(response.data);
            navigate(`/sake/${id}`);
        } catch (error) {
            console.error("Error updating sake: ", error);
            setErrorMessage('An error occurred while updating the sake. Please try again later.')
        }
    };

    if (!sake) return <p>Loading...</p>;

  return (
    <PrivateRoute>
    <div>
        <h1 className='d-flex justify-content-center m-4'>日本酒を編集</h1>
        <form>
            <table className='table table-striped'>
                <tbody>
                    <tr>
                        <td>商品名<input className='form-control' name="productName" type="text" value={sake.productName} onChange={handleInputChange}/></td>
                        <td>都道府県<input className='form-control' name="region" type="text" value={sake.region} onChange={handleInputChange}/></td>
                        <td>メーカー<input className='form-control' name="maker" type="text" value={sake.maker} onChange={handleInputChange}/></td>
                    </tr>
                    <tr>
                        <td>スペック
                            <select className='form-select' name="spec" type="text" value={sake.spec} onChange={handleInputChange}>
                            <option value="純米">純米</option>
                            <option value="純米吟醸">純米吟醸</option>
                            <option value="純米大吟醸">純米大吟醸</option>
                            <option value="吟醸">吟醸</option>
                            <option value="大吟醸">大吟醸</option>
                            <option value="本醸造">本醸造</option>
                            </select>
                        </td>
                        <td>使用米<input className='form-control' name="rice" type="text" value={sake.rice} onChange={handleInputChange}/></td>
                        <td>生酒
                            <select className='form-select' name="cool" type="text" value={sake.cool} onChange={handleInputChange}>
                                <option value="true">生酒</option>
                                <option value="false">火入れ</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>にごり
                            <select className='form-select' name="muddiness" type="text" value={sake.muddiness} onChange={handleInputChange}>
                                <option value="true">にごり</option>
                                <option value="false">にごりでない</option>
                            </select>
                        </td>
                        <td>ギフト商材
                            <select className='form-select' name="gift" type="text" value={sake.gift} onChange={handleInputChange}>
                                <option value="true">ギフト向き</option>
                                <option value="false">ギフトに向かない</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        {sake.spicy.map((spice,index) => {
                            return(
                                <td key={index}>
                                    甘辛度{index+1}
                                    <select className='form-select' name={`spicy[${index}]`} value={spice} onChange={(e) => handleSpicyChange(index,e.target.value)}>
                                        <option value="辛口">辛口</option>
                                        <option value="やや辛口">やや辛口</option>
                                        <option value="中口">中口</option>
                                        <option value="やや甘口">やや甘口</option>
                                        <option value="甘口">甘口</option>
                                    </select>
                                </td>
                            )
                        })}
                    </tr>
                    <tr>
                        {sake.smell.map((smells,index) => {
                            return(
                                <td key={index}>
                                    香り{index+1}
                                    <select className='form-select' name={`smell[${index}]`} value={smells} onChange={(e) => handleSmellChange(index,e.target.value)}>
                                        <option value="強い">強い</option>
                                        <option value="やや強い">やや強い</option>
                                        <option value="普通">普通</option>
                                        <option value="やや弱い">やや弱い</option>
                                        <option value="弱い">弱い</option>
                                    </select>
                                </td>
                            )
                        })}
                    </tr>
                    <tr>
                        <td>画像URL<input className='form-control' name="imageUrl" type="text" value={sake.imageUrl} onChange={handleInputChange}/></td>
                        <td>キャッチ<input className='form-control' name="description" type="text" value={sake.description} onChange={handleInputChange}/></td> 
                    </tr>
                    <tr>
                        <td colSpan={3}>説明<textarea className='form-control' name="content" rows="8" value={sake.content} onChange={handleInputChange}/></td>
                    </tr>
                </tbody>
            </table>
            <h2 className='d-flex justify-content-center m-4'>セット商品設定</h2>    
            <table className='table table-striped'> 
                <tbody>   
                    {sake.variations.map((variation,index) => {
                        return(
                            <tr key={index}>
                                <td>インストア<input className='form-control' name={`variations[${index}].products_id`} type="text" value={variation.products_id} onChange={(e) => handleVariationChange(index, e.target.name,e.target.value)}/></td>
                                <td>商品名×SIZE<input className='form-control' name={`variations[${index}].products_products`} type="text" value={variation.products} onChange={(e) => handleVariationChange(index, e.target.name,e.target.value)}/></td>
                                <td>金額<input className='form-control' name={`variations[${index}].products_price`} type="number" value={variation.price} onChange={(e) => handleVariationChange(index, e.target.name,e.target.value)}/></td>
                                <td>在庫<input className='form-check' name={`variations[${index}].products_stock`} type="checkbox" value={variation.stock} onChange={(e) => handleVariationChange(index, e.target.name,e.target.checked)}/></td>
                             </tr>
                        )
                    })}
                </tbody>
            </table>
        </form>
        <div className='d-flex justify-content-center'>
        <button className='btn btn-primary m-2 edit-button' onClick={handleSave}>編集する</button>
        </div>
    </div>
    {errorMessage && <div>{errorMessage}</div>}
    </PrivateRoute>
  )
};

export default EditSake;