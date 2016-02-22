import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from './autocomplete';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
  render() {
    const fruits = [
      'Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant',
      'Blood Orange', 'Blueberry', 'Boysenberry', 'Cantaloupe', 'Cherimoya', 'Cherry', 'Clementine',
      'Cloudberry', 'Coconut', 'Cranberry', 'Currant', 'Damson', 'Date', 'Dragonfruit', 'Durian',
      'Elderberry', 'Feijoa', 'Fig', 'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
      'Honeydew', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
      'Kiwi fruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Lychee', 'Mandarine', 'Mango',
      'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Olive', 'Orange',
      'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Pineapple',
      'Plum/prune (dried plum)', 'Pomegranate', 'Pomelo', 'Purple mangosteen', 'Quince', 'Raisin',
      'Rambutan', 'Raspberry', 'Redcurrant', 'Salal berry', 'Salmonberry', 'Satsuma', 'Star fruit',
      'Strawberry', 'Tamarillo', 'Tamarind', 'Tangerine', 'Ugli fruit', 'Watermelon',
    ];

    return (
      <div
        style={{ padding: '50px', width: '400px' }}
      >
        <Autocomplete
          dictionary={fruits}
          onSelect={data => console.log(data)}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
