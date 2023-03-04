import { useNavigate, Link } from "react-router-dom";

function Navbar() {
    const history=useNavigate()
    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={()=>history(`/`)}>REACT+REDUX</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                            <Link className="nav-link text-white" to={`/home`}>Home</Link>
                            </li>
                        </ul>
                        {/* <button onClick={()=>history(`/add-data`)}>Add</button> */}
                        <Link className="nav-link text-white" to={`/add-data`}>Add</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;