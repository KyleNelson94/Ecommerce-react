import * as React from "react";

export const GlobalIcon = (props:any) => {
  return (
    <svg width={25} height={25} fill="none" {...props}>
      <path
        d="M22.69 5.285a.246.246 0 00-.003-.025c-.032-.044-.07-.083-.102-.126a12.802 12.802 0 00-1.803-1.98c-.054-.048-.105-.098-.16-.145a12.522 12.522 0 00-2.37-1.6c-.034-.018-.07-.034-.104-.051A12.42 12.42 0 0016.986.84c-.089-.032-.17-.062-.255-.089a12.62 12.62 0 00-1.072-.333c-.107-.029-.214-.058-.323-.083a12.49 12.49 0 00-1.08-.198c-.11-.016-.22-.038-.331-.051a11.743 11.743 0 00-2.834 0c-.111.013-.22.035-.33.05-.366.052-.727.116-1.08.199-.11.025-.217.054-.324.083a12.08 12.08 0 00-1.072.333c-.09.03-.17.06-.255.09-.396.152-.784.325-1.162.517l-.104.05c-.852.441-1.65.978-2.379 1.601-.054.047-.105.097-.16.146a11.617 11.617 0 00-1.06 1.06c-.262.294-.51.6-.742.919-.032.043-.07.082-.102.126a.202.202 0 00-.01.025 12.422 12.422 0 000 14.43.19.19 0 00.01.024c.032.045.07.084.102.127a12.493 12.493 0 001.803 1.98c.054.048.105.098.16.145.726.622 1.521 1.16 2.37 1.6.034.018.07.034.104.051a12.4 12.4 0 001.162.518c.089.032.17.062.255.089.352.127.71.238 1.072.333.107.029.214.058.323.083.357.083.715.146 1.08.198.11.016.22.038.331.051.941.115 1.893.115 2.834 0 .111-.013.22-.035.331-.05.365-.053.726-.116 1.08-.199.109-.025.216-.054.323-.083.366-.095.723-.206 1.072-.333.09-.03.17-.06.255-.09a12.41 12.41 0 001.162-.517l.104-.05a12.524 12.524 0 002.37-1.6c.055-.048.106-.098.16-.146a11.367 11.367 0 001.062-1.061c.261-.295.508-.6.74-.919.033-.043.071-.082.103-.127a.208.208 0 00.01-.024 12.422 12.422 0 000-14.43zm-1.02 1.69a10.626 10.626 0 011.507 4.632h-5.35a16.66 16.66 0 00-.5-3.152 16.05 16.05 0 004.343-1.48zm-6.893-4.946c.05.012.098.028.148.04.32.075.637.16.947.267l.14.052c.307.107.61.226.907.358.052.024.102.05.154.075.284.135.562.28.833.438l.178.108c.258.157.508.326.75.505.063.045.126.09.187.14.238.178.466.37.684.573.058.052.117.103.173.157.228.217.446.446.657.684l.082.09c-1.21.575-2.49.987-3.81 1.223a22.706 22.706 0 00-2.403-4.771c.123.022.25.034.373.061zm-5.813 9.578c.07-.966.235-1.924.491-2.858a25.656 25.656 0 006.101-.004c.256.935.42 1.894.49 2.862H8.963zm7.081 1.786c-.07.966-.235 1.924-.491 2.858-1.012-.12-2.03-.18-3.05-.178-1.02-.002-2.039.058-3.051.178a14.877 14.877 0 01-.49-2.858h7.082zm-3.54-11.028c1.016 1.44 1.852 3 2.489 4.644-.827.088-1.658.132-2.49.132a23.82 23.82 0 01-2.486-.133 21.738 21.738 0 012.486-4.643zm-8.03 3.06c.21-.238.429-.467.657-.684.056-.054.115-.105.173-.157.22-.2.448-.392.684-.574.061-.047.124-.09.186-.14.243-.178.494-.346.75-.504l.18-.108c.27-.158.548-.304.832-.438l.154-.075c.297-.134.6-.253.907-.358.046-.017.09-.035.14-.051.31-.104.625-.19.947-.268.05-.012.098-.028.15-.039.121-.027.248-.04.372-.061a22.711 22.711 0 00-2.405 4.771 14.983 14.983 0 01-3.81-1.223l.083-.091zm-1.136 1.55a16.048 16.048 0 004.342 1.48 16.663 16.663 0 00-.499 3.152h-5.35c.137-1.64.653-3.226 1.507-4.633zm0 11.05a10.626 10.626 0 01-1.507-4.632h5.35c.066 1.064.233 2.12.5 3.152a16.05 16.05 0 00-4.343 1.48zm6.893 4.946c-.05-.012-.098-.028-.148-.04a9.65 9.65 0 01-.947-.267c-.047-.016-.094-.035-.14-.052-.307-.107-.61-.226-.907-.357-.051-.024-.102-.051-.154-.075a11.507 11.507 0 01-.833-.439l-.178-.108a10.365 10.365 0 01-.75-.505c-.063-.045-.126-.089-.187-.139a8.139 8.139 0 01-.684-.574c-.057-.052-.116-.103-.173-.157a11.059 11.059 0 01-.657-.684l-.082-.089c1.21-.576 2.49-.988 3.81-1.224a22.708 22.708 0 002.403 4.771c-.123-.022-.25-.034-.373-.061zm2.273-.336c-1.017-1.44-1.853-3-2.49-4.644a23.258 23.258 0 014.977 0 21.74 21.74 0 01-2.488 4.644zm8.03-3.06c-.21.238-.43.467-.658.684-.056.054-.115.105-.173.157a10.647 10.647 0 01-1.62 1.218l-.18.108c-.27.158-.547.304-.832.438l-.154.076c-.297.134-.6.252-.907.357-.046.017-.09.035-.14.052-.31.103-.625.189-.947.268-.05.011-.098.027-.149.038-.122.027-.25.04-.373.062a22.707 22.707 0 002.404-4.771c1.319.235 2.6.647 3.81 1.223l-.082.09zm1.135-1.55a16.05 16.05 0 00-4.342-1.48 16.66 16.66 0 00.499-3.152h5.35a10.627 10.627 0 01-1.507 4.633z"
        fill="#CCCCCE"
      />
    </svg>
  );
};
