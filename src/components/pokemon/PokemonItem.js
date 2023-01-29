import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PokemonItem({ id, name }) {
	return (
		<Link to={`detail/${id}`}>
			<h5>{name}</h5>
		</Link>
	);
}

PokemonItem.propTypes = {
    id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,

};

export default PokemonItem;
