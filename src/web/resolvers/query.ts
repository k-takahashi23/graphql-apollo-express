import { HelloUsecase } from '../../application/usecases/hello'

export const queryResolver = {
  Query: {
    hello: async () => {
      const helloUsecase = new HelloUsecase();
      return await helloUsecase.invoke();
    },
  },
};