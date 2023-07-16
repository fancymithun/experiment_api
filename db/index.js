const {Pool} = require("pg")
const dotenv = require("dotenv")

dotenv.config()

const connectDB = async() => {

    try {
        const pool = new Pool({
            user:process.env.USER,
            password:process.env.PASSWORD,
            database:process.env.DATABASE,
            host:process.env.HOST,
            port:5432
        })
    
        await pool.connect()
        // const response = await pool.query("CREATE TABLE Users(username VARCHAR(255) NOT NULL,password VARCHAR(255) NOT NULL,phone VARCHAR(10) NOT NULL)")
        // const response = await pool.query("INSERT INTO users (username,password,phone) VALUES ('john doe','123456','8787878712'),('jane smith','abcede123','8762726271')")
        // const response = await pool.query("SELECT * from users")
        console.log("Connected to database")
        await pool.end()
    } catch (error) {
        console.log(error);
    }

   
}

connectDB()