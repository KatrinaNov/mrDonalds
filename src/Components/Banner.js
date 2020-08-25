import React from 'react';
import styled from 'styled-components';
import banner from '../image/banner.jpg';


const BannerStyle = styled.div`
  background: url(${banner}) no-repeat center/cover;
  height: 210px;
  width: 100%;
`;

export const Banner = () => (
  <BannerStyle>    
  </BannerStyle>
);