import * as http from 'http';
import http2 from 'http2';

import {
  INestApplication,
  Logger,
  RequestMethod,
  VersioningOptions,
} from '@nestjs/common';
import { VersionValue } from '@nestjs/common/interfaces';
import { AbstractHttpAdapter } from '@nestjs/core/adapters/http-adapter';
import {
  Context,
  Cookie,
  Elysia,
  HTTPHeaders,
  redirect,
  StatusMap,
} from 'elysia';
import { ElysiaCustomStatusResponse } from 'elysia/dist/error';
import { Server } from 'elysia/dist/universal/server';

import { ElysiaRequest } from '../interfaces';

type ServerType = http.Server | http2.Http2Server | http2.Http2SecureServer;

export class ElysiaAdapter extends AbstractHttpAdapter<
  ServerType,
  ElysiaRequest,
  Context
> {
  getHeader(response: any, name: string) {
    throw new Error('Method not implemented.');
  }
  appendHeader(response: any, name: string, value: string) {
    throw new Error('Method not implemented.');
  }
  registerParserMiddleware(prefix?: string, rawBody?: boolean) {
    throw new Error('Method not implemented.');
  }
  createMiddlewareFactory(
    requestMethod: RequestMethod,
  ):
    | ((path: string, callback: Function) => any)
    | Promise<(path: string, callback: Function) => any> {
    throw new Error('Method not implemented.');
  }
  getType(): string {
    throw new Error('Method not implemented.');
  }
  applyVersionFilter(
    handler: Function,
    version: VersionValue,
    versioningOptions: VersioningOptions,
  ): (
    req: ElysiaRequest,
    res: {
      body: unknown;
      query: Record<string, string>;
      params: Record<string, string>;
      headers: Record<string, string>;
      cookie: Record<string, Cookie<string>>;
      server: Server | null;
      redirect: redirect;
      set: {
        headers: HTTPHeaders;
        status?: number | keyof StatusMap;
        redirect?: string;
        cookie?: Record<
          string,
          {
            domain?: string | undefined;
            expires?: Date | undefined;
            httpOnly?: boolean | undefined;
            maxAge?: number | undefined;
            path?: string | undefined;
            priority?: 'low' | 'medium' | 'high' | undefined;
            partitioned?: boolean | undefined;
            sameSite?: true | false | 'lax' | 'strict' | 'none' | undefined;
            secure?: boolean | undefined;
            secrets?: string | string[];
            value?: unknown;
          }
        >;
      };
      path: string;
      route: string;
      request: Request;
      store: {};
      status: <
        const Code extends number | keyof StatusMap,
        const T = Code extends
          | 100
          | 101
          | 102
          | 103
          | 200
          | 201
          | 202
          | 203
          | 204
          | 205
          | 206
          | 207
          | 208
          | 300
          | 301
          | 302
          | 303
          | 304
          | 307
          | 308
          | 400
          | 401
          | 402
          | 403
          | 404
          | 405
          | 406
          | 407
          | 408
          | 409
          | 410
          | 411
          | 412
          | 413
          | 414
          | 415
          | 416
          | 417
          | 418
          | 421
          | 422
          | 423
          | 424
          | 425
          | 426
          | 428
          | 429
          | 431
          | 451
          | 500
          | 501
          | 502
          | 503
          | 504
          | 505
          | 506
          | 507
          | 508
          | 510
          | 511
          ? {
              readonly 100: 'Continue';
              readonly 101: 'Switching Protocols';
              readonly 102: 'Processing';
              readonly 103: 'Early Hints';
              readonly 200: 'OK';
              readonly 201: 'Created';
              readonly 202: 'Accepted';
              readonly 203: 'Non-Authoritative Information';
              readonly 204: 'No Content';
              readonly 205: 'Reset Content';
              readonly 206: 'Partial Content';
              readonly 207: 'Multi-Status';
              readonly 208: 'Already Reported';
              readonly 300: 'Multiple Choices';
              readonly 301: 'Moved Permanently';
              readonly 302: 'Found';
              readonly 303: 'See Other';
              readonly 304: 'Not Modified';
              readonly 307: 'Temporary Redirect';
              readonly 308: 'Permanent Redirect';
              readonly 400: 'Bad Request';
              readonly 401: 'Unauthorized';
              readonly 402: 'Payment Required';
              readonly 403: 'Forbidden';
              readonly 404: 'Not Found';
              readonly 405: 'Method Not Allowed';
              readonly 406: 'Not Acceptable';
              readonly 407: 'Proxy Authentication Required';
              readonly 408: 'Request Timeout';
              readonly 409: 'Conflict';
              readonly 410: 'Gone';
              readonly 411: 'Length Required';
              readonly 412: 'Precondition Failed';
              readonly 413: 'Payload Too Large';
              readonly 414: 'URI Too Long';
              readonly 415: 'Unsupported Media Type';
              readonly 416: 'Range Not Satisfiable';
              readonly 417: 'Expectation Failed';
              readonly 418: "I'm a teapot";
              readonly 421: 'Misdirected Request';
              readonly 422: 'Unprocessable Content';
              readonly 423: 'Locked';
              readonly 424: 'Failed Dependency';
              readonly 425: 'Too Early';
              readonly 426: 'Upgrade Required';
              readonly 428: 'Precondition Required';
              readonly 429: 'Too Many Requests';
              readonly 431: 'Request Header Fields Too Large';
              readonly 451: 'Unavailable For Legal Reasons';
              readonly 500: 'Internal Server Error';
              readonly 501: 'Not Implemented';
              readonly 502: 'Bad Gateway';
              readonly 503: 'Service Unavailable';
              readonly 504: 'Gateway Timeout';
              readonly 505: 'HTTP Version Not Supported';
              readonly 506: 'Variant Also Negotiates';
              readonly 507: 'Insufficient Storage';
              readonly 508: 'Loop Detected';
              readonly 510: 'Not Extended';
              readonly 511: 'Network Authentication Required';
            }[Code]
          : Code,
      >(
        code: Code,
        response?: T,
      ) => ElysiaCustomStatusResponse<
        Code,
        T,
        Code extends
          | 'Continue'
          | 'Switching Protocols'
          | 'Processing'
          | 'Early Hints'
          | 'OK'
          | 'Created'
          | 'Accepted'
          | 'Non-Authoritative Information'
          | 'No Content'
          | 'Reset Content'
          | 'Partial Content'
          | 'Multi-Status'
          | 'Already Reported'
          | 'Multiple Choices'
          | 'Moved Permanently'
          | 'Found'
          | 'See Other'
          | 'Not Modified'
          | 'Temporary Redirect'
          | 'Permanent Redirect'
          | 'Bad Request'
          | 'Unauthorized'
          | 'Payment Required'
          | 'Forbidden'
          | 'Not Found'
          | 'Method Not Allowed'
          | 'Not Acceptable'
          | 'Proxy Authentication Required'
          | 'Request Timeout'
          | 'Conflict'
          | 'Gone'
          | 'Length Required'
          | 'Precondition Failed'
          | 'Payload Too Large'
          | 'URI Too Long'
          | 'Unsupported Media Type'
          | 'Range Not Satisfiable'
          | 'Expectation Failed'
          | "I'm a teapot"
          | 'Misdirected Request'
          | 'Unprocessable Content'
          | 'Locked'
          | 'Failed Dependency'
          | 'Too Early'
          | 'Upgrade Required'
          | 'Precondition Required'
          | 'Too Many Requests'
          | 'Request Header Fields Too Large'
          | 'Unavailable For Legal Reasons'
          | 'Internal Server Error'
          | 'Not Implemented'
          | 'Bad Gateway'
          | 'Service Unavailable'
          | 'Gateway Timeout'
          | 'HTTP Version Not Supported'
          | 'Variant Also Negotiates'
          | 'Insufficient Storage'
          | 'Loop Detected'
          | 'Not Extended'
          | 'Network Authentication Required'
          ? {
              readonly Continue: 100;
              readonly 'Switching Protocols': 101;
              readonly Processing: 102;
              readonly 'Early Hints': 103;
              readonly OK: 200;
              readonly Created: 201;
              readonly Accepted: 202;
              readonly 'Non-Authoritative Information': 203;
              readonly 'No Content': 204;
              readonly 'Reset Content': 205;
              readonly 'Partial Content': 206;
              readonly 'Multi-Status': 207;
              readonly 'Already Reported': 208;
              readonly 'Multiple Choices': 300;
              readonly 'Moved Permanently': 301;
              readonly Found: 302;
              readonly 'See Other': 303;
              readonly 'Not Modified': 304;
              readonly 'Temporary Redirect': 307;
              readonly 'Permanent Redirect': 308;
              readonly 'Bad Request': 400;
              readonly Unauthorized: 401;
              readonly 'Payment Required': 402;
              readonly Forbidden: 403;
              readonly 'Not Found': 404;
              readonly 'Method Not Allowed': 405;
              readonly 'Not Acceptable': 406;
              readonly 'Proxy Authentication Required': 407;
              readonly 'Request Timeout': 408;
              readonly Conflict: 409;
              readonly Gone: 410;
              readonly 'Length Required': 411;
              readonly 'Precondition Failed': 412;
              readonly 'Payload Too Large': 413;
              readonly 'URI Too Long': 414;
              readonly 'Unsupported Media Type': 415;
              readonly 'Range Not Satisfiable': 416;
              readonly 'Expectation Failed': 417;
              readonly "I'm a teapot": 418;
              readonly 'Misdirected Request': 421;
              readonly 'Unprocessable Content': 422;
              readonly Locked: 423;
              readonly 'Failed Dependency': 424;
              readonly 'Too Early': 425;
              readonly 'Upgrade Required': 426;
              readonly 'Precondition Required': 428;
              readonly 'Too Many Requests': 429;
              readonly 'Request Header Fields Too Large': 431;
              readonly 'Unavailable For Legal Reasons': 451;
              readonly 'Internal Server Error': 500;
              readonly 'Not Implemented': 501;
              readonly 'Bad Gateway': 502;
              readonly 'Service Unavailable': 503;
              readonly 'Gateway Timeout': 504;
              readonly 'HTTP Version Not Supported': 505;
              readonly 'Variant Also Negotiates': 506;
              readonly 'Insufficient Storage': 507;
              readonly 'Loop Detected': 508;
              readonly 'Not Extended': 510;
              readonly 'Network Authentication Required': 511;
            }[Code]
          : Code
      >;
      error: <
        const Code extends number | keyof StatusMap,
        const T = Code extends
          | 100
          | 101
          | 102
          | 103
          | 200
          | 201
          | 202
          | 203
          | 204
          | 205
          | 206
          | 207
          | 208
          | 300
          | 301
          | 302
          | 303
          | 304
          | 307
          | 308
          | 400
          | 401
          | 402
          | 403
          | 404
          | 405
          | 406
          | 407
          | 408
          | 409
          | 410
          | 411
          | 412
          | 413
          | 414
          | 415
          | 416
          | 417
          | 418
          | 421
          | 422
          | 423
          | 424
          | 425
          | 426
          | 428
          | 429
          | 431
          | 451
          | 500
          | 501
          | 502
          | 503
          | 504
          | 505
          | 506
          | 507
          | 508
          | 510
          | 511
          ? {
              readonly 100: 'Continue';
              readonly 101: 'Switching Protocols';
              readonly 102: 'Processing';
              readonly 103: 'Early Hints';
              readonly 200: 'OK';
              readonly 201: 'Created';
              readonly 202: 'Accepted';
              readonly 203: 'Non-Authoritative Information';
              readonly 204: 'No Content';
              readonly 205: 'Reset Content';
              readonly 206: 'Partial Content';
              readonly 207: 'Multi-Status';
              readonly 208: 'Already Reported';
              readonly 300: 'Multiple Choices';
              readonly 301: 'Moved Permanently';
              readonly 302: 'Found';
              readonly 303: 'See Other';
              readonly 304: 'Not Modified';
              readonly 307: 'Temporary Redirect';
              readonly 308: 'Permanent Redirect';
              readonly 400: 'Bad Request';
              readonly 401: 'Unauthorized';
              readonly 402: 'Payment Required';
              readonly 403: 'Forbidden';
              readonly 404: 'Not Found';
              readonly 405: 'Method Not Allowed';
              readonly 406: 'Not Acceptable';
              readonly 407: 'Proxy Authentication Required';
              readonly 408: 'Request Timeout';
              readonly 409: 'Conflict';
              readonly 410: 'Gone';
              readonly 411: 'Length Required';
              readonly 412: 'Precondition Failed';
              readonly 413: 'Payload Too Large';
              readonly 414: 'URI Too Long';
              readonly 415: 'Unsupported Media Type';
              readonly 416: 'Range Not Satisfiable';
              readonly 417: 'Expectation Failed';
              readonly 418: "I'm a teapot";
              readonly 421: 'Misdirected Request';
              readonly 422: 'Unprocessable Content';
              readonly 423: 'Locked';
              readonly 424: 'Failed Dependency';
              readonly 425: 'Too Early';
              readonly 426: 'Upgrade Required';
              readonly 428: 'Precondition Required';
              readonly 429: 'Too Many Requests';
              readonly 431: 'Request Header Fields Too Large';
              readonly 451: 'Unavailable For Legal Reasons';
              readonly 500: 'Internal Server Error';
              readonly 501: 'Not Implemented';
              readonly 502: 'Bad Gateway';
              readonly 503: 'Service Unavailable';
              readonly 504: 'Gateway Timeout';
              readonly 505: 'HTTP Version Not Supported';
              readonly 506: 'Variant Also Negotiates';
              readonly 507: 'Insufficient Storage';
              readonly 508: 'Loop Detected';
              readonly 510: 'Not Extended';
              readonly 511: 'Network Authentication Required';
            }[Code]
          : Code,
      >(
        code: Code,
        response?: T,
      ) => ElysiaCustomStatusResponse<
        Code,
        T,
        Code extends
          | 'Continue'
          | 'Switching Protocols'
          | 'Processing'
          | 'Early Hints'
          | 'OK'
          | 'Created'
          | 'Accepted'
          | 'Non-Authoritative Information'
          | 'No Content'
          | 'Reset Content'
          | 'Partial Content'
          | 'Multi-Status'
          | 'Already Reported'
          | 'Multiple Choices'
          | 'Moved Permanently'
          | 'Found'
          | 'See Other'
          | 'Not Modified'
          | 'Temporary Redirect'
          | 'Permanent Redirect'
          | 'Bad Request'
          | 'Unauthorized'
          | 'Payment Required'
          | 'Forbidden'
          | 'Not Found'
          | 'Method Not Allowed'
          | 'Not Acceptable'
          | 'Proxy Authentication Required'
          | 'Request Timeout'
          | 'Conflict'
          | 'Gone'
          | 'Length Required'
          | 'Precondition Failed'
          | 'Payload Too Large'
          | 'URI Too Long'
          | 'Unsupported Media Type'
          | 'Range Not Satisfiable'
          | 'Expectation Failed'
          | "I'm a teapot"
          | 'Misdirected Request'
          | 'Unprocessable Content'
          | 'Locked'
          | 'Failed Dependency'
          | 'Too Early'
          | 'Upgrade Required'
          | 'Precondition Required'
          | 'Too Many Requests'
          | 'Request Header Fields Too Large'
          | 'Unavailable For Legal Reasons'
          | 'Internal Server Error'
          | 'Not Implemented'
          | 'Bad Gateway'
          | 'Service Unavailable'
          | 'Gateway Timeout'
          | 'HTTP Version Not Supported'
          | 'Variant Also Negotiates'
          | 'Insufficient Storage'
          | 'Loop Detected'
          | 'Not Extended'
          | 'Network Authentication Required'
          ? {
              readonly Continue: 100;
              readonly 'Switching Protocols': 101;
              readonly Processing: 102;
              readonly 'Early Hints': 103;
              readonly OK: 200;
              readonly Created: 201;
              readonly Accepted: 202;
              readonly 'Non-Authoritative Information': 203;
              readonly 'No Content': 204;
              readonly 'Reset Content': 205;
              readonly 'Partial Content': 206;
              readonly 'Multi-Status': 207;
              readonly 'Already Reported': 208;
              readonly 'Multiple Choices': 300;
              readonly 'Moved Permanently': 301;
              readonly Found: 302;
              readonly 'See Other': 303;
              readonly 'Not Modified': 304;
              readonly 'Temporary Redirect': 307;
              readonly 'Permanent Redirect': 308;
              readonly 'Bad Request': 400;
              readonly Unauthorized: 401;
              readonly 'Payment Required': 402;
              readonly Forbidden: 403;
              readonly 'Not Found': 404;
              readonly 'Method Not Allowed': 405;
              readonly 'Not Acceptable': 406;
              readonly 'Proxy Authentication Required': 407;
              readonly 'Request Timeout': 408;
              readonly Conflict: 409;
              readonly Gone: 410;
              readonly 'Length Required': 411;
              readonly 'Precondition Failed': 412;
              readonly 'Payload Too Large': 413;
              readonly 'URI Too Long': 414;
              readonly 'Unsupported Media Type': 415;
              readonly 'Range Not Satisfiable': 416;
              readonly 'Expectation Failed': 417;
              readonly "I'm a teapot": 418;
              readonly 'Misdirected Request': 421;
              readonly 'Unprocessable Content': 422;
              readonly Locked: 423;
              readonly 'Failed Dependency': 424;
              readonly 'Too Early': 425;
              readonly 'Upgrade Required': 426;
              readonly 'Precondition Required': 428;
              readonly 'Too Many Requests': 429;
              readonly 'Request Header Fields Too Large': 431;
              readonly 'Unavailable For Legal Reasons': 451;
              readonly 'Internal Server Error': 500;
              readonly 'Not Implemented': 501;
              readonly 'Bad Gateway': 502;
              readonly 'Service Unavailable': 503;
              readonly 'Gateway Timeout': 504;
              readonly 'HTTP Version Not Supported': 505;
              readonly 'Variant Also Negotiates': 506;
              readonly 'Insufficient Storage': 507;
              readonly 'Loop Detected': 508;
              readonly 'Not Extended': 510;
              readonly 'Network Authentication Required': 511;
            }[Code]
          : Code
      >;
    },
    next: () => void,
  ) => Function {
    throw new Error('Method not implemented.');
  }
  private readonly logger = new Logger(ElysiaAdapter.name);
  private httpServer: http.Server | null = null;

  /**
   * Creates an instance of the ElysiaAdapter.
   * @param instance - Optional Elysia instance to use.
   */
  constructor(instance?: Elysia) {
    super(instance || new Elysia());
  }

  /**
   * Initialize the Elysia application.
   */
  public initHttpServer(): void {
    this.httpServer = this.createServer();
  }

  /**
   * Create a server instance.
   */
  public createServer(): http.Server {
    const app = this.getInstance<Elysia>();
    return app.server || app.listen(0).server;
  }

  /**
   * Register a route with a handler.
   * @param path - The route path.
   * @param callback - The route handler.
   * @param method - The HTTP method.
   */
  public registerRouteHandler(
    path: string,
    callback: (...args: any[]) => any,
    method: string,
  ): void {
    // Convert method to lowercase
    const normalizedMethod = method.toLowerCase();
    if (!this.isMethodValid(normalizedMethod)) {
      return;
    }

    const app = this.getInstance<Elysia>();
    const handler = normalizedMethod as keyof Pick<
      Elysia,
      'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head'
    >;

    if (typeof app[handler] === 'function') {
      (app[handler] as Function)(path, callback);
    }
  }

  /**
   * Check if the HTTP method is valid.
   * @param method - The HTTP method.
   */
  private isMethodValid(method: string): boolean {
    const validMethods = [
      'get',
      'post',
      'put',
      'delete',
      'patch',
      'options',
      'head',
    ];
    return validMethods.includes(method);
  }

  /**
   * Close the HTTP server.
   */
  public close(): void {
    if (this.httpServer) {
      this.httpServer.close();
    }
  }

  /**
   * Get the native HTTP server instance.
   * @returns The HTTP server instance.
   */
  public getHttpServer(): http.Server {
    if (!this.httpServer) {
      this.initHttpServer();
    }
    return this.httpServer;
  }

  /**
   * Get the Elysia instance.
   * @returns The Elysia instance.
   */
  public getInstance<T = Elysia>(): T {
    return this.httpAdapter as unknown as T;
  }

  /**
   * Set the view engine for the application.
   * @param engine - The view engine.
   */
  public setViewEngine(_engine: string): this {
    this.logger.warn('Elysia does not support view engines out of the box');
    return this;
  }

  /**
   * Get the request object from the HTTP request.
   * @param req - The HTTP request.
   * @returns The request object.
   */
  public getRequestHostname(req: any): string {
    return req.headers.host || '';
  }

  /**
   * Get the request method from the HTTP request.
   * @param req - The HTTP request.
   * @returns The request method.
   */
  public getRequestMethod(req: any): string {
    return req.method || '';
  }

  /**
   * Get the request URL from the HTTP request.
   * @param req - The HTTP request.
   * @returns The request URL.
   */
  public getRequestUrl(req: any): string {
    return req.url || '';
  }

  /**
   * Enable CORS for the application.
   * @param options - The CORS options.
   */
  public enableCors(_options: any): void {
    this.logger.warn('CORS should be configured in Elysia instance');
  }

  /**
   * Create a middleware handler.
   * @param middleware - The middleware function.
   * @returns The middleware handler.
   */
  public createMiddlewareHandler(
    middleware: (...args: any[]) => any,
  ): (...args: any[]) => any {
    return middleware;
  }

  /**
   * Set a local variable for the application.
   * @param key - The variable name.
   * @param value - The variable value.
   */
  public setLocal(_key: string, _value: any): void {
    this.logger.warn('setLocal is not supported in Elysia');
  }

  /**
   * Reply to the HTTP request.
   * @param response - The HTTP response.
   * @param body - The response body.
   * @param statusCode - The HTTP status code.
   */
  public reply(response: any, body: any, statusCode?: number): any {
    if (statusCode) {
      response.status = statusCode;
    }
    response.body = body;
    return response;
  }

  /**
   * Render a view.
   * @param response - The HTTP response.
   * @param view - The view name.
   * @param options - The view options.
   */
  public render(_response: any, _view: string, _options: any): any {
    throw new Error(
      'Method not implemented. Elysia does not support view rendering out of the box.',
    );
  }

  /**
   * Redirect the HTTP request.
   * @param response - The HTTP response.
   * @param statusCode - The HTTP status code.
   * @param url - The URL to redirect to.
   */
  public redirect(response: any, statusCode: number, url: string): any {
    response.status = statusCode;
    response.headers = response.headers || {};
    response.headers.Location = url;
    return response;
  }

  /**
   * Set the status code for the HTTP response.
   * @param response - The HTTP response.
   * @param statusCode - The HTTP status code.
   */
  public setStatusCode(response: any, statusCode: number): any {
    response.status = statusCode;
    return response;
  }

  /**
   * Set the header for the HTTP response.
   * @param response - The HTTP response.
   * @param name - The header name.
   * @param value - The header value.
   */
  public setHeader(response: any, name: string, value: string): any {
    response.headers = response.headers || {};
    response.headers[name] = value;
    return response;
  }

  /**
   * Set the body for the HTTP response.
   * @param response - The HTTP response.
   * @param body - The response body.
   */
  public setBody(response: any, body: any): any {
    response.body = body;
    return response;
  }

  /**
   * Set the error handler for the application.
   * @param handler - The error handler.
   */
  public setErrorHandler(handler: (...args: any[]) => any): any {
    const app = this.getInstance<Elysia>();
    return app.onError(({ error }) => handler(error));
  }

  /**
   * Set the not found handler for the application.
   * @param handler - The not found handler.
   */
  public setNotFoundHandler(handler: (...args: any[]) => any): any {
    const app = this.getInstance<Elysia>();
    return app.get('*', (context) => handler(context));
  }

  /**
   * Set the base path for the application.
   * @param prefix - The base path.
   */
  public setBasePath(prefix: string): any {
    this.logger.warn(
      `Base path '${prefix}' is set, but Elysia doesn't support changing base path after initialization`,
    );
    return this;
  }

  /**
   * Listen for connections.
   * @param port - The port to listen on.
   * @param callback - The callback function.
   */
  public listen(port: string | number, callback?: () => void): any;
  /**
   * Listen for connections.
   * @param port - The port to listen on.
   * @param hostname - The hostname to listen on.
   * @param callback - The callback function.
   */
  public listen(
    port: string | number,
    hostname?: string | (() => void),
    callback?: () => void,
  ): any {
    const app = this.getInstance<Elysia>();
    const listenFn = () => {
      const server = app.listen(Number(port), {
        hostname: typeof hostname === 'string' ? hostname : undefined,
      });
      this.httpServer = server.server;
      return server;
    };

    if (callback) {
      listenFn();
      callback();
      return this;
    }

    if (typeof hostname === 'function') {
      listenFn();
      hostname();
      return this;
    }

    return listenFn();
  }

  /**
   * Use a middleware for the application.
   * @param middleware - The middleware function.
   * @returns The Elysia instance.
   */
  public use(middleware: any): any {
    const app = this.getInstance<Elysia>();
    return app.use(middleware);
  }

  /**
   * Use a route middleware for the application.
   * @param path - The route path.
   * @param middleware - The middleware function.
   * @returns The Elysia instance.
   */
  public useRoute(path: string, middleware: any): any {
    const app = this.getInstance<Elysia>();
    return app.group(path, (group) => group.use(middleware));
  }

  /**
   * Enable shutdown hooks for the application.
   * @param app - The NestJS application.
   */
  public enableShutdownHooks(app: INestApplication): void {
    app.enableShutdownHooks();
  }

  /**
   * Use static assets.
   * @param path - The path to the static assets.
   * @param options - The options for serving static assets.
   */
  public useStaticAssets(path: string, options?: any): this {
    this.logger.warn(
      'useStaticAssets is not directly supported in Elysia. Use @elysiajs/static plugin instead.',
    );
    return this;
  }

  /**
   * Set the status code for the HTTP response.
   * @param response - The HTTP response.
   * @param statusCode - The HTTP status code.
   */
  public status(response: any, statusCode: number): any {
    return this.setStatusCode(response, statusCode);
  }

  /**
   * End the HTTP response.
   * @param response - The HTTP response.
   * @param message - The response message.
   */
  public end(response: any, message?: string): any {
    if (message) {
      response.body = message;
    }
    return response;
  }

  /**
   * Check if headers are sent.
   * @param response - The HTTP response.
   */
  public isHeadersSent(response: any): boolean {
    return response.headersSent === true;
  }

  /**
   * Set the response type.
   * @param response - The HTTP response.
   * @param type - The response type.
   */
  public setResponseType(response: any, type: string): any {
    return this.setHeader(response, 'Content-Type', type);
  }

  /**
   * Get the request body.
   * @param req - The HTTP request.
   */
  public getRequestBody(req: any): any {
    return req.body;
  }

  /**
   * Get the request headers.
   * @param req - The HTTP request.
   */
  public getRequestHeaders(req: any): any {
    return req.headers;
  }
}
