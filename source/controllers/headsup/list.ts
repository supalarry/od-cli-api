import { NextFunction, Request, Response } from 'express';

import Logger from '../../services/logger';

const NAMESPACE = 'headsup list';

const headsupList = (req: Request, res: Response, next: NextFunction) => {
    Logger.info(NAMESPACE, 'Invoked');

    return res.status(200).json({
        messages: [
            {type: 'warning', text: 'Someone spilled coffee on Sentry servers, so Vercel builds are failing'},
            {type: 'info', text: 'New joiner - let\'s welcome Robert Cecil Martin to the team!'},
            {type: 'success', text: 'Prisma was updated to the latest version 30.0.0!'},
        ]
    });
};

export default { headsupList };
