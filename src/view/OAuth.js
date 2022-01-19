import React from 'react';
import styled from 'styled-components'
import { customAxios } from "../../config/customAxios";

function OAuth() {
  async function kakaoAuth (){
    
    const res = await customAxios.get("/login/getKakaoAuthUrl");
    console.log('소셜로그인 res : ', res.data)
    window.location.href = res.data;
  }

  return (
  <div onClick={kakaoAuth}>
     소셜로그인 
  </div>);
}

export default OAuth;
