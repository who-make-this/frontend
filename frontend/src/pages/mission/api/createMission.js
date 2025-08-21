import axios from 'axios';
import Cookies from 'js-cookie';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const token = 'Bearer 69Gesh8VFOlo'; // 하드코딩, 토큰으로 교체하세요

// 미션 시작
export async function createMission(marketId) {
  try {
    const response = await axios.post(
      `${backendUrl}missions/start?marketId=${marketId}`,
      {},
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      '미션 생성 실패:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}


// 미션 인증
export async function authenticateMission(missionId, authData) {
  try {
    const response = await axios.post(
      `${backendUrl}missions/authenticate/${missionId}`,
      authData,
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('미션 인증 실패:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// 랜덤 미션 가져오기 (새로고침)
export async function getRandomMission() {
  try {
    const response = await axios.post(
      `${backendUrl}missions/refresh`,
      {},
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('랜덤 미션 불러오기 실패:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// 완료된 미션 가져오기 (카테고리별)
export async function getCompletedMissions(category) {
  try {
    const response = await axios.get(
      `${backendUrl}missions/completed/${category}`,
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('완료된 미션 불러오기 실패:', error.response ? error.response.data : error.message);
    throw error;
  }
}