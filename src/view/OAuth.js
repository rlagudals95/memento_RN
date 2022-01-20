import React from 'react';
import styled from 'styled-components'
import { customAxios } from "../../config/customAxios";
import kakaoLogin from "../../assets/kakao_login.png"

function OAuth() {
  async function kakaoAuth (){ 
    const res = await customAxios.get("/login/getKakaoAuthUrl");
    console.log('소셜로그인 res : ', res.data)
    window.location.href = res.data;
  }

  return (
  <div onClick={kakaoAuth}>
     <OauthBtn onClick={kakaoAuth} src={kakaoLogin}></OauthBtn> 
  </div>);
}

export default OAuth;

const OauthBtn = styled.img`
    cursor: pointer;
`

