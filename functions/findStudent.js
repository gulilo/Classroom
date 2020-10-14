const faunadb = require('faunadb')
const q = faunadb.query
exports.handler = async (event, context) => {
    const client = new faunadb.Client({
        secret: process.env.FAUNA_TEST_KEY
    }) 
    try{
        const id = event.queryStringParameters.id
        const response = await client.query(q.Get(q.Ref(`classes/Student/${id}`)))
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
