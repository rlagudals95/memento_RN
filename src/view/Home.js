import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { customAxios } from "../../config/customAxios";
import { config } from "../../config/confing";
import axios from "axios";
import Timezone from "../component/Timezone";
import { useSelector } from "react-redux";

function Home() {
  const [maxim_ko, serMaxim_ko] = useState(null);
  const [maxim_en, setMaxim_en] = useState(null);
  const birthday = useSelector((state) => state.user.birthday)
  const nickname = localStorage.getItem('nickname')

  const getMaxim = async () => {
    console.log("명언?");
    axios
      .get(`${config.maximUrl}`)
      .then((res) => {
        console.log("명언 가져오기 : ", res);
        setMaxim_en(res.data.slip.advice);
        tranMaxim(res.data.slip.advice);
      })
      .catch((err) => {
        console.log("명언 가져오기에 실패 했습니다 : ", err);
      });
  };

  const tranMaxim = async (en_maxin) => {
    let reqDto = {
      text: en_maxin,
    };
    const res = await customAxios.post("/translate/papago", reqDto);
    console.log("해석 : ", res);
    serMaxim_ko(res.data.message.result.translatedText);
  };

  useEffect(() => {
    getMaxim();
    
  }, []);
  return (
    <FlexBox>
      {nickname}님의 시간
      <Timezone />
      <EnBox>{maxim_en}</EnBox>
      <KoBox>{maxim_ko}</KoBox>
    </FlexBox>
  );
}

export default Home;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const EnBox = styled.div`
  font-weight: bolder;
  font-size: 3wv;
  margin-bottom: 10px;
`;

const KoBox = styled.div`
  font-size: 1.5wv;
  opacity: 0.8;
`;
