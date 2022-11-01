const CONFIG = {
    SCRAPE_TARGET_URL: "https://mobi2.bb.com.br/cfe-acesso/api/v1/info/status",
    DB: {
        MONGODB_HOST: "localhost",
        MONGODB_PORT: 27017,
        MONGODB_USER: "root",
        MONGODB_PASS: "pleasehashapasswordomg",
        MONGODB_DB: "store"
    },
    CRONTAB: {
        DAILY_12AM: {
            EXP: "0 12 * * *",
            DESCRIPTION: "every day at 12:00"
        },
        EVERY_HOUR: {
            EXP: "0 * * * *",
            DESCRIPTION: "every hour at 0 minutes"
        },
        EVERY_MINUTE: {
            EXP: "* * * * *",
            DESCRIPTION: "every minute"
        },
    }
};
export default CONFIG;
