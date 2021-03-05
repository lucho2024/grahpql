import User from "./model/User";
import { tasks } from "./sample";

export const resolvers = {
  Query: {
    hello: () => {
      return "Hello World With Graphql";
    },
    greet: (root, { name }, ctx) => {
      console.log(ctx);
      return `Hello! ${name}`;
    },
    tasks() {
      return tasks;
    },
    async Users() {
      const users = await User.find();
      return users;
    },
  },
  Mutation: {
    createTask(_, { input }) {
      input._id = tasks.length; //dar id de acuerdo a longitud
      tasks.push(input);
      return input;
    },
    async createUser(_, { input }) {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
    async deleteUser(_, { _id }) {
      return await User.findByIdAndDelete(_id);
    },
    async updateUser(_, { _id, input }) {
      return await User.findByIdAndUpdate(_id, input,{new:true});
    },
  },
};
/*

 hello:()=>{
            return "Hello World With Graphql"
        },
        greet:(root,args)=>{
         
           return `Hello! ${args.name}`
        }
    }
*/
