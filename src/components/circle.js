import Shape from './Shape';

class Circle extends Shape
{
  calculateArea()
  {
    return "james";
  }
  render()
  {
    return(
      <div>{calculateArea()}</div>
        )
     }
      }
