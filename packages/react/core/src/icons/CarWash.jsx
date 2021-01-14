
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M14 54C14 49.5817 17.5817 46 22 46H58C62.4183 46 66 49.5817 66 54V60C66 62.2091 64.2091 64 62 64H18C15.7909 64 14 62.2091 14 60V54Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 64V69.3711C27 70.4757 26.1046 71.3711 25 71.3711H19C17.8954 71.3711 17 70.4757 17 69.3711V63.874C17.3196 63.9563 17.6547 64 18 64"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M53 64V69.3711C53 70.4757 53.8954 71.3711 55 71.3711H61C62.1046 71.3711 63 70.4757 63 69.3711V63.874C62.6804 63.9563 62.3453 64 62 64"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M59.8807 46H20.1191L23.9069 36.2853C25.1045 33.2137 28.0637 31.1914 31.3604 31.1914H48.6394C51.9361 31.1914 54.8953 33.2138 56.0929 36.2853L59.8807 46Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21 55.3711C21 53.7142 22.3431 52.3711 24 52.3711C25.6569 52.3711 27 53.7142 27 55.3711C27 57.0279 25.6569 58.3711 24 58.3711C22.3431 58.3711 21 57.0279 21 55.3711Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M59 55.3711C59 53.7142 57.6569 52.3711 56 52.3711C54.3431 52.3711 53 53.7142 53 55.3711C53 57.0279 54.3431 58.3711 56 58.3711C57.6569 58.3711 59 57.0279 59 55.3711Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21.2573 9.64226C21.5461 9.00336 22.4534 9.00336 22.7423 9.64226L23.218 10.6944C23.5839 11.5037 24.008 12.2853 24.4871 13.0331L25.8416 15.1473C26.5676 16.2803 26.6955 17.6961 26.1845 18.9409C25.7688 19.9535 24.968 20.7594 23.9581 21.1815L23.7755 21.2578C22.6393 21.7327 21.3602 21.7327 20.224 21.2578L20.0415 21.1815C19.0316 20.7594 18.2307 19.9535 17.8151 18.9409C17.304 17.6961 17.432 16.2803 18.1579 15.1473L19.5124 13.0331C19.9915 12.2853 20.4157 11.5037 20.7815 10.6944L21.2573 9.64226Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.2573 9.64226C39.5461 9.00336 40.4534 9.00336 40.7423 9.64226L41.218 10.6944C41.5839 11.5037 42.008 12.2853 42.4871 13.0331L43.8416 15.1473C44.5676 16.2803 44.6955 17.6961 44.1845 18.9409C43.7688 19.9535 42.968 20.7594 41.9581 21.1815L41.7755 21.2578C40.6393 21.7327 39.3602 21.7327 38.224 21.2578L38.0415 21.1815C37.0316 20.7594 36.2307 19.9535 35.8151 18.9409C35.304 17.6961 35.432 16.2803 36.1579 15.1473L37.5124 13.0331C37.9915 12.2853 38.4157 11.5037 38.7815 10.6944L39.2573 9.64226Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M57.2573 9.64226C57.5461 9.00336 58.4534 9.00336 58.7423 9.64226L59.218 10.6944C59.5839 11.5037 60.008 12.2853 60.4871 13.0331L61.8416 15.1473C62.5676 16.2803 62.6955 17.6961 62.1845 18.9409C61.7688 19.9535 60.968 20.7594 59.9581 21.1815L59.7755 21.2578C58.6393 21.7327 57.3602 21.7327 56.224 21.2578L56.0415 21.1815C55.0316 20.7594 54.2307 19.9535 53.8151 18.9409C53.304 17.6961 53.432 16.2803 54.1579 15.1473L55.5124 13.0331C55.9915 12.2853 56.4157 11.5037 56.7815 10.6944L57.2573 9.64226Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'bold':
      return (
        <>
          <path
            d="M59.8807 46V48.5C60.7064 48.5 61.4788 48.0923 61.9447 47.4106C62.4106 46.7289 62.5098 45.8611 62.2099 45.0918L59.8807 46ZM20.1191 46L17.7899 45.0918C17.49 45.8611 17.5892 46.7289 18.0551 47.4106C18.521 48.0923 19.2934 48.5 20.1191 48.5V46ZM23.9069 36.2853L26.2362 37.1934L26.2362 37.1934L23.9069 36.2853ZM56.0929 36.2853L53.7637 37.1934V37.1934L56.0929 36.2853ZM59.8807 43.5H20.1191V48.5H59.8807V43.5ZM21.5777 35.3771L17.7899 45.0918L22.4484 46.9082L26.2362 37.1934L21.5777 35.3771ZM31.3604 28.6914C27.0335 28.6914 23.1496 31.3457 21.5777 35.3771L26.2362 37.1934C27.0595 35.0818 29.0939 33.6914 31.3604 33.6914V28.6914ZM48.6394 28.6914H31.3604V33.6914H48.6394V28.6914ZM58.4221 35.3771C56.8502 31.3457 52.9664 28.6914 48.6394 28.6914V33.6914C50.9059 33.6914 52.9403 35.0818 53.7637 37.1934L58.4221 35.3771ZM62.2099 45.0918L58.4221 35.3771L53.7637 37.1934L57.5515 46.9082L62.2099 45.0918Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 66.4236V69.3711C17 70.4757 17.8954 71.3711 19 71.3711H25C26.1046 71.3711 27 70.4757 27 69.3711V66.5H18C17.6599 66.5 17.326 66.4739 17 66.4236ZM53 66.5V69.3711C53 70.4757 53.8954 71.3711 55 71.3711H61C62.1046 71.3711 63 70.4757 63 69.3711V66.4236C62.674 66.4739 62.3401 66.5 62 66.5H53ZM62.4656 61.4263C62.3191 61.4742 62.1625 61.5 62 61.5H53.3879C53.5167 61.4184 53.6695 61.3711 53.8333 61.3711H62.1667C62.272 61.3711 62.3728 61.3907 62.4656 61.4263ZM17.5344 61.4263C17.6272 61.3906 17.728 61.3711 17.8333 61.3711H26.1667C26.3305 61.3711 26.4833 61.4184 26.6121 61.5H18C17.8375 61.5 17.6809 61.4742 17.5344 61.4263Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 54C14 49.5817 17.5817 46 22 46H58C62.4183 46 66 49.5817 66 54V60C66 62.2091 64.2091 64 62 64H18C15.7909 64 14 62.2091 14 60V54ZM21 55C21 53.3431 22.3431 52 24 52C25.6569 52 27 53.3431 27 55C27 56.6569 25.6569 58 24 58C22.3431 58 21 56.6569 21 55ZM56 52C57.6569 52 59 53.3431 59 55C59 56.6569 57.6569 58 56 58C54.3431 58 53 56.6569 53 55C53 53.3431 54.3431 52 56 52Z"
            fill="currentColor"
          />
          <path
            d="M21.2575 9.64228C21.5463 9.00339 22.4537 9.00339 22.7425 9.64228L23.2182 10.6945C23.5841 11.5037 24.0083 12.2853 24.4874 13.0331L25.8419 15.1473C26.5678 16.2803 26.6957 17.6961 26.1847 18.941C25.769 19.9535 24.9682 20.7595 23.9583 21.1815L23.7757 21.2578C22.6395 21.7327 21.3605 21.7327 20.2243 21.2578L20.0417 21.1815C19.0318 20.7595 18.231 19.9535 17.8153 18.941C17.3043 17.6961 17.4322 16.2803 18.1581 15.1473L19.5126 13.0331C19.9917 12.2853 20.4159 11.5037 20.7818 10.6945L21.2575 9.64228Z"
            fill="currentColor"
          />
          <path
            d="M39.2575 9.64228C39.5463 9.00339 40.4537 9.00339 40.7425 9.64228L41.2182 10.6945C41.5841 11.5037 42.0083 12.2853 42.4874 13.0331L43.8419 15.1473C44.5678 16.2803 44.6957 17.6961 44.1847 18.941C43.769 19.9535 42.9682 20.7595 41.9583 21.1815L41.7757 21.2578C40.6395 21.7327 39.3605 21.7327 38.2243 21.2578L38.0417 21.1815C37.0318 20.7595 36.231 19.9535 35.8153 18.941C35.3043 17.6961 35.4322 16.2803 36.1581 15.1473L37.5126 13.0331C37.9917 12.2853 38.4159 11.5037 38.7818 10.6945L39.2575 9.64228Z"
            fill="currentColor"
          />
          <path
            d="M57.2575 9.64228C57.5463 9.00339 58.4537 9.00339 58.7425 9.64228L59.2182 10.6945C59.5841 11.5037 60.0083 12.2853 60.4874 13.0331L61.8419 15.1473C62.5678 16.2803 62.6957 17.6961 62.1847 18.941C61.769 19.9535 60.9682 20.7595 59.9583 21.1815L59.7757 21.2578C58.6395 21.7327 57.3605 21.7327 56.2243 21.2578L56.0417 21.1815C55.0318 20.7595 54.231 19.9535 53.8153 18.941C53.3043 17.6961 53.4322 16.2803 54.1581 15.1473L55.5126 13.0331C55.9917 12.2853 56.4159 11.5037 56.7818 10.6945L57.2575 9.64228Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M59.8807 46H20.1191L23.9069 36.2853C25.1045 33.2137 28.0637 31.1914 31.3604 31.1914H48.6394C51.9361 31.1914 54.8953 33.2138 56.0929 36.2853L59.8807 46Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 63.874V69.3711C17 70.4757 17.8954 71.3711 19 71.3711H25C26.1046 71.3711 27 70.4757 27 69.3711V64H18C17.6547 64 17.3196 63.9563 17 63.874ZM53 64V69.3711C53 70.4757 53.8954 71.3711 55 71.3711H61C62.1046 71.3711 63 70.4757 63 69.3711V63.874C62.6804 63.9563 62.3453 64 62 64H53Z"
            fill="#828282"
          />
          <path
            d="M14 54C14 49.5817 17.5817 46 22 46H58C62.4183 46 66 49.5817 66 54V60C66 62.2091 64.2091 64 62 64H18C15.7909 64 14 62.2091 14 60V54Z"
            fill="#EB5757"
          />
          <rect
            x="21"
            y="52.3711"
            width="6"
            height="6"
            rx="3"
            fill="#F2C94C"
          />
          <rect
            width="6"
            height="6"
            rx="3"
            transform="matrix(-1 0 0 1 59 52.3711)"
            fill="#F2C94C"
          />
          <path
            d="M21.2575 9.64228C21.5463 9.00339 22.4537 9.00339 22.7425 9.64228L23.2182 10.6945C23.5841 11.5037 24.0083 12.2853 24.4874 13.0331L25.8419 15.1473C26.5678 16.2803 26.6957 17.6961 26.1847 18.941C25.769 19.9535 24.9682 20.7595 23.9583 21.1815L23.7757 21.2578C22.6395 21.7327 21.3605 21.7327 20.2243 21.2578L20.0417 21.1815C19.0318 20.7595 18.231 19.9535 17.8153 18.941C17.3043 17.6961 17.4322 16.2803 18.1581 15.1473L19.5126 13.0331C19.9917 12.2853 20.4159 11.5037 20.7818 10.6945L21.2575 9.64228Z"
            fill="#2F80ED"
          />
          <path
            d="M39.2575 9.64228C39.5463 9.00339 40.4537 9.00339 40.7425 9.64228L41.2182 10.6945C41.5841 11.5037 42.0083 12.2853 42.4874 13.0331L43.8419 15.1473C44.5678 16.2803 44.6957 17.6961 44.1847 18.941C43.769 19.9535 42.9682 20.7595 41.9583 21.1815L41.7757 21.2578C40.6395 21.7327 39.3605 21.7327 38.2243 21.2578L38.0417 21.1815C37.0318 20.7595 36.231 19.9535 35.8153 18.941C35.3043 17.6961 35.4322 16.2803 36.1581 15.1473L37.5126 13.0331C37.9917 12.2853 38.4159 11.5037 38.7818 10.6945L39.2575 9.64228Z"
            fill="#2F80ED"
          />
          <path
            d="M57.2575 9.64228C57.5463 9.00339 58.4537 9.00339 58.7425 9.64228L59.2182 10.6945C59.5841 11.5037 60.0083 12.2853 60.4874 13.0331L61.8419 15.1473C62.5678 16.2803 62.6957 17.6961 62.1847 18.941C61.769 19.9535 60.9682 20.7595 59.9583 21.1815L59.7757 21.2578C58.6395 21.7327 57.3605 21.7327 56.2243 21.2578L56.0417 21.1815C55.0318 20.7595 54.231 19.9535 53.8153 18.941C53.3043 17.6961 53.4322 16.2803 54.1581 15.1473L55.5126 13.0331C55.9917 12.2853 56.4159 11.5037 56.7818 10.6945L57.2575 9.64228Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M59.8807 46H20.1191L23.9069 36.2852C25.1045 33.2137 28.0637 31.1914 31.3604 31.1914H48.6394C51.9361 31.1914 54.8953 33.2137 56.0929 36.2852L59.8807 46Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M17 63.874V69.3711C17 70.4757 17.8954 71.3711 19 71.3711H25C26.1046 71.3711 27 70.4757 27 69.3711V64H18C17.6547 64 17.3196 63.9563 17 63.874Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M53 64V69.3711C53 70.4757 53.8954 71.3711 55 71.3711H61C62.1046 71.3711 63 70.4757 63 69.3711V63.874C62.6804 63.9563 62.3453 64 62 64H53Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M14 54C14 49.5817 17.5817 46 22 46H58C62.4183 46 66 49.5817 66 54V60C66 62.2091 64.2091 64 62 64H18C15.7909 64 14 62.2091 14 60V54Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M21 55.3711C21 53.7142 22.3431 52.3711 24 52.3711C25.6569 52.3711 27 53.7142 27 55.3711C27 57.0279 25.6569 58.3711 24 58.3711C22.3431 58.3711 21 57.0279 21 55.3711Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M59 55.3711C59 53.7142 57.6569 52.3711 56 52.3711C54.3431 52.3711 53 53.7142 53 55.3711C53 57.0279 54.3431 58.3711 56 58.3711C57.6569 58.3711 59 57.0279 59 55.3711Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M21.2575 9.64226C21.5463 9.00336 22.4537 9.00336 22.7425 9.64226L23.2182 10.6944C23.5841 11.5037 24.0083 12.2853 24.4874 13.0331L25.8419 15.1473C26.5678 16.2803 26.6957 17.6961 26.1847 18.9409C25.7691 19.9535 24.9682 20.7594 23.9583 21.1815L23.7757 21.2578C22.6395 21.7327 21.3605 21.7327 20.2243 21.2578L20.0417 21.1815C19.0318 20.7594 18.2309 19.9535 17.8153 18.9409C17.3043 17.6961 17.4322 16.2803 18.1581 15.1473L19.5126 13.0331C19.9917 12.2853 20.4159 11.5037 20.7818 10.6944L21.2575 9.64226Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.2575 9.64226C39.5463 9.00336 40.4537 9.00336 40.7425 9.64226L41.2182 10.6944C41.5841 11.5037 42.0083 12.2853 42.4874 13.0331L43.8419 15.1473C44.5678 16.2803 44.6957 17.6961 44.1847 18.9409C43.7691 19.9535 42.9682 20.7594 41.9583 21.1815L41.7757 21.2578C40.6395 21.7327 39.3605 21.7327 38.2243 21.2578L38.0417 21.1815C37.0318 20.7594 36.2309 19.9535 35.8153 18.9409C35.3043 17.6961 35.4322 16.2803 36.1581 15.1473L37.5126 13.0331C37.9917 12.2853 38.4159 11.5037 38.7818 10.6944L39.2575 9.64226Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M57.2575 9.64226C57.5463 9.00336 58.4537 9.00336 58.7425 9.64226L59.2182 10.6944C59.5841 11.5037 60.0083 12.2853 60.4874 13.0331L61.8419 15.1473C62.5678 16.2803 62.6957 17.6961 62.1847 18.9409C61.769 19.9535 60.9682 20.7594 59.9583 21.1815L59.7757 21.2578C58.6395 21.7327 57.3605 21.7327 56.2243 21.2578L56.0417 21.1815C55.0318 20.7594 54.231 19.9535 53.8153 18.9409C53.3043 17.6961 53.4322 16.2803 54.1581 15.1473L55.5126 13.0331C55.9917 12.2853 56.4159 11.5037 56.7818 10.6944L57.2575 9.64226Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M18 64H27V69.3711C27 70.4757 26.1046 71.3711 25 71.3711H19C17.8954 71.3711 17 70.4757 17 69.3711V63.874C17.3196 63.9563 17.6547 64 18 64ZM18 64H62M18 64C15.7909 64 14 62.2091 14 60V54C14 49.5817 17.5817 46 22 46H58C62.4183 46 66 49.5817 66 54V60C66 62.2091 64.2091 64 62 64M62 64C62.3453 64 62.6804 63.9563 63 63.874V69.3711C63 70.4757 62.1046 71.3711 61 71.3711H55C53.8954 71.3711 53 70.4757 53 69.3711V64H62ZM59.8807 46H20.1191L23.9069 36.2852C25.1045 33.2137 28.0637 31.1914 31.3604 31.1914H48.6394C51.9361 31.1914 54.8953 33.2137 56.0929 36.2852L59.8807 46ZM24 58.3711C22.3431 58.3711 21 57.0279 21 55.3711C21 53.7142 22.3431 52.3711 24 52.3711C25.6569 52.3711 27 53.7142 27 55.3711C27 57.0279 25.6569 58.3711 24 58.3711ZM56 58.3711C57.6569 58.3711 59 57.0279 59 55.3711C59 53.7142 57.6569 52.3711 56 52.3711C54.3431 52.3711 53 53.7142 53 55.3711C53 57.0279 54.3431 58.3711 56 58.3711ZM19.5126 13.0331L18.1581 15.1473C17.4322 16.2803 17.3043 17.6961 17.8153 18.9409C18.231 19.9535 19.0318 20.7594 20.0417 21.1815L20.2243 21.2578C21.3605 21.7327 22.6395 21.7327 23.7757 21.2578L23.9583 21.1815C24.9682 20.7594 25.7691 19.9535 26.1847 18.9409C26.6957 17.6961 26.5678 16.2803 25.8419 15.1473L24.4874 13.0331C24.0083 12.2853 23.5841 11.5037 23.2182 10.6944L22.7425 9.64226C22.4537 9.00336 21.5463 9.00336 21.2575 9.64226L20.7818 10.6944C20.4159 11.5037 19.9917 12.2853 19.5126 13.0331ZM37.5126 13.0331L36.1581 15.1473C35.4322 16.2803 35.3043 17.6961 35.8153 18.9409C36.2309 19.9535 37.0318 20.7594 38.0417 21.1815L38.2243 21.2578C39.3605 21.7327 40.6395 21.7327 41.7757 21.2578L41.9583 21.1815C42.9682 20.7594 43.7691 19.9535 44.1847 18.9409C44.6957 17.6961 44.5678 16.2803 43.8419 15.1473L42.4874 13.0331C42.0083 12.2853 41.5841 11.5037 41.2182 10.6944L40.7425 9.64226C40.4537 9.00336 39.5463 9.00336 39.2575 9.64226L38.7818 10.6944C38.4159 11.5037 37.9917 12.2853 37.5126 13.0331ZM55.5126 13.0331L54.1581 15.1473C53.4322 16.2803 53.3043 17.6961 53.8153 18.9409C54.231 19.9535 55.0318 20.7594 56.0417 21.1815L56.2243 21.2578C57.3605 21.7327 58.6395 21.7327 59.7757 21.2578L59.9583 21.1815C60.9682 20.7594 61.769 19.9535 62.1847 18.9409C62.6957 17.6961 62.5678 16.2803 61.8419 15.1473L60.4874 13.0331C60.0083 12.2853 59.5841 11.5037 59.2182 10.6944L58.7425 9.64226C58.4537 9.00336 57.5463 9.00336 57.2575 9.64226L56.7818 10.6944C56.4159 11.5037 55.9917 12.2853 55.5126 13.0331Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.5649 8.81831C23.5671 6.61135 20.4329 6.61134 19.4351 8.81831L18.9594 9.87048C18.6334 10.5915 18.2555 11.2879 17.8286 11.9542L16.4741 14.0684C15.3964 15.7505 15.2065 17.8524 15.9651 19.7005C16.5822 21.2037 17.7712 22.4002 19.2705 23.0268L19.453 23.1031C21.0827 23.7843 22.9173 23.7843 24.547 23.1031L24.7295 23.0268C26.2288 22.4002 27.4178 21.2037 28.0349 19.7005C28.7935 17.8524 28.6036 15.7505 27.5259 14.0683L26.1714 11.9541C25.7445 11.2879 25.3666 10.5915 25.0406 9.87048L24.5649 8.81831ZM21.1967 14.112C21.4822 13.6662 21.7502 13.2097 22 12.7434C22.2498 13.2097 22.5178 13.6662 22.8033 14.112L24.1578 16.2262C24.532 16.8101 24.5979 17.5398 24.3345 18.1814C24.1203 18.7033 23.7076 19.1187 23.1871 19.3362L23.0045 19.4125C22.3618 19.6811 21.6382 19.6811 20.9955 19.4125L20.8129 19.3362C20.2924 19.1187 19.8797 18.7033 19.6655 18.1814C19.4021 17.5398 19.468 16.8101 19.8422 16.2262L21.1967 14.112Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 50.3711C21.2386 50.3711 19 52.6096 19 55.3711C19 58.1325 21.2386 60.3711 24 60.3711C26.7614 60.3711 29 58.1325 29 55.3711C29 52.6096 26.7614 50.3711 24 50.3711ZM23 55.3711C23 54.8188 23.4477 54.3711 24 54.3711C24.5523 54.3711 25 54.8188 25 55.3711C25 55.9234 24.5523 56.3711 24 56.3711C23.4477 56.3711 23 55.9234 23 55.3711Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61 55.3711C61 52.6096 58.7614 50.3711 56 50.3711C53.2386 50.3711 51 52.6096 51 55.3711C51 58.1325 53.2386 60.3711 56 60.3711C58.7614 60.3711 61 58.1325 61 55.3711ZM56 54.3711C56.5523 54.3711 57 54.8188 57 55.3711C57 55.9234 56.5523 56.3711 56 56.3711C55.4477 56.3711 55 55.9234 55 55.3711C55 54.8188 55.4477 54.3711 56 54.3711Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.3604 29.1914C27.2395 29.1914 23.5406 31.7193 22.0436 35.5587L18.508 44.6266C14.7071 46.0432 12 49.7054 12 54V60C12 62.2208 13.2066 64.1599 15 65.1973V69.3711C15 71.5802 16.7909 73.3711 19 73.3711H25C27.2091 73.3711 29 71.5802 29 69.3711V66H51V69.3711C51 71.5802 52.7909 73.3711 55 73.3711H61C63.2091 73.3711 65 71.5802 65 69.3711V65.1973C66.7934 64.1599 68 62.2208 68 60V54C68 49.7054 65.2928 46.0431 61.4918 44.6265L57.9562 35.5587C56.4592 31.7193 52.7603 29.1914 48.6394 29.1914H31.3604ZM56.9542 44H23.0456L25.7703 37.0118C26.6685 34.7081 28.8879 33.1914 31.3604 33.1914H48.6394C51.1119 33.1914 53.3313 34.7081 54.2295 37.0118L56.9542 44ZM16 54C16 50.6863 18.6863 48 22 48H58C61.3137 48 64 50.6863 64 54V60C64 61.1045 63.1046 62 62 62H18C16.8954 62 16 61.1045 16 60V54ZM19 69.3711V66H25V69.3711H19ZM61 66V69.3711H55V66H61Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.4351 8.81831C38.4329 6.61134 41.5671 6.61135 42.5649 8.81831L43.0406 9.87048C43.3666 10.5915 43.7445 11.2879 44.1714 11.9541L45.5259 14.0683C46.6036 15.7505 46.7935 17.8524 46.0349 19.7005C45.4178 21.2037 44.2288 22.4002 42.7295 23.0268L42.547 23.1031C40.9173 23.7843 39.0827 23.7843 37.453 23.1031L37.2705 23.0268C35.7712 22.4002 34.5822 21.2037 33.9651 19.7005C33.2065 17.8524 33.3964 15.7505 34.4741 14.0684L35.8286 11.9542C36.2555 11.2879 36.6334 10.5915 36.9594 9.87048L37.4351 8.81831ZM40 12.7434C39.7502 13.2097 39.4822 13.6662 39.1967 14.112L37.8422 16.2262C37.468 16.8101 37.4021 17.5398 37.6655 18.1814C37.8797 18.7033 38.2924 19.1187 38.8129 19.3362L38.9955 19.4125C39.6382 19.6811 40.3618 19.6811 41.0045 19.4125L41.1871 19.3362C41.7076 19.1187 42.1203 18.7033 42.3345 18.1814C42.5979 17.5398 42.532 16.8101 42.1578 16.2262L40.8033 14.112C40.5178 13.6662 40.2498 13.2097 40 12.7434Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.5649 8.81831C59.5671 6.61135 56.4329 6.61134 55.4351 8.81831L54.9594 9.87048C54.6334 10.5915 54.2555 11.2879 53.8286 11.9542L52.4741 14.0684C51.3964 15.7505 51.2065 17.8524 51.9651 19.7005C52.5822 21.2037 53.7712 22.4002 55.2705 23.0268L55.453 23.1031C57.0827 23.7843 58.9173 23.7843 60.547 23.1031L60.7295 23.0268C62.2288 22.4002 63.4178 21.2037 64.0349 19.7005C64.7935 17.8524 64.6036 15.7505 63.5259 14.0683L62.1714 11.9541C61.7445 11.2879 61.3666 10.5915 61.0406 9.87048L60.5649 8.81831ZM57.1967 14.112C57.4822 13.6662 57.7502 13.2097 58 12.7434C58.2498 13.2097 58.5178 13.6662 58.8033 14.112L60.1578 16.2262C60.532 16.8101 60.5979 17.5398 60.3345 18.1814C60.1203 18.7033 59.7076 19.1187 59.1871 19.3362L59.0045 19.4125C58.3618 19.6811 57.6382 19.6811 56.9955 19.4125L56.8129 19.3362C56.2924 19.1187 55.8797 18.7033 55.6655 18.1814C55.4021 17.5398 55.468 16.8101 55.8422 16.2262L57.1967 14.112Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreCarWash = forwardRef((props, ref) => {
  const { size, variant, rotate, flip, children } = props

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      width={size || 40}
      height={size || 40}
      transform={transform(rotate, flip)}
    >
      {children}
      <g>
        {renderString({ size, variant, rotate, flip })}
      </g>
    </svg>
  )
})

CoreCarWash.displayName = 'CoreCarWash'

export default CoreCarWash
