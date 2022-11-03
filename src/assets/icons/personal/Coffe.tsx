
const SvgCoffe = () => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
  >
    <path
      d="M28.333 23.333v5a5 5 0 0 1-5 5h-10a5 5 0 0 1-5-5v-5h20Z"
      fill="#77512D"
    />
    <path
      d="M28.333 15v15a5 5 0 0 1-5 5h-10a5 5 0 0 1-5-5V15h20ZM28.333 23.333h5c.917 0 1.667-.75 1.667-1.666v-5C35 15.75 34.25 15 33.333 15h-5"
      stroke="#D1D1D1"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <mask
      id="line-md_coffee-half-empty-twotone-loop_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={9}
      y={0}
      width={19}
      height={27}
    >
      <path
        d="M13.333 0C13.333 3.333 10 3.333 10 6.667 10 10 13.333 10 13.333 13.333 13.333 16.667 10 16.667 10 20c0 3.333 3.333 3.333 3.333 6.667M20 0c0 3.333-3.333 3.333-3.333 6.667C16.667 10 20 10 20 13.333c0 3.334-3.333 3.334-3.333 6.667 0 3.333 3.333 3.333 3.333 6.667M26.667 0c0 3.333-3.334 3.333-3.334 6.667 0 3.333 3.334 3.333 3.334 6.666 0 3.334-3.334 3.334-3.334 6.667 0 3.333 3.334 3.333 3.334 6.667"
        stroke="#fff"
        strokeWidth={2}
      />
    </mask>
    <g mask="url(#line-md_coffee-half-empty-twotone-loop_svg__a)">
      <path d="M40 3.333H0v8.334h40V3.333Z" fill="#F0F0F0" />
    </g>
  </svg>
);

export default SvgCoffe;
