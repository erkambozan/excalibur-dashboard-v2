import jwt_decode from "jwt-decode";

interface DecodedToken {
  exp: number;
}

export const tokenValidation = (): boolean => {
  try {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode<DecodedToken>(token ?? "");
    const currentDate = new Date();

    // JWT exp is in seconds
    return decodedToken.exp * 1000 >= currentDate.getTime();
  } catch (error) {
    return false;
  }
};
