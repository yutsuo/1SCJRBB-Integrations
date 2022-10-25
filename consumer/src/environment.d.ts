// environment.d.ts file

export interface IEnvironment {
    SCRAPE_TARGET_URL: string,
    DB: {
        MONGODB_HOST: string,
        MONGODB_PORT: number,
        MONGODB_USER: string,
        MONGODB_PASS: string,
        MONGODB_DB: string
    },
    CRONTAB: {
        DAILY_12AM: {
            EXP: string,
            DESCRIPTION: string
        },
        EVERY_HOUR: {
            EXP: string,
            DESCRIPTION: string
        },
        EVERY_MINUTE: {
            EXP: string,
            DESCRIPTION: string
        },
    }
}
