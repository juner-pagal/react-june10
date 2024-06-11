import Product1 from './images/product1.jpg';
import Product2 from './images/product2.jpg';
import Product3 from './images/product3.jpg';
function Cards() {
    
    return(
        <>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card text-center"  >
                        <img src={Product1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Product 1</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-center">
                    <img src={Product2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-center">
                    <img src={Product3} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        </>
    )
}

export default Cards;

