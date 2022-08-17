import world from "../assets/world.svg"

function Navbar() {
    return (  
        <nav className="nav">
            <img src={world}/>
            <h3>my travel journal</h3>
        </nav>
    );
}

export default Navbar;