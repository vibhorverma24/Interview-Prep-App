export const validateEmail = (email) =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\sQ]+$/;
    return regex.test(email);
};

