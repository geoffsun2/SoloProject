import ReactDOM from 'react-dom';
import React from 'react';
import MainContainer from '../Client/containers/MainContainer.jsx'

const App = () => {
    return <div>
        <MainContainer/>
    </div>
}

ReactDOM.render(<App />, document.getElementById('app'));