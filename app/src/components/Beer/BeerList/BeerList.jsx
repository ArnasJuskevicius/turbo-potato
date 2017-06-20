import React from 'react';
import PropTypes from 'prop-types';
import './BeerList.scss';

const BeerList = (props) => (
    <table className="beer_table">
        <thead>
            <tr>
                {Object.keys(props.beerList[0]).map( (key, index) =>
                    <th key={index} onClick={() => props.clickHandler(key)}>{key}</th>
                )}
            </tr>
        </thead>
        <tbody>
            {props.beerList.map((beer, index) =>
                <tr key={index}>
                    <td>{beer.id}</td>
                    <td>{beer.name}</td>
                    <td>{beer.bitterness}</td>
                    <td>{beer.color}</td>
                    <td>{beer.alc}</td>
                </tr>
            )}
        </tbody>
    </table>
);

BeerList.propTypes = {
    beerList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            bitterness: PropTypes.number.isRequired,
            color: PropTypes.string.isRequired,
            alc: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
    clickHandler: PropTypes.func.isRequired
};

export default BeerList;
