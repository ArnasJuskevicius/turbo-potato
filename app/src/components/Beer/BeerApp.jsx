import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import BeerList from './BeerList/BeerList';
import BeerService from '../../service/BeerService';
import './BeerApp.scss';

class BeerApp extends React.Component {
    state = {
        beerList: [],
        beerCount: '',
    };

    constructor(props) {
        super(props);

        this.sortByValue = this.sortByValue.bind(this);
    }

    componentDidMount() {
        BeerService.list().then((beer) => {
            this.setState({
                beerList: beer.items,
                beerCount: beer.itemCount
            });
        });
    }

    sortByValue(field) {
        const ascendSort = R.sortWith([
            R.ascend(R.prop(field)),
        ]);

        const descendSort = R.sortWith([
            R.descend(R.prop(field)),
        ]);

        const newState = descendSort(this.state.beerList);

        if(R.equals(newState, this.state.beerList)) {
            this.setState({
                beerList: ascendSort(this.state.beerList)
            });
        } else {
            this.setState({
                beerList: newState
            });
        }
    }


    render() {
        if(!R.isEmpty(this.state.beerList)) {
            return <BeerList
                beerList={this.state.beerList}
                clickHandler={this.sortByValue}
            />
        };

        return null;
    }
}

BeerApp.propTypes = {};

export default BeerApp;
