import React from 'react';
import ReactLoading from 'react-loading';
 
const LoadingPage = ({ type, color }) => (
    <div>
    <ReactLoading className="balls" type={'spinningBubbles'} color={'black'} height={'10%'} width={'10%'} />
    {/* <div className="sun"></div>
    <div className="grass"></div> */}
    </div>
);
 
export default LoadingPage;
