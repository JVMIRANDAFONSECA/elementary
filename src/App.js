import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Table from './components/Table.js';
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Table />
            </div>
            );
    }
}

export default App;