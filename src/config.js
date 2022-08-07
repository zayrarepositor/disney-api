import "dotenv/config";

export default {
  SECRET: process.env.SECRET,
  PORT: process.env.PORT,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASS: process.env.MAIL_PASS,
  DATABASE_URL: process.env.DATABASE_URL,
};
