const baseUrl = 'http://192.168.1.19:5000/api';

// const baseUrl = 'http://machhoorapi.azurewebsites.net/api';
const Login = `${baseUrl}/authentication/login`;
const Register = `${baseUrl}/authentication/register`;
const ChangePassword = `${baseUrl}/authentication/ChangePassword`;

const GetCelebrities = `${baseUrl}/celebrities`;

const SubmitRequests = `${baseUrl}/requests`;
const GetMyRequests = (userId) => `${baseUrl}/requests/user/${userId}`;
const GetCelebrityAndUserRequests = (celebrityId, userId) =>
    `${baseUrl}/requests/user/${userId}/celebrity/${celebrityId}`;



const GetCategories = `${baseUrl}/category`;

export default {
    baseUrl,
    Login,
    Register,
    GetCelebrities,
    SubmitRequests,
    GetMyRequests,
    GetCelebrityAndUserRequests,
    GetCategories,
    ChangePassword
};