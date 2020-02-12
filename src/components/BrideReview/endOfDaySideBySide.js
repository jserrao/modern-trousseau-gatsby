// SOME EDITS FROM JENNY TO WORK INTO THIS 
// BRANCH AND PUSH WHEN INTEGRATED

import React from “react”;
import ReactDOM from “react-dom”;
import styled from “styled-components”;
import PinkButton from “../Button/Button”;
import imageFile1 from “../../assets/images/bridal-review-1.png”;
import imageFile2 from “../../assets/images/bridal-review-2.jpeg”;
import imageFile3 from “../../assets/images/bridal-review-3.jpeg”;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundGray};
  border-bottom: 0.5px solid #0F1F2F;
  padding: 35px 40px;
  @media (min-width: 600px) {
    display: flex;
    height: auto;
    width: 100%;
    justify-content: space-between;
    margin-top: 40px;
    height: auto;
    padding: 30px 20px;
  }
  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    height: auto;
  }
`;
const ReviewContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
  @media (min-width: 600px) {
    flex-direction: row;
    height: auto;
    width: 48%;
    justify-content: space-around;
    margin-top: 0;
  }
  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    display: flex;
    height: auto;
    width: 33%;
    /* margin-top: 40px; */
    /* border: 1px solid blue; */
  }
`;
const ReviewContainerMidsize = styled.div`
  height: auto;
  justify-content: space-around;
  display: none;
  border: 1px solid green;
  @media (min-width: 600px) {
    display: flex;
    height: auto;
    width: 48%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    height: 240px;
    width: 33%;
    margin-top: 40px;
    border: 1px solid green;
  }
`;
const ReviewContainerDesktop = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: none;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    width: 33%;
    height: 240px;
    border: 1px solid lightblue;
  }
`;
const GownImage = styled.img`
  width: 100%;
  height: auto;
  @media (min-width: 600px) {
    display: inline-block;
    width: 50%;
    height: 238px;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 50%;
    height: 250px;
  }
`;
const ImageAccompaniment = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    height: auto;
    width: 50%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: auto;
    width: 100%;
    border: 1px solid yellow;
  }
`;
const ReviewMobile = styled.div`
  font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  margin: 0 0 8px 2px;
  position: relative;
  @media (min-width: 600px) {
    padding-left: 5px;
    width: 100%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 15%;
    width: 95%;
    height: auto;
    border: 1px solid orange;
  }
`;
const ReviewMidsize = styled.span`
  @media (min-width: 600px) {
    font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
    text-align: center;
    margin-left: 5px;
    font-size: 18px;
    line-height: 22px;
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid brown;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
    text-align: center;
    padding-right: 4px;
    width: 100%;
  }
`;
const ReviewDesktop = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-family: ${props => props.theme.fontStyles.Body3DesktopText.fontFamily};
    font-size: ${props => props.theme.fontStyles.Body3DesktopText.fontSize};
    text-align: center;
    position: absolute;
    top: 39%;
    margin-left: 2px;
    width: 15%;
    border: 1px solid yellowgreen;
  }
`;
const ViewDressMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  border: 1px solid purple;
  @media (min-width: 600px) {
    margin-top: 0;
    flex-direction: column;
    border: 1px solid purple;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    border: 1px solid purple;
    width: 50%;
    height: auto;
    margin-left: 28%;
    margin-top: 35%;
  }
`;
const ViewDressMidsize = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  border: 1px solid violet;
  @media (min-width: 600px) {
    flex-direction: column;
    margin-top: 8%;
    margin-left: 12px;
    border: 1px solid violet;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    border: 1px solid violet;
    width: 50%;
    height: auto;
    margin-top: 0;
    margin-left: 28%;
    margin-top: 30%;
  }
`;
const ViewDressDesktop = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: none;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    border: 1px solid orange;
    display: flex;
    margin-left: 32%;
    margin-top: 110%;
    width: 50%;
    height: auto;
  }
`;
const ButtonPlacerMobile = styled.div`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 600px) {
    display: flex;
    margin-top: 5%;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 5%;
  }
`;
const ComponentCollection = ({ images }) => (
  <>
    <Container>
      <ReviewContainerMobile>
        <GownImage src={imageFile1} />
        <ImageAccompaniment>
          <ReviewMobile>
            “From start to finish, my dress was high quality, hassle-free, and
            ready when promised.“<br></br> - Modern Trousseau Bride
          </ReviewMobile>
          <ViewDressMobile>
            <ButtonPlacerMobile>
              <PinkButton
                label=“View Dress”
                fontsize={`${“14px”}`}
                weight={`${“bold”}`}
                height={`${“22px”}`}
                width={`${“88px”}`}
                padding={`${“5px 0"}`}
                shadow={`${“0px 4px 4px rgba(0, 0, 0, 0.25)“}`}
                desktopwidth={`${“83px”}`}
                desktoppadding={`${“5px”}`}
                desktopheight={`${“14px”}`}
                desktopfontsize={`${“12px”}`}
                desktopweight={`${“600”}`}
                desktopcolor={`${“#000000"}`}
                family={`${“‘Sahitya’“}`}
                color={`${“#441F0E”}`}
              />
            </ButtonPlacerMobile>
          </ViewDressMobile>
        </ImageAccompaniment>
      </ReviewContainerMobile>
      <ReviewContainerMidsize>
        <GownImage src={imageFile2} />
        <ImageAccompaniment>
          <ReviewMidsize>
            “From start to finish, my dress was high quality, hassle-free, and
            ready when promised.”
          </ReviewMidsize>
          <ViewDressMidsize>
            <PinkButton
              label=“View Dress”
              fontsize={`${“14px”}`}
              weight={`${“bold”}`}
              height={`${“22px”}`}
              width={`${“88px”}`}
              padding={`${“5px 0"}`}
              shadow={`${“0px 4px 4px rgba(0, 0, 0, 0.25)“}`}
              desktopwidth={`${“83px”}`}
              desktoppadding={`${“5px”}`}
              desktopheight={`${“14px”}`}
              desktopfontsize={`${“12px”}`}
              desktopweight={`${“600”}`}
              desktopcolor={`${“#000000"}`}
              family={`${“‘Sahitya’“}`}
              color={`${“#441F0E”}`}
            />
          </ViewDressMidsize>
        </ImageAccompaniment>
      </ReviewContainerMidsize>
      <ReviewContainerDesktop>
        <GownImage src={imageFile3} />
        <ImageAccompaniment>
          <ReviewDesktop>
            “Everything about the dress was perfect - the quality, fit, and
            overall look was impeccable. Thank you for your amazing customer
            service and beautiful product.”
          </ReviewDesktop>
          <ViewDressDesktop>
            <PinkButton
              label=“View Dress”
              fontsize={`${“14px”}`}
              weight={`${“bold”}`}
              height={`${“22px”}`}
              width={`${“88px”}`}
              padding={`${“5px 0"}`}
              shadow={`${“0px 4px 4px rgba(0, 0, 0, 0.25)“}`}
              desktopwidth={`${“83px”}`}
              desktoppadding={`${“5px”}`}
              desktopheight={`${“14px”}`}
              desktopfontsize={`${“12px”}`}
              desktopweight={`${“600”}`}
              desktopcolor={`${“#000000"}`}
              family={`${“‘Sahitya’“}`}
              color={`${“#441F0E”}`}
            />
          </ViewDressDesktop>
        </ImageAccompaniment>
      </ReviewContainerDesktop>
    </Container>
  </>
);
export default ComponentCollection;