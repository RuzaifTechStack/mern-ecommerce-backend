import express from 'express';
import { adminOnly } from '../middlewares/auth';
import { getBarCharts, getDashboardstats, getLineCharts, getPieCharts } from '../controllers/stats';

const app = express.Router();

app.get("/stats",adminOnly, getDashboardstats);

app.get("/pie",adminOnly, getPieCharts);

app.get("/bar",adminOnly, getBarCharts);

app.get("/line",adminOnly, getLineCharts);

export default app;