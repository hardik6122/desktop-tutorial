import React from "react";

export default function Alert(props) {
    const cpital = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert1 &&
    <div>
      <div className={`alert bg-${props.alert1.type} text-light alert-dismissible fade show`} role="alert">
  <strong>{cpital(props.alert1.type)}</strong>: {props.alert1.msg}
  
</div>
    </div>
  );
}
