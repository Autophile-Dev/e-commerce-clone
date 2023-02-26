import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componetMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componetMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componetMounted = false;
            }
        }
        getProducts();
    }, []);
    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
            </>
        )
    };
    const filterProduct = (category) => {
        const updatedList = data.filter((x) => x.category === category);
        setFilter(updatedList);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex flex-md-row flex-column justify-content-center mb-5 pb-5'>
                    <buttons className="option-button btn btn-outline-dark  me-2 mb-2" onClick={() => setFilter(data)}>All</buttons>
                    <buttons className="option-button btn btn-outline-dark  me-2 mb-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</buttons>
                    <buttons className="option-button btn btn-outline-dark  me-2 mb-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</buttons>
                    <buttons className="option-button btn btn-outline-dark  me-2 mb-2" onClick={() => filterProduct("jewelery")}>Jewelry</buttons>
                    <buttons className="option-button btn btn-outline-dark  me-2 mb-2" onClick={() => filterProduct("electronics")}>Electronic Items</buttons>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4'>
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} height={320} className="card-img-top" alt={product.title} />
                                    <div class="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                        <p className="card-text">{product.description.substring(0, 35)}.....</p>
                                        <p className="lead fw-bold">Rating {product.rating && product.rating.rate}
                                                <div className='d-flex flex-row justify-content-center gap-1'>
                                                    <i className="fa fa-star star star"></i>
                                                    <i className="fa fa-star star star"></i>
                                                    <i className="fa fa-star star star"></i>
                                                    <i className="fa fa-star star star"></i>
                                                    <i className="fa fa-star star star"></i>
                                                </div>
                                            </p>
                                        <div className='d-flex justify-content-md-between gap-md-0 gap-4  justify-content-center align-items-center'>
                                            <span className="card-text lead fw-bold">{product.price} USD</span>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className="display-6 fw-semibold text-center">New Products</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products
