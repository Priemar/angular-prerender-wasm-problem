# Prerendering with angular using wasm bug showcase

This is just a code example for the following problem:

[Stackoverflow](https://stackoverflow.com/questions/68899528/angular-12-prerender-error-using-wasm-wasm-pack-module)

## Installation

Wasm is included for this example, so you don't need to install rust or wasm-pack.

```bash
git clone https://github.com/Priemar/angular-prerender-wasm-problem
cd angular-prerender-wasm-problem
npm i
```

## (optional) Rebuild wasm

```bash
npm run build:wasm 
```

## Start prerendering

```bash
npm run prerender
```


## Scenarios:

Both scenarios work without prerendering.
*Hint: for normal build the wasm is loaded asynchronously before bootstrap ``src/main.ts``.

#### Scenario 1: (working but not preferred)

Simply start prerendering.

<hr>

#### Scenario 2: (preferred way but broken)

Just uncomment the Scenario 2: method and import.

See ``src/app/app.component.ts``. You can run both scenarios and try prerendering each one. Only Scenario 1 is working even if the methods are never called.



<br>

**I'm looking forward for any good ideas how to solve this async loading problem in combination with prerendering**
