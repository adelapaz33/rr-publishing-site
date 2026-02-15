import { Link } from "react-router-dom";
function Footer() {
    return( 
        <footer className="bg-[#1E3A8A] p-4" >
<div className="flex flex-row justify-evenly" >
<div className="flex flex-col text-[#DBEAFE]">
        <h3>R&R Publishing</h3>
        <p>Championing Latin American choral composers since 2026</p>
        {/* add logos for email, linkedin, youtube, instagram/facebook  */}
    </div>
    <div className="flex flex-col text-white cursor-pointer">
        <h3 className="hover:text-[#F4C430]">Catalog</h3>
        <Link to="" className="hover:text-[#F4C430]">Sacred Works</Link>
        <Link to="" className="hover:text-[#F4C430]">Secular Works</Link>
        <Link to="" className="hover:text-[#F4C430]">Folk Arrangements</Link>
        <Link to="" className="hover:text-[#F4C430]">Contemporary</Link>
    </div>
    <div className="flex flex-col text-white cursor-pointer">
        <h3 className="hover:text-[#F4C430]">Resources</h3>
        <Link to="" className="hover:text-[#F4C430]">Composers</Link>
        <Link to="" className="hover:text-[#F4C430]">Pronunciation Guide</Link>
        <Link to="" className="hover:text-[#F4C430]">Audio Samples</Link>
        <Link to="" className="hover:text-[#F4C430]">Performance Notes</Link>
    </div>
    <div className="flex flex-col text-white cursor-pointer">
        <h3 className="hover:text-[#F4C430]">Company</h3>
        <Link to="" className="hover:text-[#F4C430]">About</Link>
        <Link to="" className="hover:text-[#F4C430]">Contact</Link>
        <Link to="" className="hover:text-[#F4C430]">Licensing</Link>
        <Link to="" className="hover:text-[#F4C430]">Privacy Policy</Link>
    </div>
</div>
<div className="text-[#DBEAFE]" >
    <p>@copy; 2026 R&R Publishing. All Rights Reserved.</p>
</div>
        </footer>
    )
}
export default Footer;