const globals = {
    constants: {
        USERNAME_MIN_LENGTH: 5,
        PASSWORD_MIN_LENGTH: 5,
        USERNAME_REGEX: /^[A-Za-z0-9]+$/,
        PASSWORD_REGEX: /^[A-Za-z0-9]+$/,
    },
    msg: {
        USERNAME_MIN_LENGTH: "Username must be at least 5 characters",
        PASSWORD_MIN_LENGTH: "Password must be at least 5 characters",
        USERNAME_ONLY_ALPHABETICAL: "Username must contains only digits and/or latin letters",
        CONFIRMATION_PASSWORD_ERROR: "Both passwords should be the same ...",
        PASSWORD_ONLY_ALPHABETICAL: "Password must contains only digits and/or latin letters",
        WRONG_CREDENTIALS: "Wrong email and/or password",
        EMAIL_IS_INVALID: "Email must be valid",
        EMAIL_IS_IN_USE: (email) => {
            return `Email ${email} is already taken ...`
        },
        USERNAME_IS_IN_USE: (username) => {
            return `Username ${username} is already taken ...`
        },
        DB_CONNECTED: (host, name, port) => {
            return `Successfully connected to http://${host}:${port}  /database:${name}/`
        },
        DB_CONNECTION_ERROR: "Connection error: ",
        APPLICATION_RUNNING: (port) => {
            return `Application is up & listening on port ${port} ...`;
        },
    }
}

module.exports = globals;