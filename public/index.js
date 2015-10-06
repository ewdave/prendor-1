/**
 * Created by aregbede on 18/07/2015.
 */

var React = require('react');
import { Router} from 'react-router'
import routes from './routes/routes';
import history from './routes/history'


var rootInstance = null;

React.render(<Router >{routes}</Router>, document.body);

