
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M67.9531 18.6011C64.8379 14.5099 60.8339 11.1643 56.2373 8.81159C51.6407 6.45887 46.5687 5.15919 41.3966 5.00862C33.2711 4.8475 27.6581 7.26523 24.4825 9.2091C28.7315 6.76886 34.8808 5.38458 40.2645 5.45301C54.1132 5.62626 68.987 14.9654 71.196 31.7984C73.733 51.1213 60.1408 67.2484 41.0204 67.2977C19.9849 67.3505 7.19046 48.9079 10.535 32.3425C10.5972 31.5302 10.7179 30.7234 10.8963 29.9283C11.309 25.6827 12.555 21.5577 14.5645 17.7851C12.142 19.0264 9.05736 22.9522 7.53515 26.5888C5.31929 32.1373 4.53804 38.1458 5.26233 44.069C5.31482 44.5177 5.36206 44.9656 5.42155 45.4109C6.32867 50.583 8.40894 55.4839 11.5058 59.7447C14.6026 64.0056 18.6352 67.5151 23.3001 70.0094C27.9649 72.5036 33.1404 73.9174 38.4371 74.1444C43.7335 74.3714 49.0132 73.4055 53.8782 71.3197C58.7432 69.2338 63.0669 66.0824 66.5239 62.1023C69.9809 58.1225 72.481 53.4177 73.8359 48.3426C75.1909 43.2674 75.3655 37.954 74.3465 32.8023C73.3274 27.6507 71.1415 22.7951 67.9531 18.6011Z"
            fill="url(#paint0_radial)"
          />
          <path
            opacity="0.67"
            d="M67.9531 18.6011C64.8379 14.5099 60.8339 11.1643 56.2373 8.81159C51.6407 6.45887 46.5687 5.15919 41.3966 5.00862C33.2711 4.8475 27.6581 7.26523 24.4825 9.2091C28.7315 6.76886 34.8808 5.38458 40.2645 5.45301C54.1132 5.62626 68.987 14.9654 71.196 31.7984C73.733 51.1213 60.1408 67.2484 41.0204 67.2977C19.9849 67.3505 7.19046 48.9079 10.535 32.3425C10.5972 31.5302 10.7179 30.7234 10.8963 29.9283C11.309 25.6827 12.555 21.5577 14.5645 17.7851C12.142 19.0264 9.05736 22.9522 7.53515 26.5888C5.31929 32.1373 4.53804 38.1458 5.26233 44.069C5.31482 44.5177 5.36206 44.9656 5.42155 45.4109C6.32867 50.583 8.40894 55.4839 11.5058 59.7447C14.6026 64.0056 18.6352 67.5151 23.3001 70.0094C27.9649 72.5036 33.1404 73.9174 38.4371 74.1444C43.7335 74.3714 49.0132 73.4055 53.8782 71.3197C58.7432 69.2338 63.0669 66.0824 66.5239 62.1023C69.9809 58.1225 72.481 53.4177 73.8359 48.3426C75.1909 43.2674 75.3655 37.954 74.3465 32.8023C73.3274 27.6507 71.1415 22.7951 67.9531 18.6011Z"
            fill="url(#paint1_radial)"
          />
          <path
            d="M67.9531 18.6011C64.8379 14.5099 60.8339 11.1643 56.2373 8.81159C51.6407 6.45887 46.5687 5.15919 41.3966 5.00862C33.2711 4.8475 27.6581 7.26523 24.4825 9.2091C28.7315 6.76886 34.8808 5.38458 40.2645 5.45301C54.1132 5.62626 68.987 14.9654 71.196 31.7984C73.733 51.1213 60.1408 67.2484 41.0204 67.2977C19.9849 67.3505 7.19046 48.9079 10.535 32.3425C10.5972 31.5302 10.7179 30.7234 10.8963 29.9283C11.309 25.6827 12.555 21.5577 14.5645 17.7851C12.142 19.0264 9.05736 22.9522 7.53515 26.5888C5.31929 32.1373 4.53804 38.1458 5.26233 44.069C5.31482 44.5177 5.36206 44.9656 5.42155 45.4109C6.32867 50.583 8.40894 55.4839 11.5058 59.7447C14.6026 64.0056 18.6352 67.5151 23.3001 70.0094C27.9649 72.5036 33.1404 73.9174 38.4371 74.1444C43.7335 74.3714 49.0132 73.4055 53.8782 71.3197C58.7432 69.2338 63.0669 66.0824 66.5239 62.1023C69.9809 58.1225 72.481 53.4177 73.8359 48.3426C75.1909 43.2674 75.3655 37.954 74.3465 32.8023C73.3274 27.6507 71.1415 22.7951 67.9531 18.6011Z"
            fill="url(#paint2_radial)"
          />
          <path
            d="M67.9531 18.6011C64.8379 14.5099 60.8339 11.1643 56.2373 8.81159C51.6407 6.45887 46.5687 5.15919 41.3966 5.00862C33.2711 4.8475 27.6581 7.26523 24.4825 9.2091C28.7315 6.76886 34.8808 5.38458 40.2645 5.45301C54.1132 5.62626 68.987 14.9654 71.196 31.7984C73.733 51.1213 60.1408 67.2484 41.0204 67.2977C19.9849 67.3505 7.19046 48.9079 10.535 32.3425C10.5972 31.5302 10.7179 30.7234 10.8963 29.9283C11.309 25.6827 12.555 21.5577 14.5645 17.7851C12.142 19.0264 9.05736 22.9522 7.53515 26.5888C5.31929 32.1373 4.53804 38.1458 5.26233 44.069C5.31482 44.5177 5.36206 44.9656 5.42155 45.4109C6.32867 50.583 8.40894 55.4839 11.5058 59.7447C14.6026 64.0056 18.6352 67.5151 23.3001 70.0094C27.9649 72.5036 33.1404 73.9174 38.4371 74.1444C43.7335 74.3714 49.0132 73.4055 53.8782 71.3197C58.7432 69.2338 63.0669 66.0824 66.5239 62.1023C69.9809 58.1225 72.481 53.4177 73.8359 48.3426C75.1909 43.2674 75.3655 37.954 74.3465 32.8023C73.3274 27.6507 71.1415 22.7951 67.9531 18.6011Z"
            fill="url(#paint3_radial)"
          />
          <path
            d="M67.9531 18.6011C64.8379 14.5099 60.8339 11.1643 56.2373 8.81159C51.6407 6.45887 46.5687 5.15919 41.3966 5.00862C33.2711 4.8475 27.6581 7.26523 24.4825 9.2091C28.7315 6.76886 34.8808 5.38458 40.2645 5.45301C54.1132 5.62626 68.987 14.9654 71.196 31.7984C73.733 51.1213 60.1408 67.2484 41.0204 67.2977C19.9849 67.3505 7.19046 48.9079 10.535 32.3425C10.5972 31.5302 10.7179 30.7234 10.8963 29.9283C11.309 25.6827 12.555 21.5577 14.5645 17.7851C12.142 19.0264 9.05736 22.9522 7.53515 26.5888C5.31929 32.1373 4.53804 38.1458 5.26233 44.069C5.31482 44.5177 5.36206 44.9656 5.42155 45.4109C6.32867 50.583 8.40894 55.4839 11.5058 59.7447C14.6026 64.0056 18.6352 67.5151 23.3001 70.0094C27.9649 72.5036 33.1404 73.9174 38.4371 74.1444C43.7335 74.3714 49.0132 73.4055 53.8782 71.3197C58.7432 69.2338 63.0669 66.0824 66.5239 62.1023C69.9809 58.1225 72.481 53.4177 73.8359 48.3426C75.1909 43.2674 75.3655 37.954 74.3465 32.8023C73.3274 27.6507 71.1415 22.7951 67.9531 18.6011Z"
            fill="url(#paint4_radial)"
          />
          <path
            d="M71.1959 31.7987C71.4704 33.8795 71.5583 35.9804 71.4584 38.0765C72.619 37.9033 73.7816 37.7502 74.9463 37.6174C74.5777 30.731 72.1427 24.1099 67.9529 18.6013C64.8377 14.5102 60.8339 11.1645 56.2372 8.81183C51.6405 6.45912 46.5686 5.15943 41.3965 5.00887C33.271 4.84774 27.658 7.26547 24.4824 9.20934C28.7314 6.7691 34.8807 5.38482 40.2644 5.45326C54.113 5.62824 68.9869 14.963 71.1959 31.7987Z"
            fill="url(#paint5_linear)"
          />
          <path
            d="M72.048 30.8382C70.0788 13.2462 54.2345 5.33902 40.2643 5.45337C34.8797 5.49668 28.7315 6.76922 24.4823 9.20947C23.358 9.86963 22.313 10.6543 21.3679 11.5484C21.4808 11.4557 21.8175 11.1811 22.3758 10.8016L22.4309 10.7644L22.4799 10.7315C24.5417 9.35106 26.8136 8.30641 29.2091 7.63721C32.9617 6.61011 36.8513 6.15932 40.742 6.30057C47.963 6.72755 54.7645 9.80314 59.8191 14.9273C64.8738 20.0513 67.8192 26.8565 68.0807 34.0147C68.4016 45.4554 58.9455 54.5771 48.0452 55.1056C40.1173 55.4901 32.648 51.6916 29 44.0928C28.1466 42.3621 27.5671 40.5119 27.2817 38.6067C25.5532 27.0423 33.396 17.1799 40.588 14.7379C36.7082 11.382 26.9861 11.6099 19.7503 16.881C14.5398 20.677 11.1594 26.4523 10.0397 33.3399C9.23403 38.6247 9.94332 44.0274 12.0868 48.9326C14.3132 54.1344 17.9514 58.6237 22.598 61.9026C27.2443 65.1815 32.7174 67.1216 38.4096 67.5078C39.2781 67.5736 40.1483 67.6062 41.0202 67.6056C64.1701 67.6056 74.2133 50.2051 72.048 30.8382Z"
            fill="url(#paint6_radial)"
          />
          <path
            d="M72.048 30.8382C70.0788 13.2462 54.2345 5.33902 40.2643 5.45337C34.8797 5.49668 28.7315 6.76922 24.4823 9.20947C23.358 9.86963 22.313 10.6543 21.3679 11.5484C21.4808 11.4557 21.8175 11.1811 22.3758 10.8016L22.4309 10.7644L22.4799 10.7315C24.5417 9.35106 26.8136 8.30641 29.2091 7.63721C32.9617 6.61011 36.8513 6.15932 40.742 6.30057C47.963 6.72755 54.7645 9.80314 59.8191 14.9273C64.8738 20.0513 67.8192 26.8565 68.0807 34.0147C68.4016 45.4554 58.9455 54.5771 48.0452 55.1056C40.1173 55.4901 32.648 51.6916 29 44.0928C28.1466 42.3621 27.5671 40.5119 27.2817 38.6067C25.5532 27.0423 33.396 17.1799 40.588 14.7379C36.7082 11.382 26.9861 11.6099 19.7503 16.881C14.5398 20.677 11.1594 26.4523 10.0397 33.3399C9.23403 38.6247 9.94332 44.0274 12.0868 48.9326C14.3132 54.1344 17.9514 58.6237 22.598 61.9026C27.2443 65.1815 32.7174 67.1216 38.4096 67.5078C39.2781 67.5736 40.1483 67.6062 41.0202 67.6056C64.1701 67.6056 74.2133 50.2051 72.048 30.8382Z"
            fill="url(#paint7_radial)"
          />
          <path
            opacity="0.53"
            d="M72.048 30.8382C70.0788 13.2462 54.2345 5.33902 40.2643 5.45337C34.8797 5.49668 28.7315 6.76922 24.4823 9.20947C23.358 9.86963 22.313 10.6543 21.3679 11.5484C21.4808 11.4557 21.8175 11.1811 22.3758 10.8016L22.4309 10.7644L22.4799 10.7315C24.5417 9.35106 26.8136 8.30641 29.2091 7.63721C32.9617 6.61011 36.8513 6.15932 40.742 6.30057C47.963 6.72755 54.7645 9.80314 59.8191 14.9273C64.8738 20.0513 67.8192 26.8565 68.0807 34.0147C68.4016 45.4554 58.9455 54.5771 48.0452 55.1056C40.1173 55.4901 32.648 51.6916 29 44.0928C28.1466 42.3621 27.5671 40.5119 27.2817 38.6067C25.5532 27.0423 33.396 17.1799 40.588 14.7379C36.7082 11.382 26.9861 11.6099 19.7503 16.881C14.5398 20.677 11.1594 26.4523 10.0397 33.3399C9.23403 38.6247 9.94332 44.0274 12.0868 48.9326C14.3132 54.1344 17.9514 58.6237 22.598 61.9026C27.2443 65.1815 32.7174 67.1216 38.4096 67.5078C39.2781 67.5736 40.1483 67.6062 41.0202 67.6056C64.1701 67.6056 74.2133 50.2051 72.048 30.8382Z"
            fill="url(#paint8_radial)"
          />
          <path
            opacity="0.53"
            d="M72.048 30.8382C70.0788 13.2462 54.2345 5.33902 40.2643 5.45337C34.8797 5.49668 28.7315 6.76922 24.4823 9.20947C23.358 9.86963 22.313 10.6543 21.3679 11.5484C21.4808 11.4557 21.8175 11.1811 22.3758 10.8016L22.4309 10.7644L22.4799 10.7315C24.5417 9.35106 26.8136 8.30641 29.2091 7.63721C32.9617 6.61011 36.8513 6.15932 40.742 6.30057C47.963 6.72755 54.7645 9.80314 59.8191 14.9273C64.8738 20.0513 67.8192 26.8565 68.0807 34.0147C68.4016 45.4554 58.9455 54.5771 48.0452 55.1056C40.1173 55.4901 32.648 51.6916 29 44.0928C28.1466 42.3621 27.5671 40.5119 27.2817 38.6067C25.5532 27.0423 33.396 17.1799 40.588 14.7379C36.7082 11.382 26.9861 11.6099 19.7503 16.881C14.5398 20.677 11.1594 26.4523 10.0397 33.3399C9.23403 38.6247 9.94332 44.0274 12.0868 48.9326C14.3132 54.1344 17.9514 58.6237 22.598 61.9026C27.2443 65.1815 32.7174 67.1216 38.4096 67.5078C39.2781 67.5736 40.1483 67.6062 41.0202 67.6056C64.1701 67.6056 74.2133 50.2051 72.048 30.8382Z"
            fill="url(#paint9_radial)"
          />
          <path
            d="M48.0454 55.1057C63.0051 54.2048 69.4089 41.9386 69.8105 33.237C70.4369 19.641 62.2913 4.98394 40.7423 6.30065C36.8515 6.16025 32.9619 6.61192 29.2094 7.63989C26.8247 8.3375 24.5571 9.38018 22.4802 10.7342L22.4312 10.7671L22.3761 10.8043C22.0413 11.0353 21.7138 11.2785 21.3936 11.5337C26.9714 8.44536 33.416 7.24797 39.745 8.12413C52.1169 9.73191 63.4286 19.2616 63.4286 31.8362C63.4286 41.5114 55.8778 48.9015 47.0359 48.3705C33.9002 47.5909 30.589 34.2505 37.4224 28.4864C35.5799 28.0939 32.1173 28.8632 29.7063 32.4323C27.5428 35.6374 27.6653 40.5837 29.0003 44.0929C30.6642 47.6308 33.3796 50.5811 36.7831 52.5491C40.1868 54.5171 44.116 55.4091 48.0454 55.1057Z"
            fill="url(#paint10_radial)"
          />
          <path
            d="M67.9528 18.6014C67.0154 17.3862 65.9979 16.2339 64.9066 15.1519C64.0401 14.2448 63.1115 13.3979 62.1273 12.6173C62.6936 13.1056 63.2336 13.6232 63.7448 14.1679C65.6598 16.1913 67.1159 18.5966 68.0158 21.2227C69.8432 26.7052 69.7243 33.5668 66.2345 38.9559C64.297 41.9756 61.591 44.4374 58.3886 46.094C55.1861 47.7506 51.5999 48.5438 47.9898 48.3937C47.6741 48.3937 47.3557 48.3937 47.0355 48.3703C33.8997 47.5908 30.5886 34.2503 37.4228 28.4863C35.5794 28.0938 32.1168 28.8631 29.7059 32.4321C27.5424 35.6372 27.6648 40.5835 28.9999 44.0927C28.1468 42.3621 27.5676 40.5118 27.2825 38.6068C25.5531 27.0422 33.3959 17.1798 40.5879 14.7379C36.7081 11.382 26.986 11.6098 19.7502 16.881C15.4945 20.031 12.3956 24.4725 10.9258 29.5284C11.3942 25.4257 12.6279 21.4447 14.5642 17.788C12.1418 19.0293 9.05712 22.9552 7.5349 26.5917C5.31948 32.1394 4.53824 38.147 5.26209 44.0693C5.31458 44.5181 5.36182 44.9659 5.42131 45.4112C6.32843 50.5834 8.4087 55.4842 11.5055 59.745C14.6023 64.0059 18.635 67.5155 23.2998 70.0097C27.9646 72.5039 33.1402 73.9178 38.4368 74.1448C43.7333 74.3717 49.0129 73.4059 53.8779 71.32C58.7429 69.2342 63.0667 66.0827 66.5236 62.1027C69.9806 58.1228 72.4808 53.4181 73.8356 48.3429C75.1907 43.2678 75.3652 37.9543 74.3462 32.8026C73.3272 27.6511 71.1412 22.7954 67.9528 18.6014Z"
            fill="url(#paint11_linear)"
          />
          <path
            d="M68.0162 21.2227C67.1164 18.5965 65.6603 16.1912 63.7451 14.1679C61.4694 11.8197 58.7712 9.91221 55.7894 8.54328C53.2999 7.32819 50.6749 6.40681 47.9683 5.79811C43.1973 4.764 38.2601 4.73448 33.4767 5.71148C28.505 6.75098 24.1335 8.88111 21.3682 11.544C23.5732 10.3105 25.9365 9.37805 28.3939 8.77197C33.1691 7.58374 38.1695 7.60361 42.935 8.82973C47.7005 10.0559 52.0781 12.4489 55.6652 15.7887C57.1191 17.1539 58.3916 18.6966 59.4523 20.3797C63.7347 27.2743 63.3296 35.9421 59.9903 41.0539C57.5102 44.8516 52.1982 48.4171 47.2422 48.3756C50.9722 48.6542 54.7087 47.9256 58.0535 46.2672C61.3983 44.6088 64.2259 42.0829 66.2349 38.9585C69.7246 33.5669 69.8436 26.7052 68.0162 21.2227Z"
            fill="url(#paint12_linear)"
          />
          <path
            d="M68.0162 21.2227C67.1164 18.5965 65.6603 16.1912 63.7451 14.1679C61.4694 11.8197 58.7712 9.91221 55.7894 8.54328C53.2999 7.32819 50.6749 6.40681 47.9683 5.79811C43.1973 4.764 38.2601 4.73448 33.4767 5.71148C28.505 6.75098 24.1335 8.88111 21.3682 11.544C23.5732 10.3105 25.9365 9.37805 28.3939 8.77197C33.1691 7.58374 38.1695 7.60361 42.935 8.82973C47.7005 10.0559 52.0781 12.4489 55.6652 15.7887C57.1191 17.1539 58.3916 18.6966 59.4523 20.3797C63.7347 27.2743 63.3296 35.9421 59.9903 41.0539C57.5102 44.8516 52.1982 48.4171 47.2422 48.3756C50.9722 48.6542 54.7087 47.9256 58.0535 46.2672C61.3983 44.6088 64.2259 42.0829 66.2349 38.9585C69.7246 33.5669 69.8436 26.7052 68.0162 21.2227Z"
            fill="url(#paint13_linear)"
          />
          <defs><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(67.5918 19.1945) scale(79.4175 78.6389)"><stop stop-color="#FFF36E"/><stop offset="0.5" stop-color="#FC4055"/><stop offset="1" stop-color="#E31587"/></radialGradient><radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.8132 22.4472) scale(47.0014 46.5406)"><stop offset="0.001" stop-color="#C60084"/><stop offset="1" stop-color="#FC4055" stop-opacity="0"/></radialGradient><radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(74.3804 14.7194) scale(93.2565 92.3422)"><stop stop-color="#FFDE67" stop-opacity="0.6"/><stop offset="0.093" stop-color="#FFD966" stop-opacity="0.581"/><stop offset="0.203" stop-color="#FFCA65" stop-opacity="0.525"/><stop offset="0.321" stop-color="#FEB262" stop-opacity="0.432"/><stop offset="0.446" stop-color="#FE8F5E" stop-opacity="0.302"/><stop offset="0.573" stop-color="#FD6459" stop-opacity="0.137"/><stop offset="0.664" stop-color="#FC4055" stop-opacity="0"/></radialGradient><radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.0063 43.4661) scale(120.308 119.129)"><stop offset="0.153" stop-color="#810220"/><stop offset="0.167" stop-color="#920B27" stop-opacity="0.861"/><stop offset="0.216" stop-color="#CB2740" stop-opacity="0.398"/><stop offset="0.253" stop-color="#EF394F" stop-opacity="0.11"/><stop offset="0.272" stop-color="#FC4055" stop-opacity="0"/></radialGradient><radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32.9018 41.9684) scale(120.308 119.129)"><stop offset="0.113" stop-color="#810220"/><stop offset="0.133" stop-color="#920B27" stop-opacity="0.861"/><stop offset="0.204" stop-color="#CB2740" stop-opacity="0.398"/><stop offset="0.257" stop-color="#EF394F" stop-opacity="0.11"/><stop offset="0.284" stop-color="#FC4055" stop-opacity="0"/></radialGradient><linearGradient id="paint5_linear" x1="45.1083" y1="11.7466" x2="65.4147" y2="47.2666" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBD4F"/><stop offset="0.508" stop-color="#FF9640" stop-opacity="0"/></linearGradient><radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(65.7765 15.4755) scale(74.5531 73.9762)"><stop stop-color="#FF9640"/><stop offset="0.8" stop-color="#FC4055"/></radialGradient><radialGradient id="paint7_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(65.7765 15.4755) scale(74.5531 73.9762)"><stop offset="0.084" stop-color="#FFDE67"/><stop offset="0.147" stop-color="#FFDC66" stop-opacity="0.968"/><stop offset="0.246" stop-color="#FFD562" stop-opacity="0.879"/><stop offset="0.369" stop-color="#FFCB5D" stop-opacity="0.734"/><stop offset="0.511" stop-color="#FFBC55" stop-opacity="0.533"/><stop offset="0.667" stop-color="#FFAA4B" stop-opacity="0.28"/><stop offset="0.822" stop-color="#FF9640" stop-opacity="0"/></radialGradient><radialGradient id="paint8_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48.7005 38.4847) rotate(75.5925) scale(36.2925 38.132)"><stop offset="0.363" stop-color="#FC4055"/><stop offset="0.443" stop-color="#FD604D" stop-opacity="0.633"/><stop offset="0.545" stop-color="#FE8644" stop-opacity="0.181"/><stop offset="0.59" stop-color="#FF9640" stop-opacity="0"/></radialGradient><radialGradient id="paint9_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.4016 41.4688) scale(36.5594 36.2009)"><stop offset="0.216" stop-color="#FC4055" stop-opacity="0.8"/><stop offset="0.267" stop-color="#FD5251" stop-opacity="0.633"/><stop offset="0.41" stop-color="#FE8345" stop-opacity="0.181"/><stop offset="0.474" stop-color="#FF9640" stop-opacity="0"/></radialGradient><radialGradient id="paint10_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80.6559 7.11917) scale(126.009 125.034)"><stop offset="0.054" stop-color="#FFF36E"/><stop offset="0.457" stop-color="#FF9640"/><stop offset="0.639" stop-color="#FF9640"/></radialGradient><linearGradient id="paint11_linear" x1="56.6745" y1="11.1368" x2="21.4223" y2="72.8008" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF36E" stop-opacity="0.8"/><stop offset="0.094" stop-color="#FFF36E" stop-opacity="0.699"/><stop offset="0.752" stop-color="#FFF36E" stop-opacity="0"/></linearGradient><linearGradient id="paint12_linear" x1="40.5191" y1="4.42076" x2="59.1842" y2="58.9984" gradientUnits="userSpaceOnUse"><stop stop-color="#B833E1"/><stop offset="0.371" stop-color="#9059FF"/><stop offset="0.614" stop-color="#5B6DF8"/><stop offset="1" stop-color="#0090ED"/></linearGradient><linearGradient id="paint13_linear" x1="29.2557" y1="5.28182" x2="64.217" y2="40.5893" gradientUnits="userSpaceOnUse"><stop offset="0.805" stop-color="#722291" stop-opacity="0"/><stop offset="1" stop-color="#592ACB" stop-opacity="0.5"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M67.9528 18.6014C67.0154 17.3863 65.9979 16.2339 64.9066 15.152C64.0401 14.2448 63.1115 13.3979 62.1273 12.6173C62.6936 13.1056 63.2336 13.6232 63.7448 14.1679C65.6598 16.1914 67.1159 18.5967 68.0158 21.2227C69.8433 26.7052 69.7243 33.5669 66.2345 38.956C64.297 41.9757 61.591 44.4374 58.3886 46.094C55.1861 47.7507 51.5999 48.5439 47.9898 48.3938C47.6741 48.3938 47.3557 48.3938 47.0355 48.3704C33.8997 47.5908 30.5886 34.2503 37.4228 28.4864C35.5794 28.0939 32.1168 28.8632 29.7059 32.4321C27.5424 35.6372 27.6648 40.5835 28.9999 44.0928C28.1468 42.3621 27.5676 40.5119 27.2825 38.6069C25.5531 27.0423 33.3959 17.1799 40.5879 14.7379C36.7081 11.382 26.986 11.6099 19.7502 16.881C15.4945 20.0311 12.3956 24.4725 10.9258 29.5285C11.3942 25.4257 12.6279 21.4448 14.5642 17.788C12.1418 19.0294 9.05712 22.9553 7.5349 26.5917C5.31948 32.1395 4.53824 38.1471 5.26209 44.0694C5.31458 44.5181 5.36182 44.966 5.42131 45.4113C6.32843 50.5834 8.4087 55.4843 11.5055 59.7451C14.6023 64.006 18.635 67.5155 23.2998 70.0098C27.9646 72.504 33.1402 73.9178 38.4368 74.1448C43.7333 74.3718 49.0129 73.406 53.8779 71.3201C58.7429 69.2343 63.0667 66.0828 66.5236 62.1027C69.9806 58.1229 72.4808 53.4181 73.8356 48.343C75.1907 43.2678 75.3652 37.9544 74.3462 32.8027C73.3272 27.6511 71.1412 22.7955 67.9528 18.6014Z"
            fill="currentColor"
          />
          <path
            d="M68.0158 21.2227C67.1159 18.5967 65.6598 16.1914 63.7448 14.1679C61.469 11.8197 58.7709 9.91221 55.7891 8.54328C53.2996 7.32819 50.6746 6.40681 47.968 5.79811C43.197 4.764 38.2598 4.73448 33.4764 5.71148C28.5047 6.75098 24.1332 8.88111 21.3679 11.544C23.5729 10.3105 25.9362 9.37805 28.3936 8.77197C33.1688 7.58374 38.1692 7.60361 42.9347 8.82973C47.7002 10.0559 52.0777 12.4489 55.6649 15.7887C57.1188 17.1539 58.3913 18.6966 59.452 20.3797C63.7344 27.2743 63.3293 35.9421 59.99 41.0539C57.5099 44.8516 52.1979 48.4171 47.2419 48.3756C50.9719 48.6542 54.7084 47.9256 58.0532 46.2672C61.398 44.6088 64.2256 42.0829 66.2346 38.9585C69.7243 33.5668 69.8433 26.7052 68.0158 21.2227Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M63.7448 14.1679C63.2336 13.6232 62.6936 13.1056 62.1273 12.6173C63.1115 13.3979 64.0401 14.2448 64.9066 15.152C65.9979 16.2339 67.0154 17.3863 67.9528 18.6014C71.1412 22.7955 73.3272 27.6511 74.3462 32.8027C75.3652 37.9544 75.1907 43.2678 73.8356 48.343C72.4808 53.4181 69.9806 58.1229 66.5236 62.1027C63.0667 66.0828 58.7429 69.2343 53.8779 71.3201C49.0129 73.406 43.7333 74.3718 38.4368 74.1448C33.1402 73.9179 27.9646 72.504 23.2998 70.0098C18.635 67.5155 14.6023 64.006 11.5055 59.7451C8.4087 55.4843 6.32843 50.5834 5.42131 45.4113C5.36182 44.966 5.31458 44.5181 5.26209 44.0694C4.53824 38.1471 5.31948 32.1395 7.5349 26.5917C9.05712 22.9553 12.1418 19.0294 14.5642 17.788C12.6279 21.4448 11.3942 25.4257 10.9258 29.5285C12.3956 24.4725 15.4945 20.0311 19.7502 16.881C26.986 11.6099 36.7081 11.382 40.5879 14.7379C33.3959 17.1799 25.5531 27.0423 27.2825 38.6069C27.5676 40.5119 28.1468 42.3621 28.9999 44.0928C27.6648 40.5835 27.5424 35.6372 29.7059 32.4321C32.1168 28.8632 35.5794 28.0939 37.4228 28.4864C30.5886 34.2503 33.8997 47.5908 47.0355 48.3704C47.3557 48.3938 47.6741 48.3938 47.9898 48.3938C51.5999 48.5439 55.1861 47.7507 58.3886 46.094C61.591 44.4374 64.297 41.9757 66.2345 38.956C69.7243 33.5669 69.8433 26.7052 68.0158 21.2227M63.7448 14.1679C65.6598 16.1914 67.1159 18.5967 68.0158 21.2227M63.7448 14.1679C61.469 11.8197 58.7709 9.91221 55.7891 8.54328C53.2996 7.32819 50.6746 6.40681 47.968 5.79811C43.197 4.764 38.2597 4.73448 33.4764 5.71148C28.5047 6.75098 24.1332 8.88111 21.3679 11.544C23.5729 10.3105 25.9362 9.37805 28.3936 8.77197C33.1688 7.58374 38.1692 7.60361 42.9347 8.82973C47.7002 10.0559 52.0777 12.4489 55.6649 15.7887C57.1188 17.1539 58.3913 18.6966 59.452 20.3797C63.7344 27.2743 63.3293 35.9421 59.99 41.0539C57.5099 44.8516 52.1979 48.4171 47.2419 48.3756C50.9719 48.6542 54.7084 47.9256 58.0532 46.2672C61.398 44.6088 64.2256 42.0829 66.2346 38.9585C69.7243 33.5668 69.8433 26.7052 68.0158 21.2227"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsFirefox = forwardRef((props, ref) => {
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

BrandsFirefox.displayName = 'BrandsFirefox'

export default BrandsFirefox
