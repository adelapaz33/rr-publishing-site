import { Link } from "react-router-dom";
function Footer() {
    return( 
        <footer>
<div className="flex flex-row justify-evenly" >
<div className="flex flex-col">
        <h3>R&R Publishing</h3>
        <p>Championing Latin American choral composers since 2026</p>
        {/* add logos for email, linkedin, youtube, instagram/facebook  */}
    </div>
    <div className="flex flex-col">
        <h3>Catalog</h3>
        <Link to="">Sacred Works</Link>
        <Link to="">Secular Works</Link>
        <Link to="">Folk Arrangements</Link>
        <Link to="">Contemporary</Link>
    </div>
    <div className="flex flex-col">
        <h3>Resources</h3>
        <Link to="">Composers</Link>
        <Link to="">Pronunciation Guide</Link>
        <Link to="">Audio Samples</Link>
        <Link to="">Performance Notes</Link>
    </div>
    <div className="flex flex-col">
        <h3>Company</h3>
        <Link to="">About</Link>
        <Link to="">Contact</Link>
        <Link to="">Licensing</Link>
        <Link to="">Privacy Policy</Link>
    </div>
</div>
<div>
    <p>@copy; 2026 R&R Publishing. All Rights Reserved.</p>
</div>
        </footer>
    )
}
export default Footer;