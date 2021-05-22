export class HelloUsecase {
  public async invoke(): Promise<string> {
    return 'Hello World!'
  }
}