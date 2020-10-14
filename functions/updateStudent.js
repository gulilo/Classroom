const faunadb = require('faunadb')
const q = faunadb.query
exports.handler = async (event, context) => {
    const client = new faunadb.Client({
        secret: process.env.FAUNA_TEST_KEY
    }) 
    try{
        var data ={};
        const id = event.queryStringParameters.id
        data['firstName'] = event.queryStringParameters.firstName
        data['lastName'] = event.queryStringParameters.lastName
        console.log(data);
        const response = await client.query(q.Update(q.Ref(q.Collection(`Student`),id),{data:data}))
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
