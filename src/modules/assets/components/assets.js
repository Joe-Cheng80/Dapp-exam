import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "../styles/assets.module.scss";
import { Link } from "react-router-dom";

class Assets extends Component {
	state = {
		offset: 0
	};
	componentDidMount() {
		this.props.fetchAssetsList({
			owner: this.props.match.params.address,
			offset: 0
		});
	}

	componentDidUpdate(_, prevState) {
		if (this.state.offset !== prevState.offset) {
			this.props.fetchAssetsList({
				owner: this.props.match.params.address,
				offset: this.state.offset
			});
		}
	}

	loadMore = () => {
		this.setState({ offset: this.state.offset + 1 });
		// this.props.fetchAssetsList({
		// 	owner: this.props.match.params.address,
		// 	offset:
		// });
	};
	render() {
		const { assets } = this.props;
		console.log(this.props);
		return (
			<div className={styles.assets}>
				<InfiniteScroll
					dataLength={assets.length}
					next={this.loadMore}
					hasMore={true}
					endMessage={<div key={0}>Loading ...</div>}
				>
					{assets.length > 0 &&
						assets.map((asset, index) => {
							return index + 1 < assets.length ? (
								<div className={styles.row}>
									<Link
										to={`/assets/detail/${asset.asset_contract_address}/${asset.token_id}`}
									>
										<div className={styles.item}>
											<div
												className={styles.imageWrapper}
											>
												<img
													className={styles.image}
													src={asset.image_url}
													alt=""
												/>
											</div>

											<div>{asset.name}</div>
										</div>
									</Link>
									<Link
										to={`/assets/detail/${
											assets[index + 1]
												.asset_contract_address
										}/${assets[index + 1].token_id}`}
									>
										<div className={styles.item}>
											<div
												className={styles.imageWrapper}
											>
												<img
													className={styles.image}
													src={
														assets[index + 1]
															.image_url
													}
													alt=""
												/>
											</div>
											<div>{assets[index + 1].name}</div>
										</div>
									</Link>
								</div>
							) : (
								<></>
							);
						})}
				</InfiniteScroll>
			</div>
		);
	}
}

export default Assets;
