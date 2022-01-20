import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Timezone() {
  const [time, setTime] = useState("loading...");
  const birthday = useSelector((state) => state.user.birthday);
 
  // const timeDifference = (_date1, _date2) => {
  //     const diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
  //     const diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);

  //     const difference = diffDate_1.getTime() - diffDate_2.getTime();

  useEffect(() => {
    let dday = new Date(birthday);
    //디데이 - 벌쓰데이  // - 현재 날짜++

    let now = new Date().getTime();
    dday.setFullYear(dday.getFullYear() + 80);

    setInterval(function () {
      let timeGap = dday - now; // 태어어난 날로부터 80살 - 현재날짜
      //console.log("이걸로 차이를 : ", gap);
      let year = Math.ceil(timeGap / (1000 * 60 * 60 * 24 * 365));
      let day = Math.ceil(timeGap / (1000 * 60 * 60 * 24));
      let hour = Math.ceil(
        (timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let min = Math.ceil((timeGap % (1000 * 60 * 60)) / (1000 * 60));
      let sec = Math.ceil((timeGap % (1000 * 60)) / 1000);

      // 테스트
      let _day = parseInt(timeGap / 3600);
      let _hour = parseInt(timeGap / 3600);
      let _min = parseInt((timeGap % 3600) / 60);
      let _sec = timeGap % 60;
      //console.log("확인 : ", _day, "//", _hour, "//", _min, "//", _sec, "//");
      let count =
        "죽음까지 " +
        day +
        "일" +
        hour +
        "시간 " +
        min +
        "분 " +
        sec +
        "초 남았습니다.";

      setTime(timeGap);
      now++;
    }, 1000);
  }, []);

  return (
    <TimeBox>
      <TimeCnt>{time}</TimeCnt>
      <div>초 남았습니다.</div>
    </TimeBox>
  );
}

export default Timezone;

const TimeBox = styled.div`
  font-weight: bolder;
  font-size: 10wv;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const TimeCnt = styled.div`
  font-weight: bolder;
  font-size: 15wv;
`;
