import React, {useState, useEffect} from 'react';
import './BuyerServices.css'
// import ProductCard from '../ProductCard/ProductCard'
import pychons from '../../../img/BuyerServices/Morder pychons.png'
import ProductCard from '../ProductCard/ProductCard';

function createData(img, title, description, price, stock) {
    return { img, title, description, price, stock };
}

const BuyerServices = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4400/getBuyerServices')
            .then(res => res.json())
            .then(data => {
                setProducts(data.data)
                // console.log(data.data)
            })
    }, [])
    const rows = [];
    for (let i = 0; i < products.length; i++) {
        const e = products[i];
        if (e.img == '' || e.img == 'url') {
            e.img = 'bat.jpg'
        } else {
            console.log(e.img)
        }
        const row = createData('http://localhost:4400/static/'+e.img, e.title, e.description, e.price, e.stock)
        rows.push(row)
    }
    console.log(rows)
    const data = [
        {
            "img": pychons,
            "title": "Product Name",
            "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
            "price": "$120",
            "stock": "60 Available"
        },
        {
            "img": pychons,
            "title": "Product Name",
            "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
            "price": "$120",
            "stock": "60 Available"
        },
        {
            "img": pychons,
            "title": "Product Name2",
            "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
            "price": "$120",
            "stock": "60 Available"
        }
    ]
    return (
        <div>
            <section className="courses my-5">
                <div className="container">
                    <h1 className="text-center text-magenda">Title</h1>
                    <div className="row my-5">
                        {
                            rows.map(element=> <ProductCard data={element}/>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BuyerServices;
