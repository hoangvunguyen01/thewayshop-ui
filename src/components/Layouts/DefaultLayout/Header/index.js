import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src="/logo.png" alt="TheWay" />
                </div>

                <div className={cx("navbar-collapse")}>
                    <ul className={cx("navbar-nav")}>
                        <li className={cx("nav-item")}>
                            <a className={cx("nav-link")} href="/">
                                Home
                            </a>
                        </li>
                        <li className={cx("nav-item")}>
                            <a className={cx("nav-link")} href="/about">
                                About Us
                            </a>
                        </li>
                        <li className={cx("nav-item")}>
                            <a className={cx("nav-link")} href="/">
                                Product
                            </a>
                        </li>
                        <li className={cx("nav-item")}>
                            <a className={cx("nav-link")} href="/">
                                Shop
                            </a>
                        </li>
                        <li className={cx("nav-item")}>
                            <a className={cx("nav-link")} href="/">
                                Our Service
                            </a>
                        </li>
                        <li className={cx("nav-item")}>
                            <a className={cx("nav-link")} href="/">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={cx("attr-nav")}>
                    <ul>
                        <li className="search">
                            <a href="#">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                        </li>
                        <li className="cart">
                            <a href="/cart">
                                <FontAwesomeIcon icon={faBagShopping} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
