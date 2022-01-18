import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

function Timezone() {
    const [time, setTime] = useState('loading...');

    useEffect(() => {
        
        let dday = new Date("2080-1-1").getTime();
        setInterval(function() {
            let today = new Date().getTime();
            let gap = dday - today;
            let day = Math.ceil(gap / (1000 * 60 * 60 * 24));
            let hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
            let sec = Math.ceil((gap % (1000 * 60)) / 1000);
            
            let count = "D-DAY까지 " + day + "일" + hour + "시간 " + min + "분 " + sec + "초 남았습니다.";
            //console.log(count);
            setTime(count);
        }, 1000);

    }, [])

    return (
        <TimeBox>
            {time}
        </TimeBox>
        )
}

export default Timezone;

const TimeBox = styled.div`
  font-weight: bolder;
  font-size: 10wv;
  margin-bottom: 50px;
`;
