const baseUrl = 'http://192.168.1.19:5000/api';
//const baseUrl = 'http://machhoorapi.azurewebsites.net/api';
const Login = `${baseUrl}/authentication/login`;
const Register = `${baseUrl}/authentication/register`;

const GetCelebrities = `${baseUrl}/celebrities`;

const SubmitRequests = `${baseUrl}/requests`;
const GetMyRequests = (profileId) => `${baseUrl}/profile/${profileId}/requests`;
const GetCelebrityAndUserRequests = (celebrityProfileId, userProfileId) =>
    `${baseUrl}/profile/${userProfileId}/requests/celebrity/${celebrityProfileId}`;

const GetCategories = `${baseUrl}/category`;

export default {
    baseUrl,
    Login,
    Register,
    GetCelebrities,
    SubmitRequests,
    GetMyRequests,
    GetCelebrityAndUserRequests,
    GetCategories
};