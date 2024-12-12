# LoopQA Playright Test Automation Framework

Demo test playwright test automation framework that leverages data-driven technique for minimizing code duplications.
Please follow the following steps to run the tests from this framework.

## Dependency Installation

Please install all the module dependencies by running follwoing command.

```shell
npm install
```

Please ensure to install playwright browser binaries by running following comamnd.

```shell
npx playwright install
```

## Running test

In order to run the test you need to always provovide the password for the test users.
Note that password is not part of the code basis for the security reason. Here is the environment value you need to provide
for test execution, if you are using them in your CICD pipeline, make sure to create corresponding evn values.

- `URL` for test site url value, default is "https://animated-gingersnap-8cf7f2.netlify.app" if not given
- `USERNAME` test username, default is 'admin' if not given
- `PASSWORD` test user password, you need to provide this all the time,

**NOTE**: I will be providing the PASSWORD value in this README.md for the purpose of this demo, but in real world scenario,
the value of PASSWROD should not be part of the code base

Example:

```shel
SITE="https://animated-gingersnap-8cf7f2.netlify.app" TESTUSER=admin PASSWORD=password123 npx playwright test
```

Since the default value of SITE and TESTUSER in in the codebase, you can just provide the PASSWORD value to run the tests.

Running all tests:

```shell
PASSWORD=password123 npx playwright test
```

Running all specific spec file:

```shell
PASSWORD=password123 npx playwright test tests/smoke.spec.ts
```

Running specific test project ( collection of tests based on name):

```shell
PASSWORD=password123 npx playwright test --project=firefox
```

Note that if you want to group together different spec files into different test groups, you can this by updating `projects` array in the `playwright.config.ts` file.  Make sure to come up with correct `testMatch` regex. 