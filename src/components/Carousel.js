import Product1 from './images/product1.jpg';
import Product2 from './images/product2.jpg';
import Product3 from './images/product3.jpg';


function Carousel() {
    return(
        <>
        <div class="container">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={Product1} class="d-block w-100" alt="Product 1"/>
                </div>
                <div class="carousel-item">
                <img src={Product2} class="d-block w-100" alt="Product 2"/>
                </div>
                <div class="carousel-item">
                <img src={Product3} class="d-block w-100" alt="Product 3"/>
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <br/>
        </div>
        
        </>
    )
}

export default Carousel;