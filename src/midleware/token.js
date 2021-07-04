import jwt from 'jsonwebtoken'
export async function createToken(id) {
    return  await jwt.sign({id: id}, process.env.SECRET, {expiresIn: 3600} )
}