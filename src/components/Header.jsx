import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<div className="logo">
				<Link to="/">Logo</Link>
			</div>

			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/shop">Shop</Link>
					</li>
					<li>
						<Link to="/service">Services</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
