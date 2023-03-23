module.exports = {
    extends: [
        '@scandipwa',
    ],
    ignorePatterns: ["src/**"],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        requireConfigFile: false,
        babelOptions: {
            parserOpts: {
                plugins: ['jsx'],
            },
        },
    },
    rules: {
        '@typescript-eslint/object-curly-spacing': 'off',
        // TODO: disable or enable rules here
    },
};
