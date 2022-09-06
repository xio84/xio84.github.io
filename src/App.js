import React from 'react';
import './App.css';
import xpData from './data/experience.json';
// import './js/scripts.js'

function App() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Oksidian Tafly</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/pictures/0.jpg" alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                </ul>
            </div>
        </nav>
        
        <div className="container-fluid p-0">
            
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Oksidian
                        <span className="text-primary"> Tafly</span>
                    </h1>
                    <div className="subheading mb-5">
                        +65 93744098 · <a href="mailto:oksitafly@gmail.com">oksitafly@gmail.com</a>
                    </div>
                    <p className="lead mb-5">Experienced in React.js, K8S, and Python</p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://linkedin.com/in/oksidiantafly"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/xio84"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            
            <section className="resume-section" id="experience">
                <div className="resume-section-content" id="experience-content">
                    <h2 className="mb-5">Experience</h2>
                    {xpData.map(x => {
                        return (
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">{x.title}</h3>
                                    <div className="subheading mb-3">{x.company}</div>
                                    <p>{x.description}</p>
                                </div>
                                <div className="flex-shrink-0"><span className="text-primary">{x.period}</span></div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <hr className="m-0" />
            
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Institut Teknologi Bandung</h3>
                            <div className="subheading mb-3">Bachelor of Science</div>
                            <div>STEI - IF</div>
                            <p>GPA: 3.78</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2006 - May 2010</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                        <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                        <li className="list-inline-item"><i className="fab fa-docker"></i></li>
                        <li className="list-inline-item"><i className="fa-solid fa-dharmachakra"></i></li>
                        <li className="list-inline-item"><i className="fab fa-python"></i></li>
                        <li className="list-inline-item"><i className="fab fa-java"></i></li>
                        <li className="list-inline-item"><i className="fab fa-unity"></i></li>
                    </ul>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Test-Driven Development
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Responsive & Mobile-First
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Multi-stack
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
            
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">Interests</h2>
                    <p>Besides learning new frameworks & technologies, I also enjoy biking, board games, and frisbee.</p>
                </div>
            </section>
            <hr className="m-0" />

            <section className="resume-section" id="projects">
                <div className="resume-section-content">
                    <h2 className="mb-5">Projects</h2>
                    <div className="album py-5">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                        <div className="card-body">
                                            <h5 className='card-title'>Coming Soon</h5>
                                            <p className="card-text">More content coming soon. Please wait! More content coming soon. Please wait! More content coming soon. Please wait!</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                </div>
                                                <small className="text-muted">06-09-2022</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <section className="resume-section" id="awards">
                <div className="resume-section-content">
                    <h2 className="mb-5">Awards & Certifications</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            Lorem Ipsum
                        </li>
                    </ul>
                </div>
            </section> */}
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
    </React.Fragment>
  );
}

export default App;
