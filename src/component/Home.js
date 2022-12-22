import React from "react";

import Metadata from "./Layout/Metadata";


const Home = () => {
  return (
    <>
      <Metadata title={"Home | VineeshShop"}/>
      <div
      id="carouselExampleCaptions"
      class="carousel slide mb-4"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src="https://img.freepik.com/free-vector/large-sale-word-with-shopping-cart-gift-boxes-store-map-with-pointer-realistic-style-vector-illustration_548887-126.jpg?w=826&t=st=1671113328~exp=1671113928~hmac=df6d424d3bc3a0eb58ed9f6f6d84fc92ea2593d0e5be616424247a8dbfa1c912" class="d-block w-100 h-75" alt="..." />
          <div class="carousel-caption d-none d-md-block text-dark">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://img.freepik.com/free-vector/flat-sale-banner-with-photo_23-2149026968.jpg?w=996&t=st=1671113295~exp=1671113895~hmac=c138396f0a86d64514027a682849b4f02bbef9c20b619f96fdb5ccd41acf09e4" class="d-block w-100 h-75" alt="..." />
          <div class="carousel-caption d-none d-md-block text-dark">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://img.freepik.com/free-vector/store-with-credit-card-gift-boxes-buyers-illustration_1262-18980.jpg?size=626&ext=jpg&ga=GA1.2.2088476369.1671113256" class="d-block w-100 h-75" alt="..." />
          <div class="carousel-caption d-none d-md-block text-dark">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>


      
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container mb-5">
      <div class="row" id="products">
        <div class="col-xl-4 col-md-4 col-sm-6 mb-1  position-relative">
          <i class="bi bi-heart-fill position-absolute liked  "></i>
          <i class="bi bi-heart position-absolute like  "></i>
          <div class="card productitem">
            <img
              src="https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?b=1&s=170667a&w=0&k=20&c=oFtP564Ykvak2VIyM1OUb29daY5S4uqsmT3j3_8QgfQ="
              class="card-img-top"
              onclick="goToProductDetail()"
              alt="..."
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Click to view more"
            />
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">Category</h6>
              <h5 class="card-title">samasumg headphones</h5>

              <p class="card-text">
                $500<span class="mx-auto float-end ratingstar"
                  ><i class="bi bi-star-half"></i><i class="bi bi-star-half"></i
                  ><i class="bi bi-star-half"></i><i class="bi bi-star-half"></i
                  ><i class="bi bi-star-half"></i
                ></span>
              </p>

              <div class="text-center " style={{display:"flex", alignItems:"center" ,justifyContent:"space-between"}}>
                <a
                  class="btn btn-dark   "
                  onclick="showToast()"
                  role="button"
                  href="/"
                  
                  >View Detail
              
                </a>
                <a
                  class="btn btn-dark "
                  onclick="showToast()"
                  role="button"
                  href="/"
                  >Add To cart
              
                </a>
              </div>
            </div>
          </div>
        </div> 
        <div class="col-xl-4 col-md-4 col-sm-6 mb-1 position-relative">
          <i class="bi bi-heart-fill position-absolute liked  "></i>
          <i class="bi bi-heart position-absolute like  "></i>
          <div class="card productitem">
            <img
              src="https://media.istockphoto.com/id/1370511233/photo/young-woman-working-from-home-with-a-boston-terrier-dog-freelancer-businesswoman-using-laptop.jpg?b=1&s=170667a&w=0&k=20&c=gBZp146qhWPdsfKExEZnM3ZuLXDjbPSBwyVRA5OQZT4="
              class="card-img-top"
              onclick="goToProductDetail()"
              alt="..."
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Click to view more"
            />
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">Category</h6>
              <h5 class="card-title">samasumg headphones</h5>

              <p class="card-text">
                $500<span class="mx-auto float-end ratingstar"
                  ><i class="bi bi-star-half"></i><i class="bi bi-star-half"></i
                  ><i class="bi bi-star-half"></i><i class="bi bi-star-half"></i
                  ><i class="bi bi-star-half"></i
                ></span>
              </p>

              <div class="text-center " style={{display:"flex", alignItems:"center" ,justifyContent:"space-between"}}>
                <a
                  class="btn btn-dark   "
                  onclick="showToast()"
                  role="button"
                  href="/"
                  
                  >View Detail
              
                </a>
                <a
                  class="btn btn-dark "
                  onclick="showToast()"
                  role="button"
                  href="/"
                  >Add To cart
              
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4 col-sm-6 mb-1 position-relative">
          <i class="bi bi-heart-fill position-absolute liked  "></i>
          <i class="bi bi-heart position-absolute like  "></i>
          <div class="card productitem">
            <img
              src="https://media.istockphoto.com/id/1356785346/photo/woman-in-coat-messaging-on-smartphone-standing-outside-in-the-city.jpg?b=1&s=170667a&w=0&k=20&c=rpODgUSWgp3YP2HmDbGf_BWprRjSUJVNtsZ-SzkvC24="
              class="card-img-top"
              onclick="goToProductDetail()"
              alt="..."
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Click to view more"
            />
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">Category</h6>
              <h5 class="card-title">samasumg headphones</h5>

              <p class="card-text">
                $500<span class="mx-auto float-end ratingstar"
                  ><i class="bi bi-star-half"></i><i class="bi bi-star-half"></i
                  ><i class="bi bi-star-half"></i><i class="bi bi-star-half"></i
                  ><i class="bi bi-star-half"></i
                ></span>
              </p>

              <div class="text-center " style={{display:"flex", alignItems:"center" ,justifyContent:"space-between"}}>
                <a
                  class="btn btn-dark   "
                  onclick="showToast()"
                  role="button"
                  href="/"
                  
                  >View Detail
              
                </a>
                <a
                  class="btn btn-dark "
                  onclick="showToast()"
                  role="button"
                  href="/"
                  >Add To cart
              
                </a>
              </div>
            </div>
          </div>
        </div>
       
       
      </div>
    </div>
    
    </>
  );
};

export default Home;
