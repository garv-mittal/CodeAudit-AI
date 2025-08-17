import app from './src/app.js';
import 'dotenv/config';


app.listen(process.env.PORT||8000,() => {                        //if DB connected then app listening on port
        console.log(`App listening on port= ${process.env.PORT} || 8000`);
    })