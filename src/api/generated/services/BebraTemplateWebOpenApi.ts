/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessTokenResponse } from "../models/AccessTokenResponse";
import type { ForgotPasswordRequest } from "../models/ForgotPasswordRequest";
import type { InfoRequest } from "../models/InfoRequest";
import type { InfoResponse } from "../models/InfoResponse";
import type { LoginRequest } from "../models/LoginRequest";
import type { RefreshRequest } from "../models/RefreshRequest";
import type { RegisterRequest } from "../models/RegisterRequest";
import type { ResendConfirmationEmailRequest } from "../models/ResendConfirmationEmailRequest";
import type { ResetPasswordRequest } from "../models/ResetPasswordRequest";
import type { TwoFactorRequest } from "../models/TwoFactorRequest";
import type { TwoFactorResponse } from "../models/TwoFactorResponse";
import type { WeatherForecast } from "../models/WeatherForecast";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class BebraTemplateWebOpenApi {
  /**
   * @returns WeatherForecast OK
   * @throws ApiError
   */
  public static getPenis(): CancelablePromise<Array<WeatherForecast>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/penis",
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static postAuthRegister({ requestBody }: { requestBody?: RegisterRequest }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/register",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * @returns AccessTokenResponse OK
   * @throws ApiError
   */
  public static postAuthLogin({
    useCookies,
    useSessionCookies,
    requestBody,
  }: {
    useCookies?: boolean;
    useSessionCookies?: boolean;
    requestBody?: LoginRequest;
  }): CancelablePromise<AccessTokenResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/login",
      query: {
        useCookies: useCookies,
        useSessionCookies: useSessionCookies,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns AccessTokenResponse OK
   * @throws ApiError
   */
  public static postAuthRefresh({
    requestBody,
  }: {
    requestBody?: RefreshRequest;
  }): CancelablePromise<AccessTokenResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/refresh",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static mapIdentityApiAuthConfirmEmail({
    userId,
    code,
    changedEmail,
  }: {
    userId?: string;
    code?: string;
    changedEmail?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/auth/confirmEmail",
      query: {
        userId: userId,
        code: code,
        changedEmail: changedEmail,
      },
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static postAuthResendConfirmationEmail({
    requestBody,
  }: {
    requestBody?: ResendConfirmationEmailRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/resendConfirmationEmail",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static postAuthForgotPassword({
    requestBody,
  }: {
    requestBody?: ForgotPasswordRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/forgotPassword",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static postAuthResetPassword({ requestBody }: { requestBody?: ResetPasswordRequest }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/resetPassword",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * @returns TwoFactorResponse OK
   * @throws ApiError
   */
  public static postAuthManage2Fa({
    requestBody,
  }: {
    requestBody?: TwoFactorRequest;
  }): CancelablePromise<TwoFactorResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/manage/2fa",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }
  /**
   * @returns InfoResponse OK
   * @throws ApiError
   */
  public static getAuthManageInfo(): CancelablePromise<InfoResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/auth/manage/info",
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }
  /**
   * @returns InfoResponse OK
   * @throws ApiError
   */
  public static postAuthManageInfo({ requestBody }: { requestBody?: InfoRequest }): CancelablePromise<InfoResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/manage/info",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }
}