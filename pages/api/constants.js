export const userRoles = {
  CR: "Customer",
  HI: "Hub Incharge",
  SR: "Seller",
};

export const userLoginDetails = [
  {
    userID: 468,
    phoneNumber: "9879879871",
    password: "customer",
    userRole: userRoles.CR,
  },
  {
    userID: 2,
    phoneNumber: "9879879872",
    password: "hubincharge",
    userRole: userRoles.HI,
  },
  {
    userID: 3,
    phoneNumber: "9879879873",
    password: "seller",
    userRole: userRoles.SR,
  },
];

const exportConst = {
  userRoles,
  userLoginDetails,
};

export default exportConst;
