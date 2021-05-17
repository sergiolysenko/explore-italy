import React from 'react';
import {Link} from 'react-router-dom';

const StartScreen = () => {
  return (
  <main className="main">
    <h1 className="visually-hidden">Explore Italy!</h1>
    <section className="top">
      <p className="top__point">
        We will help you to find the best places in Italy. Just choose city and explore its treasures!
      </p>
      <Link className="top__welcome-btn" to={'/cities'}>
        <h2 className="top__welcome-title">Explore<span className="visually-hidden">Italy</span></h2>
        <svg className="top__svg-fill animated-svg" width="1000" height="100%" viewBox="0 0 346 103" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="346" height="103">
            <path d="M14.3672 103H0.867188V0.625H14.3672V103Z" fill="#2c2926" />
            <path d="M107.742 11.7344H74.8359V103H61.4062V11.7344H28.5703V0.625H107.742V11.7344Z" fill="#2c2926" />
            <path
              d="M173.836 76.2812H130.945L121.312 103H107.391L146.484 0.625H158.297L197.461 103H183.609L173.836 76.2812ZM135.023 65.1719H169.828L152.391 17.2891L135.023 65.1719Z"
              fill="#2c2926" />
            <path d="M224.812 91.9609H273.328V103H211.242V0.625H224.812V91.9609Z" fill="#2c2926" />
            <path
              d="M303.07 52.0234L329.789 0.625H345.117L309.82 64.8203V103H296.32V64.8203L261.023 0.625H276.492L303.07 52.0234Z"
              fill="#2c2926" />
          </mask>
          <g mask="url(#mask0)">
            <path className="animated-svg__word-1" d="M7 103V49V-1.5" stroke="#2c2926" strokeWidth="17" />
            <path className="animated-svg__word-2" d="M69 117V67.7915V-1" stroke="#2c2926" strokeWidth="16" />
            <path className="animated-svg__word-2-1" d="M76 7H108.5" stroke="#2c2926" strokeWidth="17" />
            <path className="animated-svg__word-2-2" d="M62 6H20.5" stroke="#2c2926" strokeWidth="17" />
            <path className="animated-svg__word-3" d="M110 106L150.5 6L192 106" stroke="#2c2926" strokeWidth="17" />
            <path className="animated-svg__word-3-1" d="M178 70H123" stroke="#2c2926" strokeWidth="17" />
            <path className="animated-svg__word-4" d="M217 -2V97H275" stroke="#2c2926" strokeWidth="17" />
            <path className="animated-svg__word-5" d="M303 106V50" stroke="#2c2926" strokeWidth="17" />
            <path className="animated-svg__word-5-1" d="M304 62L265.5 -4" stroke="#2c2926" strokeWidth="17" />
            <path className="animated-svg__word-5-2" d="M305 63L340 -4" stroke="#2c2926" strokeWidth="17" />
          </g>
        </svg>
        <svg className="top__svg-stroke" width="1000" height="100%" viewBox="0 0 346 103" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M60.5391 10.6094H28.2031V0.5H106.375V10.6094H73.9688H73.4688V11.1094V101.875H61.0391V11.1094V10.6094H60.5391ZM173.438 75.4845L173.318 75.1562H172.969H130.078H129.727L129.608 75.4867L120.094 101.875H107.25L145.961 0.5H157.086L195.867 101.875H183.092L173.438 75.4845ZM133.686 64.3764L133.443 65.0469H134.156H168.961H169.675L169.431 64.3758L151.993 16.493L151.522 15.2003L151.053 16.4936L133.686 64.3764ZM223.445 91.3359V91.8359H223.945H271.961V101.875H210.875V0.5H223.445V91.3359ZM301.759 51.6281L302.202 52.4847L302.647 51.6291L329.225 0.5H343.404L308.515 63.9544L308.453 64.0669V64.1953V101.875H295.953V64.1953V64.0669L295.891 63.9544L261.002 0.5H275.321L301.759 51.6281ZM13 101.875H0.5V0.5H13V101.875Z"
            stroke="#2c2926" />
        </svg>
      </Link>
      <div className="top__img-wrapper">
        <img className="top__img-bg" src="./img/italy-bg.jpg" alt="italy toscana"></img>
      </div>
    </section>
  </main>
  )
}

export default StartScreen;
