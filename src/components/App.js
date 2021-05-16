import React,{Component} from 'react';
import Shape from'./Shape';
import circle from './circle';

class  App extends React.Component
{
  constructor(props)
  {
    super(props)
  }
  render()
  {
    return 
    (
      {
        <circle/>
        <Shape/>
      }
     )
  }
}
