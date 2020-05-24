import React, { Component } from "react";
import styles from "../styles/detail.module.scss";
import { Link } from "react-router-dom";

class Detail extends Component {
	state = {
		offset: 0
	};
	componentDidMount() {
		this.props.fetchAssetsDetail({
			asset_contract_address: this.props.match.params.contractAddress,
			token_ids: this.props.match.params.tokenId
		});
	}
	componentWillUnmount() {
		this.props.initDetail();
	}

	handlePermalinkClick = () => {
		window.location.href = this.props.permalink;
	};

	render() {
		console.log(this.props);
		const { collectionName, name, image_url, description } = this.props;
		return (
			<div className={styles.detail}>
				<div className={styles.contentWrapper}>
					<div>{collectionName}</div>
					<div className={styles.imageWrapper}>
						<img className={styles.image} src={image_url} alt="" />
					</div>
					<div>{name}</div>
					<div className={styles.description}>{description}</div>
				</div>
				<div
					className={styles.permalink}
					onClick={this.handlePermalinkClick}
				>
					permalink
				</div>
			</div>
		);
	}
}

export default Detail;
