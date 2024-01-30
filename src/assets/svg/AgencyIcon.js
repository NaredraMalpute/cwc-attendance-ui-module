import React from "react";
import "./style.scss"

function AgencyIcon({ flag = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="79"
      className={flag ? "fillWhite" : "fillBlue"}
      viewBox="0 0 57 79"
    >
      <path
        className={flag ? "fillWhite" : "fillBlue"}
        stroke="#334E9E"
        d="M30.131 1.038c.663.15 1.346.282 2.01.433 6.569 1.545 11.13 6.895 11.31 13.243.04 1.3 0 2.6.02 3.919 0 .32.12.697.322.96 2.089 2.958.381 6.782-3.355 7.442-.463.075-.603.263-.684.659-.462 2.411-1.727 4.39-3.656 6.028-.261.226-.442.66-.482.999-.06.829-.301 1.846.12 2.411.402.565 1.527.697 2.351.998 3.676 1.338 7.373 2.675 11.05 4.013 4.66 1.695 7.172 5.049 7.232 9.74.04 2.335.02 4.652 0 6.988 0 .264.04.64-.12.792-.302.301-.744.716-1.105.678-.402-.038-.824-.452-1.085-.791-.16-.226-.08-.622-.08-.961-.02-2.524.06-5.068-.08-7.592-.182-3.07-1.97-5.237-4.863-6.462-2.692-1.13-5.505-2.034-8.277-3.033-.08-.018-.16-.018-.301-.037-.744 1.394-1.507 2.788-2.25 4.2-.402.735-.784 1.489-1.186 2.224-1.004 1.883-1.969 2.166-3.917 1.092-.623.66-1.045 1.281-.864 2.298 1.185 6.255 2.29 12.528 3.435 18.801.14.791-.14 1.413-.683 1.978-1.145 1.168-2.29 2.374-3.516 3.636h12.958v-.885-20.61c0-.32 0-.659.08-.96.162-.547.584-.83 1.206-.791.623.037.985.376 1.085.941.06.264.04.547.04.83v21.513c.241.019.483.056.704.056h5.203c1.085 0 1.225-.132 1.225-1.187v-9.099-.602c.02-.961.462-1.47 1.206-1.45.743.018 1.185.508 1.185 1.412.02 3.353.04 6.725 0 10.079-.02 1.977-1.286 3.089-3.395 3.089H21.21c-.763-.056-1.225-.49-1.225-1.13 0-.64.482-1.093 1.245-1.112 1.266-.019 2.511 0 3.777-.019h.944c-1.225-1.262-2.31-2.43-3.435-3.541-.723-.716-.944-1.47-.764-2.468 1.146-6.16 2.23-12.34 3.376-18.5.18-.998-.262-1.6-.864-2.279-.16.094-.302.17-.442.245-1.286.735-2.512.452-3.215-.829a368.832 368.832 0 01-3.294-6.179c-.121-.245-.262-.49-.442-.79-.362.131-.704.244-1.045.357-2.25.81-4.48 1.62-6.71 2.43-3.677 1.338-5.686 3.956-5.706 7.648-.04 7.611-.02 15.24 0 22.852 0 .885.18 1.036 1.145 1.036h6.007v-.942-20.534c0-.245-.02-.509.02-.754.06-.659.543-1.111 1.186-1.092.703.018 1.064.395 1.185.998.04.245.02.509.02.754V75.75h2.29c.945.02 1.467.434 1.447 1.15-.02.678-.522 1.092-1.427 1.092-3.716 0-7.433.02-11.15 0-1.727-.019-2.913-1.074-3.094-2.675-.04-.263-.04-.546-.04-.829 0-7.478.02-14.938 0-22.417-.02-3.843 1.587-6.839 5.023-8.948.602-.377 1.265-.66 1.928-.905 4.38-1.601 8.76-3.202 13.14-4.766.522-.188.662-.433.723-.96.16-1.451-.221-2.544-1.507-3.561-1.688-1.337-2.551-3.259-2.933-5.294-.08-.414-.241-.565-.703-.64-3.697-.622-5.385-4.446-3.295-7.366.18-.264.261-.64.281-.98.1-1.996-.02-4.03.302-5.99.984-5.972 6.027-10.55 12.415-11.491.201-.038.402-.113.583-.17 1.024.038 2.11.038 3.174.038zm4.44 13.47a26.513 26.513 0 01-7.212 2.994c-2.532.66-5.123.924-7.815.81 0 2.336-.02 4.597 0 6.839 0 .64.04 1.3.14 1.94.683 4.201 4.762 7.14 9.523 6.895 4.48-.226 8.157-3.636 8.297-7.8.1-2.75.04-5.519.04-8.27 0-.206-.08-.47-.22-.602-.884-.923-1.788-1.827-2.753-2.807zm6.409 3.164c.542-5.539-1.125-10.079-6.47-12.942-4.359-2.317-9.783-1.846-13.761 1.15-4.058 3.05-5.103 7.195-4.62 11.962.421-.151.984-.208 1.104-.434.623-1.28 1.748-1.375 3.014-1.337 3.154.113 6.168-.434 9.06-1.583 1.347-.527 2.632-1.224 3.918-1.865.884-.452 1.828-.716 2.612-.019 1.366 1.244 2.591 2.581 3.877 3.881.08.094.181.226.161.34-.04.772.482.847 1.105.847zm-12.295 57.57c1.366-1.394 2.591-2.75 3.917-4.013.563-.527.663-1.036.523-1.733-.804-4.333-1.587-8.684-2.371-13.017-.322-1.752-.643-3.485-.964-5.275-.523 0-.985.057-1.427-.019-.723-.094-.904.245-.984.83-.14 1.035-.362 2.072-.543 3.108-.884 4.935-1.788 9.87-2.652 14.807-.04.244-.06.602.1.753 1.427 1.507 2.894 2.995 4.4 4.559zm0-32.402c1.245-1.45 2.31-2.864 3.596-4.107 1.004-.98.984-2.053.864-3.278-2.974 1.112-5.927 1.055-9.04.038.08.848-.101 1.752.28 2.28 1.286 1.733 2.793 3.334 4.3 5.067zm9.523-2.242c-1.105-.395-2.09-.772-3.094-1.092-.141-.057-.442 0-.523.113-1.386 1.582-2.752 3.183-4.159 4.803 1.427.961 2.813 1.865 4.24 2.826 1.185-2.242 2.35-4.408 3.536-6.65zm-11.271 3.824c-1.407-1.62-2.733-3.183-4.099-4.728-.12-.132-.422-.245-.562-.207-1.025.339-2.03.716-3.114 1.111 1.185 2.242 2.35 4.408 3.536 6.631 1.446-.942 2.792-1.846 4.239-2.807zm13.079-24.565v4.88c1.326-.17 2.23-1.093 2.29-2.318.06-1.224-.824-2.242-2.29-2.562zm-13.662 27.73c.543 1.884 2.07 1.244 3.315 1.338.944.056.924-.81 1.427-1.262-.744-.509-1.427-.98-2.13-1.413-.14-.094-.462-.057-.623.037-.683.396-1.346.867-1.989 1.3zM17.093 19.97c-1.387.245-2.31 1.244-2.27 2.43.04 1.225.944 2.186 2.27 2.336V19.97z"
      ></path>
    </svg>
  );
}

export default AgencyIcon;
