import './App.css';

function App() {
  return (
    <div className="container">



    <form>

      <label>
        What's on your mind?
         
      <input type="text" name="tweet"/>
        
      </label>

      <label>
        Tweet
      </label>
      <input type="submit" name="send"/> 


    </form>
    </div>
  );
}

export default App;
