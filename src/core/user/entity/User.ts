import { AggregateID, EntityBase } from "../../../app/ddd/entity.base";

export interface UserCreateRequestProps{
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
}

export interface UserProps {
  id: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
}

export interface CreateUserProps {
  baseProps: EntityBase;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
}

export const userColumns = [
  {
    field: "email",
    headerName: "E-posta",
    width: 200,
  },
  {
    field: "userName",
    headerName: "Kullanıcı Adı",
    width: 100,
  },{
    field: "firstName",
    headerName: "Adı",
    width: 100,
  },{
    field: "lastName",
    headerName: "Soy adı",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Telefon",
    width: 200,
  },
];
