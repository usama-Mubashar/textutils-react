import React from 'react'

export default function Alert(prop) {

   
   const captilize=(word)=>{
     const lower=word.toLowerCase();
     return lower.charAt(0).toUpperCase() + lower.slice(1);
   }

  return (
    prop.alert &&<div>
      <div className={`alert alert-${prop.alert.ty} alert-dismissible fade show`} role="alert">
  <strong>{captilize(prop.alert.ty)}</strong> :{prop.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}
