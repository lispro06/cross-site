/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-04-11 21:17:16
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-11 21:50:21
 */
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import FooterForm from './FooterForm';
import './footer.css';

function Footer() {
	return (
		<footer className="footer">
			<h2 className="footer__title">Contact</h2>
			<p className="footer__subtitle">(06612) 032, 441, Gangnam-daero, Seocho-gu, Seoul, 06612, Rep. of KOREA</p>

			<FooterForm />

			<div className="footer__base">
				<button
					onClick={scroll.scrollToTop}
					className="footer-base__scroll-to"
					title="Click to scroll to the top">
					<i className="ti-angle-double-up" />
				</button>
				<p className="copyright">© 2019 Boanit Co.,Ltd. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default React.memo(Footer);
