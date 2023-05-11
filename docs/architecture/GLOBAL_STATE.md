# Global State

This scaffold supports _both_ [Redux Toolkit](https://redux-toolkit.js.org/) and [Recoil](https://recoiljs.org/).

It is wired to support both solutions for an example of use. In practice, we will most likely want to pick one and remove the other one. If we do not remove the unused one, functionally there won't be any adverse impact.

## Environment Variable

To configure the scaffold to use a given state management system we simply set the `REACT_APP_STORE` environment variable in the `.env` file.

The available values are:

-   `recoil`
-   `reduxToolkit`

It defaults to `reduxToolkit`.

## Abstraction

The scaffold abstracts the implementation of the global state management solution. This means the app code does not care whether Redux or Recoil is being used.

We abstract away the interfaces using the global `useGlobalStore` hook which in turn consumes either `useRecoil` or `useReduxToolkit`.

Again, the _app code_ does not care which implementation we use since we use `useGlobalStore`'s interface to read and set values. It _does_ however expose the global store to access the native APIs of the chosen state manager.

In a CleanDX application we do not want to directly access any third party APIs from the _app code_.
