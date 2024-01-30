import React from "react";

function BranchIcon({ flag = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="71"
      className={flag ? "fillWhite" : "fillBlue strokeBlue"}
      viewBox="0 0 70 71"
    >
      <path
        className={flag ? "fillWhite" : "fillBlue strokeBlue"}
        d="M14.144 35.068l.05.902.738-.521c2.205-1.56 4.43-2.5 6.882-2.742h.005a18.063 18.063 0 011.91-.089H51.92c1.118 0 2.02-.188 2.71-.74.605-.485.979-1.197 1.238-2.113H60.726c-.086 1.835-.763 3.448-1.991 4.855-1.722 1.958-3.885 2.842-6.516 2.842-9.543-.023-19.086-.023-28.629 0-4.679 0-8.376 2.988-9.32 7.463a10.741 10.741 0 00-.192 1.322c-.016.283.003.574.15.841.148.27.383.44.63.574.238.129.55.257.917.408l.025.01.004.002c4.965 1.99 7.887 7.283 6.841 12.425h0c-1.095 5.41-5.753 9.206-11.144 9.12-5.33-.088-9.942-4.024-10.837-9.264h0c-.94-5.486 2.25-10.793 7.558-12.497h0l.005-.002c.319-.106.611-.261.803-.544.189-.278.224-.596.224-.889v-.001c-.023-7.578-.023-15.179 0-22.756v-.002c0-.32-.052-.645-.26-.917-.205-.268-.5-.405-.798-.496C2.936 20.555-.232 15.316.664 9.805h0C1.515 4.546 6.236.521 11.632.5 17.05.478 21.771 4.435 22.688 9.786v.002c.94 5.393-2.204 10.68-7.45 12.451-.337.113-.662.267-.883.563-.225.299-.28.658-.28 1.03v.003c.023 3.445.023 6.89.023 10.36 0 .133.01.305.024.517l.022.356zM5.332 58.363v.003c-.025 3.497 2.894 6.418 6.37 6.394 3.471-.025 6.318-2.897 6.318-6.367 0-3.473-2.85-6.32-6.318-6.344-3.478-.025-6.32 2.828-6.37 6.314zM18.02 11.669c.024-3.472-2.8-6.345-6.293-6.37-3.455-.05-6.32 2.78-6.395 6.264-.075 3.481 2.85 6.423 6.344 6.423 3.473 0 6.319-2.849 6.344-6.318z"
      ></path>
      <mask id="path-2-inside-1_398_2934" fill="#fff">
        <path d="M46.693 14.587v-5.89H55.413V0h5.844v8.697H70v5.867h-8.72v8.743h-5.821v-8.72h-8.766z"></path>
      </mask>
      <path
        className={flag ? "fillWhite" : "fillBlue strokeBlue"}
        d="M46.693 14.587v-5.89H55.413V0h5.844v8.697H70v5.867h-8.72v8.743h-5.821v-8.72h-8.766z"
      ></path>
      <path
        className={flag ? "fillWhite" : "fillBlue strokeBlue"}
        d="M46.693 14.587h-1v1h1v-1zm0-5.89v-1h-1v1h1zm8.72 0v1h1v-1h-1zm0-8.697v-1h-1v1h1zm5.844 0h1v-1h-1v1zm0 8.697h-1v1h1v-1zm8.743 0h1v-1h-1v1zm0 5.867v1h1v-1h-1zm-8.72 0v-1h-1v1h1zm0 8.743v1h1v-1h-1zm-5.821 0h-1v1h1v-1zm0-8.72h1v-1h-1v1zm-7.766 0v-.012-.012-.012-.012-.012-.012-.011-.012-.012-.012-.012-.012-.012-.011-.012-.012-.012-.012-.012-.011-.012-.012-.012-.012-.012-.011-.012-.012-.012-.011-.012-.012-.012-.012-.011-.012-.012-.012-.011-.012-.012-.012-.011-.012-.012-.012-.011-.012-.012-.011-.012-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.011-.012-.012-.011-.012-.012-.011-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011V13v-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.01-.012-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.01-.012-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.01-.012-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.01-.012-.012-.01-.012-.012-.01-.012-.012-.01-.012-.012-.01-.012-.012-.01-.012-.012-.01-.012-.012-.01-.012-.012-.01-.012-.012-.01-.012-.012-.01-.012-.012-.01-.012-.012-.01-.012-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.01-.012-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.01-.012-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.012-.01-.012-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011V9.8 9.79v-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.012-.011-.012-.012-.011V9.2 9.19v-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.012-.011-.012-.012-.011-.012-.012-.012-.011-.012-.012-.012-.011-.012-.012-.012h-2V14.587h2zm-1-4.89H51.03v-2H46.693v2zm4.337 0H55.413v-2H51.03v2zm5.383-1V8.68v-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017V7.4v-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017V6.5v-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017V5.5v-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017V4.5v-.017-.017-.017-.017-.017V4.4v-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017V3.4v-.017-.017-.017-.017-.017V3.3v-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017V2.3v-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017V1.4v-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017V.99.974.956.94.922.905.888.871.854.837.82.803.786.769.752.735.718.7.684.667.65.632.615.598.581.564.547.53.513.496.479.462.445.428.41.393.376.36.342.325.308.29.274.257.24.222.205.188.171.154.137.12.103.086.068.051.034.017 0h-2V8.697h2zm-1-7.697H61.257v-2H55.413v2zm4.844-1V8.697h2V8.68v-.018-.017-.018-.017-.018-.017-.018-.017-.018-.017-.018-.017-.018-.017-.018V8.4v-.018-.017-.017-.018-.017-.018-.017-.018-.017-.018-.017-.017-.018-.017-.018-.017-.017-.018-.017-.018-.017-.017-.018-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017V7.6v-.017-.017-.018-.017-.017-.018-.017-.017-.017-.018-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017V7.1v-.018-.017-.017-.017-.018-.017-.017-.017-.017-.018-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017V5.9v-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017V5v-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.016-.017V3.9v-.017-.017-.017-.017-.016V3.8v-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.016-.017V1.9v-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017V.79.774.757.741.724.707.69.673.657.64.623.606.59.572.556.539.522.505.488.472.455.438.42.404.387.371.354.337.32.303.286.27.253.236.219.202.185.168.152.135.118.1.084.067.051.034.017 0h-2zm1 9.697H70v-2H61.257v2zm7.743-1V14.564h2v-.012-.011-.012-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.012-.01-.012-.012-.011-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.01-.012-.012-.01-.012-.012-.01-.012-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.01-.012-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.01-.012-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.01-.012-.012-.01-.012-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.01-.012-.012-.011-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.011-.012-.011-.012-.011-.012-.01-.012-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.012-.011-.012-.011-.012-.012-.011-.012-.012-.011-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.011-.012-.012-.012-.011-.012-.012-.011-.012-.012-.012-.011-.012-.012-.011-.012-.012-.012-.011-.012-.012-.012-.011-.012-.012-.012h-2zm1 4.867H61.28v2H70v-2zm-9.72 1V23.307h2v-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017V22v-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.018-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.018-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017V21v-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017V16v-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.018-.017-.017-.018-.017h-2zm1 7.743H55.459v2H61.28v-2zm-4.821 1v-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.016V21v-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.016-.018-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017-.017-.018-.017-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.017-.018-.017-.018-.017-.017-.018-.017-.017-.018-.017-.018-.017-.017-.018-.017-.018-.017-.017-.018-.017-.018-.017-.018-.017-.017-.018-.017-.018-.017-.018-.017-.018-.017-.017-.018-.017-.018-.017-.018-.017-.018-.017-.018-.017-.018-.017-.018-.017-.018-.017-.018-.017-.018-.017h-2V23.307h2zm-1-9.72H46.693v2H55.46v-2z"
        mask="url(#path-2-inside-1_398_2934)"
      ></path>
    </svg>
  );
}

export default BranchIcon;