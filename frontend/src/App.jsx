import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
import "./App.css";

import MainPage from "./pages/main/mainPage";
import MissionPage from "./pages/mission/missionpage";
import MyPage from "./pages/mypage/mypage";
import Secretpage from "./pages/secretstory/secretpage";
import ReportPage from "./pages/reportpage/report";
import ReportEntryPage from "./pages/reportentrypage/reportentrypage";

const LoginFailedScreen = ({ error }) => (
    <div className="flex flex-col items-center justify-center w-full h-full bg-red-100 text-red-700">
        <h1 className="text-2xl font-bold">로그인 실패</h1>
        <p className="mt-2">{error}</p>
    </div>
);


function App() {
    const baseWidth = 375;
    const baseHeight = 812;
    const [scale, setScale] = useState(1);
    const [missionsCompleted, setMissionsCompleted] = useState(0);
    const [isMissionActive, setIsMissionActive] = useState(false);
    

    useEffect(() => {
        const handleResize = () => {
            const scaleX = window.innerWidth / baseWidth;
            const scaleY = window.innerHeight / baseHeight;
            setScale(Math.min(scaleX, scaleY));
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState('');

    useEffect(() => {
        const autoLogin = async () => {
            const hardcodedUser = {
             "username": "whomadethis",
             "password": "WhoMadeThis!2#"
            }; 
            const baseUrl = import.meta.env.VITE_BACKEND_URL || "";
            const url = `${baseUrl}/users/sign-in`;

            try {
                const response = await axios.post(url, hardcodedUser);
                const { accessToken } = response.data;
                Cookies.set("token", accessToken, { expires: 7 });
                setIsLoggedIn(true);

                const token = Cookies.get('token');
                const responseMission = await axios.get(`${baseUrl}/users/me`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                 setMissionsCompleted(responseMission.data.completedMissionCount);
            } catch (error) {
                console.error("🚨 Auto-login error:", error);
                const errorMessage = error.response?.data || "서버에 연결할 수 없습니다.";
                setLoginError(errorMessage);
            }
        };

        autoLogin();
    }, []);

    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden font-[pretendard]">
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          width: "375px",
          height: "812px",
        }}
        className="bg-white shadow-sm flex flex-col"
      >
        {!isLoggedIn && !loginError}
        {loginError && <LoginFailedScreen error={loginError} />}
        {isLoggedIn && (
          <Router>
            <div className="flex-1 flex items-center justify-center">
              <Routes>
                {/* 메인 페이지 접근 제한 */}
                <Route
                  path="/"
                  element={
                    isMissionActive ? <Navigate to="/mission" replace /> : <MainPage setIsMissionActive={setIsMissionActive} />
                  }
                />

                {/* 미션 페이지 접근 제한 */}
                <Route
                  path="/mission"
                  element={
                    isMissionActive ? <MissionPage setIsMissionActive={setIsMissionActive}/> : <Navigate to="/" replace />
                  }
                />

                <Route path="/reportentry" element={<ReportEntryPage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/secret" element={<Secretpage missionsCompleted={missionsCompleted}/>} />
                <Route path="/report" element={<ReportPage />} />
              </Routes>
            </div>
          </Router>
        )}
      </div>
    </div>
  );
}

export default App;
