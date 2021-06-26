const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Post {
        _id: ID!    
        title: String!
        content: String!
        imageUr: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        status: String!
        posts: [Post!]!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    type RootQuey {
        hello: String
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
    }

    schema {
        query: RootQuey
        mutation: RootMutation
    }
`);
