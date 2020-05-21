import React from "react"
import "./Error.sass"

const Error = props => (<div className="error">
  {props.errorText}
</div>)


export default Error;