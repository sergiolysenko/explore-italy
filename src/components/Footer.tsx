import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
    <div className="footer__photo"></div>
    <div className="footer__main">
      <div className="footer__main-wrapper">
        <a href="https://github.com/sergiolysenko">
          <h2 className="footer__name">Sergei Lysenko</h2>
        </a>
        <div className="footer__contacts-wrapper">
          <a className="footer__contacts-phone" href="tel:+79254722402">+7(925)472-24-02</a>
          <a href="email:sergeylysenko1406@gmail.com" className="footer__contacts-email">sergeylysenko1406@gmail.com</a>
        </div>
      </div>
    </div>
  </footer>
  )
};

export default Footer;
