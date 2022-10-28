
const SvgVector = () => (
  <svg
    width={54}
    height={44}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
  >
    <g filter="url(#Vector__svg__a)">
      <path
        d="M10 29h30M10 19h30M10 9h30"
        stroke="#F2F9FF"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="Vector__svg__a"
        x={0}
        y={0}
        width={54}
        height={44}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2} dy={3} />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_849_818" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_849_818"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgVector;
