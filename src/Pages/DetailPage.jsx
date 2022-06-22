import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import axios from 'axios';
import { useQuery } from 'react-query';

const DetailPage = () => {
    const {userId} = useParams();
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(loadDetailDB({userid,token}))
    //  },[dispatch])
//1. useEffect는 useQuery 때문 필요없어짐

  const Detailfetcher = async () => {
        const DetailData = await axios.get(`http://3.39.161.93:3000/api/page/${userId}`);
        console.log(DetailData.data)
        return DetailData?.data;
      }
     
      const { data, isLoading, isSuccess, isError } = useQuery('DetailPageData', Detailfetcher);
//2.위의 'DetailPageData' 이 부분은 이것의 키 이름 설정.
//3. 추가로 isLoading, isSuccess, isError 에 해당하는 것들 추가로 onsuccess... 이런 식으로 쭉 써내려가기.
    
let audio = new Audio('../audio/a.mp3')

const start = () => {
    audio.play()
}
    return (
        <>
        <div>
            디테일페이지야, 여기에 이제 모달창, 수정 빼고 mypage 복붙하믄 됌
        </div>
        <audio src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3" controls />
    <audio controlsList="nodownload" controls>
     <source src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3" type="audio/mpeg" />
    </audio>
    <div>
            <button onClick={start} >play</button>
        </div>
        </>
    );
};

export default DetailPage;