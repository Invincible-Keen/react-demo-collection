import './BtnTrickReducer.module.css';
import { useReducer } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import { useParams } from 'react-router-dom';

export type NumbersState = {
    count: number;
    square: number;
    cube: number;
};

function BtnTrickReducer() {
  const {numm} = useParams();
  const intNum = parseInt(numm || '0');
  console.log('num=', intNum);

    const [numbers, dispatch] = useReducer((state: NumbersState, action: {type: string}) => {
        switch(action.type) {
            case 'increment':
                return {
                    count: state.count + 1,
                    square: (state.count + 1) * (state.count + 1),
                    cube: state.count < 10 ? (state.count + 1) * (state.count + 1) * (state.count + 1) : state.cube
                };
            default:
                return state;
        }
    }, {count: intNum, square: intNum * intNum, cube: intNum * intNum * intNum});


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Button Trick</h1>
      <div className="card">
        <button onClick={() => {dispatch({type: 'increment'})}}>
          {numbers.count < 10? "count is " + numbers.count : "Stopped cube updating!"}
        </button>
      </div>
      <p className="read-the-docs">
        The square of {numbers.count} is {numbers.square} and the cube is {numbers.cube}
      </p>
    </>
  )
}

export default BtnTrickReducer
