import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Table from './components/Table.js';
import FilterBar from './components/FilterBar.js';
class App extends Component {
    
    render() {
        return (
            <div>
                <Navbar />
                <FilterBar />
                <Table />
            </div>
            );
    }
}

export default App;