import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header></Header>
      {isAuth ? <UserProfile></UserProfile> : <Auth></Auth>}
      <Counter />
    </>
  );
}

export default App;
