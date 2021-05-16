import Shape from './Shape';

class circle extends Shape
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
export default circle;
