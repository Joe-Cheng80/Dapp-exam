import { fetchAssetsList } from "../../../actions";
import Assets from "../components/assets";
import { connect } from "react-redux";
import { RootState } from "../../../reducers";

const mapStateToProps = (state:RootState) => ({
	assets:
		state.assets.list === null
			? null
			: state.assets.list.map((asset:{image_url:string;name:string;asset_contract:{address:string};token_id:string}) => ({
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
