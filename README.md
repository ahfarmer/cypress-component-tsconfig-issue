# Cypress Component TSConfig Issue

Reproduction for https://github.com/cypress-io/cypress/issues/14194

## Error Reproduction

`yarn test`


## Workaround

1. Remove this section from `tsconfig.json`:

```
    "paths": {
      "*": ["*", "./node_modules/*"]
    }
```

2. Now `yarn test` should work.