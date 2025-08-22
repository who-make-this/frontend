import api from '../../../api/Authorization';
import Cookies from 'js-cookie';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const token = `Bearer ${Cookies.get("accessToken")}`;


// 미션 시작
export async function createMission(marketId) {
  try {
    const response = await api.post(`/missions/start?marketId=${marketId}`, {});
    console.log('[미션 시작] mission data:', response.data);
    return response.data;
  } catch (error) {
    console.error('미션 생성 실패:', error.response?.data || error.message);
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

    return response.data;
  } catch (error) {
    console.error('미션 인증 실패:', error.response?.data || error.message);
    throw error;
  }
}

// 랜덤 미션 가져오기 (새로고침)
export async function getRandomMission(marketId) {
  try {
    const response = await api.post(`/missions/refresh?marketId=${marketId}`, {});
    console.log('[미션 시작] mission data:', response.data);
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
    return response.data;
  } catch (error) {
    console.error('완료된 미션 불러오기 실패:', error.response?.data || error.message);
    throw error;
  }
}