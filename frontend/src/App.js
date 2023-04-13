import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/user/:id" component={UserProfile} />
        <Route path="/search" component={SearchPage} />
        <Route path="/coffee/:id/rate" component={CoffeeRatingPage} />
        <Route path="/feeds" component={Feeds} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </div>
  );
}

export default App;