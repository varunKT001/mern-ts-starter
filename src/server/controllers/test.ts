import { controller, get } from '@varuntiwari/express-ts-decorators';
import { Request, Response } from 'express';

@controller('/test')
class TestController {
  @get('/')
  async getTemplateInfo(req: Request, res: Response) {
    return res.status(200).send('Test Route Working');
  }
}
