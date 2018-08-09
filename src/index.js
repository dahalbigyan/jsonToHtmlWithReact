import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from './App';
import TransactionDetails from './TransactionDetails';

ReactDOM.render(
<Router>
    <div>
       <Route path="/" exact component={App} />
       <Route path="/transactions/:id" exact component={TransactionDetails} />
    </div>
</Router>

, document.getElementById('root'));
registerServiceWorker();
