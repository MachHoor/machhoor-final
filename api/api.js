import axios from 'axios';
import endpoints from './endpoints';

export const login = async (username, password) => {
    try {
        let response = await axios.post(endpoints.Login, { username, password });
        
        if(response.status == 200){
            console.log(response.data.data);
            if(!response.data.data || !response.data.data.token || !response.data.data.user)
                return null;

            let token = response.data.data.token;
            let currentUser = response.data.data.user;
            return { token, currentUser};
        }

        return null;

    } catch (error) {
        console.error(error);
    }
}

export const register = async (fullName, emailAddress, password, confirmPassword) => {
    try {
        console.log('register called.');
        const response = await axios.post(endpoints.Register, 
            {
                fullname: fullName, 
                email: emailAddress,
                password: password,
                confirmPassword: confirmPassword
            });
        if(response.status == 200){
            if(response.data.success)
                return response.data.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
}

export const getCelebrities = async () => {
    try {
        console.log('calling api.getCelebrities...');
        const response = await axios.get(endpoints.GetCelebrities);
        if(response.status == 200){
            return response.data.data;
        }
        return null;
    } catch (error) {
        console.error(error)
    }
}

export const submitRequest = async (occasion, who, instructions, celebrityId, userId, userFullName) => {
    try {
        console.log('calling submitRequest...');
        const response = await axios.post(endpoints.SubmitRequests, {
            occasion,
            to: who,
            from: userFullName,
            instructions,
            RequestForProfileId: celebrityId,
            requesterProfileId: userId,
        });

        //console.log(response);
        if(response.status == 200){
            return response.data.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
}

export const getMyRequests = async (userId) => {
    try {
        console.log('calling getMyRequests with profileId=' + userId);
        const response = await axios.get(endpoints.GetMyRequests(userId));

        //console.log(response);
        if(response.status == 200){
            return response.data.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
}

export const getCelebrityAndUserRequests = async (celebrityProfileId, userProfileId) => {
    try {
        console.log('calling getCelebrityAndUserRequests...');
        const response = await axios.get(endpoints.GetCelebrityAndUserRequests(celebrityProfileId, userProfileId));

        // console.log(response.data);
        if(response.status == 200)
            return response.data.data;
        
        return null;
    } catch (error) {
        console.error(error);
    }
}

export const getCategories = async () => {
    try {
        console.log('calling getCategories...');
        const response = await axios.get(endpoints.GetCategories);
        // console.log(response.data);
        if(response.status == 200){
            return response.data.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
}

export const changePassword = async (currentPassword, newPassword, confirmNewPassword, userId) => {
    try {
        console.log('calling changePassword...');
        const response = await axios.post(endpoints.ChangePassword, {
            currentPassword, newPassword, confirmNewPassword, userId
        });
        console.log(response);
        if(response.status == 200){
            return response.data.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
}

export const uploadProfilePicture = async (userId, imageFormData) => {
    try {
        console.log('calling uploadProfilePicture...');
        console.log('endpoint ' + endpoints.UploadProfilePicture(userId));
        const response = await axios.post(endpoints.UploadProfilePicture(userId), imageFormData);
    } catch (error) {
        
    }
}