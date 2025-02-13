import express, { Application, Request, Response, NextFunction } from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import { routes } from './routes';
import configExpress from './config/express';

const app: Application = express();
const httpServer = createServer(app);

// Cors y bodyParser
app.use(bodyParser.json());
app.use(cors());

configExpress(app);

// Routes
routes(app);

// Error Handlers
app.use((req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: "Internal Server Error",
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
