export default function Nav({ links }) {
    return (
        <header>
        <nav className="navbar navbar-expand-sm  bg-primary">
            <div className="container-fluid">
            <h2 className="myName">Aaron Garcia</h2>
            <button class="navbar-toggler"
             type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
                aria-expanded="false"
                 aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {links.map((link) => link)}
                </ul>
            </div>
            </div>
        </nav>
        </header>
    );
}