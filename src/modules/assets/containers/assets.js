import { fetchAssetsList } from "../../../actions";
import Assets from "../components/assets";
import { connect } from "react-redux";

const mapStateToProps = state => ({
	assets:
		state.list === null
			? null
			: state.list.map(asset => ({
					image_url: asset.image_url,
					name: asset.name,
					asset_contract_address: asset.asset_contract.address,
					token_id: asset.token_id
			  }))
});

const mapDispatchToProps = {
	fetchAssetsList
};

export default connect(mapStateToProps, mapDispatchToProps)(Assets);
