import React from 'react';
import InfoPokemon from './InfoPokemon'
class Pokemon extends React.Component {
    render() {
        const { unidade } = this.props;
        return (
            <div className="box">
                {unidade.map(Element => <InfoPokemon key={Element.id} poke={Element} />)}
            </div>
        );
    }
}
export default Pokemon;