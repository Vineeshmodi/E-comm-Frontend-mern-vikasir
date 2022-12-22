import React from "react";

import Metadata from "./Layout/Metadata";

const Detail = () => {
  return (
    <>
      {" "}
      <Metadata title={"Detail | VineeshShop"}/>
      <div className="container">
      <div className="row  mt-5 mb-2 ">
      <h1 className="text-center  border  text-danger bg-light ">Product Name</h1>
      <hr className="text-danger" />
       
        <div className="col-md-5    border bg-light">
            <img src="https://media.istockphoto.com/id/1403884032/photo/india-vs-pakistan-cricket-balls-with-flag.jpg?s=612x612&w=0&k=20&c=kdQPy0ijYzcSE084lAHcoubpaiPJywFgDqAoAPzF5g8=" className="img-fluid mt-5 mb-5" alt="" />
            <img src="https://media.istockphoto.com/id/641185956/photo/batsman-on-the-stadium-in-action.jpg?s=612x612&w=0&k=20&c=WVLKeV957FAy6FerZwbP8d12QdtlBRbyyk6P7YHT_O4=" className="img-fluid mt-1 "   alt="" />
        </div>
        <div className="col-md-7 mt-2 ">
     
            {/* <small>Lorem ipsum dolor sit.
            </small> */}
            {/* <hr /> */}
            <b><span><i class="fa fa-star" aria-hidden="true"></i></span>
            <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></b>

            <h1>$100000</h1>
            <hr />
            <b  className="bg-danger  text-white m-1 p-1" >-</b>
            <input type="search" className="w-25" name="" id="" />   <b className="bg-dark  text-white m-1 p-1">+</b>
            <button className="btn btn-warning text-drcoration-none">
                <a href="/" className="text-decoration-none">Add To Cart</a>
            </button>
            <hr />
            <p>status <b>In Stock</b></p>
            <hr />
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis cum nisi deserunt, exercitationem voluptas doloresm veritatis dolores.</p>
            <p>Sold  <b>By  Amazon</b></p>
            <hr />
            <button className="btn btn-warning text-drcoration-none">
                <a href="/" className="text-decoration-none">Submit Your Reviews</a>
            </button>

        </div>
      </div>{" "}
      </div>
    </>
  );
};

export default Detail;
