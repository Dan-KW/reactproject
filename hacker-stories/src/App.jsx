//import * as React from "react";




const App=() => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]
  
  return(
    <div>
      <h1>My Hacker Stories</h1>
      
      <Search />

      <hr />

      <List list={stories} />
      

    </div>
  )
  }

  const List = (prop) => (
    <ul>
      {prop.list.map((item) => (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
      ))}
  </ul>
  );


const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  };

  return(
    <div>
      <lebel htmlFor="search">Search:</lebel>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
}  


export default App