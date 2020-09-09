import { Router } from 'express';

const appRouter = Router();

// appRouter.use('/api', featureRouter);

appRouter.use('/isAlive', (_req, res) => {
    res.status(200).send('alive');
});

appRouter.get('/', (_req, res) => {
    res.send('main router')
})

appRouter.use('*', (_req, res) => {
    res.status(404).send('Invalid Route');
});

export default appRouter;