import { buildApp } from './app';

const port = Number(process.env.PORT ?? 4100);
const app = buildApp();

app.listen(port, () => {
  console.log(JSON.stringify({ level: 'info', message: 'api started', port }));
});
