import dotenv from 'dotenv'

dotenv.config();

const { token, clientid } = process.env;

if (!token || !clientid) {
    throw new Error("Missing environment variables");
}

export const config = { 
    token,
    clientid,
}