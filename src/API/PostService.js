import axios from "axios";

export default class PostService{

    static async getAll(count = 6,page= 1){
        const response = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users',{
           params:{
            page,
            count
           } 
        })
        return response.data
    }

    static async getToken(){
        const res = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token');
        return res.data.token;
    }
}