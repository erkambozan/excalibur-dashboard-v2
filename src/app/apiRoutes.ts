// Root
const authRoot = "auth";
const usersRoot = "users";
const hierarchy = "hierarchy";
const typesRoot = "types";
const hierarchyTypesRoot = "hierarchy";
const workTypesRoot = "work";
const employeeRoot = "employee";
const annualLeaveRoot = "annual-leave";

// Api Versions
const v1 = "v1";

export const routesV1 = {
  version: v1,
  auth: {
    root: authRoot,
    login: `/${authRoot}/login`,
    register: `/${authRoot}/register`,
  },
  user: {
    root: usersRoot,
    create: `/${usersRoot}/create`,
    list: `/${usersRoot}/list`,
    delete: `/${usersRoot}/:id`,
  },
  hierarchy: {
    root: hierarchy,
    create: `/${hierarchy}/create`,
    list: `/${hierarchy}/list`,
  },
  type: {
    root: typesRoot,
    hierarchy: {
      root: hierarchyTypesRoot,
      create: `${typesRoot}/${hierarchyTypesRoot}/create`,
      delete: `${typesRoot}/${hierarchyTypesRoot}/:id`,
    },
    work: {
      root: workTypesRoot,
      create: `${typesRoot}/${workTypesRoot}/create`,
      delete: `${typesRoot}/${workTypesRoot}/:id`,
    },
  },
  employee: {
    root: employeeRoot,
    create: `/${employeeRoot}/create`,
    list: `/${employeeRoot}/list`,
  },
  annualLeave: {
    root: annualLeaveRoot,
    create: `/${annualLeaveRoot}/create`,
    list: `/${annualLeaveRoot}/list`,
  },
};
