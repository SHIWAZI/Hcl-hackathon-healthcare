import axios from 'axios';

// 1. Create an axios instance
const axiosClient = axios.create({
    // Use Vite environment variable (import.meta.env) or CRA (process.env)
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout: 10000, // 10 seconds timeout
});

// // 2. Request Interceptor: Attaches the token to every request
// axiosClient.interceptors.request.use(
//     (config) => {
//         // Get token from localStorage (or Redux state/Context)
//         const token = localStorage.getItem('token');

//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // 3. Response Interceptor: Handles global errors
// axiosClient.interceptors.response.use(
//     (response) => {
//         // You can unwrap the response data here if you prefer
//         // return response.data; 
//         return response;
//     },
//     (error) => {
//         const { response } = error;

//         // Handle 401 Unauthorized (Token expired or invalid)
//         if (response && response.status === 401) {
//             // Clear local storage
//             localStorage.removeItem('token');

//             // Optional: Force redirect to login page
//             // window.location.href = '/login';
//         }

//         // Handle 403 Forbidden (Permission issues)
//         if (response && response.status === 403) {
//             console.error("You do not have permission to access this resource.");
//         }

//         // Handle 500 Server Errors
//         if (response && response.status === 500) {
//             console.error("Server error. Please try again later.");
//         }

//         return Promise.reject(error);
//     }
// );

export default axiosClient;