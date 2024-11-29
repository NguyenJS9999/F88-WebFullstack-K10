import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetailPage.css"

function ProductDetailPage() {
	const { id } = useParams();
	console.log('id: ', id);

	const [ productDetail, setProductDetail] = useState({});

    useEffect(() => {
		fetch(`https://dummyjson.com/products/${id}`)
			.then(res => res.json())
			.then(data => {
                console.log('data: ', data);
                setProductDetail(data);
            })

	}, []);

    // (async () => )

	return (
		<>
			<div className="detail-heading-wrap">
				<div className="container">
					<div className="detail-heading-inner">
						<h1 className="prd-heading">${productDetail?.title}</h1>

						<div className="prd-heading-rate">
							<a href="#detailRate">
								<div className="ratings">
									<i className="fa-solid fa-star"></i>
									<i className="fa-solid fa-star"></i>
									<i className="fa-solid fa-star"></i>
									<i className="fa-regular fa-star-half-stroke"></i>
									<i className="fa-regular fa-star"></i>
								</div>
								<span className="prd-heading-rate-label">
									36 đánh giá
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>

			<section className="detail-wrap">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-10 col-12 	detail-gallery-col">
							<img src="${productDetail?.thumbnail}" alt={productDetail?.title} />
						</div>
						<div className="col-lg-5 col-md-10 col-12 detail-action-col">
							<div className="detail-info-inner">
								<div className="detail-info-top">
									<div className="detail-price-flashSale">
										<input
											type="hidden"
											id="prdPrice"
											defaultValue="19990000"
										/>
										<h2 className="detail-price-present">
											<span className="dpp">
												{productDetail?.price}
											</span>
											<span className="option-price"></span>
										</h2>
										<del className="detail-old-price">
											33,500,000đ
										</del>
										<p className="detail-sale-percent">
											(-41%)
										</p>
									</div>

									<div id="countdown-detail">
										<input
											id="lastDay"
											type="hidden"
											data-date="11-11-2024"
										/>
										<p>Kết thúc sau:</p>
										<ul>
											<li>
												<span id="days">3</span>
											</li>
											<span>:</span>
											<li>
												<span id="hours">7</span>
											</li>
											<span>:</span>
											<li>
												<span id="minutes">23</span>
											</li>
											<span>:</span>
											<li>
												<span id="seconds">13</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="detail-box">
									<div className="detail-attr stock-infor">
										<div>Sku: ${productDetail?.sku}</div>
										<div className="${!productDetail?.brand} && d-none">
											${productDetail?.brand}
										</div>
										<div>
											<span>Còn </span>
											<b>${productDetail?.stock} </b>
											<span>sản phẩm</span>
										</div>
										<div>
											<span>Chọn số lượng: </span> $
											<input
												type="number"
												min={1}
												max={productDetail?.stock}
												defaultValue="1"
											/>
										</div>
									</div>

									<div className="detail-sale">
										<p className="sale-title">Khuyến mãi</p>
										<ul>
											<li>
												<span>1</span>Quà tặng 1
											</li>
											<li>
												<span>2</span>Quà tặng 2
											</li>
											<li>
												<span>3</span>Trả góp lãi suất
												0% (nhắn tin để được tư vấn)
											</li>
											<li>
												<span>4</span>Lỗi 1 đổi 1 trong
												vòng 15 ngày đầu
											</li>
										</ul>
									</div>

									<input
										id="productId"
										type="hidden"
										name="productId"
										defaultValue="4"
									/>
									<input
										type="hidden"
										id="dataOption"
										defaultValue=""
									/>
									<div className="detail-action">
										<button
											className="buynow addtocart"
											fdprocessedid="23jabq"
										>
											Mua ngay
										</button>
										<button
											className="installment-button"
											fdprocessedid="1zzbgc"
										>
											Trả góp lãi suất 0%
										</button>
									</div>
									<div
										className="advisory-form"
										id="prd-advisory-form"
									>
										<div className="advisory-form-inner">
											<div className="af-top">
												<h3>
													<i className="fa-solid fa-headphones-simple"></i>{' '}
													Tư vấn miễn phí
												</h3>
											</div>
											<div className="af-bottom">
												<input
													type="text"
													className="form-control"
													name="phone"
													id="phone"
													placeholder="Số điện thoại của bạn"
													fdprocessedid="gkun9e"
												/>
												<input
													type="hidden"
													name="name"
													id="name"
													defaultValue="unknown"
												/>
												<input
													type="hidden"
													name="email"
													id="email"
													defaultValue="unknown"
												/>
												<button fdprocessedid="ayhytf">
													Gửi
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row justify-content-center  my-4 w-100">
						<div className="detail-specifications detail-specifications-side">
							<h2>Thông tin chi tiết ${productDetail?.title}</h2>
							<ul>
								<li>${productDetail?.description}</li>
							</ul>

							<button
								className="viewmore-specifications"
								data-bs-toggle="modal"
								data-bs-target="#detailModal"
								data-tab="nav-specifications-tab"
								fdprocessedid="92fnul"
							>
								Xem chi tiết thông số
								<i className="fa-solid fa-play"></i>
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default ProductDetailPage;
