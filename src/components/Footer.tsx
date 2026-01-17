import { Link } from "react-router-dom";
function Footer() {
    return( 
        <footer>
<p>Copyright © 2026 R&R Publishing. All Rights Reserved. All content of this website is the copyright of R&R Publishing, and any unlicensed duplication, digital or otherwise, is against the law.</p>
<Link to="#">Terms & Conditions</Link>
<div>
    <h3>CONNECT WITH US</h3>
    <a
    href="#"
    target="_blank"
    rel="noopener noreferrer">Email</a>
     <a
    href="#"
    target="_blank"
    rel="noopener noreferrer">LinkedIn</a>
     <a
    href="#"
    target="_blank"
    rel="noopener noreferrer">YouTube</a>
     <a
    href="#"
    target="_blank"
    rel="noopener noreferrer">Instagram/Facebook</a>
</div>
        </footer>
    )
}
export default Footer;