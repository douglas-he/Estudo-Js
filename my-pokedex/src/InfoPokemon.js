import React from 'react';
class Infos extends React.Component {
    render() {
        const { name, type, averageWeight, image, moreInfo } = this.props.poke;
        return <div className="containPoke">
            <div className="miniBox">
                <p>{name}</p>
                <p>{type}</p>
                <p>{averageWeight.value}{averageWeight.measurementUnit} </p>
            </div>
            <div className="miniBox">
                <img src={image} classNmae="image" alt="Pokemon" />
                <a href={moreInfo}>Info</a>
            </div>
        </div>
    }
}
export default Infos;