const faunadb = require('faunadb')
const q = faunadb.query
exports.handler = async (event, context) => {
    const client = new faunadb.Client({
        secret: process.env.FAUNA_TEST_KEY
    }) 
    try{
        const response = await client.query(q.Paginate(q.Match(q.Ref('indexes/allStudents'))));
        const studentsRef = response.data
        const getAllStudentsDataQuery = studentsRef.map((ref) => {
            return q.Get(ref)
          })
        const ret = await client.query(getAllStudentsDataQuery)
        return {
          statusCode: 200,
          body: JSON.stringify(ret)
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
