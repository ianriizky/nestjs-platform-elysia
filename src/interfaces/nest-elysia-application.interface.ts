import { staticPlugin } from '@elysiajs/static';
import { HttpServer, INestApplication } from '@nestjs/common';
import { Context, Elysia, Handler } from 'elysia';

export type TypeBodyParser =
  | 'application/json'
  | 'text/plain'
  | 'application/x-www-form-urlencoded';

interface ElysiaViewOptions {
  engine: string;
  templates: string;
}

/**
 * @publicApi
 */
export interface NestElysiaApplication<TServer extends Elysia = Elysia>
  extends INestApplication<TServer> {
  /**
   * Returns the underlying HTTP adapter bounded to a Elysia app.
   *
   * @returns {HttpServer}
   */
  getHttpAdapter(): HttpServer<Context, Handler, Elysia>;

  /**
   * Register Elysia body parsers on the fly.
   *
   * @example
   * ```javascript
   * // enable the json parser with a parser limit of 50mb
   * app.useBodyParser('application/json', 50 * 1024 * 1024);
   * ```
   *
   * @returns {this}
   */
  useBodyParser(type: TypeBodyParser, bodyLimit?: number): this;

  /**
   * Sets a base directory for public assets.
   *
   * @example
   * ```javascript
   * app.useStaticAssets('public', { root: '/' });
   * ```
   *
   * @returns {this}
   */
  useStaticAssets(
    path: string,
    options: Parameters<typeof staticPlugin>[number],
  ): this;

  /**
   * Sets a view engine for templates (views), for example: `pug`, `handlebars`, or `ejs`.
   * Don't pass in a string. The string type in the argument is for compatibility reason and will cause an exception.
   *
   * @example
   * ```javascript
   * app.setViewEngine({ engine: 'pug', templates: 'views' });
   * ```
   *
   * @returns {this}
   */
  setViewEngine(options: ElysiaViewOptions | string): this;

  /**
   * Starts the application.
   *
   * @example
   * ```javascript
   * app.listen(3000);
   * ```
   *
   * @returns A Promise that, when resolved, is a reference to the underlying HttpServer.
   */
  listen(
    port: number | string,
    callback?: (err: Error, address: string) => void,
  ): Promise<TServer>;
  listen(
    port: number | string,
    address: string,
    callback?: (err: Error, address: string) => void,
  ): Promise<TServer>;
  listen(
    port: number | string,
    address: string,
    backlog: number,
    callback?: (err: Error, address: string) => void,
  ): Promise<TServer>;
}
