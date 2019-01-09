
const LocalImageList = {
    user1: require('assets/images/user1.png'),
    user2: require('assets/images/user2.png'),
};

export const getImageFromName = type => {
    return LocalImageList[type];
};