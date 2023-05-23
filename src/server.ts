import app from './app';
import mongoose from 'mongoose';
const port:number = 5000;
const run = async () => {
    try{
       await mongoose.connect('mongodb://127.0.0.1:27017/booksBD')
       .then(()=> console.log("Db is successfully connected"))
       .catch(err => console.log(err))

    }
    catch(err){
        console.log(err)
    }
}
run().catch(err => console.error(err))

app.listen(port , ()=> {
    console.log(`server is running on port ${port}`);
})