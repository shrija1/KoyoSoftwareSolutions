import React from 'react'
import './PortfolioPage.css'
import Portfolio from './Portfolio/Portfolio'
import Counts from '../Home/Counts/Counts'

const PortfolioPage = () => {
    return (
        <div>
            <Portfolio/>
            <Counts/>
        </div>
    )
}

export default PortfolioPage
