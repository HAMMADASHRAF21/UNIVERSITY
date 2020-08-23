import React from 'react'
import './Item.css'
import Itemadd from './Itemadd'
function item() {

    
    return (
        <div>
            <Itemadd price="50" name="Frame" disc="  THIS ITEM IS A GOOD ITEM" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" />
       
            <Itemadd price="50" disc="  THIS ITEM IS A GOOD ITEM" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" />
       
            <Itemadd price="50"  disc=" THIS ITEM IS A GOOD ITEM" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" />
       
       
        </div>
    )
}

export default item
