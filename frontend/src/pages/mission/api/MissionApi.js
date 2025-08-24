import api from '../../../api/Authorization';
import Cookies from 'js-cookie';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const token = `Bearer ${Cookies.get("accessToken")}`;


// 미션 시작
export async function createMission(marketId) {
  try {
    const response = await api.post(`/missions/start?marketId=${marketId}`);
    console.log('[미션 시작] mission data:', response.data);
    return response.data;
  } catch (error) {
    console.error('미션 생성 실패:', error.response?.data || error.message);
    throw error;
  }
}

// 미션 종료 (탐험 종료)
export async function endMission(marketId) {
  try {
    const response = await api.post(`/missions/end?marketId=${marketId}`);
    console.log('[탐험 종료] result:', response.data);
    return response.data;
  } catch (error) {
    console.error('탐험 종료 실패:', error.response?.data || error.message);
    throw error;
  }
}

// 미션 인증
export async function authenticateMission(missionId, imageFile) {
  try {
    const formData = new FormData();
    formData.append("imageFile", imageFile);

    const response = await api.post(
      `/missions/authenticate/${missionId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log('[미션 인증] mission data:', response.data);
    return response.data;
  } catch (error) {
    console.error('미션 인증 실패:', error.response?.data || error.message);
    throw error;
  }
}

// 랜덤 미션 가져오기 (새로고침)
export async function getRandomMission(marketId) {
  try {
    const response = await api.post(`/missions/refresh?marketId=${marketId}`);
    console.log('[랜덤 미션] mission data:', response.data);
    return response.data;
  } catch (error) {
    console.error('랜덤 미션 불러오기 실패:', error.response?.data || error.message);
    throw error;
  }
}

// 완료된 미션 가져오기 (카테고리별)
export async function getCompletedMissions(category) {
  try {
    const response = await api.get(`/missions/completed/${category}`);
    console.log('[완료된 미션] missions:', response.data);
    return response.data;
  } catch (error) {
    console.error('완료된 미션 불러오기 실패:', error.response?.data || error.message);
    throw error;
  }
}

// 유저 프로필 가져오기
export async function getUserProfile() {
  try {
    const response = await api.get(`/missions/profile`);
    console.log('[유저 프로필] data:', response.data);
    return response.data;
  } catch (error) {
    console.error('유저 프로필 불러오기 실패:', error.response?.data || error.message);
    throw error;
  }
}
