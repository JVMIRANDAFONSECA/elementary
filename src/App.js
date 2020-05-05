import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Table from './components/Table.js';
import FilterBar from './components/FilterBar.js';
/**
 * Main class
 */
class App extends Component {

    state = {
        filter: "category"
    }

    setFilter = (newFilter) => {
        this.setState({ filter: newFilter });
    }


    render() {
        return (
            <div>
                <Navbar setFilter={this.setFilter} />
                <FilterBar filter={this.state.filter} />
                <Table filter={this.state.filter} />
            </div>
        );
    }
}

export default App;