import {
	StyledContainerBack,
	StyledContainerFront,
	StyledContainerImgs,
	StyledContainerInfo,
	StyledPrincipalImg,
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
} from './styles';

const CreditCard = ({ formValues }) => {
	console.log(formValues);

	return (
		<StyledCardContainer>
			<StyledContainerFront>
				<StyledContainerImgs>
					<StyledPrincipalImg />
					<StyledSecondImg />
				</StyledContainerImgs>
				<StyledContainerInfo>
					<StyledCardNumber>
						{formValues.number || '0000 0000 0000 0000'}
					</StyledCardNumber>
					<StyledContainerNameExpDate>
						<StyledCardName>
							{formValues.name || 'marcos sancho'}
						</StyledCardName>
						<StyledContianerMonthYear>
							<StyledCardMonth>{formValues.month || '99'}/</StyledCardMonth>
							<StyledCardYear>{formValues.year || '99'}</StyledCardYear>
						</StyledContianerMonthYear>
					</StyledContainerNameExpDate>
				</StyledContainerInfo>
			</StyledContainerFront>

			<StyledContainerBack>
				<StyledCvv>999{formValues.cvv}</StyledCvv>
			</StyledContainerBack>
			<StyledImgBackDesktop src='public/images/bg-main-desktop.png' />
		</StyledCardContainer>
	);
};
export default CreditCard;
