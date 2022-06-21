import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
// import { loadDetailDB } from '../redux/modules/myPageReducer';
import axios from 'axios';
import { getCookie } from '../Shared/Cookie';
import { useQuery } from 'react-query';

const DetailPage = () => {
    const {userid} = useParams();
    const dispatch = useDispatch();
    const token = getCookie('token')

    // useEffect(()=>{
    //     dispatch(loadDetailDB({userid,token}))
    //  },[dispatch])
//1. useEffect는 useQuery 때문 필요없어짐

    const fetcher = async () => {
        const DetailData = await axios.get('http://3.39.161.93:3000/api/page/{userId}');
        return DetailData?.data;
      }
     
      const { data, isLoading, error, isError } = useQuery('DetailPageData', fetcher);
//2.위의 'loginCheck' 이 부분은 이것의 키 이름 설정.
    
    return (
        <div>
            디테일페이지야
        </div>
    );
};

export default DetailPage;