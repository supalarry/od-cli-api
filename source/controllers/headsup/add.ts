import { NextFunction, Request, Response } from 'express';

import Logger from '../../services/logger';

const NAMESPACE = 'headsup add';

const headsupAdd = (req: Request, res: Response, next: NextFunction) => {
    Logger.info(NAMESPACE, 'Invoked');

    return res.status(201).json({
        message: "I will return whatever I received"
    });
};

export default { headsupAdd };
