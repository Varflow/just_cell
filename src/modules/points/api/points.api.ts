import { http } from "@/api/client";
import { AddPointsRequest, PointsRequest } from "../model/points-request";
import { ApiRoutes } from "@/api/routes";
import { sign } from "@/api/crypto/DeffiHellman";
import { getToken } from "@/api/crypto/token";

export const uploadFiscalKey = async (request: PointsRequest) => {
  const signedPayload = {
    ...request,
    sign: await sign(
      { fiscal_name: request.fiscal_name, fiscal_pass: request.fiscal_pass },
      getToken()
    ),
  };

  const { data } = await http.postForm(
    ApiRoutes.UPLOAD_FISCAL_KEY,
    signedPayload
  );

  return data;
};

export const createPointsWithIds = async (request: AddPointsRequest) => {
  const signedPayload = {
    ...request,
    sign: await sign(request, getToken()),
  };

  const { data } = await http.post(ApiRoutes.ADD_POINT, signedPayload);

  return data;
};
