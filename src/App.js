import { useState } from 'react';
import Product1 from './images/image-product-1.jpg'
import Product2 from './images/image-product-2.jpg'
import Product3 from './images/image-product-3.jpg'
import Product4 from './images/image-product-4.jpg'
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons'; function App() {

  const [productScroll, setProductScroll] = useState(1);

  const handleArrowLeft = () => {
    if (productScroll === 1) {
      setProductScroll(4);
    } else {
      setProductScroll(productScroll - 1)
    }
  }
  const handleArrowRight = () => {
    if (productScroll === 4) {
      setProductScroll(1);
    } else {
      setProductScroll(productScroll + 1)
    }
  }

  return (
    <div className="h-screen w-full flex flex-col justify-between">
      <nav></nav>
      <article className='mx-5 my-3 flex items-center justify-between'>
        <button className=''>
          <ArrowLeft />
        </button>
        <div>
          <img src={Product1} alt="Image product 1" />
          <img src={Product2} alt="Image product 2" />
          <img src={Product3} alt="Image product 3" />
          <img src={Product4} alt="Image product 4" />

        </div>
        <button>
          <ArrowRight />
        </button>

      </article>
      <div className="m-5">
        <h1 className="text-orange-400 font-semibold leading-loose uppercase text-sm py-3">sneaker company</h1>
        <h2 className="text-black capitalize font-bold text-3xl mr-3 mb-2">fall limited edition sneakers</h2>
        <p className="text-neutral-500 my-3 leading-relaxed">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <article className="flex items-center justify-between my-2">
          <span className="flex items-center gap-x-2">
            <h1 className="font-bold text-3xl">$125.00</h1>
            <h2 className="bg-orange-200 px-3 py-1  text-orange-500 font-bold rounded-lg"> 50%</h2>
          </span>
          <span>
            <h3 className="text-neutral-400 line-through text-lg font-bold"> $250.00</h3>
          </span>
        </article>

        <article className=" bg-neutral-200 flex items-center justify-between rounded my-3">
          <button className="pl-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-600 cursor-pointer hover:text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          </button>
          <input type="text" className="bg-inherit py-1 px-2 text-lg font-bold text-center w-32 focus:outline-none" value={0} />
          <button className="pr-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-600 cursor-pointer hover:text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </article>
        <button className="bg-orange-500 text-white flex items-center justify-center gap-x-2 text-lg w-full py-2 rounded shadow-lg shadow-orange-700 mb-10 font-semibold  hover:bg-orange-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2>Add to cart</h2>
        </button>
      </div>

    </div>
  );
}

export default App;
