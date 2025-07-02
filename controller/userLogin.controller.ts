import { FastifyReply, FastifyRequest } from "fastify"
import User from "../models/User"
import mongoSanitize from "mongo-sanitize"

type loginType = {
  email: string
}

const userLogin = async (
  req: FastifyRequest<{ Body: loginType }>,
  rep: FastifyReply
) => {
  try {
    const { email } = mongoSanitize(req.body)
    const findUser = await User.findOne({ email })

    if (findUser) {
      const { name, role } = findUser
      console.log("findUser:", findUser)
      rep.send({ auth: true, name, role })
    } else {
      console.log("findUser:", findUser)
      rep.send({ auth: false })
    }
  } catch (error) {
    console.log(error)
    rep.send({ auth: false })
  }
}

export default userLogin
