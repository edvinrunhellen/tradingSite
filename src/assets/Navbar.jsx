import './Navbar.css'

const Navbar = ({ logo, listOfLinks }) => {


    const routes = listOfLinks.map((link, i) => {
        return (<a key={i} href={link.url}>{link.text}</a>)
    })


    return (
        <div className="Navbar">
            <img className='Navbar-logo' src={logo} alt="" />
            <div className="Navbar-links">
                {routes}
            </div>
        </div>
    )
}


export default Navbar;