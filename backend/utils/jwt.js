
const jwt = require('jsonwebtoken')

const JWT_KEY_SECRET = process.env.JWT_KEY_SECRET;

module.exports = {
  parseAuthorization: (authorization) => {
    return (authorization != null) ? authorization.replace("Bearer ", ""): null
  },
  getUserId: (authorization) => {
    let userId = -1;
    let token = module.exports.parseAuthorization(authorization)
    if (!token != null) {
      try {
        var jwtToken = jwt.verify(token, JWT_KEY_SECRET)
        if (jwtToken != null) {
          userId = jwtToken.userId;
        }
      } catch (error) {
        console.log(error)
      }

    }
    return userId
  },
  generateTokenForUser: (userData) => {
    return jwt.sign({
        userId: userData.id,
        isAdmin: userData.isAdmin
      },
      JWT_KEY_SECRET, {
        expiresIn: '4h'
      }
    )
  }
}
