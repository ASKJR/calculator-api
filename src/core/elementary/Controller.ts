import { Request, Response, NextFunction } from 'express';
import Elementary from '../../models/Elementary';

type RequestParams = { operation: string };

const handleElementary = (req: Request, res: Response, next: NextFunction) => {
  try {
    const param = req.params as RequestParams;
    const { a, b } = req.query;
    const { operation } = param;

    const elementaryMath = new Elementary(+a!, +b!, operation);
    const result = elementaryMath.compute();
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(404).json({ message: 'Something went wrong!', error });
  }
};

export default handleElementary;
