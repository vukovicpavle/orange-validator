# 🍊 Validator

Validator middleware for Express.js

## Installation

```bash
npm install @vukovicpavle/orange-validator
```

## Usage

```javascript
import { Router } from "express";
import { validatorMiddleware } from "@vukovicpavle/orange-validator";

const router = Router();

const schema = joi.object({
  name: joi.string().required(),
});

router.post("/test", validatorMiddleware(schema), (req, res) => {
  res.send("OK");
});

export default router;
```

## API

### `validatorMiddleware(schema: Joi.Schema, options?: { allowUnknown?: boolean; })`

#### Parameters

| Name      | Type         | Description | Required | Default                   |
| --------- | ------------ | ----------- | -------- | ------------------------- |
| `schema`  | `Joi.Schema` | Joi schema  | `true`   | -                         |
| `options` | `object`     | Options     | `false`  | `{ allowUnknown: false }` |
