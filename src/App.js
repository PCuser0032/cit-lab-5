import React from "react";
import "./styles.css";
import Button from "./Button";
import UserList from "./UserList";
import Preloader from "./Preloader";

class App extends React.Component {
  state = {
    userInfo: undefined,
    loading: false
  };

  gettingUsers = async () => {
    this.setState({ loading: true });
    const api_url = await fetch("https://randomuser.me/api/?results=10");
    const data = await api_url.json();

    this.setState({
      userInfo: data.results,
      loading: false
    });
  };

  render() {
    if (this.state.loading) return <Preloader />;
    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-light bg-light bg-gradient justify-content-between ps-4 pe-4">
            <a className="navbar-brand fs-2">Список пользователей</a>
            <form className="form-inline">
              <Button onClick={() => this.gettingUsers()} label={"Обновить"} />
            </form>
          </nav>
        </div>
        <UserList users={this.state.userInfo} />
      </div>
    );
  }
}
export default App;
