import { Request, Response, NextFunction } from 'express';
import Factorial from '../../models/Factorial';

const handleFactorial = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { a } = req.query;
    const fat = new Factorial(+a!);
    const result = fat.compute();
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(404).json({ message: 'Something went wrong!', error });
  }
};

export default handleFactorial;
