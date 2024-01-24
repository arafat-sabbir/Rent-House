const useUserData = () => {
    const userEmail = JSON.parse(localStorage.getItem("userEmail"))
    const userName = JSON.parse(localStorage.getItem("userName"))
    const role = JSON.parse(localStorage.getItem("role"))
    return {userEmail,userName,role};
};

export default useUserData;