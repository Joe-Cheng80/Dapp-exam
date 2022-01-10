import React, {useCallback, useEffect, useState, FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "../styles/assets.module.scss";
import { Link, useParams } from "react-router-dom";

interface AssetsProps {
	assets: {
		asset_contract_address: string;
		token_id: string;
		image_url: string;
		name: string;
	}[];
	fetchAssetsList: ({owner, offset}:{owner:string; offset:number;}) => void;
}

const Assets: FC<AssetsProps> = ({assets, fetchAssetsList}) => {
	const [offset, setOffset] = useState(0)
	const params = useParams();

	const toNextPage = useCallback(() => {
		setOffset(offset + 1)
	}, [offset, setOffset]);

	useEffect(()=>{
		fetchAssetsList({
			owner: params.address ?? '',
			offset: offset
		});
	}, [fetchAssetsList, params.address, offset])

		return (
			<div className={styles.assets}>
				<InfiniteScroll
					dataLength={assets === null ? 0 : assets.length}
					next={toNextPage}
					hasMore={true}
					endMessage={<div>Loading ...</div>}
					loader={<div>Loading ...</div>}
				>
					<div className={styles.wrapper}>
						{assets && assets.length === 0 && <div>您沒有任何資產</div>}
						{assets &&
							assets.map((asset, index) => {
								return  (
									// todo: 暫時先用index當key
									<div className={styles.row} key={index}>
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
									</div>
								) 
							})}
					</div>
				</InfiniteScroll>
			</div>
		);

}

export default Assets;
