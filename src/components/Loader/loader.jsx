import { ThreeCircles } from 'react-loader-spinner';

function Loader() {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#439bde"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
}

export default Loader;
