# LoopQA Playright Test Automation Framework

Demo test playwright test automation framework that leverages data-driven technique for minimizing code duplications.
Follow these steps to run the tests from this framework:

## Dependency Installation

Please install all the module dependencies by running the following command in the root directory:
```shell
npm install
```

Please ensure that the Playwright browser binaries are installed by running the following command:
```shell
npx playwright install
```



## Running tests
To run the tests, you must always provide the password for the test users. Note that the password is not included in the codebase for security reasons. Below is the environment variable you need to set for test execution. If you are using these variables in your CI/CD pipeline, ensure that the corresponding environment variables are created.


- `URL` for test site url value, default is "https://animated-gingersnap-8cf7f2.netlify.app" if not given
- `USERNAME` test username, default is 'admin' if not given
- `PASSWORD` test user password, you need to provide this all the time,


**NOTE**: For the purpose of this demo, I will provide the `PASSWORD` value in this `README.md`. However, in a real-world scenario, the `PASSWORD` value should never be included in the codebase.


Example:
```shel
SITE="https://animated-gingersnap-8cf7f2.netlify.app" TESTUSER=admin PASSWORD=password123 npx playwright test
```

Since the default values for `SITE` and `TESTUSER` are already in the codebase, you only need to provide the `PASSWORD` value to run the tests.


Running all tests:

```shell
PASSWORD=password123 npx playwright test
```


Running a specific spec file:

```shell
PASSWORD=password123 npx playwright test tests/smoke.spec.ts
```


Running specific test project ( a collection of tests):

```shell
PASSWORD=password123 npx playwright test --project=firefox
```

**Note**: If you want to group different spec files into distinct test groups, you can do so by updating the projects array in the `playwright.config.ts` file. Ensure that you define the correct `testMatch` regex for each group**



## Viewing Test Result 
You can view the test results by running the following command:
```shell
npx playwright show-report reports 
```
