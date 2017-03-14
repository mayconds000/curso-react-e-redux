import React from 'react'

export default props => (
  <div>
    <h1>Família</h1>
    {/*Suporta somente um unico elemento filho*/}
    { React.cloneElement(props.children, {...props})}
  </div>
)