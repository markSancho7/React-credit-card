import { styled } from 'styled-components';

const StyledCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	align-items: center;
	display: flex;
	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

const StyledContainerFront = styled.div`
	margin-top: 200px;
	position: relative;
	width: 447px;
	height: 245px;
	flex-shrink: 0;
	background-image: url(public/images/bg-card-front.png);
	border-radius: 10px;
	margin-left: -75px;
	display: flex;
	@media (max-width: 900px) {
		position: absolute;
		z-index: 1;
		margin-left: -130px;
	}
`;
const StyledContainerBack = styled.div`
	margin-top: 40px;
	margin-left: 75px;
	position: relative;
	width: 447px;
	height: 245px;
	flex-shrink: 0;
	background-image: url(public/images/bg-card-back.png);
	display: flex;
	@media (max-width: 900px) {
		flex-direction: column;
		margin-left: -30px;
	}
`;

const StyledContainerImgs = styled.div`
	width: 447px;
	height: 245px;
	flex-shrink: 0;
	display: flex;
`;
const StyledContainerInfo = styled.div`
	bottom: 10px;
	left: 30px;
	position: absolute;
`;

const StyledPrincipalImg = styled.div`
	background-image: url(public/images/card-logo.svg);
	height: 45px;
	width: 45px;
	border-radius: 100%;
	margin-top: 30px;
	margin-left: 26px;
`;
const StyledSecondImg = styled.div`
	width: 20px;
	height: 20px;
	border: 1px solid white;
	border-radius: 100%;
	margin-top: 43px;
	margin-left: 10px;
`;
const StyledCardNumber = styled.p`
	margin-bottom: 40px;
	color: var(--White, #fff);
	font-feature-settings: 'clig' off, 'liga' off;
	/* Heading (XL) */
	font-family: 'Space Grotesk';
	font-size: 28px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 3.422px;
`;
const StyledContainerNameExpDate = styled.div`
	display: flex;
	margin-bottom: 10px;
	justify-content: space-between;
`;
const StyledCardName = styled.p`
	color: var(--White, #fff);
	font-feature-settings: 'clig' off, 'liga' off;

	/* Body (L) */
	font-family: 'Space Grotesk';
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 2px;
	text-transform: uppercase;
`;
const StyledContianerMonthYear = styled.div`
	display: flex;
`;
const StyledCardMonth = styled.p`
	color: var(--White, #fff);
	font-feature-settings: 'clig' off, 'liga' off;

	/* Body (L) */
	font-family: 'Space Grotesk';
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 2px;
	text-transform: uppercase;
`;
const StyledCardYear = styled.p`
	color: var(--White, #fff);
	font-feature-settings: 'clig' off, 'liga' off;

	/* Body (L) */
	font-family: 'Space Grotesk';
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 2px;
	text-transform: uppercase;
`;
const StyledCvv = styled.p`
	position: absolute;
	top: 110px;
	right: 80px;
	color: var(--White, #fff);
	text-align: right;
	font-feature-settings: 'clig' off, 'liga' off;

	/* Body (L) */
	font-family: 'Space Grotesk';
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 2px;
	text-transform: uppercase;
`;
const StyledImgBackDesktop = styled.img`
	position: absolute;
	z-index: -1;
	height: 100vh;
	width: 450px;
	left: 0px;
	display: flex;
	@media (max-width: 900px) {
		height: 400px;
		width: 100%;
	}
`;

export {
	StyledContainerFront,
	StyledContainerImgs,
	StyledPrincipalImg,
	StyledContainerBack,
	StyledContainerInfo,
	StyledSecondImg,
	StyledCardNumber,
	StyledCardName,
	StyledCardMonth,
	StyledCardYear,
	StyledContainerNameExpDate,
	StyledContianerMonthYear,
	StyledCvv,
	StyledCardContainer,
	StyledImgBackDesktop
};
