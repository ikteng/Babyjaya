import React from 'react';
import './Home.css'; // Make sure to create this CSS file for styling

const Home = () => {
    // Example product data (ensure the paths are correct)
    const products = [
        { id: 1, img: "./images/baby-clothes.jpg", title: "Baby Clothes", description: "Stylish and comfortable clothes for your little one." },
        { id: 2, img: "./images/baby-toys.jpg", title: "Toys", description: "Fun and educational toys to stimulate your baby's growth." },
        { id: 3, img: "./images/baby-cot.jpg", title: "Baby Cot Bed", description: "A cozy and safe sleeping space for your little one, designed to provide comfort and support for a good night's sleep." },
    ];

    return (
        <div className="home-container">
            {/* Banner Section */}
            <div className="banner-container">
                <div className="banner">
                    <img 
                        src="./images/banner.jpg"
                        alt="BabyJaya, A One-Stop Shop for Your Baby" 
                        className="banner-image" 
                    />
                </div>
            </div>

            {/* About Section */}
            <div className="about-container">
                <section className="home-about">
                    <h2>About Us</h2>
                    <p>Babyjaya is a one-stop shop for all the needs of your baby.</p>
                    <p>
                        Our goal is to help parents choose and search for high-quality, 
                        value-for-money baby products. Babyjaya is committed to expanding 
                        the range and brands of baby products we offer.
                    </p>
                    <p>
                        All featured baby products at Babyjaya are carefully selected 
                        for infants, babies, toddlers, pre-schoolers, kids, and children 
                        aged from birth to 12 years old.
                    </p>
                </section>
            </div>

            {/* Products Section */}
            <div className="products-container">
                <section className="home-products">
                    <h2>Featured Products</h2>
                    <div className="product-list">
                        {products.map(product => (
                            <div key={product.id} className="product-item">
                                <img src={product.img} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
