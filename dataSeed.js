const role = {
  admin: "admin",
  basic: "basic",
};
const usersData = [
  {
    id: 1,
    name: "adan",
    password: "123",
    phone: "09812937102983",
    role: role.basic,
  },
  {
    id: 2,
    name: "binar",
    password: "adanoke",
    phone: "09812937102983123123",
    role: role.admin,
  },
  {
    id: 3,
    name: "mega",
    password: "10qwe2938kashd01",
    phone: "098129371029asd1283",
    role: role.basic,
  },
];

module.exports = { usersData, role };
