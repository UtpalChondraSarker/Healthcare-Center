
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route  exact path="/">
                      <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route path="/services">
                  <Services></Services>
                </Route>
                <PrivateRoute path="/details/:serviceId">
                  <Details></Details>
                </PrivateRoute>
                <Route path="*">
                <NotFound></NotFound>
                </Route>
            </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
