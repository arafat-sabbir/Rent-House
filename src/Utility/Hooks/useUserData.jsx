const useUserData = () => {
    const userData = JSON.parse(localStorage.getItem("user"))
    return userData;
};

export default useUserData;