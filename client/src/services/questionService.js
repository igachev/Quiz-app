import * as request from './requester'

const baseUrl = 'http://localhost:3030/data/questions'

export async function getQuestions() {
    const result = await request.get(baseUrl)
    return result
}