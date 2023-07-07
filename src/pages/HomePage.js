import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/search")
  };

  return (
    <form>
        <button className="btn btn-primary" onClick={handleButtonClick}>日本酒を検索する</button>
    </form>
  )
}

export default HomePage