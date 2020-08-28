import { User } from "../../models";
export const UserResolver= {
  signup: (_, { fullName, ...rest }) => {
    let firstName = fullName.split(' ').slice(0, 1).join(' ');
    let lastName = fullName.split(' ').slice(1).join(' ');
        return User.create({ firstName, lastName, ...rest });
  },
  login:async(_,{email,password})=>{
    const user=await User.findOne({email})
    if (!user) {
      throw new Error('user dont exist')
    }
    if (!user.authenticateUser(password)) {
      throw new Error('password not match')
    }
    return user
  }
};
