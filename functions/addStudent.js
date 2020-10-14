const faunadb = require('faunadb')
const q = faunadb.query
exports.handler = async (event) => {
    const client = new faunadb.Client({
        secret: process.env.FAUNA_TEST_KEY
    }) 
    try{
        const firstName  = event.queryStringParameters.firstName;
        const lastName  = event.queryStringParameters.lastName;
        const response = await client.query(q.Create(q.Collection("Student"),{data:{firstName:firstName,lastName:lastName}}));
        return {
          statusCode: 200,
          body: JSON.stringify(response)
        }
    }
    catch(error){
        console.log('error', error)
        return {
          statusCode: 400,
          body: JSON.stringify(error)
        }
    }
}
