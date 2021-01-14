
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M67.0468 54H68C70.2091 54 72 52.2091 72 50V36.1C72 36.0448 71.9552 36 71.9 36H8.1C8.04477 36 8 36.0448 8 36.1V50C8 52.2091 9.79086 54 12 54H12.9532M50.9532 54H29.0468"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M17.4817 45.6941C19.705 44.6234 22.2948 44.6234 24.5181 45.6941C26.7415 46.7648 28.3562 48.7897 28.9053 51.1955C29.4544 53.6013 28.8781 56.1262 27.3396 58.0555C25.801 59.9848 23.4676 61.1086 20.9999 61.1086C18.5322 61.1086 16.1988 59.9848 14.6603 58.0555C13.1217 56.1262 12.5454 53.6013 13.0945 51.1955C13.6436 48.7897 15.2584 46.7648 17.4817 45.6941Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M55.4817 45.6946C57.705 44.6239 60.2948 44.6239 62.5181 45.6946C64.7415 46.7653 66.3562 48.7901 66.9053 51.196C67.4544 53.6018 66.8781 56.1267 65.3396 58.056C63.801 59.9853 61.4676 61.109 58.9999 61.109C56.5322 61.109 54.1988 59.9853 52.6603 58.056C51.1217 56.1267 50.5454 53.6018 51.0945 51.196C51.6436 48.7901 53.2584 46.7653 55.4817 45.6946Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M8.1 36C8.04477 36 8 35.9552 8 35.9V22C8 19.7909 9.79086 18 12 18H50.4651C51.4532 18 52.4064 18.3658 53.1409 19.0268L71.9124 35.9212C71.943 35.9487 71.9412 36 71.9 36"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M23.832 36L23.832 18"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.832 36V18"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 36.1C8 36.0448 8.04477 36 8.1 36H71.9C71.9552 36 72 36.0448 72 36.1V50C72 50.9591 71.6624 51.8394 71.0997 52.5285C71.0707 51.7862 70.9732 51.0421 70.8051 50.3056C69.9851 46.713 67.5738 43.6893 64.2538 42.0904C60.9337 40.4916 57.0663 40.4916 53.7462 42.0904C50.4262 43.6893 48.0149 46.713 47.1949 50.3056C46.9153 51.5305 46.8311 52.776 46.9326 54H33.0674C33.1689 52.776 33.0847 51.5305 32.8051 50.3056C31.9851 46.713 29.5738 43.6893 26.2538 42.0904C22.9337 40.4916 19.0663 40.4916 15.7462 42.0904C12.4262 43.6893 10.0149 46.713 9.19487 50.3056C9.02676 51.0421 8.92928 51.7862 8.90035 52.5285C8.33756 51.8394 8 50.9591 8 50V36.1ZM62.9852 54H55.0148C54.8593 53.3801 54.8485 52.7246 54.9943 52.0857C55.2725 50.8667 56.0907 49.8407 57.2173 49.2982C58.3438 48.7556 59.6562 48.7556 60.7827 49.2982C61.9093 49.8407 62.7275 50.8667 63.0057 52.0857C63.1515 52.7246 63.1407 53.3801 62.9852 54ZM25.0057 52.0857C25.1515 52.7246 25.1407 53.3801 24.9852 54H17.0148C16.8593 53.3801 16.8485 52.7246 16.9943 52.0857C17.2725 50.8667 18.0907 49.8407 19.2173 49.2982C20.3439 48.7556 21.6561 48.7556 22.7827 49.2982C23.9093 49.8407 24.7275 50.8667 25.0057 52.0857Z"
            fill="currentColor"
          />
          <path
            d="M71.0997 52.5285L68.6015 52.6258C68.642 53.6643 69.3207 54.5694 70.3062 54.8992C71.2918 55.229 72.3786 54.9148 73.0359 54.1099L71.0997 52.5285ZM70.8051 50.3056L73.2424 49.7493V49.7493L70.8051 50.3056ZM47.1949 50.3056L44.7575 49.7493V49.7493L47.1949 50.3056ZM46.9326 54V56.5C47.6315 56.5 48.2986 56.2074 48.7719 55.6931C49.2453 55.1789 49.4818 54.49 49.424 53.7934L46.9326 54ZM33.0674 54L30.576 53.7934C30.5182 54.49 30.7547 55.1789 31.2281 55.6931C31.7014 56.2074 32.3685 56.5 33.0674 56.5V54ZM32.8051 50.3056L35.2425 49.7493L35.2424 49.7493L32.8051 50.3056ZM26.2538 42.0904L27.3385 39.838V39.838L26.2538 42.0904ZM9.19487 50.3056L6.75755 49.7493L9.19487 50.3056ZM8.90035 52.5285L6.96406 54.1099C7.62144 54.9148 8.70823 55.229 9.69375 54.8992C10.6793 54.5694 11.358 53.6643 11.3985 52.6258L8.90035 52.5285ZM55.0148 54L52.59 54.6084C52.869 55.7203 53.8685 56.5 55.0148 56.5V54ZM62.9852 54V56.5C64.1315 56.5 65.131 55.7203 65.41 54.6084L62.9852 54ZM54.9943 52.0857L52.557 51.5294V51.5294L54.9943 52.0857ZM63.0057 52.0857L65.443 51.5294V51.5294L63.0057 52.0857ZM24.9852 54V56.5C26.1315 56.5 27.131 55.7203 27.41 54.6084L24.9852 54ZM25.0057 52.0857L27.443 51.5294V51.5294L25.0057 52.0857ZM17.0148 54L14.59 54.6084C14.869 55.7203 15.8685 56.5 17.0148 56.5V54ZM16.9943 52.0857L14.557 51.5294V51.5294L16.9943 52.0857ZM22.7827 49.2982L21.698 51.5506H21.698L22.7827 49.2982ZM8.1 33.5C6.66405 33.5 5.5 34.6641 5.5 36.1H10.5C10.5 37.4255 9.42549 38.5 8.1 38.5V33.5ZM71.9 33.5H8.1V38.5H71.9V33.5ZM74.5 36.1C74.5 34.6641 73.336 33.5 71.9 33.5V38.5C70.5745 38.5 69.5 37.4254 69.5 36.1H74.5ZM74.5 50V36.1H69.5V50H74.5ZM73.0359 54.1099C73.9499 52.9907 74.5 51.5562 74.5 50H69.5C69.5 50.362 69.375 50.688 69.1634 50.9471L73.0359 54.1099ZM68.3678 50.8619C68.5013 51.4466 68.5786 52.037 68.6015 52.6258L73.5978 52.4311C73.5628 51.5353 73.4452 50.6376 73.2424 49.7493L68.3678 50.8619ZM63.1691 44.3428C65.8037 45.6116 67.7171 48.011 68.3678 50.8619L73.2424 49.7493C72.2532 45.4149 69.344 41.767 65.3385 39.838L63.1691 44.3428ZM54.8309 44.3428C57.4655 43.0741 60.5345 43.0741 63.1691 44.3428L65.3385 39.838C61.333 37.909 56.667 37.909 52.6615 39.838L54.8309 44.3428ZM49.6322 50.8619C50.2829 48.011 52.1963 45.6116 54.8309 44.3428L52.6615 39.838C48.656 41.767 45.7468 45.4149 44.7575 49.7493L49.6322 50.8619ZM49.424 53.7934C49.3435 52.8223 49.4103 51.8341 49.6322 50.8619L44.7575 49.7493C44.4203 51.2268 44.3187 52.7298 44.4411 54.2066L49.424 53.7934ZM33.0674 56.5H46.9326V51.5H33.0674V56.5ZM30.3678 50.8619C30.5897 51.8341 30.6565 52.8223 30.576 53.7934L35.5589 54.2066C35.6813 52.7298 35.5797 51.2268 35.2425 49.7493L30.3678 50.8619ZM25.1691 44.3428C27.8037 45.6116 29.7171 48.011 30.3678 50.8619L35.2424 49.7493C34.2532 45.4149 31.344 41.767 27.3385 39.838L25.1691 44.3428ZM16.8309 44.3428C19.4655 43.0741 22.5345 43.0741 25.1691 44.3428L27.3385 39.838C23.333 37.909 18.667 37.909 14.6615 39.838L16.8309 44.3428ZM11.6322 50.8619C12.2829 48.011 14.1963 45.6116 16.8309 44.3428L14.6615 39.838C10.656 41.767 7.74683 45.4149 6.75755 49.7493L11.6322 50.8619ZM11.3985 52.6258C11.4214 52.037 11.4987 51.4466 11.6322 50.8619L6.75755 49.7493C6.55479 50.6376 6.43716 51.5353 6.40225 52.4311L11.3985 52.6258ZM5.5 50C5.5 51.5562 6.05007 52.9907 6.96406 54.1099L10.8366 50.9471C10.625 50.688 10.5 50.362 10.5 50H5.5ZM5.5 36.1V50H10.5V36.1H5.5ZM55.0148 56.5H62.9852V51.5H55.0148V56.5ZM52.557 51.5294C52.3224 52.557 52.3399 53.6116 52.59 54.6084L57.4397 53.3916C57.3787 53.1486 57.3745 52.8922 57.4316 52.642L52.557 51.5294ZM56.1326 47.0457C54.3206 47.9184 53.0045 49.5686 52.557 51.5294L57.4316 52.642C57.5406 52.1647 57.8609 51.763 58.302 51.5506L56.1326 47.0457ZM61.8674 47.0457C60.0554 46.1731 57.9446 46.1731 56.1326 47.0457L58.302 51.5506C58.7431 51.3382 59.2569 51.3382 59.698 51.5506L61.8674 47.0457ZM65.443 51.5294C64.9955 49.5686 63.6794 47.9184 61.8674 47.0457L59.698 51.5506C60.1391 51.763 60.4594 52.1647 60.5684 52.642L65.443 51.5294ZM65.41 54.6084C65.6601 53.6116 65.6776 52.557 65.443 51.5294L60.5684 52.642C60.6255 52.8922 60.6213 53.1486 60.5603 53.3916L65.41 54.6084ZM27.41 54.6084C27.6601 53.6116 27.6776 52.557 27.443 51.5294L22.5684 52.642C22.6255 52.8922 22.6213 53.1486 22.5603 53.3916L27.41 54.6084ZM17.0148 56.5H24.9852V51.5H17.0148V56.5ZM14.557 51.5294C14.3224 52.557 14.3399 53.6116 14.59 54.6084L19.4397 53.3916C19.3787 53.1486 19.3745 52.8922 19.4316 52.642L14.557 51.5294ZM18.1326 47.0457C16.3206 47.9184 15.0045 49.5687 14.557 51.5294L19.4316 52.642C19.5406 52.1647 19.8609 51.763 20.302 51.5506L18.1326 47.0457ZM23.8674 47.0457C22.0554 46.1731 19.9446 46.1731 18.1326 47.0457L20.302 51.5506C20.7431 51.3382 21.2569 51.3382 21.698 51.5506L23.8674 47.0457ZM27.443 51.5294C26.9955 49.5687 25.6794 47.9184 23.8674 47.0457L21.698 51.5506C22.1391 51.763 22.4594 52.1647 22.5684 52.642L27.443 51.5294Z"
            fill="currentColor"
          />
          <path
            d="M71.9124 35.9212L73.5848 34.0629L71.9124 35.9212ZM12 20.5H50.4651V15.5H12V20.5ZM10.5 35.9V22H5.5V35.9H10.5ZM8.1 33.5C9.42553 33.5 10.5 34.5746 10.5 35.9H5.5C5.5 37.3359 6.66401 38.5 8.1 38.5V33.5ZM71.9 33.5H8.1V38.5H71.9V33.5ZM73.5848 34.0629L54.8133 17.1686L51.4685 20.8851L70.24 37.7794L73.5848 34.0629ZM50.4651 20.5C50.8356 20.5 51.1931 20.6372 51.4685 20.8851L54.8133 17.1686C53.6198 16.0944 52.0708 15.5 50.4651 15.5V20.5ZM71.9 38.5C72.4541 38.5 73.1121 38.3131 73.6497 37.8001C74.1635 37.3098 74.3671 36.7128 74.4184 36.242C74.5145 35.3606 74.1466 34.5686 73.5848 34.0629L70.24 37.7794C69.7088 37.3013 69.3553 36.5487 69.4479 35.6999C69.4975 35.2453 69.6948 34.6629 70.1976 34.183C70.7242 33.6805 71.3665 33.5 71.9 33.5V38.5ZM12 15.5C8.41015 15.5 5.5 18.4101 5.5 22H10.5C10.5 21.1716 11.1716 20.5 12 20.5V15.5Z"
            fill="currentColor"
          />
          <path
            d="M8.1001 33.5C6.71939 33.5 5.6001 34.6193 5.6001 36C5.6001 37.3807 6.71939 38.5 8.1001 38.5V33.5ZM71.8321 38.5C73.2128 38.5 74.3321 37.3807 74.3321 36C74.3321 34.6193 73.2128 33.5 71.8321 33.5V38.5ZM37.3321 36C37.3321 37.3807 38.4514 38.5 39.8321 38.5C41.2128 38.5 42.3321 37.3807 42.3321 36H37.3321ZM42.3321 18C42.3321 16.6193 41.2128 15.5 39.8321 15.5C38.4514 15.5 37.3321 16.6193 37.3321 18H42.3321ZM21.3321 36C21.3321 37.3807 22.4514 38.5 23.8321 38.5C25.2128 38.5 26.3321 37.3807 26.3321 36H21.3321ZM26.3321 18C26.3321 16.6193 25.2128 15.5 23.8321 15.5C22.4514 15.5 21.3321 16.6193 21.3321 18L26.3321 18ZM8.1001 38.5H71.8321V33.5H8.1001V38.5ZM42.3321 36V18H37.3321V36H42.3321ZM26.3321 36V18L21.3321 18L21.3321 36H26.3321Z"
            fill="currentColor"
          />
          <path
            d="M17.4818 45.6943C19.7051 44.6236 22.2949 44.6236 24.5182 45.6943C26.7415 46.765 28.3563 48.7898 28.9054 51.1956C29.4545 53.6015 28.8782 56.1264 27.3397 58.0557C25.8011 59.985 23.4677 61.1087 21 61.1087C18.5323 61.1087 16.1989 59.985 14.6603 58.0557C13.1218 56.1264 12.5455 53.6015 13.0946 51.1956C13.6437 48.7898 15.2585 46.765 17.4818 45.6943Z"
            fill="currentColor"
          />
          <path
            d="M55.4818 45.6943C57.7051 44.6236 60.2949 44.6236 62.5182 45.6943C64.7415 46.765 66.3563 48.7898 66.9054 51.1956C67.4545 53.6015 66.8782 56.1264 65.3397 58.0557C63.8011 59.985 61.4677 61.1087 59 61.1087C56.5323 61.1087 54.1989 59.985 52.6603 58.0557C51.1218 56.1264 50.5455 53.6015 51.0946 51.1956C51.6437 48.7898 53.2585 46.765 55.4818 45.6943Z"
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
            d="M8 36.1C8 36.0448 8.04477 36 8.1 36H71.9C71.9552 36 72 36.0448 72 36.1V50C72 52.2091 70.2091 54 68 54H67.0468C67.1618 53.075 67.1179 52.1264 66.9054 51.1956C66.3563 48.7898 64.7415 46.765 62.5182 45.6943C60.2949 44.6236 57.7051 44.6236 55.4818 45.6943C53.2585 46.765 51.6437 48.7898 51.0946 51.1956C50.8821 52.1264 50.8382 53.075 50.9532 54H29.0468C29.1618 53.075 29.1179 52.1264 28.9054 51.1956C28.3563 48.7898 26.7415 46.765 24.5182 45.6943C22.2949 44.6236 19.7051 44.6236 17.4818 45.6943C15.2585 46.765 13.6437 48.7898 13.0946 51.1956C12.8821 52.1264 12.8382 53.075 12.9532 54H12C9.79086 54 8 52.2091 8 50V36.1Z"
            fill="#F2C94C"
          />
          <path
            d="M67.0468 54L65.0621 53.7532C64.9914 54.3223 65.1683 54.8943 65.5479 55.3241C65.9276 55.7539 66.4734 56 67.0468 56V54ZM66.9054 51.1956L68.8553 50.7506V50.7506L66.9054 51.1956ZM51.0946 51.1956L49.1447 50.7506V50.7506L51.0946 51.1956ZM50.9532 54V56C51.5266 56 52.0724 55.7539 52.4521 55.3241C52.8317 54.8943 53.0086 54.3223 52.9379 53.7532L50.9532 54ZM29.0468 54L27.0621 53.7533C26.9914 54.3223 27.1683 54.8943 27.5479 55.3241C27.9276 55.7539 28.4734 56 29.0468 56V54ZM28.9054 51.1956L26.9556 51.6407L28.9054 51.1956ZM24.5182 45.6943L25.386 43.8924V43.8924L24.5182 45.6943ZM17.4818 45.6943L16.614 43.8924V43.8924L17.4818 45.6943ZM13.0946 51.1956L15.0444 51.6407L13.0946 51.1956ZM12.9532 54V56C13.5266 56 14.0724 55.7539 14.4521 55.3241C14.8317 54.8943 15.0086 54.3223 14.9379 53.7532L12.9532 54ZM8.1 34C6.9402 34 6 34.9402 6 36.1H10C10 37.1493 9.14935 38 8.1 38V34ZM71.9 34H8.1V38H71.9V34ZM74 36.1C74 34.9403 73.0599 34 71.9 34V38C70.8506 38 70 37.1493 70 36.1H74ZM74 50V36.1H70V50H74ZM68 56C71.3137 56 74 53.3137 74 50H70C70 51.1046 69.1046 52 68 52V56ZM67.0468 56H68V52H67.0468V56ZM64.9556 51.6407C65.1156 52.342 65.1488 53.0564 65.0621 53.7532L69.0316 54.2468C69.1749 53.0935 69.1201 51.9108 68.8553 50.7506L64.9556 51.6407ZM61.6505 47.4962C63.3254 48.3028 64.5419 49.8283 64.9556 51.6407L68.8553 50.7506C68.1707 47.7514 66.1577 45.2271 63.386 43.8924L61.6505 47.4962ZM56.3495 47.4962C58.0245 46.6896 59.9755 46.6896 61.6505 47.4962L63.386 43.8924C60.6143 42.5576 57.3857 42.5576 54.614 43.8924L56.3495 47.4962ZM53.0444 51.6407C53.4581 49.8283 54.6746 48.3028 56.3495 47.4962L54.614 43.8924C51.8423 45.2271 49.8293 47.7514 49.1447 50.7506L53.0444 51.6407ZM52.9379 53.7532C52.8512 53.0564 52.8844 52.342 53.0444 51.6407L49.1447 50.7506C48.8799 51.9108 48.8251 53.0935 48.9684 54.2468L52.9379 53.7532ZM29.0468 56H50.9532V52H29.0468V56ZM26.9556 51.6407C27.1156 52.342 27.1488 53.0564 27.0621 53.7533L31.0316 54.2467C31.1749 53.0935 31.1201 51.9108 30.8553 50.7506L26.9556 51.6407ZM23.6505 47.4962C25.3254 48.3028 26.5419 49.8283 26.9556 51.6407L30.8553 50.7506C30.1707 47.7514 28.1577 45.2271 25.386 43.8924L23.6505 47.4962ZM18.3495 47.4962C20.0245 46.6896 21.9755 46.6896 23.6505 47.4962L25.386 43.8924C22.6143 42.5576 19.3857 42.5576 16.614 43.8924L18.3495 47.4962ZM15.0444 51.6407C15.4581 49.8283 16.6746 48.3028 18.3495 47.4962L16.614 43.8924C13.8423 45.2271 11.8293 47.7514 11.1447 50.7506L15.0444 51.6407ZM14.9379 53.7532C14.8512 53.0564 14.8844 52.342 15.0444 51.6407L11.1447 50.7506C10.8799 51.9108 10.8251 53.0935 10.9684 54.2468L14.9379 53.7532ZM12 56H12.9532V52H12V56ZM6 50C6 53.3137 8.68629 56 12 56V52C10.8954 52 10 51.1046 10 50H6ZM6 36.1V50H10V36.1H6Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.1409 19.0268C52.4064 18.3658 51.4532 18 50.4651 18H12C9.79086 18 8 19.7909 8 22V35.9C8 35.9552 8.04477 36 8.1 36H71.9C71.9412 36 71.943 35.9487 71.9124 35.9212L53.1409 19.0268Z"
            fill="#56CCF2"
          />
          <path
            d="M71.9124 35.9212L73.2503 34.4346L71.9124 35.9212ZM12 20H50.4651V16H12V20ZM10 35.9V22H6V35.9H10ZM8.1 34C9.14938 34 10 34.8507 10 35.9H6C6 37.0598 6.94016 38 8.1 38V34ZM71.9 34H8.1V38H71.9V34ZM73.2503 34.4346L54.4788 17.5402L51.803 20.5134L70.5745 37.4077L73.2503 34.4346ZM50.4651 20C50.9591 20 51.4357 20.1829 51.803 20.5134L54.4788 17.5402C53.3771 16.5487 51.9473 16 50.4651 16V20ZM71.9 38C72.3454 38 72.8733 37.8499 73.3045 37.4384C73.7166 37.0451 73.8801 36.566 73.9214 36.1878C73.9986 35.4794 73.7029 34.8418 73.2503 34.4346L70.5745 37.4077C70.1526 37.028 69.8712 36.4299 69.9449 35.7541C69.9844 35.3921 70.1417 34.9276 70.5428 34.5447C70.963 34.1437 71.4753 34 71.9 34V38ZM12 16C8.68629 16 6 18.6863 6 22H10C10 20.8954 10.8954 20 12 20V16Z"
            fill="#F2C94C"
          />
          <path
            d="M8.1001 34C6.99553 34 6.1001 34.8954 6.1001 36C6.1001 37.1046 6.99553 38 8.1001 38V34ZM71.8321 38C72.9367 38 73.8321 37.1046 73.8321 36C73.8321 34.8954 72.9367 34 71.8321 34V38ZM37.8321 36C37.8321 37.1046 38.7276 38 39.8321 38C40.9367 38 41.8321 37.1046 41.8321 36H37.8321ZM41.8321 18C41.8321 16.8954 40.9367 16 39.8321 16C38.7276 16 37.8321 16.8954 37.8321 18H41.8321ZM21.8321 36C21.8321 37.1046 22.7276 38 23.8321 38C24.9367 38 25.8321 37.1046 25.8321 36H21.8321ZM25.8321 18C25.8321 16.8954 24.9367 16 23.8321 16C22.7276 16 21.8321 16.8954 21.8321 18L25.8321 18ZM8.1001 38H71.8321V34H8.1001V38ZM41.8321 36V18H37.8321V36H41.8321ZM25.8321 36V18L21.8321 18L21.8321 36H25.8321Z"
            fill="#F2C94C"
          />
          <path
            d="M17.4818 45.6943C19.7051 44.6236 22.2949 44.6236 24.5182 45.6943C26.7415 46.765 28.3563 48.7898 28.9054 51.1956C29.4545 53.6015 28.8782 56.1264 27.3397 58.0557C25.8011 59.985 23.4677 61.1087 21 61.1087C18.5323 61.1087 16.1989 59.985 14.6603 58.0557C13.1218 56.1264 12.5455 53.6015 13.0946 51.1956C13.6437 48.7898 15.2585 46.765 17.4818 45.6943Z"
            fill="#828282"
          />
          <path
            d="M55.4818 45.6943C57.7051 44.6236 60.2949 44.6236 62.5182 45.6943C64.7415 46.765 66.3563 48.7898 66.9054 51.1956C67.4545 53.6015 66.8782 56.1264 65.3397 58.0557C63.8011 59.985 61.4677 61.1087 59 61.1087C56.5323 61.1087 54.1989 59.985 52.6603 58.0557C51.1218 56.1264 50.5455 53.6015 51.0946 51.1956C51.6437 48.7898 53.2585 46.765 55.4818 45.6943Z"
            fill="#828282"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M8 36.1C8 36.0448 8.04477 36 8.1 36H71.9C71.9552 36 72 36.0448 72 36.1V50C72 52.2091 70.2091 54 68 54H67.0468C67.1618 53.075 67.1179 52.1264 66.9054 51.1956C66.3563 48.7898 64.7415 46.765 62.5182 45.6943C60.2949 44.6236 57.7051 44.6236 55.4818 45.6943C53.2585 46.765 51.6437 48.7898 51.0946 51.1956C50.8821 52.1264 50.8382 53.075 50.9532 54H29.0468C29.1618 53.075 29.1179 52.1264 28.9054 51.1956C28.3563 48.7898 26.7415 46.765 24.5182 45.6943C22.2949 44.6236 19.7051 44.6236 17.4818 45.6943C15.2585 46.765 13.6437 48.7898 13.0946 51.1956C12.8821 52.1264 12.8382 53.075 12.9532 54H12C9.79086 54 8 52.2091 8 50V36.1Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M53.1409 19.0268C52.4064 18.3658 51.4532 18 50.4651 18H12C9.79086 18 8 19.7909 8 22V35.9C8 35.9552 8.04477 36 8.1 36H71.9C71.9412 36 71.943 35.9487 71.9124 35.9212L53.1409 19.0268Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M17.4818 45.6943C19.7051 44.6236 22.2949 44.6236 24.5182 45.6943C26.7415 46.765 28.3563 48.7898 28.9054 51.1956C29.4545 53.6015 28.8782 56.1264 27.3397 58.0557C25.8011 59.985 23.4677 61.1087 21 61.1087C18.5323 61.1087 16.1989 59.985 14.6603 58.0557C13.1218 56.1264 12.5455 53.6015 13.0946 51.1956C13.6437 48.7898 15.2585 46.765 17.4818 45.6943Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M55.4818 45.6943C57.7051 44.6236 60.2949 44.6236 62.5182 45.6943C64.7415 46.765 66.3563 48.7898 66.9054 51.1956C67.4545 53.6015 66.8782 56.1264 65.3397 58.0557C63.8011 59.985 61.4677 61.1087 59 61.1087C56.5323 61.1087 54.1989 59.985 52.6603 58.0557C51.1218 56.1264 50.5455 53.6015 51.0946 51.1956C51.6437 48.7898 53.2585 46.765 55.4818 45.6943Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M8.1 36C8.04477 36 8 36.0448 8 36.1V50C8 52.2091 9.79086 54 12 54H12.9532C12.8382 53.075 12.8821 52.1264 13.0946 51.1956M8.1 36H71.9M8.1 36C8.04477 36 8 35.9552 8 35.9V22C8 19.7909 9.79086 18 12 18H50.4651C51.4532 18 52.4064 18.3658 53.1409 19.0268L71.9124 35.9212C71.943 35.9487 71.9412 36 71.9 36M8.1 36H71.8321M71.9 36C71.9552 36 72 36.0448 72 36.1V50C72 52.2091 70.2091 54 68 54H67.0468C67.1618 53.075 67.1179 52.1264 66.9054 51.1956M66.9054 51.1956C66.3563 48.7898 64.7415 46.765 62.5182 45.6943C60.2949 44.6236 57.7051 44.6236 55.4818 45.6943C53.2585 46.765 51.6437 48.7898 51.0946 51.1956M66.9054 51.1956C67.4545 53.6015 66.8782 56.1264 65.3397 58.0557C63.8011 59.985 61.4677 61.1087 59 61.1087C56.5323 61.1087 54.1989 59.985 52.6603 58.0557C51.1218 56.1264 50.5455 53.6015 51.0946 51.1956M51.0946 51.1956C50.8821 52.1264 50.8382 53.075 50.9532 54H29.0468C29.1618 53.075 29.1179 52.1264 28.9054 51.1956M28.9054 51.1956C28.3563 48.7898 26.7415 46.765 24.5182 45.6943C22.2949 44.6236 19.7051 44.6236 17.4818 45.6943C15.2585 46.765 13.6437 48.7898 13.0946 51.1956M28.9054 51.1956C29.4545 53.6015 28.8782 56.1264 27.3397 58.0557C25.8011 59.985 23.4677 61.1087 21 61.1087C18.5323 61.1087 16.1989 59.985 14.6603 58.0557C13.1218 56.1264 12.5455 53.6015 13.0946 51.1956M39.8321 36V18M23.8321 36L23.8321 18"
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
            d="M6 22C6 18.6863 8.68629 16 12 16H50.4651C51.9473 16 53.3771 16.5487 54.4788 17.5402L73.2503 34.4346C73.4337 34.5996 73.5913 34.8025 73.7088 35.0325C73.8938 35.3453 74 35.7103 74 36.1V50C74 53.0891 71.6655 55.6329 68.6646 55.9636C68.2968 57.163 67.7048 58.2976 66.9033 59.3027C64.9853 61.7079 62.0763 63.1087 59 63.1087C55.9237 63.1087 53.0147 61.7079 51.0967 59.3027C50.3033 58.3078 49.7152 57.1859 49.3467 56H30.6533C30.2848 57.1859 29.6967 58.3078 28.9033 59.3027C26.9853 61.7079 24.0763 63.1087 21 63.1087C17.9237 63.1087 15.0147 61.7079 13.0967 59.3027C12.2952 58.2976 11.7032 57.163 11.3355 55.9636C8.33446 55.6329 6 53.0891 6 50V36.1C6 36.0665 6.00079 36.0331 6.00234 36C6.00079 35.9669 6 35.9335 6 35.9V22ZM48.9408 52C48.9824 51.5822 49.0501 51.165 49.1447 50.7506C49.8293 47.7514 51.8423 45.2271 54.614 43.8924C57.3857 42.5576 60.6143 42.5576 63.386 43.8924C66.1577 45.2271 68.1707 47.7514 68.8553 50.7506C68.9285 51.0712 68.9856 51.3936 69.027 51.7166C69.6099 51.3671 70 50.7291 70 50V38H10V50C10 50.7291 10.3901 51.3671 10.973 51.7166C11.0144 51.3936 11.0715 51.0712 11.1447 50.7506C11.7437 48.1263 13.3598 45.8656 15.6113 44.4473C15.9329 44.2446 16.2675 44.0592 16.614 43.8924C19.3857 42.5576 22.6143 42.5576 25.386 43.8924C28.1577 45.2271 30.1707 47.7514 30.8553 50.7506C30.9499 51.165 31.0177 51.5822 31.0592 52H48.9408ZM52.9379 53.7532C53.0752 54.8577 53.5133 55.9175 54.224 56.8087C55.3831 58.2622 57.141 59.1087 59 59.1087C60.859 59.1087 62.6169 58.2622 63.776 56.8087C64.4867 55.9175 64.9248 54.8577 65.0621 53.7532C65.1488 53.0564 65.1156 52.342 64.9556 51.6407C64.5419 49.8283 63.3254 48.3028 61.6505 47.4962C61.4411 47.3954 61.2274 47.3072 61.0105 47.2316C59.4921 46.7022 57.8151 46.7905 56.3495 47.4962C54.6746 48.3028 53.4581 49.8283 53.0444 51.6407C52.8844 52.342 52.8512 53.0564 52.9379 53.7532ZM26.9556 51.6407C27.1156 52.342 27.1488 53.0564 27.0621 53.7533C26.9248 54.8577 26.4867 55.9176 25.776 56.8087C24.6169 58.2622 22.859 59.1087 21 59.1087C19.141 59.1087 17.3831 58.2622 16.224 56.8087C15.5133 55.9176 15.0752 54.8577 14.9379 53.7533C14.8512 53.0564 14.8844 52.342 15.0444 51.6407C15.4581 49.8283 16.6746 48.3028 18.3495 47.4962C18.5589 47.3954 18.7726 47.3072 18.9895 47.2316C20.5079 46.7022 22.1849 46.7905 23.6505 47.4962C25.3254 48.3028 26.5419 49.8283 26.9556 51.6407ZM37.8321 20H25.8321V34H37.8321V20ZM41.8321 34V20H50.4651C50.9591 20 51.4357 20.1829 51.803 20.5134L66.7881 34H41.8321ZM10 34H21.8321L21.8321 20H12C10.8954 20 10 20.8954 10 22V34Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreVan = forwardRef((props, ref) => {
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

CoreVan.displayName = 'CoreVan'

export default CoreVan
