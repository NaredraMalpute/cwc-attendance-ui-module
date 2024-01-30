import React from 'react'

const SuccessTick = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="143"
//       height="143"
//       fill="none"
//       viewBox="0 0 143 143"
//     >
//       <g id="successpopup" stroke="#05D5AF">
//         <circle
//           id="circle"
//           cx="71.031"
//           cy="71.031"
//           r="69.309"
//           fill="#05D5AF"
//           fillOpacity="0.15"
//           strokeWidth="3.443"
//           transform="rotate(180 71.031 71.031)"
//         ></circle>
//         <g id="tick">
//           <path
//             id="Union"
//             fill="#05D5AF"
//             fillRule="evenodd"
//             d="M51.82 95.155L104.236 56.2l-5.477-7.37-45.05 33.48-11.16-15.017-7.37 5.477 16.637 22.386.001-.001.001.001z"
//             clipRule="evenodd"
//           ></path>
//         </g>
//       </g>
//     </svg>
//   );
return (
  <div className="tick-wrapper">
      <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
        <path
          class="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
  </div>
  
);
}

export default SuccessTick