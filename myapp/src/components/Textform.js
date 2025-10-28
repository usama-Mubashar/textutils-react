    import React ,{useState,useEffect}from 'react'

    export default function Textform(prop){
    
        const [text,settext]=useState("Enter text here");
        const handleOnChange=(event)=>{
        settext(event.target.value);
        }
        
        const UpperCase=()=>{
            let newvalue=text.toUpperCase();
            settext(newvalue);
            prop.showalert("Converted to UpperCase","success");
        }
        const LowerCase=()=>{
            let newvalue=text.toLowerCase();
            settext(newvalue);
             prop.showalert("Converted to LowerCase","success");
        }

     const Cleartext=()=>{
      settext('');
     }


    const [mystyle,setmystyle] = useState(prop.mode === 'light'
      
      ? { color: "black", backgroundColor: "white" }
      : { color: "white", backgroundColor: "grey" });

     useEffect(() => {
    if (prop.mode === 'dark') {
      setmystyle({ color: "white", backgroundColor: "grey",
       });
    } else {
      setmystyle({ color: "black", backgroundColor: "white" });
    }
    }, [prop.mode]);
  

  
  

        

     
 
    return(
        
    < >
        <div className="container my-2" style={mystyle}>

        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"><h1>{prop.heading}</h1></label>
        <textarea className="form-control" id="myBox" rows="8" value={text}  onChange={handleOnChange} style={mystyle}></textarea>
        </div>
        <button className="btn btn-primary" onClick={UpperCase} 
        >Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={LowerCase} 
        >Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={Cleartext} 
        >Clear</button>
        
        </div>
        <div className="container my-4"style={mystyle}>
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
    </>

    )
    }