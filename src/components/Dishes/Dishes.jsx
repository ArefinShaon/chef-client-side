import React from 'react';
import img from '../../../public/delicious-indian-food-tray.jpg'
import img2 from '../../../public/herbs-fried-chicken-with-chili-tomato-cucumber-carrot-fresh-pepper.jpg'
import img3 from '../../../public/side-view-pilaf-with-stewed-beef-meat-plate.jpg'
import img4 from '../../../public/top-view-indian-food-assortment.jpg'
const Dishes = () => {
    return (
        <div className='mt-6'>
            <h2 className='text-xl lg:text-5xl text-center mb-6 font-bold text-pink-600'>Top Rated Dishes</h2>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img} className="w-3/4 h-3/4 mx-auto rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-pink-600">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-pink-600">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-3/4 h-3/4 mx-auto rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-pink-600">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-pink-600">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-3/4 h-3/4 mx-auto rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-pink-600">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-pink-600">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-3/4 h-3/4 mx-auto rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-pink-600">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-pink-600">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Dishes;