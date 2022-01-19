import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useSelector}  from "react-redux"

function Timezone() {
    const [time, setTime] = useState('loading...');
    const birthday = useSelector((state) => state.user.birthday ) 

    // const timeDifference = (_date1, _date2) => {
    //     const diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
    //     const diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);
      
    //     const difference = diffDate_1.getTime() - diffDate_2.getTime();
      
    //     return difference; // ms
    // };

    useEffect(() => {
        
        let _birthday = new Date(birthday).getTime();

        let dday = new Date(birthday);
        dday.setFullYear(dday.getFullYear() + 80)
        
        setInterval(function() {
            let _dday = dday.getTime(); // 
            _birthday++
            //let today = new Date().getTime();
            let gap = _dday - _birthday;
            console.log('이걸로 차이를 : ',gap);
            
            let day = Math.ceil(gap / (1000 * 60 * 60 * 24));
            let hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
            let sec = Math.ceil((gap % (1000 * 60)) / 1000);
            
            let count = "죽음까지 " + day + "일" + hour + "시간 " + min + "분 " + sec + "초 남았습니다.";
            console.log('날짜',count);
            setTime(gap);
        }, 1000);

    }, [])

    return (
        <TimeBox>
            <TimeCnt>
                {time}
            </TimeCnt>
            <div>
                초 남았습니다.
            </div>
        </TimeBox>
        )
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
