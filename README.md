# NestJS Platform Elysia

[![NPM Version](https://badge.fury.io/js/@ianriizky%2Fnestjs-platform-elysia.svg)](https://www.npmjs.com/package/@ianriizky/nestjs-platform-elysia)
[![NPM Downloads](https://img.shields.io/npm/dw/%40ianriizky%2Fnestjs-platform-elysia)](https://www.npmjs.com/package/@ianriizky/nestjs-platform-elysia)
[![License](https://img.shields.io/github/license/ianriizky/nestjs-platform-elysia)](LICENSE.md)
[![Release](https://shields.io/github/release/ngodingbang/learning-astro)](https://git.seni.cloud/ianriizky/nestjs-platform-elysia/-/releases)
[![Pipeline Status](https://github.com/ianriizky/nestjs-platform-elysia/actions/workflows/main.yml/badge.svg)](https://github.com/ianriizky/nestjs-platform-elysia/actions/workflows/main.yml)
[![Coverage Status](https://codecov.io/gh/ianriizky/nestjs-platform-elysia/graph/badge.svg?token=X576IKT8ZB)](https://codecov.io/gh/ianriizky/nestjs-platform-elysia)

## Table of Contents

- [NestJS Platform Elysia](#nestjs-platform-elysia)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Requirements](#requirements)
  - [Components](#components)
  - [How to Use](#how-to-use)
    - [Setup](#setup)
    - [Create Application](#create-application)
  - [Author](#author)
  - [Changelog](#changelog)
  - [License](#license)

## Description

This is a [NestJS](https://nestjs.com) adapter for [Elysia](https://elysiajs.com).

## Requirements

- [![Node.js](https://img.shields.io/badge/Node.js%20>=20-43853D?logo=node.js&logoColor=white 'Node.js')](https://nodejs.org) or [![Bun](https://img.shields.io/badge/Bun%20^1.2.0-000000?logo=bun&logoColor=white 'Bun')](https://bun.sh)
- [![NestJS](https://img.shields.io/badge/NestJS%20^11.1.0-E0234E?logo=nestjs&logoColor=white 'NestJS')](https://nestjs.com)
- [![Elysia](https://img.shields.io/badge/Elysia%20^1.3.0-000000?logo=elysia&logoColor=white 'Elysia')](https://elysiajs.com)
- [![TypeScript](https://img.shields.io/badge/TypeScript%20^5.9.2-007ACC?logo=typescript&logoColor=white 'TypeScript')](https://www.typescriptlang.org)

## Components

- `ElysiaAdapter`: Adapter to use Elysia with NestJS.

## How to Use

### Setup

To install [`@ianriizky/nestjs-platform-elysia`](https://www.npmjs.com/package/@ianriizky/nestjs-platform-elysia):

```bash
$ npm install @ianriizky/nestjs-platform-elysia
$ yarn add @ianriizky/nestjs-platform-elysia
$ pnpm add @ianriizky/nestjs-platform-elysia
```

### Create Application

```typescript
import { ElysiaAdapter } from '@ianriizky/nestjs-platform-elysia';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

const app = await NestFactory.create<NestElysiaApplication>(
  AppModule,
  new ElysiaAdapter(),
);
```

## Author

- [Septianata Rizky Pratama](https://ianrizky.web.id) - hi@ianrizky.web.id

## Changelog

You can read the changelog [here](CHANGELOG.md).

## License

You can read the license [here](LICENSE.md).
