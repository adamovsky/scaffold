const env = process.env;

const CONFIG = Object.keys(env)
    .filter(entry => /^REACT_APP_/.test(entry))
    .reduce((accumulator, entry) => {
        accumulator[entry.replace(/^REACT_APP_/, '')] = env[entry];

        return accumulator;
    }, {});

// new environment variables must be added below without the REACT_APP_ prefix
export const {
  BUILD_ENV
} = CONFIG;
