export const helloResolver = {
  Query: {
    hello: async (): Promise<string> => {
      return 'Hello World!'
    },
  },
}
