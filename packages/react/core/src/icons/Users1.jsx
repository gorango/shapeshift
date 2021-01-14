
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M44.801 64H13.201C11.4337 64 10.001 62.5674 10.001 60.8V59.593C10.001 55.0229 12.8279 50.9294 17.1017 49.3107C24.7688 46.4068 33.2332 46.4068 40.9003 49.3107C45.1741 50.9294 48.001 55.0229 48.001 59.593V60.8C48.001 62.5674 46.5683 64 44.801 64Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.1423 39.0779C27.1884 40.6591 30.8135 40.6591 33.8596 39.0779C36.6613 37.6236 38.6642 34.9907 39.3181 31.9025L39.5228 30.936C40.194 27.7662 39.4751 24.4607 37.548 21.856L37.2177 21.4096C35.2903 18.8044 32.2416 17.2676 29.0009 17.2676C25.7603 17.2676 22.7116 18.8044 20.7841 21.4096L20.4538 21.856C18.5268 24.4607 17.8079 27.7662 18.4791 30.936L18.6838 31.9025C19.3377 34.9907 21.3406 37.6236 24.1423 39.0779Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M67.8656 60H47.9999V59.593C47.9999 57.0198 47.1037 54.5977 45.5576 52.6834C46.4126 51.5635 47.5808 50.6782 48.9645 50.1676C54.1499 48.254 59.848 48.254 65.0334 50.1676C68.0172 51.2687 69.9989 54.1124 69.9989 57.2929V57.8667C69.9989 59.0449 69.0438 60 67.8656 60Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M64.0843 38.4807C63.6205 40.6145 62.2199 42.4257 60.2714 43.4112C58.2138 44.4518 55.784 44.4518 53.7264 43.4112C51.7779 42.4257 50.3773 40.6145 49.9136 38.4807L49.8208 38.0538C49.3492 35.8836 49.8509 33.6158 51.1939 31.8471L51.3417 31.6524C52.6848 29.8835 54.7779 28.8447 56.9989 28.8447C59.2199 28.8447 61.313 29.8835 62.6561 31.6524L62.804 31.8471C64.147 33.6158 64.6487 35.8836 64.177 38.0538L64.0843 38.4807Z"
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
            d="M64.0833 38.4807C63.6196 40.6145 62.2189 42.4256 60.2704 43.4112C58.2129 44.4518 55.783 44.4518 53.7254 43.4112C51.7769 42.4256 50.3763 40.6145 49.9126 38.4807L49.8198 38.0537C49.3482 35.8836 49.8499 33.6158 51.1929 31.8471L51.3407 31.6524C52.6838 29.8835 54.777 28.8447 56.9979 28.8447C59.2189 28.8447 61.312 29.8835 62.6551 31.6524L62.803 31.8471C64.146 33.6158 64.6477 35.8836 64.1761 38.0537L64.0833 38.4807Z"
            fill="currentColor"
          />
          <path
            d="M67.8646 59.9996H53V59.5929C53 56.0086 51.8046 52.6257 49.7285 49.8999C54.7055 48.2582 60.1008 48.3473 65.0324 50.1672C68.0162 51.2683 69.9979 54.112 69.9979 57.2925V57.8663C69.9979 59.0445 69.0428 59.9996 67.8646 59.9996Z"
            fill="currentColor"
          />
          <path
            d="M44.8 64H13.2C11.4327 64 10 62.5673 10 60.8V59.5929C10 55.0229 12.8269 50.9293 17.1007 49.3106C24.7678 46.4068 33.2322 46.4068 40.8993 49.3106C45.1731 50.9293 48 55.0229 48 59.5929V60.8C48 62.5673 46.5673 64 44.8 64Z"
            fill="currentColor"
          />
          <path
            d="M24.1413 39.0779C27.1875 40.6591 30.8125 40.6591 33.8587 39.0779C36.6604 37.6236 38.6633 34.9907 39.3172 31.9025L39.5219 30.936C40.1931 27.7662 39.4742 24.4607 37.5471 21.856L37.2168 21.4096C35.2894 18.8044 32.2407 17.2676 29 17.2676C25.7593 17.2676 22.7106 18.8044 20.7832 21.4096L20.4529 21.856C18.5258 24.4607 17.8069 27.7662 18.4781 30.936L18.6828 31.9025C19.3367 34.9907 21.3396 37.6236 24.1413 39.0779Z"
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
            d="M64.0834 38.4807C63.6197 40.6145 62.2191 42.4257 60.2706 43.4112C58.213 44.4518 55.7832 44.4518 53.7256 43.4112C51.7771 42.4257 50.3765 40.6145 49.9128 38.4807L49.82 38.0538C49.3484 35.8836 49.8501 33.6158 51.193 31.8471L51.3409 31.6524C52.684 29.8835 54.7771 28.8447 56.9981 28.8447C59.2191 28.8447 61.3122 29.8835 62.6553 31.6524L62.8032 31.8471C64.1461 33.6158 64.6479 35.8836 64.1762 38.0538L64.0834 38.4807ZM67.8648 59.9997H47.9741C47.8159 57.4725 46.913 55.1015 45.4453 53.147C46.4104 51.7215 47.811 50.5926 49.502 49.9686L50.3116 49.6698C54.627 48.0773 59.3692 48.0773 63.6846 49.6698L64.4942 49.9686C67.8015 51.1891 69.9981 54.341 69.9981 57.8663C69.9981 59.0445 69.043 59.9997 67.8648 59.9997Z"
            fill="#F2C94C"
          />
          <path
            d="M60.2706 43.4112L61.1733 45.1959L60.2706 43.4112ZM64.0834 38.4807L66.0378 38.9055L66.0378 38.9055L64.0834 38.4807ZM53.7256 43.4112L54.6283 41.6265L54.6283 41.6265L53.7256 43.4112ZM49.9128 38.4807L51.8671 38.056L49.9128 38.4807ZM49.82 38.0538L47.8656 38.4785L49.82 38.0538ZM51.193 31.8471L49.6002 30.6376V30.6376L51.193 31.8471ZM51.3409 31.6524L49.7481 30.4429L51.3409 31.6524ZM62.6553 31.6524L64.2481 30.4429L64.2481 30.4429L62.6553 31.6524ZM62.8032 31.8471L61.2103 33.0566L61.2103 33.0566L62.8032 31.8471ZM64.1762 38.0538L62.2219 37.629V37.629L64.1762 38.0538ZM47.9741 59.9997L45.978 60.1246C46.044 61.1786 46.918 61.9997 47.9741 61.9997V59.9997ZM45.4453 53.147L43.7892 52.0258C43.3106 52.7326 43.3334 53.6653 43.846 54.348L45.4453 53.147ZM49.502 49.9686L50.1944 51.8449H50.1944L49.502 49.9686ZM50.3116 49.6698L51.004 51.5461L51.004 51.5461L50.3116 49.6698ZM63.6846 49.6698L64.377 47.7935L64.377 47.7935L63.6846 49.6698ZM64.4942 49.9686L63.8018 51.8449L63.8018 51.8449L64.4942 49.9686ZM61.1733 45.1959C63.6592 43.9385 65.4462 41.6278 66.0378 38.9055L62.1291 38.056C61.7933 39.6012 60.779 40.9128 59.3679 41.6265L61.1733 45.1959ZM52.8229 45.1959C55.448 46.5236 58.5482 46.5236 61.1733 45.1959L59.3679 41.6265C57.8779 42.3801 56.1183 42.3801 54.6283 41.6265L52.8229 45.1959ZM47.9584 38.9055C48.55 41.6278 50.337 43.9385 52.8229 45.1959L54.6283 41.6265C53.2172 40.9128 52.2029 39.6012 51.8671 38.056L47.9584 38.9055ZM47.8656 38.4785L47.9584 38.9055L51.8671 38.056L51.7743 37.629L47.8656 38.4785ZM49.6002 30.6376C47.9036 32.872 47.2698 35.737 47.8656 38.4785L51.7743 37.629C51.4269 36.0303 51.7965 34.3596 52.7859 33.0566L49.6002 30.6376ZM49.7481 30.4429L49.6002 30.6376L52.7859 33.0566L52.9338 32.8618L49.7481 30.4429ZM56.9981 26.8447C54.1518 26.8447 51.4693 28.176 49.7481 30.4429L52.9338 32.8618C53.8987 31.591 55.4025 30.8447 56.9981 30.8447V26.8447ZM64.2481 30.4429C62.5269 28.176 59.8444 26.8447 56.9981 26.8447V30.8447C58.5937 30.8447 60.0975 31.591 61.0624 32.8618L64.2481 30.4429ZM64.396 30.6376L64.2481 30.4429L61.0624 32.8618L61.2103 33.0566L64.396 30.6376ZM66.1306 38.4785C66.7264 35.737 66.0926 32.872 64.396 30.6376L61.2103 33.0566C62.1997 34.3596 62.5693 36.0303 62.2219 37.629L66.1306 38.4785ZM66.0378 38.9055L66.1306 38.4785L62.2219 37.629L62.1291 38.056L66.0378 38.9055ZM47.9741 61.9997L67.8648 61.9997V57.9997H47.9741V61.9997ZM43.846 54.348C45.084 55.9966 45.8447 57.9951 45.978 60.1246L49.9702 59.8747C49.7871 56.9499 48.7419 54.2063 47.0446 51.9461L43.846 54.348ZM48.8095 48.0922C46.717 48.8645 44.983 50.2623 43.7892 52.0258L47.1015 54.2682C47.8378 53.1806 48.9051 52.3207 50.1944 51.8449L48.8095 48.0922ZM49.6192 47.7935L48.8095 48.0922L50.1944 51.8449L51.004 51.5461L49.6192 47.7935ZM64.377 47.7935C59.6147 46.036 54.3815 46.036 49.6192 47.7935L51.004 51.5461C54.8726 50.1185 59.1236 50.1185 62.9922 51.5461L64.377 47.7935ZM65.1867 48.0922L64.377 47.7935L62.9922 51.5461L63.8018 51.8449L65.1867 48.0922ZM71.9981 57.8663C71.9981 53.5035 69.2797 49.6027 65.1867 48.0922L63.8018 51.8449C66.3234 52.7754 67.9981 55.1785 67.9981 57.8663H71.9981ZM67.8648 61.9997C70.1475 61.9997 71.9981 60.1491 71.9981 57.8663H67.9981C67.9981 57.94 67.9384 57.9997 67.8648 57.9997V61.9997Z"
            fill="#F2C94C"
          />
          <path
            d="M44.8 63.9998L13.2 63.9998C11.4327 63.9998 10 62.5671 10 60.7998C10 55.5033 13.2763 50.7589 18.2295 48.8829L19.0611 48.568C25.4651 46.1425 32.5349 46.1425 38.9389 48.568L39.7705 48.8829C44.7237 50.7589 48 55.5033 48 60.7998C48 62.5671 46.5673 63.9998 44.8 63.9998Z"
            fill="#F2994A"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.1413 39.078C27.1875 40.6592 30.8125 40.6592 33.8587 39.078C36.6604 37.6237 38.6633 34.9908 39.3172 31.9026L39.5219 30.9361C40.1931 27.7663 39.4742 24.4608 37.5471 21.8561L37.2168 21.4097C35.2894 18.8045 32.2407 17.2677 29 17.2677C25.7593 17.2677 22.7106 18.8045 20.7832 21.4097L20.4529 21.8561C18.5258 24.4608 17.8069 27.7663 18.4781 30.9361L18.6828 31.9026C19.3367 34.9908 21.3396 37.6237 24.1413 39.078Z"
            fill="#F2994A"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M64.0843 38.4807C63.6205 40.6145 62.2199 42.4256 60.2714 43.4112C58.2138 44.4518 55.784 44.4518 53.7264 43.4112C51.7779 42.4256 50.3773 40.6145 49.9136 38.4807L49.8208 38.0537C49.3492 35.8836 49.8509 33.6158 51.1939 31.8471L51.3417 31.6524C52.6848 29.8835 54.778 28.8447 56.9989 28.8447C59.2199 28.8447 61.313 29.8835 62.6561 31.6524L62.804 31.8471C64.147 33.6158 64.6487 35.8836 64.177 38.0537L64.0843 38.4807Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M67.8656 59.9996H47.9749C47.8167 57.4725 46.9138 55.1014 45.4461 53.147C46.4112 51.7214 47.8118 50.5925 49.5028 49.9685L50.3124 49.6698C54.6278 48.0772 59.37 48.0772 63.6854 49.6698L64.495 49.9685C67.8023 51.189 69.9989 54.341 69.9989 57.8663C69.9989 59.0445 69.0438 59.9996 67.8656 59.9996Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M44.801 64H13.201C11.4337 64 10.001 62.5673 10.001 60.8C10.001 55.5034 13.2773 50.7591 18.2305 48.8831L19.062 48.5682C25.466 46.1427 32.5359 46.1427 38.9399 48.5682L39.7714 48.8831C44.7246 50.7591 48.001 55.5034 48.001 60.8C48.001 62.5673 46.5683 64 44.801 64Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24.1423 39.0779C27.1884 40.6591 30.8135 40.6591 33.8597 39.0779C36.6613 37.6236 38.6642 34.9907 39.3182 31.9025L39.5228 30.936C40.194 27.7662 39.4751 24.4607 37.5481 21.856L37.2178 21.4096C35.2903 18.8044 32.2417 17.2676 29.001 17.2676C25.7603 17.2676 22.7116 18.8044 20.7842 21.4096L20.4539 21.856C18.5268 24.4607 17.8079 27.7662 18.4791 30.936L18.6838 31.9025C19.3377 34.9907 21.3406 37.6236 24.1423 39.0779Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M64.0843 38.4807C63.6205 40.6145 62.2199 42.4256 60.2714 43.4112C58.2138 44.4518 55.784 44.4518 53.7264 43.4112C51.7779 42.4256 50.3773 40.6145 49.9136 38.4807L49.8208 38.0537C49.3492 35.8836 49.8509 33.6158 51.1939 31.8471L51.3417 31.6524C52.6848 29.8835 54.778 28.8447 56.9989 28.8447C59.2199 28.8447 61.313 29.8835 62.6561 31.6524L62.804 31.8471C64.147 33.6158 64.6487 35.8836 64.177 38.0537L64.0843 38.4807Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M67.8656 59.9996H47.9749C47.8167 57.4725 46.9138 55.1014 45.4461 53.147C46.4112 51.7214 47.8118 50.5925 49.5028 49.9685L50.3124 49.6698C54.6278 48.0772 59.37 48.0772 63.6854 49.6698L64.495 49.9685C67.8023 51.189 69.9989 54.341 69.9989 57.8663C69.9989 59.0445 69.0438 59.9996 67.8656 59.9996Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44.801 64H13.201C11.4337 64 10.001 62.5673 10.001 60.8C10.001 55.5034 13.2773 50.7591 18.2305 48.8831L19.062 48.5682C25.466 46.1427 32.5359 46.1427 38.9399 48.5682L39.7714 48.8831C44.7246 50.7591 48.001 55.5034 48.001 60.8C48.001 62.5673 46.5683 64 44.801 64Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.1423 39.0779C27.1884 40.6591 30.8135 40.6591 33.8597 39.0779C36.6613 37.6236 38.6642 34.9907 39.3182 31.9025L39.5228 30.936C40.194 27.7662 39.4751 24.4607 37.5481 21.856L37.2178 21.4096C35.2903 18.8044 32.2417 17.2676 29.001 17.2676C25.7603 17.2676 22.7116 18.8044 20.7842 21.4096L20.4539 21.856C18.5268 24.4607 17.8079 27.7662 18.4791 30.936L18.6838 31.9025C19.3377 34.9907 21.3406 37.6236 24.1423 39.0779Z"
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
            d="M41.2738 32.3168C40.4959 35.9907 38.1131 39.1229 34.7801 40.853C31.1563 42.7341 26.8437 42.7341 23.2199 40.853C19.8869 39.1229 17.5041 35.9907 16.7262 32.3168L16.5215 31.3503C15.7318 27.6206 16.5776 23.7313 18.8451 20.6665L19.1754 20.2201C21.48 17.1051 25.1252 15.2676 29 15.2676C32.8748 15.2676 36.52 17.1051 38.8246 20.2201L39.1549 20.6665C41.4224 23.7313 42.2682 27.6206 41.4785 31.3503L41.2738 32.3168ZM25.0628 37.3028C27.5312 38.5842 30.4688 38.5842 32.9372 37.3028C35.2076 36.1243 36.8307 33.9907 37.3606 31.4882L37.5652 30.5217C38.1179 27.9118 37.526 25.1902 35.9393 23.0455L35.609 22.5991C34.0587 20.5037 31.6066 19.2676 29 19.2676C26.3934 19.2676 23.9413 20.5037 22.391 22.5991L22.0607 23.0455C20.474 25.1902 19.8821 27.9118 20.4348 30.5217L20.6394 31.4882C21.1693 33.9907 22.7924 36.1243 25.0628 37.3028Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.7479 30.4429C51.4692 28.176 54.1516 26.8447 56.9979 26.8447C59.8442 26.8447 62.5267 28.176 64.248 30.4429L64.3958 30.6376C66.0924 32.872 66.7262 35.7369 66.1305 38.4785L66.0377 38.9055C65.446 41.6278 63.6591 43.9385 61.1731 45.1959C58.548 46.5236 55.4479 46.5236 52.8228 45.1959C50.3368 43.9385 48.5498 41.6278 47.9582 38.9055L47.8654 38.4785C47.2696 35.7369 47.9034 32.872 49.6 30.6376L49.7479 30.4429ZM56.9979 30.8447C55.4023 30.8447 53.8985 31.591 52.9336 32.8618L52.7857 33.0566C51.7963 34.3596 51.4267 36.0303 51.7742 37.629L51.867 38.056C52.2028 39.6012 53.2171 40.9128 54.6281 41.6264C56.1181 42.3801 57.8777 42.3801 59.3678 41.6264C60.7788 40.9128 61.7931 39.6012 62.1289 38.056L62.2217 37.629C62.5691 36.0303 62.1995 34.3596 61.2101 33.0566L61.0623 32.8618C60.0973 31.591 58.5936 30.8447 56.9979 30.8447Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M65.7248 48.2909C69.4944 49.682 71.9979 53.2745 71.9979 57.2925V57.8663C71.9979 60.1491 70.1474 61.9996 67.8646 61.9996H49.8609C49.3193 64.2932 47.259 66 44.8 66H13.2C10.3281 66 8 63.6719 8 60.8V59.5929C8 54.1916 11.3411 49.3534 16.3923 47.4403C24.5159 44.3636 33.4841 44.3636 41.6077 47.4403C43.0902 48.0018 44.4255 48.8153 45.5722 49.8211C46.3684 49.1793 47.2758 48.6582 48.2711 48.2909C53.9033 46.2124 60.0925 46.2124 65.7248 48.2909ZM46 60.8V60.0662C45.9993 60.0441 45.9989 60.0219 45.9989 59.9996V59.5926C45.9989 57.4877 45.2664 55.5068 44.0007 53.9396C43.991 53.9276 43.9815 53.9156 43.9721 53.9034C42.9941 52.7053 41.7032 51.7538 40.1909 51.181C32.9802 48.45 25.0198 48.45 17.8091 51.181C14.3127 52.5052 12 55.8541 12 59.5929V60.8C12 61.4627 12.5373 62 13.2 62H44.8C45.4627 62 46 61.4627 46 60.8ZM67.8646 57.9996H49.9024C49.6766 56.1668 49.0657 54.4306 48.1384 52.8908C48.5889 52.5371 49.0985 52.2492 49.6559 52.0435C54.3944 50.2949 59.6015 50.2949 64.34 52.0435C66.5381 52.8547 67.9979 54.9495 67.9979 57.2925V57.8663C67.9979 57.9399 67.9382 57.9996 67.8646 57.9996Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreUsers1 = forwardRef((props, ref) => {
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

CoreUsers1.displayName = 'CoreUsers1'

export default CoreUsers1
