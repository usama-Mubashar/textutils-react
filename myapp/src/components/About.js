        import React ,{useState,useEffect}from 'react'
        import { Link } from "react-router-dom";
        
        export default function About (prop){
        const [mystyle,setmystyle] = useState(prop.mode === 'light'
            
            ? { color: "black", backgroundColor: "white" }
            : { color: "white", backgroundColor: "grey"});
                useEffect(() => {
                if (prop.mode === 'dark') {
                    setmystyle({ color: "white", backgroundColor: "grey",caretColor: "red"
                    });
                } else {
                    setmystyle({ color: "black", backgroundColor: "white" });
                }
                }, [prop.mode]);

            return(
            <>
            <section className="py-5 bg-light" style={mystyle}>
            <div className="container" style={mystyle}>
                <div className="row align-items-center">
                
                <div className="col-md-6 mb-4 mb-md-0">
                    <img
                    src={'icon.png'}
                    alt="TextUtils Illustration"
                    className="img-fluid rounded shadow"
                    />
                </div>

                
                <div className="col-md-6" >
                    <h2 className="fw-bold mb-3">About TextUtils</h2>
                    <p className="lead">
                    <strong>TextUtils</strong> is a simple and powerful text
                    transformation tool that helps you format, analyze, and clean your
                    text instantly.
                    </p>
                    <p>
                    Whether you're a developer, student, or writer — TextUtils makes
                    editing text effortless. You can quickly convert text to uppercase
                    or lowercase, remove extra spaces, copy to clipboard, count words,
                    and calculate reading time — all in one place.
                    </p>
                    <p>
                    Built with <strong>React</strong> and <strong>Bootstrap</strong>,
                    TextUtils offers a fast, responsive, and user-friendly experience.
                    </p>

                    <Link to="/" className="btn btn-primary mt-3">
                    Try TextUtils Now
                    </Link>
                </div>
                </div>
            </div>
            </section>

            </>
            )
        }