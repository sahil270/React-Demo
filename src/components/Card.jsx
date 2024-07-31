// import PropTypes from "prop-types";
import { useState } from "react";

function Card(props) {
  const [index, setIndex] = useState(
    Math.floor(Math.random() * props?.quotes.length)
  );

  return (
    <div className='w-[60%] max-h-[400px] flex flex-col p-9 text-center'>
      <figure className='max-w-screen-md mx-auto'>
        <svg
          className='w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 18 14'
        >
          <path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
        </svg>
        <blockquote>
          <p className='text-2xl italic font-medium text-gray-900 dark:text-white'>
            &rdquo;{props?.quotes[index]}&ldquo;
          </p>
        </blockquote>
      </figure>

      <div className='flex justify-between p-4 text-black'>
        <button
          className='rounded-xl p-3 bg-green-400'
          onClick={() =>
            setIndex((index) =>
              index !== 0 ? index - 1 : props?.quotes.length - 1
            )
          }
        >
          Previous
        </button>
        <button
          className='rounded-xl p-3 bg-green-400'
          onClick={() =>
            setIndex((index) =>
              index !== props?.quotes.length - 1 ? index + 1 : 0
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
  /* <div className='relative rounded-md'>{props?.quote}</div>;
  <div className=' rounded-md p-1'>
  <div className='flex flex-col rounded-md'>
    <div className='flex flex-1 flex-col justify-between p-4'>
      <div className='flex-1 pt-2'>
        <blockquote>
          <p className='text-lg text-gray-200'>{props?.quote}</p>
        </blockquote>
      </div>
    </div>
  </div>
</div> */
}

Card.propTyps = Array;

export default Card;
