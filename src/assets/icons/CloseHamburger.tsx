
const SvgCloseHamburger = () => (
  <svg
    width={46}
    height={46}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
  >
    <g filter="url(#CloseHamburger_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.108 7.966a2.081 2.081 0 0 1 2.939 0l8.926 8.907L29.9 7.966a2.079 2.079 0 0 1 2.991-.053 2.074 2.074 0 0 1-.053 2.985l-8.926 8.908 8.926 8.907a2.075 2.075 0 0 1 .053 2.985 2.078 2.078 0 0 1-2.316.428 2.08 2.08 0 0 1-.675-.48l-8.927-8.908-8.926 8.907a2.081 2.081 0 0 1-3.497-1.481c-.01-.538.19-1.058.558-1.451l8.927-8.907-8.927-8.908a2.072 2.072 0 0 1 0-2.932Z"
        fill="#F2F9FF"
      />
      <path
        d="m19.56 21.322-8.884 8.866a.083.083 0 0 1-.104-.01.073.073 0 0 1-.022-.05c0-.014.004-.028.013-.041l8.884-8.866 1.42-1.415-1.42-1.416-8.925-8.907a.072.072 0 0 1-.022-.05c0-.019.007-.037.02-.051a.081.081 0 0 1 .057-.023c.023 0 .043.01.058.023l8.926 8.907 1.412 1.41 1.413-1.41 8.926-8.907.025-.025.024-.026a.079.079 0 0 1 .058-.025.083.083 0 0 1 .06.023.074.074 0 0 1 .021.053.071.071 0 0 1-.024.052l-.025.024-.025.024-8.927 8.908-1.419 1.416L22.5 21.22l8.927 8.908.025.025.025.024a.071.071 0 0 1 .002.104.08.08 0 0 1-.059.024.082.082 0 0 1-.058-.026l-.024-.026-.025-.024-8.926-8.908-1.413-1.41-1.412 1.41Z"
        stroke="#F2F9FF"
        strokeWidth={4}
      />
    </g>
    <defs>
      <filter
        id="CloseHamburger_svg__a"
        x={0.5}
        y={0.306}
        width={45}
        height={45}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_851_868" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_851_868"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgCloseHamburger;
