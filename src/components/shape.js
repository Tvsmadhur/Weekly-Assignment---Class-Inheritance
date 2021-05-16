import React,{Component} from 'react';
class Shape extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={color:red};
  }
  drawShape()
  {
    return "Shape";
  }
  calculateArea()
  {
    return "Area";
  }
  render()
  {
    return(
      <div>Area:{calculateArea()} shape:{drawShape()}</div>
      )
  }
 }
 export default Shape;
